import React from 'react';
import "../components/styles/about.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our company, our mission, and what we do!</p>
      </section>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver high-quality products with exceptional service. We are committed to bringing innovation and excellence to the industry.
        </p>

        <h2>Our Story</h2>
        <p>
          Our company was founded in 2015 with a simple goal: to make life easier through our innovative products. From humble beginnings, we have grown into a global brand with a loyal customer base.
        </p>

        <h2>What We Offer</h2>
        <p>
          We offer a range of products designed to meet the needs of our customers. Whether you're looking for the latest tech gadgets or practical everyday solutions, we've got something for you.
        </p>
      </section>

      <section className="about-footer">
        <h3>Get in Touch</h3>
        <p>We love to hear from you! Reach out to us for more information or inquiries.</p>
      </section>
    </div>
  );
};

export default About;
