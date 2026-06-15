import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Router from "./pages/Router";
import ComponentsProps from "./pages/ComponentsProps";
import Events from "./pages/Events";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import TodoStorage from "./pages/TodoStorage";
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(() => {

    const savedTheme =
      localStorage.getItem("theme");

    return savedTheme
      ? JSON.parse(savedTheme)
      : false;

  });

  return (

    <BrowserRouter>

      <div className={darkMode ? "dark" : ""}>

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/team"
            element={<Team />}
          />

          <Route
            path="/router"
            element={<Router />}
          />

          <Route
            path="/components"
            element={<ComponentsProps />}
          />

          <Route
            path="/events"
            element={<Events />}
          />

          <Route
            path="/state"
            element={<UseState />}
          />

          <Route
            path="/effect"
            element={<UseEffect />}
          />

          <Route
            path="/todo"
            element={<TodoStorage />}
          />

          <Route
            path="/layout"
            element={<Layout />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>

  );
}

export default App;