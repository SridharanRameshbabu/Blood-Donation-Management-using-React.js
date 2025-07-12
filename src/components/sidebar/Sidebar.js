import React from 'react';
import { FaHome, FaHandPaper, FaDonate, FaInbox } from 'react-icons/fa';
import './Sidebar.css';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  const userType = localStorage.getItem("loggedInType");

  return (
    <div className="sidebar">
      {(userType === "user" || userType === "donor") ? (
        <ul className="menu">
          <Link to='/'>
            <li><FaHome /><span className='ms-2'>Home</span></li>
          </Link>
          <Link to="myrequest">
            <li><FaHandPaper /><span className='ms-2'>Self Request</span></li>
          </Link>
          <Link to="/mydonation">
            <li><FaDonate /><span className='ms-2'>My Donations</span></li>
          </Link>
          <Link to="/myrequest">
            <li><FaInbox /><span className='ms-2'>Requests</span></li>
          </Link>
        </ul>
      ) : (
        <ul className="menu">
          <Link to='/'>
            <li><FaHome /><span className='ms-2'>Home</span></li>
          </Link>
          <Link to='/updatestock'>
            <li><FaInbox /><span className='ms-2'>Update Stock</span></li>
          </Link>
          <Link to="/bloodrequest">
            <li><FaHandPaper /><span className='ms-2'>Blood Request</span></li>
          </Link>
          <Link to='/donation'>
            <li><FaDonate /><span className='ms-2'>Blood Donations</span></li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
