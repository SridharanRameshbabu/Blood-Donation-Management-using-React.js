import React, { useEffect, useState } from 'react';
import { FaTint } from 'react-icons/fa';
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const [userType, setUserType] = useState("");
  const type = localStorage.getItem("loggedInType");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const type = localStorage.getItem("loggedInType");

    if (loggedInUser) {
      setUserData(loggedInUser);
      setUserType(type);
    }
  }, []);


  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top px-4" style={{ backgroundColor: '#dc3545' }}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            <FaTint style={{ fontSize: "24px" }} /> Blood Donation Management
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <a className="nav-link text-white d-flex align-items-center" href={type === "user" ? "/dashboard" : "/bloodbankdashboard"}>
                  <MdDashboard style={{ marginRight: "5px", fontSize: "18px" }} />
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white d-flex align-items-center" href="#profileOffcanvas" data-bs-toggle="offcanvas" data-bs-target="#profileOffcanvas" aria-controls="profileOffcanvas">
                  <CgProfile style={{ marginRight: "5px", fontSize: "18px" }} />
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas Profile */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="profileOffcanvas"
        aria-labelledby="profileOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="profileOffcanvasLabel">Profile Details</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {userData ? (
            userType === "bloodbank" ? (
              <>
                <p><strong>Blood Bank Name:</strong> {userData.bloodbankname}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Mobile:</strong> {userData.mobile}</p>
                <p><strong>Address:</strong> {userData.address}</p>
                <p><strong>City:</strong> {userData.city}</p>
                <p><strong>State:</strong> {userData.state}</p>
                <p><strong>License No:</strong> {userData.license}</p>
              </>
            ) : (
              <>
                <p><strong>Name:</strong> {userData.firstname} {userData.lastname}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Blood Group:</strong> {userData.bloodgroup}</p>
                <p><strong>Age:</strong> {userData.age}</p>
                <p><strong>Gender:</strong> {userData.gender}</p>
                <p><strong>Mobile:</strong> {userData.mobile}</p>
                <p><strong>Address:</strong> {userData.address}</p>
              </>
            )
          ) : (
            <p>No user data found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
