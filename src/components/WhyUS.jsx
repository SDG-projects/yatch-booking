import React from "react";
import "./styles/whyus.css";
function WhyUS() {
  const reasons = [
    {
      title: "Unparalleled Luxury",
      description:
        "Indulge in the finest amenities and accommodations, carefully selected to provide the ultimate comfort and relaxation.",
      icon: "luxury-icon",
      image: "/img/df.jpg",
    },
    {
      title: "Personalized Experience",
      description:
        "Our dedicated team will tailor your yacht rental to your unique preferences, ensuring an unforgettable experience.",
      icon: "personalized-icon",
      image: "/img/afd.jpg",
    },
    {
      title: "Freedom to Explore",
      description:
        "With our expertly curated itineraries, discover hidden gems and experience the thrill of exploring new destinations.",
      icon: "explore-icon",
      image: "/img/pa.jpg",
    },
    {
      title: "Safety and Reliability",
      description:
        "Our modern yachts and experienced crew ensure a safe and enjoyable journey, giving you peace of mind.",
      icon: "safety-icon",
      image: "/img/sdf.jpg",
    },
    {
      title: "Unbeatable Value",
      description:
        "Enjoy exceptional quality and service at competitive prices, making your yacht rental experience truly unforgettable.",
      icon: "value-icon",
      image: "luxurious-yacht-with-price-tag.jpg",
    },
  ];

  return (
    <section className="why-choose-golden-yacht-rentals">
      <h2 className="section-title">Why Choose Golden Yacht Rentals?</h2>
      <div className="reasons">
        {reasons.map((reason, index) => (
          <div key={index} className="reason">
            <img
              src={reason.image}
              alt={reason.title}
              className="reason-image"
            />
            <div className="reason-content">
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
              <i className={`fa ${reason.icon} reason-icon`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUS;
