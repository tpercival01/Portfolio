const Header = (props) => {
  return (
    <div id="header-container">
      <button className="nav-button" onClick={props.handleNav} title="summary">
        Home
      </button>
      <button className="nav-button" onClick={props.handleNav} title="projects">
        Work
      </button>
      <button className="nav-button" onClick={props.handleNav} title="resume">
        Experience
      </button>
      <button className="nav-button" onClick={props.handleNav} title="contact">
        Contact
      </button>
    </div>
  );
};

export default Header;
