import profileImg from "../images/profile.png";
const Summary = () => {
  return (
    <div id="summary-container">
      <div id="summary-grid">
        <span id="photo">
          <img src="./images/profile.png"></img>
        </span>
        <p style={{ fontSize: "30px", gridRow: "1/1", gridColumn: "1/1" }}>
          Welcome, I am <strong>Thomas Percival</strong>.
        </p>
        <p
          style={{
            fontSize: "15px",
            gridRow: "2/2",
            gridColumn: "1/1"
          }}
        >
Python Developer and MSc Artificial Intelligence candidate, with a passion for data analysis, automation, and AI-driven solutions.  </p>
        <p
          style={{
            fontSize: "15px",
            gridRow: "3/3",
            gridColumn: "1/1"
          }}
        >
          Currently employed as a Regional Office Support Analyst, focusing on Python-based automation and IT solutions, while pursuing an MSc in Artificial Intelligence, graduating in 2026.
        </p>
        <div id="links-div">
          <a
            href="https://github.com/tpercival01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/thomaspercival"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square"></i>
          </a>
        </div>
        <div id="tech-div">
          <p>Technologies</p>
          <span id="logos">
            <p>Python</p>
            <p>HTML</p>
            <p>JavaScript</p>
            <p>CSS</p>
            <p>Pandas</p>
            <p>NumPy</p>
            <p>SQL</p>
            <p>Tkinter</p>
            <p>Git</p>
            <p>PowerShell</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
