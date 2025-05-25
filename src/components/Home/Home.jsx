import ProfilePhoto from '../../assets/ProfilePhoto.png';
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaDownload } from 'react-icons/fa';
import './Home.css';
import Typewriter from '../TypeWriter/TypeWriter';

const Home = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'public/Arpit_Saxena_CV.pdf'; 
        link.download = 'Arpit_Saxena_Resume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id='home' className="home">
            <div className='home-container'>
                <div className='home-text'>  
                    <h1>Hi there! I'm Arpit Saxena</h1>
                     <Typewriter/>
                    <div className='details'>
                        <div className='details-container'>
                            <FaPhoneVolume size={18} />
                            <h3>+91 9811298159</h3>
                        </div>
                        <div className='details-container'>
                            <IoMail size={18} />
                            <h3>Saxenaarpit52@gmail.com</h3>
                        </div>
                    </div>
                    <div className='resume-intro-home'>
                        <button onClick={handleDownload} className="download-btn-home">
                        <FaDownload className='resume-icon'/> Resume
                        </button>
                    </div>
                </div>
                <div className='home-image'>
                    <img src={ProfilePhoto} alt="Profile Photo" className="profile-image" loading='lazy' />
                </div>
            </div>
        </div>
    );
};

export default Home;