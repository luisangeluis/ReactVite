import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate('/');

  return (
    <div>
      <p>About me</p>
      <button onClick={goToHome}>Ir a inicio</button>
      {/* <Link to="/">Home</Link> */}
    </div>
  );
};

export default AboutMe;
