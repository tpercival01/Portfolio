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
          title="Good News App"
          tech="Python, Tkinter, Sentiment Analysis, News API"
          live=""
          code="https://github.com/tpercival01/Good-news-app"
          desc="Developed a Python application that curates positive news articles to promote mental well-being. The app features a Tkinter-based GUI, integrates the News API for fetching the latest news, and uses NLTK for sentiment analysis to filter uplifting content, providing users with an accessible and positive news experience."
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
