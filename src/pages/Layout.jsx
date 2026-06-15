import { useState } from "react";

function Layout() {

  const [section, setSection] =
    useState("Home");

  const [layoutMode, setLayoutMode] =
    useState("Student");

  return (
    <div className="page">

      <h1>Layout Demonstration</h1>

      <img
        src="/assets/img/layout.png"
        alt="Layout"
      />

      <p>
        This page demonstrates how layouts
        organize web applications into
        reusable sections such as Header,
        Navigation, Content and Footer.
      </p>

      <h2>Layout Mode</h2>

      <button
        onClick={() =>
          setLayoutMode("Student")
        }
      >
        Student Layout
      </button>

      <button
        onClick={() =>
          setLayoutMode("Portfolio")
        }
      >
        Portfolio Layout
      </button>

      <button
        onClick={() =>
          setLayoutMode("Dashboard")
        }
      >
        Dashboard Layout
      </button>

      <div className="layout-demo">

        <div className="box header-box">

          <h2>Website Header</h2>

          <p>
            React Learning Portfolio
          </p>

          <p>
            Current Layout:
            {" "}
            {layoutMode}
          </p>

        </div>

        <div className="box nav-box">

          <h2>Navigation</h2>

          <button
            onClick={() =>
              setSection("Home")
            }
          >
            Home
          </button>

          <button
            onClick={() =>
              setSection("About")
            }
          >
            About
          </button>

          <button
            onClick={() =>
              setSection("Projects")
            }
          >
            Projects
          </button>

          <button
            onClick={() =>
              setSection("Contact")
            }
          >
            Contact
          </button>

        </div>

        <div className="box content-box">

          <h2>Main Content Area</h2>

          {section === "Home" && (

            <div>

              <h3>Welcome Home</h3>

              <p>
                This area represents the
                main content section of
                a website layout.
              </p>

            </div>

          )}

          {section === "About" && (

            <div>

              <h3>About This Project</h3>

              <p>
                This portfolio demonstrates
                React concepts learned during
                the semester.
              </p>

            </div>

          )}

          {section === "Projects" && (

            <div>

              <h3>Semester Projects</h3>

              <ul>
                <li>Profile Card Project</li>
                <li>React Router Project</li>
                <li>Todo Application</li>
                <li>Layout Project</li>
                <li> useEffect</li>
                <li> useState</li>
              </ul>

            </div>

          )}

          {section === "Contact" && (

            <div>

              <h3>Team Members</h3>

              <p>
                Sharma Arun (2530025)
              </p>

              <p>
                Budathoki Nisha (2530063)
              </p>

            </div>

          )}

        </div>

        <div className="box footer-box">

          <h2>Footer</h2>

          <p>
            React Portfolio Project 2026
          </p>

        </div>

      </div>

      <h2>Layout Statistics</h2>

      <div className="project-container">

        <div className="project-card">
          <h2>4</h2>
          <p>Layout Sections</p>
        </div>

        <div className="project-card">
          <h2>4</h2>
          <p>Navigation Pages</p>
        </div>

        <div className="project-card">
          <h2>{layoutMode}</h2>
          <p>Current Layout</p>
        </div>

      </div>

      <h2>Features Demonstrated</h2>

      <ul>

        <li>Layout Structure</li>

        <li>Header Section</li>

        <li>Navigation Section</li>

        <li>Main Content Area</li>

        <li>Footer Section</li>

        <li>useState Hook</li>

        <li>Conditional Rendering</li>

        <li>Dynamic Content Updates</li>

        <li>Interactive Navigation</li>

        <li>Layout Switching</li>

      </ul>

    </div>
  );
}

export default Layout;