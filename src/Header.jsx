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
              <a className="nav-items white-text" href="#">
                Home
              </a>
              <a className="nav-items white-text" href="#">
                About
              </a>
              <a className="nav-items white-text" href="#">
                Projects
              </a>
              <a className="nav-items white-text" href="#">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Header;
