import React from 'react';
import { Link } from 'react-router-dom';
import './POPOSSpace.css';

function POPOSSpace({ id, name, image, address, hours }) {
  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt={name} />
      </Link>
      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div>{address}</div>
      <div className="POPOSHours">Hours: {hours}</div>
    </div>
  );
}

export default POPOSSpace;
