import React from 'react';
import { Link } from 'react-router-dom';
import './POPOSSpace.css';

function POPOSSpace({ id, name, image, address, hours }) {
  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt={name} />
      </Link>
      <h1>
        <Link className="POPOSSpace-title" to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div className="POPOSSpace-info">
        <div>{address}</div>
        <div>{hours}</div>
      </div>
    </div>
  );
}

export default POPOSSpace;
