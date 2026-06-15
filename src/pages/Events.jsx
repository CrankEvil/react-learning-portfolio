import { useState } from "react";

function Events() {

  const [message, setMessage] =
    useState("Choose an action");

  const [likes, setLikes] =
    useState(0);

  const [dislikes, setDislikes] =
    useState(0);

  const [clicks, setClicks] =
    useState(0);

  const [history, setHistory] =
    useState([]);

  function handleClick() {

    setMessage(
      "Button Clicked Successfully"
    );

    setClicks(clicks + 1);

    setHistory([
      ...history,
      "Button Click"
    ]);

  }

  function handleLike() {

    setMessage(
      "You Liked This Project"
    );

    setLikes(likes + 1);

    setHistory([
      ...history,
      "Like"
    ]);

  }

  function handleDislike() {

    setMessage(
      "You Disliked This Project"
    );

    setDislikes(dislikes + 1);

    setHistory([
      ...history,
      "Dislike"
    ]);

  }

  function handleReset() {

    setMessage(
      "Choose an action"
    );

    setLikes(0);

    setDislikes(0);

    setClicks(0);

    setHistory([]);

  }

  let favoriteAction = "None";

  if (
    likes > dislikes &&
    likes > clicks
  ) {
    favoriteAction = "Like";
  }
  else if (
    dislikes > likes &&
    dislikes > clicks
  ) {
    favoriteAction = "Dislike";
  }
  else if (
    clicks > likes &&
    clicks > dislikes
  ) {
    favoriteAction = "Click";
  }

  return (
    <div className="page">

      <h1>
        React Events Demonstration
      </h1>

      <img
        src="/assets/img/react.png"
        alt="React"
      />

      <p>
        Events allow users to interact
        with React applications.
        Buttons and user actions
        trigger event handlers.
      </p>

      <h2>{message}</h2>

      <div className="project-container">

        <div className="project-card">
          <h2>{clicks}</h2>
          <p>Total Clicks</p>
        </div>

        <div className="project-card">
          <h2>{likes}</h2>
          <p>Likes</p>
        </div>

        <div className="project-card">
          <h2>{dislikes}</h2>
          <p>Dislikes</p>
        </div>

      </div>

      <button onClick={handleClick}>
        Click Me
      </button>

      <button onClick={handleLike}>
        👍 Like
      </button>

      <button onClick={handleDislike}>
        👎 Dislike
      </button>

      <button onClick={handleReset}>
        Reset
      </button>

      <h2>Favorite Action</h2>

      <div className="project-card">
        <h3>{favoriteAction}</h3>
      </div>

      <h2>Activity History</h2>

      <div className="project-card">

        {history.length === 0 ? (
          <p>No activity yet.</p>
        ) : (
          <ul>
            {history.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}
          </ul>
        )}

      </div>

      <h2>What We Learned</h2>

      <ul>
        <li>Event Handling</li>
        <li>onClick Events</li>
        <li>Functions</li>
        <li>State Updates</li>
        <li>User Interaction</li>
        <li>Conditional Rendering</li>
        <li>Array Rendering</li>
      </ul>

    </div>
  );
}

export default Events;