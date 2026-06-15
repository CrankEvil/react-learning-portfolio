import { useState } from "react";

function UseState() {

  const [count, setCount] = useState(0);

  const [name, setName] =
    useState("React Student");

  const [color, setColor] =
    useState("black");

  const [inputName, setInputName] =
    useState("");

  const [randomNumber, setRandomNumber] =
    useState(0);

  const [changes, setChanges] =
    useState(0);

  function increaseCounter() {

    setCount(count + 1);

    setChanges(changes + 1);

  }

  function decreaseCounter() {

    setCount(count - 1);

    setChanges(changes + 1);

  }

  function resetCounter() {

    setCount(0);

    setChanges(changes + 1);

  }

  function changeName(newName) {

    setName(newName);

    setChanges(changes + 1);

  }

  function changeColor(newColor) {

    setColor(newColor);

    setChanges(changes + 1);

  }

  function generateRandom() {

    setRandomNumber(
      Math.floor(Math.random() * 100) + 1
    );

    setChanges(changes + 1);

  }

  return (
    <div className="page">

      <h1>useState Demonstration</h1>

      <img
        src="/assets/img/react.png"
        alt="React"
      />

      <p>
        The useState hook allows React
        components to store and update
        data dynamically.
      </p>

      <div className="project-container">

        <div className="project-card">

          <h2>Counter</h2>

          <h3>{count}</h3>

          <button onClick={increaseCounter}>
            Increase
          </button>

          <button onClick={decreaseCounter}>
            Decrease
          </button>

          <button onClick={resetCounter}>
            Reset
          </button>

        </div>

        <div className="project-card">

          <h2>Name Changer</h2>

          <h3>{name}</h3>

          <button
            onClick={() =>
              changeName("Sharma Arun")
            }
          >
            Arun
          </button>

          <button
            onClick={() =>
              changeName(
                "Budathoki Nisha"
              )
            }
          >
            Nisha
          </button>

          <button
            onClick={() =>
              changeName(
                "React Student"
              )
            }
          >
            Reset
          </button>

        </div>

        <div className="project-card">

          <h2>Color Changer</h2>

          <h3
            style={{
              color: color
            }}
          >
            React State
          </h3>

          <button
            onClick={() =>
              changeColor("red")
            }
          >
            Red
          </button>

          <button
            onClick={() =>
              changeColor("blue")
            }
          >
            Blue
          </button>

          <button
            onClick={() =>
              changeColor("green")
            }
          >
            Green
          </button>

        </div>

      </div>

      <h2>Live Input Example</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={inputName}
        onChange={(e) =>
          setInputName(
            e.target.value
          )
        }
      />

      <h3>
        Welcome, {inputName || "Guest"}
      </h3>

      <h2>Random Number Generator</h2>

      <button onClick={generateRandom}>
        Generate Number
      </button>

      <h3>{randomNumber}</h3>

      <h2>State Statistics</h2>

      <div className="project-container">

        <div className="project-card">
          <h2>{changes}</h2>
          <p>Total State Changes</p>
        </div>

        <div className="project-card">
          <h2>{count}</h2>
          <p>Current Counter</p>
        </div>

        <div className="project-card">
          <h2>{randomNumber}</h2>
          <p>Random Value</p>
        </div>

      </div>

      <h2>Applications of useState</h2>

      <ul>
        <li>Managing Counters</li>
        <li>Handling User Input</li>
        <li>Changing UI Dynamically</li>
        <li>Tracking User Actions</li>
        <li>Interactive Applications</li>
        <li>Form Management</li>
        <li>Dynamic Styling</li>
      </ul>

    </div>
  );
}

export default UseState;