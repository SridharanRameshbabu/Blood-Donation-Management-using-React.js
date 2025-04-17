import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import './Myrequest.css';

const Myrequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    units: '',
    hospital: '',
    contact: '',
    neededDate: ''
  });

  const [requests, setRequests] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedmyRequests = JSON.parse(localStorage.getItem("mybloodRequests")) || [];
    setRequests(storedmyRequests);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = { ...formData, status: "Pending" };
    const updatedRequests = [...requests, newRequest];
    localStorage.setItem("mybloodRequests", JSON.stringify(updatedRequests));
    localStorage.setItem("bloodRequests", JSON.stringify(updatedRequests));
    setRequests(updatedRequests);

    setFormData({
      name: '',
      bloodGroup: '',
      units: '',
      hospital: '',
      contact: '',
      neededDate: ''
    });

    alert("Blood request submitted successfully!");
    setShowForm(false);
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10" style={{paddingTop:"50px"}}>
            {showForm && (
              <div className="card shadow-lg p-4 border-0 mb-4" >
                <h3 className="text-center mb-4 text-danger">🩸 Blood Request Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Blood Group</label>
                      <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="">Select</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Units Required</label>
                      <input
                        type="number"
                        name="units"
                        value={formData.units}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="e.g. 2"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Needed Date</label>
                      <input
                        type="date"
                        name="neededDate"
                        value={formData.neededDate}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Hospital Name</label>
                    <input
                      type="text"
                      name="hospital"
                      value={formData.hospital}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter hospital name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Contact Number</label>
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter contact number"
                      required
                    />
                  </div>

                  <div className="text-end">
                    <button type="submit" className="btn btn-danger px-4">
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
              
            )}


              {/* Request Table */}
              {!showForm && (
              <div className="card shadow-sm p-4 border-0">
                <h4 className="text-center text-danger mb-3">📝 My Requests</h4>
                {requests.length === 0 ? (
                  <p className="text-center">No requests yet.</p>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered text-center">
                      <thead className="table-danger">
                        <tr>
                          <th>Name</th>
                          <th>Blood Group</th>
                          <th>Units</th>
                          <th>Hospital</th>
                          <th>Contact</th>
                          <th>Date Needed</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {requests.map((req, idx) => (
                          <tr key={idx}>
                            <td>{req.name}</td>
                            <td>{req.bloodGroup}</td>
                            <td>{req.units}</td>
                            <td>{req.hospital}</td>
                            <td>{req.contact}</td>
                            <td>{req.neededDate}</td>
                            <td><span className="badge bg-warning text-dark">{req.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                <div className="text-center mt-3">
                  <button className="btn btn-danger" onClick={() => setShowForm(true)}>
                    Request Blood
                  </button>
                </div>
              </div>
              
              
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myrequest;
