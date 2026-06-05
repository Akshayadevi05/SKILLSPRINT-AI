function RecommendationCard({ item }) {
  return (
    <div className="card p-3 shadow-sm recommendation-card">
      <h5>{item.title}</h5>
      <p>{item.description}</p>
    </div>
  )
}

export default RecommendationCard