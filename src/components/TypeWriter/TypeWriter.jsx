import React, { useEffect, useState } from 'react';
import './TypeWriter.css';

const Typewriter = () => {
  const words = ['Software Engineer', 'ReactJS Developer', 'React Native Developer', 'Frontend Developer', 'Web Developer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100); 

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
        setTypingSpeed(100);
        if (displayedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000); 
        }
      } else {
        setDisplayedText((prev) => currentWord.slice(0, prev.length - 1));
        setTypingSpeed(50);
        if (displayedText === '') {
          setIsDeleting(false);
          setTimeout(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }, 500); 
        }
        setDisplayedText('');
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <div className="Typewriter" data-testid="typewriter-wrapper">
      <span className="Typewriter__wrapper">{displayedText}</span>
      <span className="Typewriter__cursor">|</span>
    </div>
  );
};

export default Typewriter;