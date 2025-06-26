import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ProjectData {
  title: string;
  projectUrl: string;
  repoUrl: string;
  description: string;
  imageUrl: string;
  creator: string;
  creatorUrl: string;
  status: 'live' | 'development' | 'concept';
  tags: string[];
}

interface Project extends ProjectData {
  id: string;
  dateAdded: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ProjectData = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'projectUrl', 'description', 'creator'];
    const missingFields = requiredFields.filter(field => 
      !formData[field as keyof ProjectData] || 
      (formData[field as keyof ProjectData] as string).trim() === ''
    );
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }
    
    if (!formData.tags || formData.tags.length === 0) {
      return NextResponse.json(
        { error: 'At least one tag is required' },
        { status: 400 }
      );
    }
    
    // Validate URLs
    try {
      new URL(formData.projectUrl);
    } catch {
      return NextResponse.json(
        { error: 'Invalid project URL' },
        { status: 400 }
      );
    }
    
    if (formData.repoUrl && formData.repoUrl.trim()) {
      try {
        new URL(formData.repoUrl);
      } catch {
        return NextResponse.json(
          { error: 'Invalid repository URL' },
          { status: 400 }
        );
      }
    }
    
    if (formData.creatorUrl && formData.creatorUrl.trim()) {
      try {
        new URL(formData.creatorUrl);
      } catch {
        return NextResponse.json(
          { error: 'Invalid creator URL' },
          { status: 400 }
        );
      }
    }
    
    // Read current projects
    const projectsPath = path.join(process.cwd(), 'data', 'projects.json');
    let projects: Project[] = [];
    
    try {
      const projectsData = fs.readFileSync(projectsPath, 'utf8');
      projects = JSON.parse(projectsData);
    } catch (error) {
      console.error('Error reading projects file:', error);
      return NextResponse.json(
        { error: 'Failed to read projects database' },
        { status: 500 }
      );
    }
    
    // Generate unique ID
    const generateId = () => {
      const timestamp = Date.now().toString(36);
      const randomStr = Math.random().toString(36).substring(2, 7);
      return `${timestamp}-${randomStr}`;
    };
    
    let newId = generateId();
    while (projects.some(p => p.id === newId)) {
      newId = generateId();
    }
    
    // Create new project
    const newProject: Project = {
      id: newId,
      title: formData.title.trim(),
      description: formData.description.trim(),
      imageUrl: formData.imageUrl.trim() || '/api/placeholder/400/300',
      projectUrl: formData.projectUrl.trim(),
      repoUrl: formData.repoUrl.trim() || formData.projectUrl.trim(),
      tags: formData.tags,
      status: formData.status,
      creator: formData.creator.trim(),
      creatorUrl: formData.creatorUrl.trim(),
      dateAdded: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
    };
    
    // Add to projects array
    projects.push(newProject);
    
    // Write back to file
    try {
      fs.writeFileSync(projectsPath, JSON.stringify(projects, null, 2));
    } catch (error) {
      console.error('Error writing projects file:', error);
      return NextResponse.json(
        { error: 'Failed to save project to database' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        message: 'Project submitted successfully',
        project: newProject
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 