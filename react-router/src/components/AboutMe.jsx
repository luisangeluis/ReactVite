import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate('/');

  return (
    <div>
      <p>About me</p>
      <button onClick={goToHome}>Ir a inicio</button>
    </div>
  );
};

export default AboutMe;
