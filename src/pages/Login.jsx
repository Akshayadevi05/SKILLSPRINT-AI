import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
        localStorage.setItem('user', JSON.stringify(form))

   navigate('/dashboard')
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="mb-4">Login</h2>
                <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="btn btn-primary w-100">Login</button>

        <p className="mt-3 text-center">
          No account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login