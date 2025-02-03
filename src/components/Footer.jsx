import React from "react";
import "./styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/packages">Packages</Link>
              </li>
              <li>
                <Link to="/services">service</Link>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <Link to="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook" />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/golden_yatch_rentals_dubai?igsh=MTI5dmJtODloMnoybA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <Link to="tel:34353 34553">+91 34353 34553</Link>
              </li>
              <li>
                <Link to="tel:34353 34553">+91 34353 34553</Link>
              </li>
            </ul>
          </div>
          <div className="footer-info">
            <h3>Information</h3>
            <p>Copyright 2024 My Website</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </footer>
      <div
        className="TradeMark"
        style={{
          textAlign: "center",
          color: "green",
          backgroundColor: "black",
        }}
      >
        <center>
          <b>
            Develop By : <i> DGWorldS</i>
          </b>
        </center>
      </div>
    </>
  );
}

export default Footer;
