import React, { useEffect, useState } from "react";
import { getPackages, getServices } from "../data/Services";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/package.css";

function Pack({ name, description,detail1,detail2,detail3,detail4, imgs, editable, services, packIncludes, addServiceButtonClick, removeService }) {
  return (
    <section className="package" id={name.toLowerCase().trim().replaceAll(" ", "_").replaceAll("/", "-")}>
      <div className="full-page-background" style={{ backgroundImage: `url(${imgs})` }}>
      <div className="background-overlay"></div>
        <h1 className="pack-title">{name}</h1>
      </div>
      
      <div className="pack-container">
        <div className="pack-left-column">
          
          <img src={imgs} alt={name} width={500} height={300} />
      
        </div>
        <div className="pack-left-column">
          <img src={imgs} alt={name} width={500} height={300} />
        </div>

        <div className="pack-right-column">
          <div className="pack-info">
            <div className="pack-description">
              <p>{description}</p>
              <h3>Package Includes:</h3>
              <p>{detail1}</p>
              <p>{detail2}</p>
              <p>{detail3}</p>
              <p>{detail4}</p>
            </div>
            {editable && (
              <div className="pack-includes">
                <ul>
                  {packIncludes?.map((include, i) => (
                    <li key={i}>{include}</li>
                  ))}
                  {services?.map((service, i) => (
                    <li key={`service-${i}`} className="added-service">
                      <span>{service.name}</span>
                      <button
                        className="remove-service-btn"
                        onClick={() => removeService(service.name)}
                      >
                        ✖
                      </button>
                    </li>
                  ))}
                </ul>
                {/* Button to trigger Add Service - ONLY for Custom Pack */}
                <button className="addServ-btn" onClick={addServiceButtonClick}>
                  <i>+</i> Add Service
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Package({ details }) {
  const nav = useNavigate();
  const { pack } = useParams();
  const [packages, setPackages] = useState([]);
  const [showServiceOverlay, setShowServiceOverlay] = useState(false);
  const [customPackServices, setCustomPackServices] = useState([]); // Store selected services for Custom Pack
  const allServices = getServices(); // Get all available services

  useEffect(() => {
    if (pack) {
      const packName = pack
        .toLowerCase()
        .replaceAll(" ", "_")
        .replaceAll("/", "-");
      const selectedPackage = getPackages(Number(packName.split("&")[1]));
      setPackages(selectedPackage);
    } else {
      nav("/packages");
    }
  }, [pack, nav]);

  // Open the service overlay when "Add Service" is clicked
  const openAddServiceOverlay = () => {
    setShowServiceOverlay(true);
  };

  // Add a service to the Custom Pack
  const addServiceToCustomPack = (service) => {
    // Avoid duplicate services
    if (!customPackServices.some((s) => s.name === service.name)) {
      setCustomPackServices((prevServices) => [...prevServices, service]);
    }
  };

  // Remove a service from the Custom Pack
  const removeServiceFromCustomPack = (serviceName) => {
    setCustomPackServices((prevServices) =>
      prevServices.filter((service) => service.name !== serviceName)
    );
  };

  return (
    <div className="packages">
      {packages?.map((pack) => (
        <Pack
          key={pack.id}
          name={pack.name}
          imgs={pack.imgs}
          description={pack.description}
          detail1={pack.detail1}
          detail2={pack.detail2}
          detail3={pack.detail3}
          detail4={pack.detail4}
          editable={false} // No "Add Service" for standard packages
          services={pack.services}
          packIncludes={pack.packIncludes}
        />
      ))}

      {/* Custom Pack */}
      {pack === "custom_pack&-1" && (
        <Pack
          details={details}
          name={"Custom Pack"}
          imgs={"/img/df.jpg"}
          editable={true} // Enable "Add Service" for the Custom Pack only
          description={"Customize your own pack"}
          services={customPackServices} // Use custom services for the Custom Pack
          packIncludes={[]}
          addServiceButtonClick={openAddServiceOverlay} // Enable the "Add Service" button
          removeService={removeServiceFromCustomPack} // Enable removing services
        />
      )}

      {/* Service Overlay for Adding Services */}
      {showServiceOverlay && (
        <div className="service-overlay">
          <button className="close-overlay" onClick={() => setShowServiceOverlay(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ul className="service-list">
            {allServices.map((service, i) => (
              <li
                key={i}
                className={customPackServices.some((s) => s.name === service.name) ? "service-active" : ""}
                onClick={() => addServiceToCustomPack(service)}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Package;

