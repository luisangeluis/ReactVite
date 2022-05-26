import React from 'react';

const Lamp2 = ({ on }) => {
  const yellow = 'yellow';
  const black = 'black';
  return (
    <>
      <div
        className="lamp"
        style={
          on
            ? { backgroundColor: `${yellow}` }
            : { backgroundColor: `${black}` }
        }
      ></div>
    </>
  );
};

export default Lamp2;
