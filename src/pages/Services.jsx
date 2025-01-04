import React, { useEffect } from "react";
import "../components/styles/service.css";
import { useParams } from "react-router-dom";
function Services() {
  const services = [
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Romantic Private Dinner",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Private chef",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Yacht Catering",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Live BBQ with private chef",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Private DJ",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Private Fishing",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Luxury video and photoshoot",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Private Artist Singer",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Private Saxophone Artist",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Private Dancers",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Private Bartender",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Private Magician",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Private Professional Massage Therapists",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Private Tour Guide",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Private Hostesses",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Private Waiters",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Professional Hospitality Crew",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Live Seafood BBQ and Private Chef",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Sushi Menus and a Private Chef",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Vegetarian Menus Crafted by a Private Chef",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Premium Alcoholic Drinks",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Exclusive Champagnes",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Open Bar",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Yacht Decorations",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Birthday Decorations",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Proposal and Anniversary Decorations",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "Roses/Flower decorations",
    },
    {
      img: "/img/yacht.png",
      description: "some random text description about the service ",
      name: "VIP Transport",
    },
  ];
  const { service } = useParams();

  useEffect(() => {
    if (service) {
      const element = document.getElementById(
        service.toLowerCase().replaceAll(" ", "_").replaceAll("/", "-")
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  }, [service]);

  return (
    <div className="servicesCon">
      <h1>Services</h1>
      <p>Services we provide:</p>
      {services.map((service, i) => (
        <div
          key={i}
          id={service.name.toLowerCase().replaceAll(" ", "_").replaceAll("/", "-")}
          className="serviceCon"
        >
          <div className="serviceImgCon">
            <img src={service.img} className="serviceImg" alt={service.name} />
          </div>
          <div className="serviceDet">
            <h2>{service.name}</h2>
            <div className="detail-heading">Feature 1: High-Quality Service</div>
              <div className="detail-heading">Feature 2: Expert Staff</div>
              <div className="detail-heading">Feature 3: Customizable Options</div>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;