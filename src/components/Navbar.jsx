import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <div className="container-fluid">
        <h3 className="text-white fw-bold">SkillSprint AI</h3>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar