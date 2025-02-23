import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import POPOSList from './components/POPOSList/POPOSList';
import About from './components/About/About';
import POPOSDetails from './components/POPOSDetails/POPOSDetails';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<POPOSList />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<POPOSDetails />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
