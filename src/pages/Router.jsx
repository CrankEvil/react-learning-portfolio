import { useState } from "react";
import { Link } from "react-router-dom";
import ConceptCard from "../components/ConceptCard";

function Router() {

  const [selectedRoute, setSelectedRoute] =
    useState("No route selected");

  const [routeClicks, setRouteClicks] =
    useState(0);

  function selectRoute(route) {

    setSelectedRoute(route);

    setRouteClicks(routeClicks + 1);

  }

  return (
    <div className="page">

      <h1>React Router Demonstration</h1>

      <img
        src="/assets/img/router.png"
        alt="Router"
      />

      <p>
        React Router allows users to navigate
        between different pages without refreshing
        the browser. It creates a smooth and fast
        user experience in React applications.
      </p>

      <h2>Router Components</h2>

      <div className="concept-container">

        <ConceptCard
          title="BrowserRouter"
          image="/assets/img/router.png"
          description="Provides routing functionality for the application."
        />

        <ConceptCard
          title="Routes"
          image="/assets/img/router.png"
          description="Groups multiple Route components."
        />

        <ConceptCard
          title="Route"
          image="/assets/img/router.png"
          description="Connects a URL path to a component."
        />

        <ConceptCard
          title="Link"
          image="/assets/img/router.png"
          description="Allows navigation without page refresh."
        />

      </div>

      <h2>Live Navigation Demo</h2>

      <p>
        Click any route below.
      </p>

      <Link to="/">
        <button
          onClick={() =>
            selectRoute("Home Page")
          }
        >
          Home
        </button>
      </Link>

      <Link to="/team">
        <button
          onClick={() =>
            selectRoute("Team Page")
          }
        >
          Team
        </button>
      </Link>

      <Link to="/projects">
        <button
          onClick={() =>
            selectRoute("Projects Page")
          }
        >
          Projects
        </button>
      </Link>

      <h2>Current Route Selection</h2>

      <div className="project-card">

        <h3>{selectedRoute}</h3>

      </div>

      <h2>Router Statistics</h2>

      <div className="project-container">

        <div className="project-card">
          <h2>4</h2>
          <p>Router Components</p>
        </div>

        <div className="project-card">
          <h2>{routeClicks}</h2>
          <p>Navigation Clicks</p>
        </div>

        <div className="project-card">
          <h2>10+</h2>
          <p>Portfolio Pages</p>
        </div>

      </div>

      <h2>Advantages of React Router</h2>

      <ul>
        <li>Fast Page Navigation</li>
        <li>No Full Page Refresh</li>
        <li>Improved User Experience</li>
        <li>Supports Multiple Routes</li>
        <li>Reusable Components</li>
        <li>Easy Page Management</li>
      </ul>

      <h2>Concepts Demonstrated</h2>

      <ul>
        <li>React Router</li>
        <li>BrowserRouter</li>
        <li>Routes</li>
        <li>Route</li>
        <li>Link</li>
        <li>useState</li>
        <li>Event Handling</li>
        <li>Dynamic Rendering</li>
      </ul>

    </div>
  );
}

export default Router;