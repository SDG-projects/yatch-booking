import React, { useEffect, useState } from "react";
import { getPackages, getServices } from "../data/Services";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/package.css";

// import { useNavigate, useParams } from "react-router-dom";
// import { getPackages, getPackReviews, getServices } from "../data/Services";
// import { Review } from "./Testimonials";
// function Pack({
//   name,
//   imgs,
//   description,
//   services,
//   price,
//   details,
//   children,
//   ...probs
// }) {
//   return (
//     <div>
//       <h1> Pack :{name}</h1>
//       <div>
//         <img src={imgs} alt="" />
//       </div>
//       {details && <div>{description}</div>}
//       <div>
//         {services.map((service, i) => {
//           return details ? (
//             <details>
//               <summary>{service.name}</summary>
//               <div>{service.description}</div>
//               <div>
//                 <span
//                   style={{
//                     textDecoration:
//                       service?.price.discountRate && "line-through",
//                   }}
//                 >
//                   {service?.price.rate}
//                 </span>
//                 {service?.price?.discountRate}
//               </div>
//             </details>
//           ) : (
//             <div>{service.name}</div>
//           );
//         })}
//       </div>
//       <div></div>
//       <div>
//         {" "}
//         <div>
//           <span
//             style={{
//               textDecoration: price.discountRate && "line-through",
//             }}
//           >
//             {price.rate}
//           </span>
//           {price?.discountRate}
//         </div>
//         <div>Book now</div>
//       </div>
//       {children}
//     </div>
//   );
// }
function Pack({
  name,
  imgs,
  description,
  services,
  packIncludes,
  price,
  details,
  editable,
  children,
  ...props
}) {
  // const ourServices = [
  //   {
  //     name: "Romantic Private Dinner",
  //     description:
  //       "the private Chef will alote to prepare foods for your party ",
  //     info: { Name: "Dote", rating: 4, price: 1000 },
  //     timing: 2,
  //     price: { rate: 3000, discountRate: 2000, type: "negosiable" },
  //   },
  //   {
  //     name: "Roses/Flower decorations",
  //     description:
  //       "Designer and planners will decurate our Yacht to your party",
  //     info: { Name: "Yacht Designers", rating: 4, price: 1000 },
  //     timing: 2,
  //     price: { rate: 3000, discountRate: 2000, type: "negosiable" },
  //   },
  //   {
  //     name: "Private chef",
  //     description:
  //       "the private Chef will alote to prepare foods for your party ",
  //     info: { Name: "Yacht chef", rating: 4, price: 1000 },
  //     timing: 2,
  //     price: { rate: 3000, discountRate: 2000, type: "negosiable" },
  //   },
  //   {
  //     name: "Yacht Catering",
  //     description:
  //       "the private catering will alote to prepare foods for your party ",
  //     info: { Name: "Yacht catering", rating: 4, price: 1000 },
  //     timing: 2,
  //     price: { rate: 3000, discountRate: 2000, type: "negosiable" },
  //   },
  //   {
  //     name: "Live BBQ with private chef",
  //     description:
  //       "the private Chef will alote to prepare foods for your party ",
  //     info: { Name: "Yacht chef", rating: 4, price: 1000 },
  //     timing: 2,
  //     price: { rate: 3000, discountRate: 2000, type: "negosiable" },
  //   },

  //   // "Private Fishing",
  //   // "Luxury video and photoshoot",
  //   // "Private Artist Singer",
  //   // "Private Saxophone Artist",
  //   // "Private Dancers",
  //   // "Private Bartender",
  //   // "Private Magician",
  //   // "Private Professional Massage Therapists",
  //   // "Private Tour Guide",
  //   // "Private Hostesses",
  //   // "Private Waiters",
  //   // "Professional Hospitality Crew",
  //   // "Live Seafood BBQ and Private Chef",
  //   // "Sushi Menus and a Private Chef",
  //   // "Vegetarian Menus Crafted by a Private Chef",
  //   // "Premium Alcoholic Drinks",
  //   // "Exclusive Champagnes",
  //   // "Open Bar",
  //   // "Yacht Decorations",
  //   // "Birthday Decorations",
  //   // "Proposal and Anniversary Decorations",
  //   // "VIP Transport",
  // ];
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
    // console.log(packServices);
  }, [packServices]);

  // console.log(filteredServices);
  function removeService(serviceName) {
    // const alterPack=packServices.filter
    setPackServices(packServices.filter((v) => !(v.name == serviceName)));
  }
  function genBookLink() {
    const template = `hello i am interst in the ${name} package with the following services:
    ${packServices.map((value) => value.name)}
    is that any negosiation to get best price ?
    `;
    console.log(template);
  }
  return (
    <section
      className="package"
      id={name.toLowerCase().trim().replaceAll(" ", "_").replaceAll("/", "-")}
    >
      {" "}
      <div className="pack-container">
        <div className="pack-hero">
          <h1
            className="pack-title"
            // style={{ backgroundImage: `url(${imgs}` }}
          >
            {name}
          </h1>
          <img src={imgs} alt={name} className="pack-image" />
        </div>
        {details && (
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
        )}
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
          services={pack.services ? pack.services : []}
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
          <button
            className="close-overlay"
            onClick={() => setShowServiceOverlay(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ul className="service-list">
            {allServices.map((service, i) => (
              <li
                key={i}
                className={
                  customPackServices.some((s) => s.name === service.name)
                    ? "service-active"
                    : ""
                }
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
