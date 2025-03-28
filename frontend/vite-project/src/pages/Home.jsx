import { Link } from "react-router-dom";
import "animate.css";

const Home = () => {

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center text-center">
      <div>
        <h1 className="fw-bold text-primary animate__animated animate__fadeInDown" style={{ fontSize: "3rem" }}>
          Welcome to Our Secure Platform!
        </h1>

        <p className="animate__animated animate__fadeIn text-secondary" style={{ fontSize: "1.5rem" }}>
          Experience a seamless authentication system with secure login and registration.
        </p>

        <p className="fw-bold" style={{ fontSize: "1.3rem" }}>
          If you're new, <span className="text-primary">REGISTER</span> or <span className="text-success">LOGIN</span> to get started!
        </p>

        <div className="mt-4">
          <Link
            to="/login"
            className="btn btn-outline-primary mx-3 custom-btn"
            style={{ fontSize: "1.2rem", padding: "12px 30px" }}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="btn btn-outline-success mx-3 custom-btn"
            style={{ fontSize: "1.2rem", padding: "12px 30px" }}
          >
            Register
          </Link>
        </div>
      </div>

      <style>
        {`
          .custom-btn {
            transition: box-shadow 0.3s ease-in-out;
          }

          .custom-btn:hover {
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
};

export default Home;
