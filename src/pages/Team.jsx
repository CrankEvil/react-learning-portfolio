import { useState } from "react";
import TeamCard from "../components/TeamCard";

function Team() {

  const [selectedStudent, setSelectedStudent] =
    useState("Click a team member to view details.");

  const [clickCount, setClickCount] =
    useState(0);

  function selectMember(member) {

    setSelectedStudent(member);

    setClickCount(clickCount + 1);

  }

  return (
    <div className="page">

      <h1>Meet Our Team</h1>

      <img
        src="/assets/img/react.png"
        alt="React"
      />

      <p>
        This React Portfolio Website was developed
        as a Web Programming Final Project.
        The project demonstrates React Router,
        Components, Props, Events, useState,
        useEffect, localStorage and CSS styling.
      </p>

      <div className="team-container">

        <div
          onClick={() =>
            selectMember(
              "Sharma Arun (2530025)"
            )
          }
        >
          <TeamCard
            name="Sharma Arun"
            id="2530025"
            image="/assets/img/arun.png"
          />
        </div>

        <div
          onClick={() =>
            selectMember(
              "Budathoki Nisha (2530063)"
            )
          }
        >
          <TeamCard
            name="Budathoki Nisha"
            id="2530063"
            image="/assets/img/nisha.png"
          />
        </div>

      </div>

      <h2>Selected Member</h2>

      <div className="project-card">
        <h3>{selectedStudent}</h3>
      </div>

      <h2>Team Statistics</h2>

      <div className="project-container">

        <div className="project-card">
          <h2>2</h2>
          <p>Team Members</p>
        </div>

        <div className="project-card">
          <h2>10+</h2>
          <p>Portfolio Pages</p>
        </div>

        <div className="project-card">
          <h2>{clickCount}</h2>
          <p>Profile Views</p>
        </div>

      </div>

      <h2>Project Information</h2>

      <div className="project-card">

        <p>
          Course: Web Programming
        </p>

        <p>
          Framework: React
        </p>

        <p>
          Project Type: Learning Portfolio
        </p>

        <p>
          Academic Year: 2026
        </p>

      </div>

      <h2>Concepts Demonstrated</h2>

      <ul>
        <li>React Components</li>
        <li>Props</li>
        <li>useState</li>
        <li>Event Handling</li>
        <li>Dynamic Content Rendering</li>
        <li>Images</li>
        <li>Reusable Components</li>
      </ul>

    </div>
  );
}

export default Team;