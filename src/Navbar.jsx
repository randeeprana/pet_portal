import Logo from "./img/logo.png";
import { Search } from "react-bootstrap-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark " id="top_nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} style={{ width: "50px" }} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex" id="searchform">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              id="searchbox"
            />
            <button
              className="btn btn-outline-succness"
              type="submit"
              id="searchbtn"
            >
              <Search size={24} color="white" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
