import { FaGithub } from 'react-icons/fa6';
import './Projects.css'; 
import { projectsData } from './projectsData';

const Projects = () => {
  return (
    <div id='projects' className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData?.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <div className='project-links'>
                <div className='project-link'>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">🔗 Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;