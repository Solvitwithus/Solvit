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
  const [email, setEmail] = useState('');
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
        <a href='/'> <div className="headerleftcontent">
            <img src={logo} alt="SolvIt logo" title="SolvIt company logo" className="logoimage" />
            <h4 className="htag">SolvIt</h4>
            <p className="headerptag">Solutions 4U</p>
          </div></a>
          <nav>
  <NavLink to="/" activeClassName="active">Home</NavLink>
  <NavLink to="/about" activeClassName="active">About</NavLink>
  <NavLink to="/solutions" activeClassName="active">Solutions</NavLink>
  <NavLink to="/industries" activeClassName="active">Industries</NavLink>
  <NavLink to="/contact" activeClassName="contact-active" className="Contact">Contact</NavLink>
</nav>
          <div onClick={() => setShowPopup(true)}>
            <img src={inteli} className="inteli-icon" title="Click" alt="improved hamburger" />
          </div>
        </header>
        
        <div className='horline'/>
        {showPopup && (
          <div className="popup">
            <form onSubmit={handleSubmit}>
              <h2 className='newsletterhead'>NewsLetter Subscription</h2>
              <label className='newslabel'>First Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              <br />
              <label className='newslabel'>Middle Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
              <br />
              
              <label className='newslabel'>Last Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              <br />
              <label className='newslabel'>Email Address:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              <br />
              <label className='newslabel'>Gender</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select id="gender" name="gender">
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="neutral">Neutral</option>
  <option value="prefer-not-to-say">Prefer not to say</option>
</select>
<br/>
              <button type="submit" class='newslettersubmition'>Submit</button>
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
          <Route path="*" element={<Nopage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;