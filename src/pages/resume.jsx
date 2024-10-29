import resume from "../images/IT And Developer Resume.pdf";

const Resume = () => {
  return (
    <div id="resume-container">
      <embed src={resume} width="700px" height="1000px" />
    </div>
  );
};

export default Resume;
