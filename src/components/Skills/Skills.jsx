import './Skills.css'; 
import { skillsData } from './skillsData';

const Skills = () => {
  return (
    <div id='skills' className="skills">
      <h2>Core Competencies</h2>
      <div className="skills-grid">
        {skillsData?.map((project, index) => (
          <div key={index} className="skill-card">
            <img src={project.imgSrc} alt={project.title} className="skill-icon" loading='lazy' />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;