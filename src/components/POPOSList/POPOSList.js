import React, { useState } from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../sfpopos-data.js'; // Changed from JSON to JS file

function POPOSList() {
  const [query, setQuery] = useState('');

  const spaces = data
    .filter(({ title, address }) => {
      const inTitle = title.toLowerCase().includes(query.toLowerCase());
      const inAddress = address.toLowerCase().includes(query.toLowerCase());
      return inTitle || inAddress;
    })
    .map(({ id, title, address, images, hours }) => (
      <POPOSSpace
        id={id}
        key={`${title}-${id}`}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    ));

  return (
    <div className="POPOSList">
      <form>
        <input
          value={query}
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {spaces}
    </div>
  );
}

export default POPOSList;
