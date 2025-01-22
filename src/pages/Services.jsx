import React, { useEffect, useState } from "react";
import "../components/styles/service.css";
import { useParams } from "react-router-dom";
import { getServices } from "../data/Services";

function Services() {
  const [services, setServices] = useState([]);
  const { service } = useParams();

  useEffect(() => {
    const fetchedServices = getServices();
    setServices(fetchedServices);
  }, []);

  useEffect(() => {
    if (service) {
      const elementId = service
        .toLowerCase()
        .replaceAll(" ", "_")
        .replaceAll("/", "-");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [service]);

  return (
    <div className="servicesCon">
      <h1>Our Services</h1>
      <p>Explore the exclusive services we offer:</p>
      {services.map((service, index) => (
        <div
          key={index}
          id={service.name
            .toLowerCase()
            .replaceAll(" ", "_")
            .replaceAll("/", "-")}
          className="serviceCon"
        >
          <div className="serviceImgCon">
            <img
              src={service.img}
              className="serviceImg"
              alt={`${service.name} Image 1`}
            />
            <img
              src={service.img2}
              className="serviceImg"
              alt={`${service.name} Image 2`}
            />
          </div>
          <div className="serviceDet">
            <h2>{service.name}</h2>
            <h3>{service.heading}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: service.description.replace(/\n/g, "<br />"),
              }}
            />
            <h3>We Offer:</h3>
            <p>{service.weoffer1}</p>
            <p>{service.weoffer2}</p>
            <p>{service.weoffer3}</p>
            <p>{service.weoffer4}</p>
            <p>Price: ${service.price.rate}</p>
            <p>Discount Price: ${service.price.discountRate}</p>
            <h3>Rating: {service.info.rating}</h3>
            <button className="bookNowBtn">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;

