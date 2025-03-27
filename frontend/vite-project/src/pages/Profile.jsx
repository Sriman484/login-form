import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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

  return (
    <>
      <div className="text-white text-center py-5" style={{ backgroundColor: "#212529" }}>
        <h1>USER DETAILS</h1>
      </div>

      <div className="d-flex vh-100">
        <div className="bg-dark text-white d-flex flex-column align-items-center" style={{ width: "25%" }}>
          <ul className="list-unstyled text-center mt-4">
            <li className="mb-3">
              <Link to="/" className="nav-link py-2 px-3 sidebar-link">Home</Link>
            </li>
            <li className="mb-3">
              <Link to="/profile" className="nav-link py-2 px-3 sidebar-link">Profile</Link>
            </li>
            <li className="mb-3">
              <Link to="/settings" className="nav-link py-2 px-3 sidebar-link">Settings</Link>
            </li>
          </ul>
        </div>

        <div className="p-5 flex-grow-1 d-flex flex-column align-items-center mt-5">
          <h2>Welcome, {user?.username}!</h2>

          <table className="table table-bordered mt-4" style={{ width: "50%" }}>
            <tbody>
              <tr>
                <th>First Name:</th>
                <td>{user?.first_name || "N/A"}</td>
              </tr>
              <tr>
                <th>Last Name:</th>
                <td>{user?.last_name || "N/A"}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{user?.email || "N/A"}</td>
              </tr>
              <tr>
                <th>Username:</th>
                <td>{user?.username}</td>
              </tr>
            </tbody>
          </table>

          <button className="btn btn-danger mt-3" onClick={() => {
            sessionStorage.removeItem("user");
            navigate("/");
          }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;