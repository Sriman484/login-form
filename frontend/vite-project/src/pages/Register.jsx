import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const Register = () => {
  const [formData, setFormData] = useState({first_name:"", last_name:"", username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setMessage("User registered successfully!");
      setTimeout(() => navigate("/login"), 2000);
    } 
    catch (error) {
      console.log(error);
      setMessage("Error registering user");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f0f2f5" }}>
      <div className="card p-4 shadow-lg" style={{ width: "400px", backgroundColor: "#ffffff" }}>
        <h2 className="text-center mb-3">Register</h2>
        {message && <div className={`alert ${message.includes("Error") ? "alert-danger" : "alert-success"}`} role="alert">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstnme" className="form-label">First Name:</label>
            <input type="text" name="first_name" id="first_name" placeholder="Enter your name" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="last_name" className="form-label">Last Name:</label>
            <input type="text" name="last_name" id="last_name" placeholder="Enter your name" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input type="text" name="username" id="username" placeholder="Choose a username" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" name="password" id="password" placeholder="Create a password" className="form-control" onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
