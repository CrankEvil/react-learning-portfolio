import { useState, useEffect } from "react";

function Home() {

  const [time, setTime] = useState("");

  const [visits, setVisits] = useState(0);

  const [welcomeMessage, setWelcomeMessage] =
    useState("Welcome to our React Portfolio");

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(
        new Date().toLocaleTimeString()
      );

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  useEffect(() => {

    const savedVisits =
      localStorage.getItem("homeVisits");

    const newVisits =
      savedVisits
        ? Number(savedVisits) + 1
        : 1;

    localStorage.setItem(
      "homeVisits",
      newVisits
    );

    setVisits(newVisits);

  }, []);

  return (
    <div className="page">

      <h1>
        React Learning Portfolio 2026
      </h1>

      <img
        src="/assets/img/react.png"
        alt="React"
      />

      <h2>
        Web Programming Final Project
      </h2>

      <p>
        Developed by Sharma Arun
        (2530025) and
        Budathoki Nisha
        (2530063)
      </p>

      <h2>{welcomeMessage}</h2>

      <button
        onClick={() =>
          setWelcomeMessage(
            "Thank You For Visiting Our Portfolio"
          )
        }
      >
        Change Welcome Message
      </button>

      <h2>Live Clock</h2>

      <h3>{time}</h3>

      <h2>Project Overview</h2>

      <p>
        This portfolio website was
        developed to demonstrate the
        React concepts learned during
        the semester. The project
        includes React Router,
        Components, Props, Events,
        useState, useEffect,
        localStorage, Layout Design,
        Dynamic Rendering and
        Project Development.
      </p>

      <h2>Portfolio Statistics</h2>

      <div className="project-container">

        <div className="project-card">

          <h2>10+</h2>

          <p>Pages</p>

        </div>

        <div className="project-card">

          <h2>8+</h2>

          <p>React Concepts</p>

        </div>

        <div className="project-card">

          <h2>2</h2>

          <p>Team Members</p>

        </div>

        <div className="project-card">

          <h2>{visits}</h2>

          <p>Portfolio Visits</p>

        </div>

      </div>

      <h2>React Concepts Covered</h2>

      <div className="project-container">

        <div className="project-card">
          React Router
        </div>

        <div className="project-card">
          Components
        </div>

        <div className="project-card">
          Props
        </div>

        <div className="project-card">
          Events
        </div>

        <div className="project-card">
          useState
        </div>

        <div className="project-card">
          useEffect
        </div>

        <div className="project-card">
          localStorage
        </div>

        <div className="project-card">
          Layout Design
        </div>

      </div>

      <h2>Project Objectives</h2>

      <ul>

        <li>
          Demonstrate React fundamentals
        </li>

        <li>
          Build reusable components
        </li>

        <li>
          Implement page navigation
        </li>

        <li>
          Manage application state
        </li>

        <li>
          Store data using localStorage
        </li>

        <li>
          Create responsive layouts
        </li>

        <li>
          Apply CSS styling
        </li>

      </ul>

      <h2>Team Members</h2>

      <div className="project-container">

        <div className="project-card">

          <h3>Sharma Arun</h3>

          <p>
            Student ID: 2530025
          </p>

        </div>

        <div className="project-card">

          <h3>Budathoki Nisha</h3>

          <p>
            Student ID: 2530063
          </p>

        </div>

      </div>

    </div>
  );
}

export default Home;