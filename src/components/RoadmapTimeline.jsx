// src/components/RoadmapTimeline.jsx

import roadmapData from "../data/roadmapData";

const RoadmapTimeline = () => {
  return (
    <div className="timeline">
      <h4 className="mb-4">
        Learning Roadmap
      </h4>

      {roadmapData.map((item) => (
        <div
          className="timeline-item"
          key={item.id}
        >
          <div className="card p-3 shadow-sm border-0">
            <h5>{item.title}</h5>

            <p className="mb-0">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadmapTimeline;