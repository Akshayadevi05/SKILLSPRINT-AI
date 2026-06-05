import {
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import InterviewPrep from "./pages/InterviewPrep";
import Profile from "./pages/Profile";

import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="main-content w-100">
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/planner"
        element={
          <Layout>
            <Planner />
          </Layout>
        }
      />

      <Route
        path="/interview"
        element={
          <Layout>
            <InterviewPrep />
          </Layout>
        }
      />

      <Route
        path="/profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />

    </Routes>
  );
}

export default App;