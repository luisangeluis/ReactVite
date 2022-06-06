import { useEffect, useState } from 'react';

const Lamp = ({ switc }) => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(switc);
  }, [switc]);

  const changeOn = () => setOn(!on);

  return (
    <>
      <div
        className="lamp"
        style={on ? { backgroundColor: 'yellow' } : { backgroundColor: 'gray' }}
      >
        <p>hola</p>
        <button onClick={changeOn}>{on ? 'Apagar' : 'Encender'}</button>
      </div>
    </>
  );
};

export default Lamp;
