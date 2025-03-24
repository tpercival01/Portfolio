import Project from "../components/project";
import { useState } from "react";

const Projects = () => {
  return (
    <div id="projects-container">
      <p>Most Recent Projects</p>
      <p>
        All the projects visible on {" "}
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
          title="Tap n' Sound"
          tech="Swift, Xcode"
          live=""
          code="https://github.com/tpercival01/Tap-n-Sound"
          desc="Developed Tap N' Sound, a SwiftUI-based iOS app that delivers an audio-visual response for each tap (up to 10 concurrently), recreating a discontinued app to meet client needs."        />
        <Project
          title="Good News"
          tech="Python, Tkinter, Sentiment Analysis, News API"
          live=""
          code="https://github.com/tpercival01/Good-news-app"
          desc="Crafted a dynamic Python application that curates uplifting news to inspire and promote mental well-being. Featuring a sleek Tkinter interface, it integrates real-time updates via the News API and leverages NLTK sentiment analysis to showcase only the most positive headlines. This engaging app delivers an accessible, mood-boosting news experience with every click."
        />
        <Project
          title="Circuit Puzzle Game using Pygame"
          tech="Python, Pygame"
          live=""
          code="https://github.com/tpercival01/circuit-puzzle-game"
          desc="Designed and developed a puzzle game where players connect circuit tiles to complete a path. Built with Pygame, featuring an intuitive UI with a main menu, difficulty levels, and engaging gameplay mechanics to challenge users as they progress."
        />
        <Project
          title="Manor Murder Mystery"
          tech="Python, Pygame"
          live=""
          code="https://github.com/tpercival01/manor-murder-mystery"
          desc="Immerse yourself in a richly woven detective narrative where a lavish soirée turns deadly. Traverse hidden passages, collect crucial evidence, and issue contextual text commands to uncover the culprit behind a gruesome murder. With item-based progression and a climactic showdown, this command-line adventure challenges your investigative prowess and storytelling instincts."
        />
        <Project
          title="Password Creator"
          tech="Python, Tkinter"
          live=""
          code="https://github.com/tpercival01/password-creator"
          desc="Developed a password generator application to create secure, random passwords with configurable options for length and complexity. Built using Tkinter, ensuring responsive design and smooth user interaction."
        />
        <Project 
          title="Marina's Garden" 
          tech="JavaScript, HTML, CSS" 
          live="" 
          code="https://github.com/tpercival01/Marinas-Garden" 
          desc="Grow a virtual garden and keep your plants flourishing with automated care reminders. This JavaScript-driven website lets you 'plant' flowers and greenery, then notifies you when they need watering, sunlight, or other TLC. Designed to make plant care simple and fun, Marina's Garden brings a touch of nature to the digital realm." 
        />
    </div>
  );
};

export default Projects;
