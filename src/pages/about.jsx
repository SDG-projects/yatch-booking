import React from "react";
import "../components/styles/about.css";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutContent">
        <div className="about">
          <h1>About Golden Yacht Rentals</h1>
          <p>
            Welcome to Golden Yacht Rentals, your premier destination for luxury
            yacht experiences in Dubai. Whether you're looking for a relaxing
            getaway or a lavish event, we provide exceptional yachts that cater
            to all your needs.
          </p>
        </div>

        <div className="compStory">
          {" "}
          <h2>Our Story</h2>
          <p>
            Golden Yacht Rentals was founded with a single mission: to offer our
            clients an unforgettable experience on the water. With a fleet of
            meticulously maintained luxury yachts, we promise to provide a
            perfect combination of comfort, style, and service.
          </p>
        </div>

        <div className="ownerInfo">
          {" "}
          <h2>Meet the Owner</h2>
          <p>
            The company is proudly owned by <strong>Arun Kumar</strong>, a
            passionate entrepreneur with years of experience in the luxury
            travel and hospitality industry. Arun is committed to ensuring that
            every yacht rental meets the highest standards of quality and
            satisfaction.
          </p>
        </div>

        <div className="location">
          {" "}
          <h2>Our Location</h2>
          <p>
            We are located in the stunning Dubai Marina, where we offer the
            finest yachts for rent. Our office is situated in{" "}
            <strong>Marina Suits 1001</strong>, Dubai Marina, making it easy for
            you to visit and discuss your requirements with us.
          </p>
        </div>

        <div className="yUs">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Wide range of luxurious yachts.</li>
            <li>Professional and experienced crew.</li>
            <li>Customizable experiences for every occasion.</li>
            <li>Competitive pricing with premium service.</li>
          </ul>
        </div>
        <div className="aboutContact">
          <h3>Contact Us</h3>
          <p>
            If you're ready to make your dream yacht experience come true, feel
            free to reach out to us:
          </p>
          <p>
            <strong>Owner: Arun Kumar</strong>
          </p>
          <p>
            <strong>Address: Dubai Marina, Marina Suits 1001</strong>
          </p>
          <p>
            <strong>Phone: +971555930716</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
