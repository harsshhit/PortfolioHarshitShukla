import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import SocialProfiles from "./components/SocialProfiles";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Welcome />
        <Introduction />
        <Skills />
        <SocialProfiles />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
