import { NextRequest, NextResponse } from 'next/server';

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

// GitHub API configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'wintertoro';
const REPO_NAME = 'aptos-vibes';
const GITHUB_API_BASE = 'https://api.github.com';

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

    if (!GITHUB_TOKEN) {
      return NextResponse.json(
        { error: 'GitHub integration not configured' },
        { status: 500 }
      );
    }
    
    // Generate unique ID
    const generateId = () => {
      const timestamp = Date.now().toString(36);
      const randomStr = Math.random().toString(36).substring(2, 7);
      return `${timestamp}-${randomStr}`;
    };
    
    const newId = generateId();
    
    // Create new project object
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
      dateAdded: new Date().toISOString().split('T')[0]
    };

    // GitHub API headers
    const headers = {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    };

    try {
      // 1. Get the current projects.json file
      const getFileResponse = await fetch(
        `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/data/projects.json`,
        { headers }
      );

      if (!getFileResponse.ok) {
        throw new Error(`Failed to get projects file: ${getFileResponse.statusText}`);
      }

      const fileData = await getFileResponse.json();
      const currentContent = Buffer.from(fileData.content, 'base64').toString('utf-8');
      const projects: Project[] = JSON.parse(currentContent);

      // 2. Add the new project
      projects.push(newProject);
      const updatedContent = JSON.stringify(projects, null, 2);
      const encodedContent = Buffer.from(updatedContent).toString('base64');

      // 3. Create a new branch
      const branchName = `add-project-${newId}`;
      
      // Get the main branch SHA
      const mainBranchResponse = await fetch(
        `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/git/ref/heads/main`,
        { headers }
      );
      
      if (!mainBranchResponse.ok) {
        throw new Error(`Failed to get main branch: ${mainBranchResponse.statusText}`);
      }
      
      const mainBranchData = await mainBranchResponse.json();
      const mainSha = mainBranchData.object.sha;

      // Create new branch
      const createBranchResponse = await fetch(
        `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/git/refs`,
        {
          method: 'POST',
          headers,
          body: JSON.stringify({
            ref: `refs/heads/${branchName}`,
            sha: mainSha
          })
        }
      );

      if (!createBranchResponse.ok) {
        throw new Error(`Failed to create branch: ${createBranchResponse.statusText}`);
      }

      // 4. Update the file in the new branch
      const updateFileResponse = await fetch(
        `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/data/projects.json`,
        {
          method: 'PUT',
          headers,
          body: JSON.stringify({
            message: `Add project: ${formData.title}`,
            content: encodedContent,
            sha: fileData.sha,
            branch: branchName
          })
        }
      );

      if (!updateFileResponse.ok) {
        throw new Error(`Failed to update file: ${updateFileResponse.statusText}`);
      }

      // 5. Create pull request
      const prTitle = `🚀 Add Project: ${formData.title}`;
      const prBody = `## New Project Submission

**Project:** ${formData.title}
**Creator:** ${formData.creator}
**Status:** ${formData.status.toUpperCase()}
**Tags:** ${formData.tags.join(', ')}

**Description:**
${formData.description}

**Links:**
- 🌐 **Live Demo:** ${formData.projectUrl}
${formData.repoUrl ? `- 📂 **Repository:** ${formData.repoUrl}` : ''}
${formData.creatorUrl ? `- 👤 **Creator:** ${formData.creatorUrl}` : ''}

---

*This pull request was automatically generated from the project submission form.*

### Review Checklist:
- [ ] Project is built on/for Aptos blockchain
- [ ] Links are working and valid
- [ ] Description is clear and appropriate
- [ ] Tags are relevant
- [ ] No duplicate projects

**Auto-generated ID:** \`${newId}\``;

      const createPrResponse = await fetch(
        `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/pulls`,
        {
          method: 'POST',
          headers,
          body: JSON.stringify({
            title: prTitle,
            body: prBody,
            head: branchName,
            base: 'main'
          })
        }
      );

      if (!createPrResponse.ok) {
        throw new Error(`Failed to create pull request: ${createPrResponse.statusText}`);
      }

      const prData = await createPrResponse.json();

      return NextResponse.json({
        message: 'Project submission successful! Pull request created.',
        pullRequestUrl: prData.html_url,
        pullRequestNumber: prData.number,
        project: newProject
      });

    } catch (githubError) {
      console.error('GitHub API error:', githubError);
      return NextResponse.json(
        { error: `GitHub integration failed: ${githubError instanceof Error ? githubError.message : 'Unknown error'}` },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 