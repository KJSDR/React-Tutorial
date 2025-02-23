import { useNavigate } from 'react-router-dom';
import './RandomSpace.css';
import data from '../../sfpopos-data.js';

function RandomSpace() {
  const navigate = useNavigate();

  return (
    <button 
      className="RandomSpace"
      onClick={() => {
        const id = Math.floor(Math.random() * data.length);
        navigate(`/details/${id}`);
      }}
    >
      Show me a random space
    </button>
  );
}

export default RandomSpace;
