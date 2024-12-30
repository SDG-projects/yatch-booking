import React from "react";
import "./styles/footer.css";

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
    <footer>
      <div>
        <h1>Welcome to Golden Yatch Rentals</h1>
        <p>Experience the ultimate yacht adventure.</p>
      </div>
      <div>
        {service.map((value, i) => (
          <li key={i} className="service">
            {value}
          </li>
        ))}
      </div>
      <div>
        This website is build and host by <span>SDG</span> infoTech
        <div>Contact:info@SDGinfoTech</div>
      </div>
    </footer>
  );
}

export default Footer;
