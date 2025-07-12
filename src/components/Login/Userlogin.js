import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Userlogin.css";
import { useNavigate ,Link} from "react-router-dom";

const Userlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("blood_donation_user"));
    // localStorage.setItem("userEmail", email);
    // localStorage.setItem("userPassword", password);
    // alert("Login successful (data stored in localStorage)");
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser)); // 👈 full user object
      localStorage.setItem("loggedInType", storedUser.usertype);        // 👈 "user" or "bloodbank"
      navigate("/dashboard");
    }
    
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        // background: "linear-gradient(to right, #36d1dc, #5b86e5)",
        padding: "20px",
        backgroundImage:"url('https://partheniumprojects.com/wp-content/uploads/2018/12/Blood-Bank-1.jpg')",
        backgroundSize:"100%",
        backgroundRepeat:"no-repeat"
      }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-white p-4 rounded shadow"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center text-primary fw-bold mb-4">User Login</h2>

        {/* Email */}
        <div className="d-flex align-items-center mb-3">
          <div className="icon"><FaEnvelope className="text-white" /></div>
          <input
            type="email"
            className="form-control input-custom"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="d-flex align-items-center mb-3">
          <div className="icon"><FaLock className="text-white" /></div>
          <input
            type="password"
            className="form-control input-custom"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          LOGIN
        </button>

        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-decoration-none text-primary fw-bold">
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Userlogin;
