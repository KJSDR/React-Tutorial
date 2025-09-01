import React from 'react';
import './FilterBar.css';

const FEATURES = [
  { key: 'outdoors', label: 'Outdoors', emoji: '🌲' },
  { key: 'coffee', label: 'Coffee', emoji: '☕️' },
  { key: 'art', label: 'Art', emoji: '🖼' },
  { key: 'toilet', label: 'Restroom', emoji: '🚽' },
  { key: 'power', label: 'Power', emoji: '🔌' }
];

function FilterBar({ selectedFilters, onFilterChange }) {
  const handleFilterToggle = (featureKey) => {
    let newFilters;
    if (selectedFilters && selectedFilters.includes(featureKey)) {
      newFilters = selectedFilters.filter(filter => filter !== featureKey);
    } else {
      newFilters = selectedFilters ? [...selectedFilters, featureKey] : [featureKey];
    }
    
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const clearAllFilters = () => {
    if (onFilterChange) {
      onFilterChange([]);
    }
  };

  return (
    <div className="FilterBar">
      <div className="FilterBar-container">
        <div className="FilterBar-content">
          <span className="FilterBar-label">Filter by features:</span>
          
          <div className="FilterBar-buttons">
            {FEATURES.map(feature => (
              <button
                key={feature.key}
                className={`FilterBar-button ${
                  selectedFilters && selectedFilters.includes(feature.key) ? 'active' : ''
                }`}
                onClick={() => handleFilterToggle(feature.key)}
              >
                <span className="FilterBar-button-emoji">{feature.emoji}</span>
                <span className="FilterBar-button-text">{feature.label}</span>
              </button>
            ))}
          </div>

          {selectedFilters && selectedFilters.length > 0 && (
            <button className="FilterBar-clear" onClick={clearAllFilters}>
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterBar;