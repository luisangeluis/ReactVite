import React, { useEffect, useState } from 'react';

const Password = ({ randomColor }) => {
  const [showPass, setShowPass] = useState(false);

  const changeShowPass = () => setShowPass(!showPass);

  return (
    <>
      <input type={showPass ? 'text' : 'password'} />
      <button onClick={changeShowPass}>Password</button>
    </>
  );
};

export default Password;
