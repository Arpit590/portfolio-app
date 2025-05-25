import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Contact.css'
import { useEffect, useState } from "react";

const Contact = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 380);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div id='contact' className="contact">
      <h2>Let’s Build Something Together</h2>
      <div className="contact-form">
        <div className="contact-container1">
          <h1>Collaborate on Your Next Idea</h1>
          <p>If you're looking for a reliable and experienced software engineer who can turn your web or mobile app ideas into high-quality, scalable, and maintainable solutions</p>
        </div>
        <div className='contact-container2'>
          <div className='contact-detail'>
            <IoMail color="black"size={isMobile ? 14 : 18}/>
            <p>Saxenaarpit52@gmail.com</p>
          </div>
          <div className='contact-detail'>
            <FaPhoneVolume color="black" size={isMobile ? 14 : 18}/>
            <p>+91 9811298159</p>
          </div>
          <div className='contact-detail'>
            <FaLocationDot color="black" size={isMobile ? 14 : 18}/>
            <p>Noida, India</p>
          </div>
          <div className="contact-subContainer">
            <div className="contact-subContainerSection">
              <a
                href="https://wa.me/919811298159?text=Hello%20Arpit,%20I%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp color="#25d366" size={isMobile ? 20 : 30} />
              </a>
            </div>
            <div className="contact-subContainerSection">
              <a
                href="https://www.linkedin.com/in/thearpitsaxena/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin color="#0077B5" size={isMobile ? 20 : 30} />
              </a>
            </div>
            <div className="contact-subContainerSection">
              <a
                href="https://github.com/Arpit590"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub color="black" size={isMobile ? 20 : 30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;