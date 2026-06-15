import { useState } from "react";
import ConceptCard from "../components/ConceptCard";

function ComponentsProps() {

  const concepts = [
    {
      title: "Components",
      image: "/assets/img/react.png",
      description:
        "Components are reusable building blocks used to create user interfaces."
    },
    {
      title: "Props",
      image: "/assets/img/react.png",
      description:
        "Props allow data to be passed from a parent component to a child component."
    },
    {
      title: "JSX",
      image: "/assets/img/react.png",
      description:
        "JSX allows developers to write HTML-like syntax inside JavaScript."
    }
  ];

  const [search, setSearch] =
    useState("");

  const [selectedConcept, setSelectedConcept] =
    useState("Click a concept card");

  const filteredConcepts =
    concepts.filter((concept) =>
      concept.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="page">

      <h1>Components & Props Demonstration</h1>

      <img
        src="/assets/img/react.png"
        alt="React"
      />

      <p>
        Components are one of the most important
        features of React. They help developers
        create reusable and organized user interfaces.
        Props are used to pass information from
        parent components to child components.
      </p>

      <h2>Search Concepts</h2>

      <input
        type="text"
        placeholder="Search concept..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <h2>Reusable Component Example</h2>

      <div className="concept-container">

        {filteredConcepts.map(
          (concept, index) => (
            <div
              key={index}
              onClick={() =>
                setSelectedConcept(
                  concept.title
                )
              }
            >
              <ConceptCard
                title={concept.title}
                image={concept.image}
                description={
                  concept.description
                }
              />
            </div>
          )
        )}

      </div>

      <h2>Selected Concept</h2>

      <div className="project-card">
        <h3>{selectedConcept}</h3>
      </div>

      <h2>Concept Statistics</h2>

      <div className="project-container">

        <div className="project-card">
          <h2>{concepts.length}</h2>
          <p>Total Concepts</p>
        </div>

        <div className="project-card">
          <h2>{filteredConcepts.length}</h2>
          <p>Search Results</p>
        </div>

        <div className="project-card">
          <h2>React</h2>
          <p>Main Framework</p>
        </div>

      </div>

      <h2>How Props Work</h2>

      <p>
        The ConceptCard component receives
        title, image and description through
        props. The same component is reused
        multiple times with different values.
      </p>

      <h2>Benefits of Components</h2>

      <ul>
        <li>Code Reusability</li>
        <li>Easy Maintenance</li>
        <li>Better Organization</li>
        <li>Improved Readability</li>
        <li>Faster Development</li>
      </ul>

      <h2>Concepts Demonstrated</h2>

      <ul>
        <li>Components</li>
        <li>Props</li>
        <li>JSX</li>
        <li>useState</li>
        <li>Arrays</li>
        <li>map()</li>
        <li>filter()</li>
        <li>Event Handling</li>
        <li>Dynamic Rendering</li>
      </ul>

    </div>
  );
}

export default ComponentsProps;