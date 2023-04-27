import profileImg from "../images/profile.png";
const Summary = () => {
  return (
    <div id="summary-container">
      <div id="summary-grid">
        <span id="photo"></span>
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
          Front End Developer and proud Computer Science graduate.
        </p>
        <p
          style={{
            fontSize: "15px",
            gridRow: "3/3",
            gridColumn: "1/1"
          }}
        >
          Currently employed as a Technical Specialist whilst working on
          projects and studying Full Stack.
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
          <a
            href="https://codesandbox.io/u/tpercival01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="codesandbox"></i>
          </a>
        </div>
        <div id="tech-div">
          <p>Technologies</p>
          <p>|</p>
          <span id="logos">
            <p>React</p>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>C#</p>
            <p>.Net</p>
            <p>Express</p>
            <p>Node.js</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
