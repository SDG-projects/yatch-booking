import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles/package.css";

import { useNavigate, useParams } from "react-router-dom";
import {
  getOwnerInfo,
  getPackages,
  getPackReviews,
  getServices,
} from "../data/Services";
import Image from "./utils/Image";
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
  // function genBookLink() {
  //   const template = `hello i am interst in the ${name} package with the following services:
  //   ${packServices.map((value) => value.name)}
  //   is that any negosiation to get best price ?
  //   `;
  //   console.log(template);
  // }
  const handleWhatsAppRedirect = (message) => {
    const phoneNumber = getOwnerInfo().Phone;

    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    const newWindow = window.open(whatsappUrl, "_blank");
    if (!newWindow) {
      alert(
        "Unable to open WhatsApp. Please enable pop-ups or copy this link: " +
          whatsappUrl
      );
    }
  };

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
          {/* <img
            src={imageUrl}
            draggable={false}
            alt={name}
            className="pack-image"
          /> */}
          <Image
            draggable={false}
            alt={name}
            className="pack-image"
            url={imgs.replace("/img/", "")}
          />
        </div>
        {details && (
          <div className="pack-info">
            <div className="infoOverlay"></div>
            {details && (
              <div className="pack-description">
                <p>{description}</p>
              </div>
            )}
            {packIncludes && (
              <div className="pack-Includes">
                <h1>Includes</h1>
                {packIncludes?.map((value, i) => {
                  return <p key={i}>{value}</p>;
                })}
              </div>
            )}

            {packServices.length > 0 && (
              <div className="pack-services">
                <h1>Services</h1>
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
            )}

            <div className="pack-price">
              <div
                className="pack-price-rate"
                style={
                  price?.discountRate && { textDecoration: "line-through" }
                }
              >
                {price?.rate}
              </div>
              {price?.discountRate && (
                <div className="pack-price-discount">{price?.discountRate}</div>
              )}
            </div>
            <div className="pack-action">
              <button
                className="pack-book-now btn"
                onClick={() =>
                  handleWhatsAppRedirect(`hello i am interst in the ${name} package with the following services:
                  ${packServices.map((value) => value.name)}
                  is that any negosiation to get best price ?
                  `)
                }
              >
                Book now
              </button>
              {filteredServices.length > 0 && editable && (
                <button
                  className="addServ-btn btn"
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
              {showServices && (
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
            </div>
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

function Package({ imgs, services, details }) {
  const nav = useNavigate();
  const { pack } = useParams();
  const [packages, setPackages] = useState([]);
  const [packageDis, setPackage] = useState({});
  const [packReviews, setPackReviews] = useState([]);
  // useEffect(() => {
  //   setPackages(getPackages());
  //   setPackage()
  // }, []);

  useEffect(() => {
    if (pack) {
      const packName = pack
        .toLowerCase()
        .replaceAll(" ", "_")
        .replaceAll("/", "-");

      // setPackages();
      setPackages([...getPackages(Number(packName.split("&")[1]))]);
      // console.log(packages);
      // const element = document.getElementById(elementId);
      // if (element) {
      //   element.scrollIntoView({ behavior: "smooth", block: "center" });
      // } else {
      //   nav("/packages");
      // }
    } // : nav("/packageNotFound");
    else {
      nav("/packages");
      // setPackages(getPackages());
    }
  }, [pack]);
  useEffect(() => {
    packages[0]?.id > 0 && setPackReviews(getPackReviews(packages[0]?.id));
    // console.log(packReviews);
  }, [packages]);

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
          services={pack.services ? pack.services : []}
          price={pack.price}
          details={details}
          packIncludes={pack.packIncludes}
        />
      ))}
      {pack == "custom_pack&-1" && (
        <Pack
          // key={"customPack"}
          details={details}
          name={"custom pack"}
          imgs={"/img/dsfs.jpg"}
          editable
          description={"customise your own pack"}
          services={[]}
          price
        />
      )}
      {/* <Pack>Custom pack</Pack> */}
      {/* <div className="feedBacks">
        <h2>user feedbacks</h2>
        {packReviews?.map((review) => (
          <Review review={review} style={{ maxWidth: "30%" }} />
        ))}
      </div> */}
    </div>
  );
}

export default Package;
