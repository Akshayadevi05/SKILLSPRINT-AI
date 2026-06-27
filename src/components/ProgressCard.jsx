import { motion } from 'framer-motion'

function ProgressCard({ title, progress }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="card p-3 shadow-sm"
    >
      <h5>{title}</h5>

      <div className="progress mt-3">
        <div
          className="progress-bar"
           style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    </motion.div>
  )
}

export default ProgressCard