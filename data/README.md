# How to Add Your Project to Aptos Vibes

## Quick Start

1. **Fork the repository** on GitHub
2. **Edit** `data/projects.json` 
3. **Add your project** to the JSON array
4. **Submit a pull request**

## Project Template

Copy this template and add it to the `projects.json` array:

```json
{
  "id": "unique-project-id",
  "title": "Your Project Name", 
  "description": "A brief description of your Aptos project and what it does.",
  "imageUrl": "/api/placeholder/400/300",
  "projectUrl": "https://your-project-url.com",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "status": "live"
}
```

## Field Descriptions

- **id**: Unique identifier for your project (use lowercase with dashes)
- **title**: Display name of your project
- **description**: Brief explanation of what your project does (1-2 sentences)
- **imageUrl**: Placeholder for now (thumbnails are auto-generated from title)
- **projectUrl**: Link to your project (GitHub, website, or demo)
- **tags**: Array of relevant tags (e.g., "DeFi", "NFT", "Gaming", "Move", "dApp")
- **status**: Current status - `"live"`, `"development"`, or `"concept"`

## Example

```json
{
  "id": "my-defi-protocol",
  "title": "AptSwap Protocol",
  "description": "Decentralized exchange for swapping tokens on Aptos with automated market making.",
  "imageUrl": "/api/placeholder/400/300", 
  "projectUrl": "https://aptswap.example.com",
  "tags": ["DeFi", "Exchange", "AMM", "Move"],
  "status": "live"
}
```

## Submission Guidelines

✅ **Requirements:**
- Built on or for the Aptos blockchain
- Demonstrates creative or innovative approach  
- Open source or has public repository
- Clear documentation and description

✅ **Tips:**
- Use descriptive, unique project IDs
- Keep descriptions concise but informative
- Choose relevant tags that help users find your project
- Make sure your project URL is accessible

## Questions?

Open an issue on GitHub or reach out to the maintainers! 