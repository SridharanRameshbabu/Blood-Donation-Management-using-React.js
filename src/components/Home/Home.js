import React from 'react';
import { FaTint, FaHome, FaHeartbeat, FaUserCircle, FaHospital } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import CardItem from './CardItem';

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar navbar-expand-lg navbar-home sticky-top px-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <FaTint style={{ fontSize: "24px", color: "white" }} /> VeinVault
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <a className="nav-link text-white d-flex align-items-center" href="/">
                  <FaHome style={{ marginRight: "5px", fontSize: "18px" }} />
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link text-white d-flex align-items-center">
                  <FaHeartbeat style={{ marginRight: "5px", fontSize: "18px" }} />
                  Services
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link text-white d-flex align-items-center" href="/login">
                  <FaUserCircle style={{ marginRight: "5px", fontSize: "18px" }} />
                  User Login
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link text-white d-flex align-items-center" href="/bloodbanklogin">
                  <FaHospital style={{ marginRight: "5px", fontSize: "18px" }} />
                  Blood Bank Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid hero-section">
        <h1>Give the Gift of Life</h1>
        <h5>Did you know that a single blood donation can save up to three lives?</h5>
        <h5>Your contribution can make a world of difference for those in need </h5>
      </div>

      <div className="container hero-cards mt-5">
        <div className="row justify-content-center">
          <CardItem
            title="Donate Blood"
            text="Join us in our mission to save lives. Your blood donation can make a significant impact on the lives of those in need."
            buttonText="Donate Now"
            link="/donations"
          />
          <CardItem
            title="Request Blood"
            text="In need of blood? Our platform connects you with donors and blood banks to ensure you get the help you need."
            buttonText="Request Now"
            link="/eligibility"
          />
          <CardItem
            title="Find Blood Bank"
            text="Locate nearby blood banks and connect instantly to donate or request blood."
            buttonText="Search"
            link="/bloodbank"
          />
        </div>
      </div>
      <div className='footer'>
        <div className="container text-center py-4">
          <p className="mb-0">© 2025 VeinVault. All rights reserved. Developed by Sridharan</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
