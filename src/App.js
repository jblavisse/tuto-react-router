import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>        </nav>
        
        <Link to="/contact">Aller sur la page de contact</Link>
        
        {/* Première page visible */}
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
