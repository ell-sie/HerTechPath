# HerTechPath

**HerTechPath** is an AI-driven platform designed to help integrate women into the tech industry by curating personalized learning paths. The platform offers tailored mentorship and education, empowering women to become market-ready software engineers.

## GitHub Repository
- Repository link: [HerTechPath GitHub Repo](https://github.com/ell-sie/HerTechPath)

## Project Setup

### Prerequisites
- Node.js (v16.x.x or higher)
- npm (v7.x.x or higher)

### Clone the repository
```bash
git clone https://github.com/ell-sie/HerTechPath.git
cd hertechpath
```

### Install dependencies
```bash
npm install
```

### Running the Project
To run the project locally:
```bash
npm dev
```
This will start the development server on \`http://localhost:5173/\`.

### Build for Production
To build the app for production:
```bash
npm run build
```

## Design Mockups

The following resources detail the platform’s design:

- **Figma Mockups**: [View Figma Designs](https://www.figma.com/design/VWeyp1IIKPVtQPbhBPA6Z0/HerTech-Path-Figma?node-id=0-1&t=JhEs1P5omLXCxP3s-1)
- **Designs**: 
  - Dashboard
  - Learning Path Overview
  - Mentorship Section
  - Signup/ Login Pages

## Deployment Plan

1. **Frontend**:
   - Deployed via a cloud service like Vercel or Netlify.
   - Ensure environment variables for the production API are set in the hosting platform.

2. **Backend**:
   - Deployed using AWS Amplify or any preferred backend hosting provider.
   - API gateway and serverless functions to manage requests and data.

3. **CI/CD**:
   - Automate deployment using GitHub Actions or another CI/CD pipeline tool.
   - Ensure auto-deployment is triggered on push to the main branch.

4. **DNS & SSL**:
   - Configure custom domain and SSL certificates for secure access.

## Video Demo

Watch a walkthrough of **HerTechPath** showcasing its core functionalities and user experience:

[Video Demo](https://www.loom.com/share/6af8725b31484064b0ad8ed6bad6b93f?sid=bbd08455-aae7-4c38-8d2b-f61d80096a13)


## Code Structure

Here's an overview of the main files:

- `src/`
  - `components/`: Reusable UI components.
  - `hooks/`: Custom hooks for API calls and state management.
  - `pages/`: Main pages of the application.
  - `services/`: API service calls.
  - `types/`: TypeScript types and enums.
  - `App.tsx`: Entry point for the app.
