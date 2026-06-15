import { useState, useEffect } from "react";

function UseEffect() {

  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  const [secondsOnline, setSecondsOnline] =
    useState(0);

  const [visits, setVisits] =
    useState(0);

  const [lastVisit, setLastVisit] =
    useState("First Visit");

  useEffect(() => {

    document.title =
      `Online ${secondsOnline}s`;

  }, [secondsOnline]);

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(
        new Date().toLocaleTimeString()
      );

      setSecondsOnline(
        prev => prev + 1
      );

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  useEffect(() => {

    const savedVisits =
      localStorage.getItem("visits");

    const savedLastVisit =
      localStorage.getItem("lastVisit");

    const newVisits =
      savedVisits
        ? Number(savedVisits) + 1
        : 1;

    setVisits(newVisits);

    localStorage.setItem(
      "visits",
      newVisits
    );

    if (savedLastVisit) {
      setLastVisit(savedLastVisit);
    }

    localStorage.setItem(
      "lastVisit",
      new Date().toLocaleString()
    );

  }, []);

  function resetData() {

    localStorage.removeItem("visits");

    localStorage.removeItem("lastVisit");

    setVisits(0);

    setLastVisit("No Data");

  }

  return (
    <div className="page">

      <h1>useEffect Demonstration</h1>

      <img
        src="/assets/img/react.png"
        alt="React"
      />

      <p>
        The useEffect hook allows React
        components to perform side effects
        such as timers, localStorage access,
        API calls and document updates.
      </p>

      <div className="project-container">

        <div className="project-card">

          <h2>Current Time</h2>

          <h3>{time}</h3>

        </div>

        <div className="project-card">

          <h2>Seconds Online</h2>

          <h3>{secondsOnline}</h3>

        </div>

        <div className="project-card">

          <h2>Total Visits</h2>

          <h3>{visits}</h3>

        </div>

      </div>

      <h2>Session Information</h2>

      <div className="project-container">

        <div className="project-card">

          <h2>Last Visit</h2>

          <p>{lastVisit}</p>

        </div>

        <div className="project-card">

          <h2>Status</h2>

          <p>Active Session</p>

        </div>

      </div>

      <button onClick={resetData}>
        Reset Visit Data
      </button>

      <h2>Features Demonstrated</h2>

      <ul>
        <li>Document Title Updates</li>
        <li>Live Clock</li>
        <li>Timer Using setInterval</li>
        <li>Cleanup Function</li>
        <li>localStorage Access</li>
        <li>Visit Tracking</li>
        <li>Component Lifecycle</li>
        <li>Dynamic Updates</li>
      </ul>

    </div>
  );
}

export default UseEffect;