import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles/package.css";
import { useNavigate, useParams } from "react-router-dom";
import { getPackages, getServices } from "../data/Services";
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
    // console.log(template);
  }
  return (
    <section
      className="package"
      id={name.toLowerCase().trim().replaceAll(" ", "_").replaceAll("/", "-")}
    >
      {" "}
      <div className="pack-container">
        <h1 className="pack-title">Pack: {name}</h1>
        <div className="pack-image">
          <img src={imgs} alt="" />
        </div>
        <div className="pack-info">
          {details && (
            <div className="pack-description">
              <p>{description}</p>
            </div>
          )}
          <div className="pack-services">
            {packServices.map((service, i) => (
              <div key={i} className="pack-service">
                {details ? (
                  <>
                    {" "}
                    <details>
                      <summary>{service.name}</summary>
                      <div>
                        <p>{service.description}</p>
                      </div>
                      {/* <div>
               {service.price && service.price.discountRate ? (
                 <div>
                   <span className="pack-service-discount">
                     {service.price.rate}
                   </span>
                   <span className="pack-service-price">
                     {service.price.discountRate}
                   </span>
                 </div>
               ) : (
                 <span className="pack-service-price">
                   {service.price.rate}
                 </span>
               )}
             </div> */}
                    </details>
                    {editable && (
                      <button
                        className="cancelBtn"
                        onClick={() => {
                          removeService(service.name);
                        }}
                      >
                        x
                      </button>
                    )}
                  </>
                ) : (
                  <div>{service.name}</div>
                )}
              </div>
            ))}
            {packServices.length <= 0 && "empty"}
          </div>
          <div className="pack-price">
            <div
              className="pack-price-rate"
              style={price.discountRate && { textDecoration: "line-through" }}
            >
              {price?.rate}
            </div>
            {price.discountRate && (
              <div className="pack-price-discount">{price?.discountRate}</div>
            )}
          </div>
          <div className="pack-action">
            <button className="pack-book-now btn" onClick={() => genBookLink()}>
              Book now
            </button>{" "}
            {filteredServices.length > 0 && editable && (
              <button
                className="addServ-btn"
                onClick={() => {
                  setShowServices(!showServices);
                }}
              >
                {showServices ? (
                  "close"
                ) : (
                  <span>
                    <i>+</i> Service
                  </span>
                )}
              </button>
            )}
          </div>
        </div>

        {children}
      </div>
      {showServices && filteredServices.length > 0 && (
        <div className="remainServ">
          <button
            className="cancelBtn"
            onClick={() => {
              setShowServices(!showServices);
            }}
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
          <ul>
            {filteredServices.map((value, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    setPackServices([...packServices, value]);
                  }}
                >
                  {value.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}

function Package({ imgs, services, details }) {
  const nav = useNavigate();
  const { pack } = useParams();
  const [packages, setPackages] = useState();
  useEffect(() => {
    setPackages(getPackages());
  }, []);
  useEffect(() => {
    if (pack) {
      const elementId = pack
        .toLowerCase()
        .replaceAll(" ", "_")
        .replaceAll("/", "-");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } // : nav("/packageNotFound");
  });

  return (
    <div className="packages">
      {/* <Pack
        details={details}
        name={"Birthday Pack"}
        imgs={"/img/yacht.png"}
        description={
          <div>
            Birthday pack so enought to celebrate your Birthday its inculdes the
            followings :
          </div>
        }
        services={[
          {
            name: "Private DJ",
            description: "the private DJ will alote to your birthday party ",
            info: { Name: "Ditto", rating: 3, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
          {
            name: "Romantic Private Dinner",
            description:
              "the private Chef will alote to prepare foods for your party ",
            info: { Name: "Dote", rating: 4, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
          {
            name: "Roses/Flower decorations",
            description:
              "Designer and planners will decurate our Yacht to your party",
            info: { Name: "Yacht Designers", rating: 4, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
        ]}
        price={{ rate: 10000, discountRate: 9000, type: "negosiable" }}
      /> */}
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
        details={details}
        name={"custom pack"}
        imgs={"/img/df.jpg"}
        editable
        description={"customise your own pack"}
        services={[]}
        price
      />
      {/* <Pack>Custom pack</Pack> */}
    </div>
  );
}

export default Package;
