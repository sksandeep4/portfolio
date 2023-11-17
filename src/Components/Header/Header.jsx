import "./Header.css";
const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="headnav">
            <div className="left-headnav">
              <p className="nav-items">SANDEEP.DEV</p>
            </div>
            <div className="right-headnav">
              <a
                className="nav-items hover-heading white-text"
                href="#services"
              >
                Services
              </a>
              <a className="nav-items hover-heading white-text" href="#skills">
                Skills
              </a>
              <a
                className="nav-items hover-heading white-text"
                href="#projects"
              >
                Projects
              </a>
              <a className="nav-items  hover-heading white-text" href="#footer">
                Contact
              </a>
              {/* <button onClick={toggleDarkMode}>Dark Mode</button> */}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Header;
