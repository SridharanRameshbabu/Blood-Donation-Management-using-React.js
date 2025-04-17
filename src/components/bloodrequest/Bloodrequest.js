import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

const Bloodrequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("bloodRequests")) || [];
    setRequests(storedRequests);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="container py-4">
          <h3 className="text-center text-danger mb-4" style={{paddingTop:"50px"}}>🗂️ All Blood Requests</h3>

          {requests.length === 0 ? (
            <p className="text-center">No blood requests found.</p>
          ) : (
            <div className="table-responsive" style={{ maxWidth: "900px" , margin: "0 auto" }}>
              <table className="table table-striped table-bordered text-center shadow-sm">
                <thead className="table-danger">
                  <tr>
                    <th>#</th>
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
                      <td>{idx + 1}</td>
                      <td>{req.name}</td>
                      <td>{req.bloodGroup}</td>
                      <td>{req.units}</td>
                      <td>{req.hospital}</td>
                      <td>{req.contact}</td>
                      <td>{req.neededDate}</td>
                      <td>
                        <span className={`badge ${req.status === 'Pending' ? 'bg-warning text-dark' : 'bg-success'}`}>
                          {req.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bloodrequest;
