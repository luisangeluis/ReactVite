import React from 'react';
const Card = ({ list, color, person, title }) => {
  return (
    <div className="card" style={{ backgroundColor: `${color}` }}>
      <h2>Nombre: {person.name}</h2>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <ul>
          <li>{list[0]}</li>
          <li>{list[1]}</li>
          <li>{list[2]}</li>
          <li>{list[3]}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
