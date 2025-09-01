import React from 'react';
import { useOutletContext } from 'react-router-dom';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js';

function POPOSList() {
  const context = useOutletContext();
  const searchQuery = context?.searchQuery || '';
  const selectedFilters = context?.selectedFilters || [];

  const filteredSpaces = data.filter((space) => {
    // Search filtering
    const matchesSearch = !searchQuery || 
      space.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      space.address.toLowerCase().includes(searchQuery.toLowerCase());

    // Feature filtering - space must have ALL selected features
    const matchesFilters = selectedFilters.length === 0 ||
      selectedFilters.every(filter => space.features && space.features.includes(filter));
    
    return matchesSearch && matchesFilters;
  });

  const spaces = filteredSpaces.map((space) => (
    <POPOSSpace
      id={space.id}
      key={`space-${space.id}`}
      name={space.title}
      address={space.address}
      image={space.images[0]}
      hours={space.hours}
    />
  ));

  if (spaces.length === 0) {
    return (
      <div className="POPOSList">
        <div className="POPOSList-empty">
          <h3>No spaces found</h3>
          <p>
            {searchQuery && selectedFilters.length > 0 
              ? `No spaces match your search "${searchQuery}" and selected features.`
              : searchQuery 
              ? `No spaces match your search "${searchQuery}".`
              : selectedFilters.length > 0
              ? 'No spaces match your selected features.'
              : 'No spaces available.'
            }
          </p>
          <p>Try adjusting your search terms or clearing some filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="POPOSList">
      <div className="POPOSList-grid">
        {spaces}
      </div>
    </div>
  );
}

export default POPOSList;