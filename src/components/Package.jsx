import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles/package.css";
import { useNavigate, useParams } from "react-router-dom";
import { getPackages, getServices } from "../data/Services";

function Pack({
  name,
  imgs,
  description,
  services,
  price,
  details,
  editable,
  packIncludes,
  children,
  ...props
}) {
  const ourServices = getServices();
  const [packServices, setPackServices] = useState([...services]);
  const [filteredServices, setFilteredServices] = useState(
    ourServices.filter((service) => {
      return !packServices.some(
        (packService) => packService.name === service.name
      );
    })
  );
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    setFilteredServices(
      ourServices.filter((service) => {
        return !packServices.some(
          (packService) => packService.name === service.name
        );
      })
    );
  }, [packServices]);

  function removeService(serviceName) {
    setPackServices(packServices.filter((v) => !(v.name === serviceName)));
  }

  function genBookLink() {
    const template = `Hello, I am interested in the ${name} package with the following services: 
    ${packServices.map((value) => value.name)}
    Is there any negotiation to get the best price?`;
    console.log(template);
  }

  return (
    <section
      className="package"
      id={name.toLowerCase().trim().replaceAll(" ", "_").replaceAll("/", "-")}
    >
      <div className="pack-container">
        <div className="pack-image">
          <h1
            className="pack-title"
            style={{ backgroundImage: `url(${imgs})` }}
          >
            {name}
          </h1>
        </div>
        <div className="pack-extra-images">
          <img src={imgs} />
          <img src={imgs} />
        </div>

        {details && (
          <div className="pack-info">
            <div className="pack-description">
              <p>{description}</p>
            </div>
            <div className="pack-includes">
              <ul>
                {packIncludes?.map((include, i) => (
                  <li key={i}>{include}</li>
                ))}
                {packServices.map((service, i) => (
                  <li key={`service-${i}`}>{service.name}</li>
                ))}
              </ul>
            </div>
            <div className="pack-action">
              <button
                className="pack-book-now btn"
                onClick={() => genBookLink()}
              >
                Book now
              </button>
              {filteredServices.length > 0 && editable && name === "Custom Pack" && (
                <button
                  className="addServ-btn"
                  onClick={() => setShowServices(!showServices)}
                >
                  {showServices ? (
                    "Close"
                  ) : (
                    <span>
                      <i>+</i> Add Service
                    </span>
                  )}
                </button>
              )}
            </div>
          </div>
        )}

        {children}
      </div>

      {/* Overlay Right Sidebar for "Add Service" */}
      {showServices && (
        <div className="service-overlay">
          <button
            className="close-overlay"
            onClick={() => setShowServices(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ul className="service-list">
            {filteredServices.map((service, i) => (
              <li
                key={i}
                onClick={() => {
                  setPackServices((prevServices) => [...prevServices, service]);
                  setShowServices(false);
                  setTimeout(() => {
                    const element = document.getElementById(service.name);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 300);
                }}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function Package({ imgs, services, details }) {
  const nav = useNavigate();
  const { pack } = useParams();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    if (pack) {
      const packName = pack
        .toLowerCase()
        .replaceAll(" ", "_")
        .replaceAll("/", "-");
      setPackages([...getPackages(Number(packName.split("&")[1]))]);
    } else {
      nav("/packages");
    }
  }, [pack]);

  return (
    <div className="packages">
      {packages?.map((pack) => (
        <Pack
          key={pack.id}
          name={pack.name}
          imgs={pack.imgs}
          description={pack.description}
          services={pack.services}
          price={pack.price}
          details={details}
          packIncludes={[
            "6-hour yacht rental",
            "Personalized wedding decorations",
            "Complimentary champagne and cake",
          ]}
        />
      ))}
      {pack === "custom_pack&-1" && (
        <Pack
          details={details}
          name={"Custom Pack"}
          imgs={"/img/df.jpg"}
          editable
          description={"Customize your own pack"}
          services={[]}
          price={{ rate: 10000, discountRate: 9000, type: "negotiable" }}
        />
      )}
    </div>
  );
}

export default Package;

