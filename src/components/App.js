import { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import './App.css';
import Title from './Title/Title';
import Footer from './Footer/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Optional: You can add any additional search logic here
    // For now, the search happens automatically as the user types
    console.log('Search triggered:', searchQuery);
  };

  return (
    <div className="App">
      <Title 
        query={searchQuery} 
        setQuery={setSearchQuery} 
        onSearch={handleSearch}
      />    
      <Outlet context={{ searchQuery }} />   
      <Footer />   
    </div>
  );
}

export default App;