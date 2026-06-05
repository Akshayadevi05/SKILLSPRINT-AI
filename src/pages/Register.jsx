// src/pages/Register.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    degree: "",
    dreamJob: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );

    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card card shadow-lg border-0">
        <div className="card-body p-5">
          <h2 className="text-center fw-bold mb-4">
            Create Account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Name</label>

              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Email</label>

              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>

              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Degree</label>

              <input
                type="text"
                className="form-control"
                name="degree"
                placeholder="B.Tech CSE"
                value={formData.degree}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label>Dream Job</label>

              <input
                type="text"
                className="form-control"
                name="dreamJob"
                placeholder="Frontend Developer"
                value={formData.dreamJob}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-success w-100">
              Register
            </button>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;