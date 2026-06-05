function InterviewCard({ question }) {
  return (
    <div className="card p-3 shadow-sm mb-3">
      <h5>{question.question}</h5>
      <p className="text-muted">{question.answer}</p>
    </div>
  )
}

export default InterviewCard
 
