import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar'; 
import "bootstrap/dist/css/bootstrap.min.css";
import './Updatestock.css';

const Updatestock = () => {
  const [bloodType, setBloodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [updateDate, setUpdateDate] = useState('');

  const handleBloodTypeChange = (e) => setBloodType(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handleDateChange = (e) => setUpdateDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bloodType || !quantity || !updateDate) {
      alert('Please fill out all fields.');
      return;
    }

    const existingStock = JSON.parse(localStorage.getItem('bloodStock')) || [];

    const newStock = {
      bloodType,
      quantity: parseInt(quantity),
      updateDate,
    };

    const updatedStock = [...existingStock, newStock];
    localStorage.setItem('bloodStock', JSON.stringify(updatedStock));

    setBloodType('');
    setQuantity('');
    setUpdateDate('');

    alert('Stock updated successfully!');
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar />

        <div className="container py-4">
          <h3 className="text-center text-primary mb-4" style={{ paddingTop: "50px" }}>
            🩸 Update Blood Stock
          </h3>

          <div className="card shadow-sm p-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="bloodType" className="form-label">Blood Type</label>
                <select 
                  className="form-select" 
                  id="bloodType" 
                  value={bloodType} 
                  onChange={handleBloodTypeChange} 
                  required
                >
                  <option value="">Select Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Quantity (units)</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="quantity" 
                  value={quantity} 
                  onChange={handleQuantityChange} 
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="updateDate" className="form-label">Update Date</label>
                <input 
                  type="date" 
                  className="form-control" 
                  id="updateDate" 
                  value={updateDate} 
                  onChange={handleDateChange} 
                  required
                />
              </div>

              <button type="submit" className="btn btn-success w-100">Update Stock</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updatestock;
