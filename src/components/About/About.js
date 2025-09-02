import React from 'react';
import './About.css';

function About() {
  return (
    <div className="About">
      <h1>About SFPOPOS</h1>
      <p>
        San Francisco Privately Owned Public Open Spaces (POPOS) are outdoor 
        and indoor spaces provided for public use by private developers.
      </p>
      
      <h2>What are POPOS?</h2>
      <p>
        In exchange for providing these public spaces, developers receive 
        planning code benefits like additional building height or floor area.
      </p>
      
      <p>
        This website helps you discover and explore these hidden gems 
        throughout San Francisco's Financial District and beyond.
      </p>
      
      <h2>Features</h2>
      <ul>
        <li>Search spaces by name or address</li>
        <li>Filter by amenities like coffee, restrooms, or outdoor access</li>
        <li>View detailed information and photos</li>
        <li>Get directions and hours of operation</li>
      </ul>
    </div>
  );
}

export default About;