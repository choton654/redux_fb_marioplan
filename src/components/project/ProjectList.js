import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  return (
    <div className='project-list section'>
      {projects &&
        projects.map((project) => {
          return (
            <Link to={`/project/${project.id}`}>
              <div className='card z-depth-5'>
                <ProjectSummary project={project} key={project.id} />
              </div>
            </Link>
          );
        })}
    </div>
  );
};
export default ProjectList;
