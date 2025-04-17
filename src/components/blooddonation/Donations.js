import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar'; // Assuming your Navbar component is in this path
import Sidebar from '../sidebar/Sidebar'; // Assuming your Sidebar component is in this path

const Donations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Fetch donations from local storage
    const storedDonations = JSON.parse(localStorage.getItem('donations')) || [];
    setDonations(storedDonations);
  }, []);
  
  return (
    <div>
      {/* Include Navbar */}
      <Navbar />

      <div className="main">
        {/* Include Sidebar */}
        <Sidebar />

        <div className="mydonation-table p-3">
          <h4 className="mb-3 text-center">Donations</h4>
          <table className="table table-striped table-hover table-bordered text-center shadow-sm">
            <thead className="table-danger">
              <tr>
                <th>Donation Date</th>
                <th>Blood Group</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Location</th>
                <th>Next Eligible Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.length > 0 ? donations.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.bloodGroup}</td>
                  <td>{item.quantity} ml</td>
                  <td>{item.status}</td>
                  <td>{item.location}</td>
                  <td>{item.nextEligibleDate}</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="6">No donations yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Donations;
