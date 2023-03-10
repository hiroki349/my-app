import React from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import { Project } from './Project';
import ProjectList from './ProjectList';

function ProjectPage() {
  const saveProject = (project: Project) => {
    console.log('Saving project: ', project);
  };

  return (
    <>
      <h1>Projects</h1>
      <ProjectList
        onSave={saveProject}
        projects={MOCK_PROJECTS}
      />
    </>
  )
}

export default ProjectPage;