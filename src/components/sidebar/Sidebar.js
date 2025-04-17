import React from 'react';
import { FaHome, FaHandPaper, FaDonate, FaInbox } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const userType = localStorage.getItem("loggedInType");

  return (
    <div className="sidebar">
      {(userType === "user" || userType === "donor") ? (
        <ul className="menu">
          <a href='/'>
            <li><FaHome /><span className='ms-2'>Home</span></li>
          </a>
          <a href="myrequest">
            <li><FaHandPaper /><span className='ms-2'>Self Request</span></li>
          </a>
          <a href="/mydonation">
            <li><FaDonate /><span className='ms-2'>My Donations</span></li>
          </a>
          <a href="/myrequest">
            <li><FaInbox /><span className='ms-2'>Requests</span></li>
          </a>
        </ul>
      ) : (
        <ul className="menu">
          <a href='/'>
            <li><FaHome /><span className='ms-2'>Home</span></li>
          </a>
          <a href='/updatestock'>
            <li><FaInbox /><span className='ms-2'>Update Stock</span></li>
          </a>
          <a href="/bloodrequest">
            <li><FaHandPaper /><span className='ms-2'>Blood Request</span></li>
          </a>
          <a href='/donation'>
            <li><FaDonate /><span className='ms-2'>Blood Donations</span></li>
          </a>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
