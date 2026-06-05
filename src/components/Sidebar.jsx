import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div className="sidebar">
      <h3>SkillSprint AI</h3>

      <NavLink to="/dashboard">
        Dashboard
      </NavLink>

      <NavLink to="/planner">
        Planner
      </NavLink>

      <NavLink to="/interview">
        Interview Prep
      </NavLink>

      <NavLink to="/profile">
        Profile
      </NavLink>

      <button
        className="btn btn-danger mt-4 w-100"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;