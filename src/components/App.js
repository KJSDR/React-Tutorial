import { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import './App.css';
import Title from './Title/Title';
import FilterBar from './FilterBar/FilterBar';
import Footer from './Footer/Footer';
import BackToTop from './BackToTop/BackToTop';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSearch = () => {
    // Optional: You can add any additional search logic here
    // For now, the search happens automatically as the user types
    console.log('Search triggered:', searchQuery);
  };

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
    console.log('Filters changed:', filters);
  };

  return (
    <div className="App">
      <Title 
        query={searchQuery} 
        setQuery={setSearchQuery} 
        onSearch={handleSearch}
      />    
      <FilterBar 
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />
      <main className="App-main">
        <Outlet context={{ searchQuery, selectedFilters }} />   
      </main>
      <Footer />   
      <BackToTop />
    </div>
  );
}

export default App;