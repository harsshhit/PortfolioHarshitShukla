import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import SocialProfiles from "./components/SocialProfiles";
import Experience from "./components/Experience";

function App() {
  return (
    <Router>
      <div className="App w-screen ">
        <Header />
        <SocialProfiles />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
