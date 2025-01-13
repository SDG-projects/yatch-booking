import React from "react";
import "./styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const service = [
    "Romantic Private Dinner",
    "Private chef",
    "Yacht Catering",
    "Live BBQ with private chef",
    "Private DJ",
    "Private Fishing",
    "Luxury video and photoshoot",
    "Private Artist Singer",
    "Private Saxophone Artist",
    "Private Dancers",
    "Private Bartender",
    "Private Magician",
    "Private Professional Massage Therapists",
    "Private Tour Guide",
    "Private Hostesses",
    "Private Waiters",
    "Professional Hospitality Crew",
    "Live Seafood BBQ and Private Chef",
    "Sushi Menus and a Private Chef",
    "Vegetarian Menus Crafted by a Private Chef",
    "Premium Alcoholic Drinks",
    "Exclusive Champagnes",
    "Open Bar",
    "Yacht Decorations",
    "Birthday Decorations",
    "Proposal and Anniversary Decorations",
    "Roses/Flower decorations",
    "VIP Transport",
  ];

  return (
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
              <Link to="/services">Services</Link>
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
              <Link to="">+91 34353 34553</Link>
            </li>
            <li>
              <Link to="">+91 34353 34553</Link>
            </li>
          </ul>
        </div>

        <div className="footer-payment">
          <h3>Payment We Accept</h3>
          <div className="payment-icons">
            <i className="fa-brands fa-cc-visa" title="Visa"></i>
            <i className="fa-brands fa-cc-mastercard" title="Mastercard"></i>
          </div>
          <p>ONLINE TRANSACTION EXACTRA</p>
        </div>

        <div className="footer-info">
          <h3>Information</h3>
          <p>Copyright 2024 My Website</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

