// src/POPOSList.js
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json';




function POPOSList() {
    const spaces = data.map(({ title, address, images, hours }) => {
      return (
        <POPOSSpace
          key={title}  // Add unique key for React
          name={title}
          address={address}
          image={images[0]}
          hours={hours} // Pass hours as a prop
        />
      );
    });
  
    return <div className="POPOSList">{spaces}</div>;
  }
  
  
  
  export default POPOSList;
  