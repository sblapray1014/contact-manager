import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <u className="navbar-nav mr-auto">
            <li className="item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="item">
              <Link to="/add-contact" className="nav-link">
                <i className="fas fa-plus" />
                Add A Contact
              </Link>
            </li>
            <li className="item">
              <Link to="/about" className="nav-link">
                About
                <div className="fas fa-question" />
              </Link>
            </li>
          </u>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
