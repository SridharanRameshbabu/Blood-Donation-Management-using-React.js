import React, { useState } from "react";
import { useNavigate ,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    FaUser,              // For name
    FaLock,              // For password
    FaPhone,             // For phone number
    FaEnvelope,          // For email
    FaMapMarkerAlt,      // For address/location
    FaCity,              // For city (requires alternative import)
    FaBuilding,          // For state
    FaHashtag,           // For pincode
    FaClock,             // For operating hours
    FaIdBadge            // For license number
} from "react-icons/fa";
import "./Bloodbanksignup.css";
  

const BloodbankSignup = () => {

    const [formData, setFormData] = useState({
        bloodbankname: "",
        email: "",
        password: "",
        cpassword: "",
        mobile: "",
        address: "",
        city:"",
        state:"",
        pincode:"",
        operatinghours:"",
        license: "",
        usertype: "bloodbank",
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
        localStorage.setItem("blood_bank_user", JSON.stringify(formData));
        alert("Signup Successful!");
        console.log("Saved to localStorage:", formData);
        
        setFormData({
            bloodbankname: "",
            email: "",
            password: "",
            cpassword: "",
            mobile: "",
            address: "",
            city:"",
            state:"",
            pincode:"",
            operatinghours:"",
            license: "",
        })  
        
        navigate("/bloodbanklogin")
    }



  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        // background: "linear-gradient(to right, #ff416c, #ff4b2b)",
        padding: "20px",
        backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/007/849/061/large_2x/world-blood-donor-background-free-vector.jpg')",
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
          Blood Bank Signup
        </h2>

        {/* Form Rows with Icons - no changes here, kept same styling */}
        <div className="row">
          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaUser className="text-white" /></div>
            <input type="text" name="bloodbankname" value={formData.bloodbankname} onChange={handleChange} className="form-control input-custom" placeholder="Bloodbank Name" required />
          </div>
          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaEnvelope className="text-white" /></div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control input-custom" placeholder="Email Address" required />
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
            <div className="icon-box"><FaPhone className="text-white" /></div>
            <input type="number" name="mobile" value={formData.mobile} onChange={handleChange} className="form-control input-custom" placeholder="Mobile Number" required />
          </div>

          <div className="col-12 mb-3 d-flex align-items-start">
            <div className="icon-box"><FaMapMarkerAlt className="text-white mt-2" /></div>
            <textarea name="address" value={formData.address} onChange={handleChange} className="form-control input-custom" placeholder="Address" rows="3" required></textarea>
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaCity className="text-white" /></div>
            <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control input-custom" placeholder="City" required />
          </div>
          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaBuilding className="text-white" /></div>
            <input type="text" name="state" value={formData.state} onChange={handleChange} className="form-control input-custom" placeholder="State" required />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaHashtag className="text-white" /></div>
            <input type="number" name="pincode" value={formData.pincode} onChange={handleChange} className="form-control input-custom" placeholder="Pincode" required />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaClock className="text-white" /></div>
            <input type="text" name="operatinghours" value={formData.operatinghours} onChange={handleChange} className="form-control input-custom" placeholder="Operating hours" required />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <div className="icon-box"><FaIdBadge className="text-white" /></div>
            <input type="number" name="license" value={formData.license} onChange={handleChange} className="form-control input-custom" placeholder="License Number" required />
          </div>

        </div>

        <button type="submit" className="btn btn-danger w-100">
          REGISTER
        </button>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/bloodbanklogin" className="text-decoration-none text-danger fw-bold">
            Login Here
          </Link>
        </p>
      </form>
    </div>
  )
}

export default BloodbankSignup
