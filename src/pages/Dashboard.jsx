// src/pages/Dashboard.jsx

import ProgressCard from "../components/ProgressCard";
import RecommendationCard from "../components/RecommendationCard";
import RoadmapTimeline from "../components/RoadmapTimeline";

import Recommendation from "../data/Recommendation";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const progressData = [
    { day: "Mon", progress: 20 },
    { day: "Tue", progress: 35 },
    { day: "Wed", progress: 45 },
    { day: "Thu", progress: 60 },
    { day: "Fri", progress: 75 },
    { day: "Sat", progress: 90 },
  ];

  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">
        Dashboard
      </h2>

      <div className="row g-4">
        <div className="col-md-4">
          <ProgressCard
            title="Frontend"
            progress={80}
          />
        </div>

        <div className="col-md-4">
          <ProgressCard
            title="React"
            progress={70}
          />
        </div>

        <div className="col-md-4">
          <ProgressCard
            title="DSA"
            progress={50}
          />
        </div>
      </div>

      <div className="mt-5">
        <h4 className="mb-3">
          Weekly Learning Progress
        </h4>

        <div className="card p-3 shadow-sm border-0">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="progress"
                stroke="#0d6efd"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="mb-4">
          AI Recommendations
        </h4>

        <div className="row g-4">
          {Recommendation.map((item) => (
            <div
              className="col-md-4"
              key={item.id}
            >
              <RecommendationCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <RoadmapTimeline />
      </div>
    </div>
  );
};

export default Dashboard;