// src/pages/Profile.jsx

import { useState } from "react";

const Profile = () => {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);

  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (!newSkill.trim()) return;

    setSkills([...skills, newSkill]);

    setNewSkill("");
  };

  return (
    <div className="container-fluid p-4">
      <div className="card shadow-lg border-0 p-4">
        <div className="text-center">
          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="rounded-circle mb-3"
          />

          <h3>{user.name || "Student"}</h3>

          <p className="text-muted">
            {user.degree}
          </p>

          <p>
            Dream Role:
            <strong>
              {" "}
              {user.dreamJob}
            </strong>
          </p>
        </div>

        <hr />

        <h5 className="mb-3">
          Skills
        </h5>

        <div className="d-flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="badge bg-primary p-2"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="d-flex gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add skill"
            value={newSkill}
            onChange={(e) =>
              setNewSkill(e.target.value)
            }
          />

          <button
            className="btn btn-success"
            onClick={addSkill}
          >
            Add
          </button>
        </div>

        <hr />

        <h5 className="mb-3">
          Social Links
        </h5>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="LinkedIn URL"
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control"
            placeholder="GitHub URL"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;