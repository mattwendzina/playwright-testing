// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  return <h1>Welcome to the Home Page!</h1>;
}

function About() {
  return <h1>This is the About Page.</h1>;
}

function Contact() {
  return <h1>This is the Contact Page.</h1>;
}

function App() {
  return (
    <Router>
      <div>
        {/* Navigation (optional) */}
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Define routes using Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
