import React, { useState, useEffect } from 'react';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  const [greeting, setGreeting] = useState('');
  const navigate = useNavigate();

  const gotologin = () => {
    navigate('/');
  };

  useEffect(() => {
    const currentHour = new Date().getHours();
    let message;

    if (currentHour >= 0 && currentHour < 12) {
      message = 'Good morning, Dear Visitor!';
    } else if (currentHour >= 12 && currentHour < 18) {
      message = 'Good afternoon, Dear Visitor!';
    } else {
      message = 'Good night, Dear Visitor!';
    }

    setGreeting(message);
  }, []);

  return (
    <div>
      <div className="header">
        <button className="toggleButton" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <header className="greeting-header">
          <h1>{greeting}</h1>
        </header>
        <button className="logoutButton" onClick={gotologin}>
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

export default Header;
