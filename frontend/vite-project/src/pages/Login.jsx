import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import { Eye, EyeOff } from "lucide-react"; 

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      console.log("Login Response:", response.data);

      sessionStorage.setItem("user", JSON.stringify(response.data));

      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError("Invalid credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" 
      style={{ background: "linear-gradient(135deg, #D9AFD9, #97D9E1)"
        , minHeight: "100vh" }}>
      
      <div className="card p-4 shadow-lg rounded-4" 
        style={{ width: "420px", backgroundColor: "#ffffff", border: "none" }}>

        <h2 className="text-center mb-3 fw-bold text-primary">Welcome Back</h2>
        <p className="text-center text-muted">Sign in to your account</p>

        {error && <div className="alert alert-danger text-center">{error}</div>}

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">Username:</label>
            <input type="text" name="username" id="username" placeholder="Enter your username"
              className="form-control rounded-3" onChange={handleChange} required />
          </div>

          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label fw-semibold">Password:</label>
            <div className="input-group">
              <input type={showPassword ? "text" : "password"} name="password" id="password" 
                placeholder="Enter your password" className="form-control rounded-3"
                onChange={handleChange} required />
              
              <span className="input-group-text bg-white border-0 cursor-pointer" 
                onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold rounded-3">
            Login
          </button>
        </form>

        <p className="text-center text-muted mt-3">
          Don't have an account? <a href="/register" className="text-decoration-none fw-bold text-primary">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;