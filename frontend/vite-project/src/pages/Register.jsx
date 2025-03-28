import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "", last_name: "", username: "", email: "", password: ""
  });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    } catch (error) {
      console.log(error);
      setMessage("Error registering user");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(135deg, #D9AFD9, #97D9E1)", minHeight: "100vh" }}>
      
      <div className="card p-4 shadow-lg rounded-4"
        style={{
          width: "420px",
          backgroundColor: "#ffffff",  
          border: "none",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",  
          borderRadius: "20px",
        }}>

        <h2 className="text-center mb-3 fw-bold text-primary">Create an Account</h2>
        <p className="text-center text-muted">Join us today!</p>

        {message && <div className={`alert ${message.includes("Error") ? "alert-danger" : "alert-success"} text-center`}>{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label fw-semibold">First Name:</label>
            <input type="text" name="first_name" id="first_name" placeholder="Enter your first name"
              className="form-control rounded-3" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="last_name" className="form-label fw-semibold">Last Name:</label>
            <input type="text" name="last_name" id="last_name" placeholder="Enter your last name"
              className="form-control rounded-3" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">Username:</label>
            <input type="text" name="username" id="username" placeholder="Choose a username"
              className="form-control rounded-3" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email:</label>
            <input type="email" name="email" id="email" placeholder="Enter your email"
              className="form-control rounded-3" onChange={handleChange} required />
          </div>

          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label fw-semibold">Password:</label>
            <div className="input-group">
              <input type={showPassword ? "text" : "password"} name="password" id="password"
                placeholder="Create a password" className="form-control rounded-3"
                onChange={handleChange} required />

              <span className="input-group-text bg-white border-0 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold rounded-3">
            Register
          </button>
        </form>

        <p className="text-center text-muted mt-3">
          Already have an account? <a href="/login" className="text-decoration-none fw-bold text-primary">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
