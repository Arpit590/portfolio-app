import { FaDownload } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Arpit_Saxena_CV.pdf'; 
  link.download = 'Arpit_Saxena_Resume.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div id='resume' className="resume">
      <h2>Career Snapshot</h2>
      <div className="resume-content">
        <div className='resume-intro'>
          <p>Download my resume to view my professional experience and education:</p>
          <button onClick={handleDownload} className="download-btn">
            <FaDownload /> Resume
          </button>
        </div>
        
        <div className="experience-highlights">
          <h3>Experience Highlights</h3>
          <ul>
            <li>4+ years of professional experience in developing modern, responsive web and mobile applications using React.js and React Native</li>
            <li>Strong command of JavaScript (ES6+), with a focus on clean, maintainable, and efficient code</li>
            <li>Proficient in state management tools such as Redux and Context API, ensuring scalable and predictable application state</li>
            <li>Hands-on experience with unit testing using React Testing Library (RTL) and Jest, consistently achieving 100% test coverage to ensure code reliability and maintainability.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;