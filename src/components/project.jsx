const Project = (props) => {
  const techArr = props.tech.split(",");

  return (
    <div className="project">
      <div className="project-div" id="project-code">
        <a href={props.code} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github"></i>
        </a>
        {props.live !== "" && (
          <a href={props.live} target="_blank" rel="noopener noreferrer">
            <i class="fa fa-rocket" aria-hidden="true"></i>
          </a>
        )}
      </div>
      <p id="project-title">{props.title}</p>
      <p id="project-desc">{props.desc}</p>
      <div id="project-tech" className="project-div">
        {techArr.map((item, key) => (
          <p key={key}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Project;
