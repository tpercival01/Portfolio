import "./styles.css";
import Header from "./components/header";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Projects from "./pages/projectsPage";
import Summary from "./pages/summary";
import { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("summary");

  const handleNav = (e) => {
    setCurrentPage(e.target.title);
  };

  return (
    <div className="App">
      <Header handleNav={handleNav} />
      {currentPage === "summary" && <Summary />}
      {currentPage === "projects" && <Projects />}
      {currentPage === "resume" && <Resume />}
      {currentPage === "contact" && <Contact />}
    </div>
  );
};

export default App;
