import Project from "../components/project";

const Projects = () => {
  return (
    <div id="projects-container">
      <p>Most Recent Projects</p>
      <p>
        All the projects visible on{" "}
        <a
          href="https://github.com/tpercival01"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ededed" }}
        >
          GitHub
        </a>
      </p>
      <Project
        title="Multi-Step Form Component"
        tech="JS, HTML, CSS"
        live="https://multi-step-form-component.onrender.com/"
        code="https://github.com/tpercival01/Multi-step-form-component"
        desc="A responsive and reliable multi-step form billing component. Using react state to track the users progression, details and billing."
      />
      <Project
        title="Furniture Store Homepage"
        tech="JS, HTML, CSS"
        live="https://tpercival01.github.io/room-homepage/"
        code="https://github.com/tpercival01/room-homepage"
        desc="A responsive and reliable multi-step form billing component. Using react state to track the users progression, details and billing."
      />
      <Project
        title="Rest Countries Website"
        tech="JS, REACT, API"
        live="https://rest-countries-5fp2.onrender.com"
        code="https://github.com/tpercival01/rest-countries-website"
        desc="A responsive and reliable multi-step form billing component. Using react state to track the users progression, details and billing."
      />
      <Project
        title="Rock, Paper, Scissors"
        tech="JS, HTML, CSS, REACT"
        live="https://rock-paper-scissors-ojoo.onrender.com/"
        code="https://github.com/tpercival01/rock-paper-scissors"
        desc="A modern and efficient rock paper scissors game with a second version built in. Using react state and localstorage to track users score."
      />
      <Project
        title="Minify URL"
        tech="JS, REACT, API"
        live="https://minify-url-webpage.onrender.com/"
        code="https://github.com/tpercival01/Mini-URL-Webpage"
        desc="A minimal webpage using Flexbox and CSS Grid to display a responsive list of links. Uses localstorage and react state to store previous links."
      />
      <Project
        title="Portfolio page"
        tech="JS, HTML, CSS, REACT"
        live=""
        code="https://github.com/tpercival01/FS-Portfolio"
        desc="A responsive and reliable portfolio page. Using react to efficiently load each page separately when needed."
      />
    </div>
  );
};

export default Projects;
