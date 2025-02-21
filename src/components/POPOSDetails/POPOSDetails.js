import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../sfpopos-data.json';


function POPOSDetails() {
  const { id } = useParams(); // Get the space ID from the URL
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>Hours: {hours}</p>
        <p>Features: {features.join(', ')}</p>
        <p>Location: {geo.lat}, {geo.lon}</p>
      </div>
    </div>
  );
}

export default POPOSDetails;
