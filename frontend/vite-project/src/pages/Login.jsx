import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      
      console.log("Login Response:", response.data); // ✅ Debugging log

      // Store the full user object
      sessionStorage.setItem("user", JSON.stringify(response.data));

      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError("Invalid credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f0f2f5" }}>
      <div className="card p-4 shadow-lg" style={{ width: "400px", backgroundColor: "#ffffff" }}>
        <h2 className="text-center mb-3">Login</h2>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input type="text" name="username" id="username" placeholder="Enter your username" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" className="form-control" onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
