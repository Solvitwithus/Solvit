import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Contact from './pages/contact';
import Home from './pages/Home';
import About from './pages/about';
import Industries from './pages/industries';
import Solutions from './pages/solutions';
import Nopage from './pages/nopage';
import logo from './Assets/mylogo.png';
import './App.css';
import cancel from "./Assets/cancel-icon.png"
import inteli from './Assets/inteli-icon.png';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access firstName, middleName, and lastName state values here
    // For example: console.log(firstName, middleName, lastName);
    setShowPopup(false);
  };

  return (
    <div className="pagecontent">
      <BrowserRouter>
        <header>
          <div className="headerleftcontent">
            <img src={logo} alt="SolvIt logo" title="SolvIt company logo" className="logoimage" />
            <h4 className="htag">SolvIt</h4>
            <p className="headerptag">Solutions 4U</p>
          </div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/solutions">Solutions</NavLink>
            <NavLink to="/industries">Industries</NavLink>
            <NavLink to="/contact" className="Contact">Contact</NavLink>
          </nav>
          <div onClick={() => setShowPopup(true)}>
            <img src={inteli} className="inteli-icon" title="Click" alt="improved hamburger" />
          </div>
        </header>
        
        <hr />
        {showPopup && (
          <div className="popup">
            <form onSubmit={handleSubmit}>
              <label>First Name:</label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              <br />
              <label>Middle Name:</label>
              <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
              <br />
              <label>Last Name:</label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              <br />
              <button type="submit">Submit</button>
              <img src={cancel} onClick={handleCancel} className='cancel'/>
              
            </form>
          </div>
        )}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;