import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaUser,
  FaLock,
  FaCalendarAlt,
  FaTint,
  FaPhone,
  FaEnvelope,
  FaVenusMars,
  FaMapMarkerAlt,
  FaUserCircle,
} from "react-icons/fa";
import "./Usersignup.css";

const Usersignup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    cpassword: "",
    age: "",
    mobile: "",
    email: "",
    bloodgroup: "",
    gender: "",
    address: "",
    usertype: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.cpassword) {
      alert("Passwords do not match!");
      return;
    }

    if(formData.mobile.length !== 10) {
      alert("Mobile number must be 10 digits long!");
      return;
    }
    
    

    // Store to localStorage
    localStorage.setItem("blood_donation_user", JSON.stringify(formData));
    alert("Signup Successful!");
    console.log("Saved to localStorage:", formData);

    // Optionally reset the form
    setFormData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      cpassword: "",
      age: "",
      mobile: "",
      email: "",
      bloodgroup: "",
      gender: "",
      address: "",
    });

    navigate("/login");
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        // background: "linear-gradient(to right, #ff416c, #ff4b2b)",
        padding: "20px",
        backgroundImage: "url('https://img.freepik.com/free-vector/abstract-brochure-with-red-blood-donation-medical-design-vector-illustration-design_123447-3251.jpg?size=626&ext=jpg')",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow"
        style={{ width: "100%", maxWidth: "900px" }}
      >
        <h2 className="text-center text-danger fw-bold mb-4">
          Blood Donation Signup
        </h2>

        {/* Form Rows with Icons - no changes here, kept same styling */}
        <div className="row">
          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaUser className="text-white" /></div>
            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className="form-control input-custom" placeholder="First Name" required />
          </div>
          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaUser className="text-white" /></div>
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="form-control input-custom" placeholder="Last Name" required />
          </div>
          
          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaUserCircle className="text-white" /></div>
            <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control input-custom" placeholder="Username" required />
          </div>
          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaLock className="text-white" /></div>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control input-custom" placeholder="Password" required />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaLock className="text-white" /></div>
            <input type="password" name="cpassword" value={formData.cpassword} onChange={handleChange} className="form-control input-custom" placeholder="Confirm Password" required />
          </div>
          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaCalendarAlt className="text-white" /></div>
            <input type="number" name="age" value={formData.age} onChange={handleChange} className="form-control input-custom" placeholder="Age" required />
          </div>
          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaTint className="text-white" /></div>
            <select
              name="bloodgroup"
              value={formData.bloodgroup}
              onChange={handleChange}
              className="form-control input-custom"
              required
            >
              <option value="" disabled>Select Blood Group</option>
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

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaVenusMars className="text-white" /></div>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-control input-custom"
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>


          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaPhone className="text-white" /></div>
            <input type="number" name="mobile" value={formData.mobile} onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 10) {
                handleChange(e);
              }
              }} 
              className="form-control input-custom" placeholder="Mobile Number" required />
          </div>
          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaEnvelope className="text-white" /></div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control input-custom" placeholder="Email Address" required />
          </div>

          <div className="col-12 mb-3 d-flex align-items-start">
            <div className="icon-box"><FaMapMarkerAlt className="text-white mt-2" /></div>
            <textarea name="address" value={formData.address} onChange={handleChange} className="form-control input-custom" placeholder="Address" rows="3" required></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-danger w-100">
          REGISTER
        </button>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/" className="text-decoration-none text-danger fw-bold">
            Login Here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Usersignup;
