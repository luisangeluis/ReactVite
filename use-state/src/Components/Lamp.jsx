import React, { useState } from 'react';

const Lamp = ({ onAll }) => {
  const [on, setOn] = useState(1);
  const yellow = 'yellow';
  const black = 'black';

  const changeValue = () => {
    if (on) {
      setOn(0);
    } else {
      setOn(1);
    }
  };

  return (
    <>
      <div
        className="lamp"
        style={
          on
            ? { backgroundColor: `${yellow}` }
            : { backgroundColor: `${black}` }
        }
      >
        {' '}
      </div>
      <button onClick={changeValue}>{on ? 'On' : 'Off'}</button>
    </>
  );
};

export default Lamp;
