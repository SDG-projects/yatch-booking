import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPackages, getServices } from "../data/Services";
import "./styles/package.css";

function Pack({
  name,
  imgs,
  description,
  services,
  price,
  details,
  editable,
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
    setPackServices(packServices.filter((v) => !(v.name == serviceName)));
  }

  function genBookLink() {
    const template = `Hello, I am interested in the ${name} package with the following services: 
    ${packServices.map((value) => value.name)}. 
    Is there any possibility to negotiate the best price?`;
  }

  return (
    <section className="package-card">
      <div className="package-card-header">
        <h2 className="package-name">{name}</h2>
        <img src={imgs} alt="Package" className="package-image" />
      </div>
      <div className="package-card-body">
        {details && (
          <div className="package-description">
            <p>{description}</p>
          </div>
        )}
        <div className="service-list">
          {packServices.map((service, i) => (
            <div key={i} className="service-item">
              <p>{service.name}</p>
              {editable && (
                <button
                  className="remove-service-btn"
                  onClick={() => {
                    removeService(service.name);
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          {packServices.length <= 0 && "No services added"}
        </div>
        <div className="price-section">
          <div className="price-rate">{price?.rate}</div>
          {price?.discountRate && (
            <div className="price-discount">{price?.discountRate}</div>
          )}
        </div>
        <button className="book-now-btn" onClick={() => genBookLink()}>
          Book Now
        </button>
      </div>
      {children}
      {filteredServices.length > 0 && editable && (
        <div className="add-service-btn-container">
          <button
            className="add-service-btn"
            onClick={() => setShowServices(!showServices)}
          >
            {showServices ? "Close Services" : "Add Services"}
          </button>
        </div>
      )}
      {showServices && (
        <div className="service-dropdown">
          <ul>
            {filteredServices.map((value, i) => (
              <li
                key={i}
                onClick={() => {
                  setPackServices([...packServices, value]);
                }}
              >
                {value.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function Package() {
  const { pack } = useParams();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setPackages(getPackages());
  }, []);

  return (
    <div className="package-container">
      {packages?.map((pack) => (
        <Pack
          key={pack.id}
          name={pack.name}
          imgs={pack.imgs}
          description={pack.description}
          services={pack.services}
          price={pack.price}
          details
        />
      ))}
      <Pack
        details={true}
        name={"Custom Pack"}
        imgs={"/img/df.jpg"}
        editable
        description={"Create and customize your own pack!"}
        services={[]}
        price={{ rate: 10000, discountRate: 9000, type: "negotiable" }}
      />
    </div>
  );
}

export default Package;
