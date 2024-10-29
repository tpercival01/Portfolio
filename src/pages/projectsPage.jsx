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
          title="Asset Checker"
          tech="Python, Tkinter, Selenium"
          live=""
          code="https://github.com/tpercival01/asset-checker"
          desc="Created an asset management tool using Python and Tkinter, integrating data scraped from multiple APIs and processed with Pandas for consolidation into a comprehensive Excel report."
        />
        <Project
          title="Password Creator"
          tech="Python, Tkinter"
          live=""
          code="https://github.com/tpercival01/password-creator"
          desc="Developed a password generator application to create secure, random passwords with configurable options for length and complexity. Built using Tkinter, ensuring responsive design and smooth user interaction."
        />
        <Project
          title="Handwritten Number Recognition with CNN"
          tech="Python, TensorFlow, Keras, OpenCV"
          live=""
          code="https://github.com/tpercival01/Multi-Label-Image-Classification"
          desc="Created a custom Convolutional Neural Network (CNN) to accurately recognise handwritten three-digit numbers. Tuned layers and weights to achieve optimal accuracy, demonstrating a deep understanding of machine learning model architecture and fine-tuning."
        />
        <Project
          title="Positive Content Aggregator"
          tech="Python, Sentiment Analysis, Firebase, Swift"
          live=""
          code="https://github.com/tpercival01/Good-News"
          desc="Developed an iOS app that curates only positive content from social media platforms. Built a backend in Python to scrape data and perform sentiment analysis, storing positive results in Firebase for seamless access via the app. Aimed to improve user mental well-being through content filtering."
        />
        <Project
          title="Circuit Puzzle Game using Pygame"
          tech="Python, Pygame"
          live=""
          code="https://github.com/tpercival01/circuit-puzzle-game"
          desc="Designed and developed a puzzle game where players connect circuit tiles to complete a path. Built with Pygame, featuring an intuitive UI with a main menu, difficulty levels, and engaging gameplay mechanics to challenge users as they progress."
        />
    </div>
  );
};

export default Projects;