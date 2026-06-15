import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {

  const projects = [

    {
      title: "Profile Card Project",
      image: "/assets/img/profile.png",
      description:
        "Used Components, Props and Images.",
      concepts:
        "Components, Props, JSX, Images",
      difficulty: "Beginner",
      status: "Completed"
    },

    {
      title: "React Router Project",
      image: "/assets/img/router.png",
      description:
        "Implemented page navigation using React Router.",
      concepts:
        "React Router, Routes, Route, Link",
      difficulty: "Intermediate",
      status: "Completed"
    },

    {
      title: "Todo App",
      image: "/assets/img/todo.png",
      description:
        "Used useState, useEffect and localStorage.",
      concepts:
        "useState, useEffect, localStorage",
      difficulty: "Advanced",
      status: "Completed"
    },

    {
      title: "Layout Project",
      image: "/assets/img/layout.png",
      description:
        "Created reusable layouts using React components.",
      concepts:
        "Layouts, Components, Conditional Rendering",
      difficulty: "Intermediate",
      status: "Completed"
    }

  ];

  const [selectedProject, setSelectedProject] =
    useState(projects[0]);

  return (
    <div className="page">

      <h1>Semester Projects Portfolio</h1>

      <img
        src="/assets/img/react.png"
        alt="React"
      />

      <p>
        This page showcases projects completed
        throughout the semester while learning
        React concepts and web development.
      </p>

      <div className="project-container">

        {projects.map((project, index) => (

          <div
            key={index}
            onClick={() =>
              setSelectedProject(project)
            }
          >

            <ProjectCard
              title={project.title}
              image={project.image}
              description={project.description}
            />

          </div>

        ))}

      </div>

      <h2>Selected Project Details</h2>

      <div className="project-card">

        <h2>{selectedProject.title}</h2>

        <p>
          {selectedProject.description}
        </p>

        <p>
          <strong>Concepts:</strong>
          {" "}
          {selectedProject.concepts}
        </p>

        <p>
          <strong>Difficulty:</strong>
          {" "}
          {selectedProject.difficulty}
        </p>

        <p>
          <strong>Status:</strong>
          {" "}
          {selectedProject.status}
        </p>

      </div>

      <h2>Project Statistics</h2>

      <div className="project-container">

        <div className="project-card">

          <h2>{projects.length}</h2>

          <p>Major Projects</p>

        </div>

        <div className="project-card">

          <h2>10+</h2>

          <p>React Concepts</p>

        </div>

        <div className="project-card">

          <h2>2026</h2>

          <p>Project Year</p>

        </div>

        <div className="project-card">

          <h2>100%</h2>

          <p>Completed</p>

        </div>

      </div>

      <h2>Technologies Used</h2>

      <div className="project-container">

        <div className="project-card">
          React
        </div>

        <div className="project-card">
          React Router
        </div>

        <div className="project-card">
          JavaScript
        </div>

        <div className="project-card">
          JSX
        </div>

        <div className="project-card">
          CSS
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

      </div>

      <h2>Concepts Learned Through Projects</h2>

      <ul>

        <li>Components & Props</li>

        <li>React Router</li>

        <li>Event Handling</li>

        <li>useState Hook</li>

        <li>useEffect Hook</li>

        <li>localStorage</li>

        <li>Conditional Rendering</li>

        <li>Dynamic UI Updates</li>

        <li>Reusable Layouts</li>

        <li>React Project Structure</li>

      </ul>

    </div>
  );
}

export default Projects;