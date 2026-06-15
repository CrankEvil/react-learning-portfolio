import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {

  function toggleTheme() {

    const newTheme = !darkMode;

    setDarkMode(newTheme);

    localStorage.setItem(
      "theme",
      JSON.stringify(newTheme)
    );
  }

  return (
    <nav className="navbar">

      <h2>React Learning Portfolio 2026</h2>

      <Link to="/">Home</Link>
      <Link to="/team">Team</Link>
      <Link to="/router">Router</Link>
      <Link to="/components">Components</Link>
      <Link to="/events">Events</Link>
      <Link to="/state">useState</Link>
      <Link to="/effect">useEffect</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/layout">Layout</Link>
      <Link to="/projects">Projects</Link>

      <button onClick={toggleTheme}>
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

    </nav>
  );
}

export default Navbar;