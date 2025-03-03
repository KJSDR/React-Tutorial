import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../sfpopos-data.js';
import POPOSFeatureList from '../POPOSFeatures/POPOSFeatureList';
import './POPOSDetails.css';

function POPOSDetails() {
  const { id } = useParams();
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{title}</h1>
        <p className="POPOSDetails-desc">{desc}</p>
        <p className="POPOSDetails-hours">Hours: {hours}</p>
        <POPOSFeatureList features={features} />
        <p className="POPOSDetails-geo">Coordinates: {geo.lat}, {geo.lon}</p>
      </div>
    </div>
  );
}

export default POPOSDetails;
