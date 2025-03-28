import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserCircle } from "lucide-react";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    console.log("User Data from Session Storage:", userData);

    if (!userData) {
      console.log("No user found, redirecting to login...");
      navigate("/login");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  if (!user) return <p className="text-center mt-4">Loading...</p>;

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      sessionStorage.removeItem("user");
      navigate("/");
    }
  };

  return (
    <>
      <div className="text-white text-center py-4" style={{ backgroundColor: "#212529" }}>
        <h1 className="fw-bold p-3">USER DETAILS</h1>
      </div>

      <div className="d-flex vh-100">
        <div className="bg-dark text-white d-flex flex-column align-items-center py-4" style={{ width: "25%" }}>
          <ul className="list-unstyled text-center mt-3 w-100">
            <li className="mb-3">
              <Link to="/" className="nav-link py-2 px-3 sidebar-link">🏠 Home</Link>
            </li>
            <li className="mb-3">
              <Link to="/profile" className="nav-link py-2 px-3 sidebar-link active">👤 Profile</Link>
            </li>
            <li className="mb-3">
              <Link to="/settings" className="nav-link py-2 px-3 sidebar-link">⚙️ Settings</Link>
            </li>
          </ul>
        </div>

        <div className="p-5 flex-grow-1 d-flex flex-column align-items-center mt-5">
          <div className="text-center mb-3">
            <UserCircle size={100} className="text-secondary" />
          </div>

          <h2 className="fw-bold text-primary">Welcome, {user?.username}!</h2>

          <table className="table table-hover table-bordered mt-4" style={{ width: "60%", borderRadius: "10px", overflow: "hidden" }}>
            <tbody className="text-center">
              <tr>
                <th className="bg-dark text-white">First Name</th>
                <td>{user?.first_name || "N/A"}</td>
              </tr>
              <tr>
                <th className="bg-dark text-white">Last Name</th>
                <td>{user?.last_name || "N/A"}</td>
              </tr>
              <tr>
                <th className="bg-dark text-white">Email</th>
                <td>{user?.email || "N/A"}</td>
              </tr>
              <tr>
                <th className="bg-dark text-white">Username</th>
                <td>{user?.username}</td>
              </tr>
            </tbody>
          </table>

          <button className="btn btn-danger mt-3 px-4 py-2 fw-bold rounded-3" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <style>
        {`
          .sidebar-link {
            display: block;
            font-weight: 500;
            border-radius: 8px;
            transition: 0.3s;
            color: white;
          }
          .sidebar-link:hover, .sidebar-link.active {
            background-color: #495057;
          }
        `}
      </style>
    </>
  );
}

export default Profile;