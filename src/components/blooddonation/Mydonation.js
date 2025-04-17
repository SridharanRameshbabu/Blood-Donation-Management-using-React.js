import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mydonation.css";
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

const Mydonation = () => {
  const [showForm, setShowForm] = useState(false);
  const [donations, setDonations] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    bloodGroup: '',
    quantity: '',
    location: '',
    status: ''
  });
  

  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem('donations')) || [];
    setDonations(storedDonations);
  }, []);

  const handleDonateClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      date: '',
      bloodGroup: '',
      quantity: '',
      location: '',
      status: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextEligibleDate = getNextEligibleDate(formData.date);

    const newDonation = {
        ...formData,
        status: 'Pending',
        nextEligibleDate
      };
      

    const updatedDonations = [...donations, newDonation];
    setDonations(updatedDonations);
    localStorage.setItem('donations', JSON.stringify(updatedDonations));

    setShowForm(false);
    setFormData({
      date: '',
      bloodGroup: '',
      quantity: '',
      location: '',
      status: ''
    });
  };

  // Calculate next eligible date (usually 3 months later)
  const getNextEligibleDate = (dateStr) => {
    const date = new Date(dateStr);
    date.setMonth(date.getMonth() + 3);
    return date.toISOString().split('T')[0];
  };

  return (
    <div>
      <Navbar />
      <div className='main'>
        <div><Sidebar /></div>

        <div className='mydonation-table p-3 '>
          {!showForm && (
            <>
              <h4 className="mb-3 text-center">My Donation History</h4>
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

              <div className="text-center">
                <button className='btn btn-primary donate' onClick={handleDonateClick}>
                  Donate Blood
                </button>
              </div>
            </>
          )}

          {showForm && (
            <div className="donation-form card p-4 shadow-sm" style={{paddingTop:"50px"}}>
              <h5 className="mb-3 text-danger">Enter Donation Details</h5>
              <form onSubmit={handleSubmit} >
                <div className="mb-3">
                  <label className="form-label">Donation Date</label>
                  <input type="date" className="form-control" name="date" value={formData.date} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Blood Group</label>
                  <select className="form-select" name="bloodGroup" value={formData.bloodGroup} onChange={handleInputChange} required>
                    <option value="">Select</option>
                    <option>O+</option>
                    <option>A+</option>
                    <option>B+</option>
                    <option>AB+</option>
                    <option>O-</option>
                    <option>A-</option>
                    <option>B-</option>
                    <option>AB-</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Quantity (ml)</label>
                  <input type="number" className="form-control" name="quantity" value={formData.quantity} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-control" name="location" value={formData.location} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select className="form-select" name="status" value={formData.status} onChange={handleInputChange} required>
                    <option value="">Select</option>
                    <option>Pending</option>
                    <option>Completed</option>
                  </select>
                </div>

                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-success">Submit</button>
                  <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mydonation;
