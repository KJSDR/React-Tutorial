import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';
import './Title.css';

function Title({ query, setQuery, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <div className="Title">
      <header>
        <div className="Title-left">
          <h1>SFPOPOS</h1>
          <div className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>
        </div>

        <div className="Title-center">
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"} to="/">List</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"} to="/about">About</NavLink>
          <RandomSpace />
        </div>

        <div className="Title-right">
          <form className="Title-search" onSubmit={handleSubmit}>
            <input
              value={query || ''}
              placeholder="Search spaces..."
              onChange={(e) => setQuery && setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Title;