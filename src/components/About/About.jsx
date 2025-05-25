import './About.css';

const About = () => {
  return (
    <div id='about' className="about">
      <h2>About Me</h2>
      <div style={{display:'flex',alignItems: 'center', width: '100%', flex:1, alignContent:'center', justifyContent:'center'}}>
      <p className="about-text">
        Software Engineer with 4+ years of experience in designing and delivering scalable mobile and web applications. 
        Skilled in ReactJS, React Native, TypeScript, and JavaScript, with a strong focus on performance optimization, cross
        platform compatibility, and user-centric design. Proven ability to work in agile teams, ensuring timely delivery with 
        high code quality and testing coverage. 
      </p>
      </div>
    </div>
  );
};

export default About;