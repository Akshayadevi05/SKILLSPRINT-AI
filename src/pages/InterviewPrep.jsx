// src/pages/InterviewPrep.jsx

import InterviewCard from "../components/InterviewCard";

import interviewQuestions from "../data/interviewQuestions";

const InterviewPrep = () => {
  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">
        Interview Preparation
      </h2>

      <div className="row g-4">
        {interviewQuestions.map((item) => (
          <div
            className="col-md-6"
            key={item.id}
          >
           <InterviewCard question={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewPrep;