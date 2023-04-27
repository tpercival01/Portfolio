import resume from "../images/Thomas Percival - Resume.pdf";

const Resume = () => {
  return (
    <div id="resume-container">
      <embed src={resume} width="700px" height="1000px" />
    </div>
  );
};

export default Resume;
