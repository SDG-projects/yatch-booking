import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles/package.css";
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
  children,
  ...props
}) {
  return (
    <div className="pack-container">
      <div className="pack-image">
        <img src={imgs} alt="" />
        <h1 className="pack-title">Pack: {name}</h1>
      </div>
      {details && (
        <div className="pack-description">
          <p>{description}</p>
        </div>
      )}
      <div className="pack-services">
        {services.map((service, i) => (
          <div key={i} className="pack-service">
            {details ? (
              <details>
                <summary>{service.name}</summary>
                <div>
                  <p>{service.description}</p>
                </div>
                <div>
                  {service.price.discountRate ? (
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
                </div>
              </details>
            ) : (
              <div>{service.name}</div>
            )}
          </div>
        ))}
      </div>
      <div className="pack-price">
        <div className="pack-price-rate">{price.rate}</div>
        {price.discountRate && (
          <div className="pack-price-discount">{price.discountRate}</div>
        )}
      </div>
      <div>
        <button className="pack-book-now">Book now</button>
      </div>
      {children}
    </div>
  );
}

function Package({ imgs, services, details }) {
  return (
    <div className="packages">
      Package
      <Pack
        details={details}
        name={"Birthday Pack"}
        imgs={"/img/sdf.jpg"}
        description={
          <div>
            Birthday pack so enought to celebrate your Birthday its inculdes the
            followings :
          </div>
        }
        services={[
          {
            name: "DJ",
            description: "the private DJ will alote to your birthday party ",
            info: { Name: "Ditto", rating: 3, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
          {
            name: "Food",
            description:
              "the private Chef will alote to prepare foods for your party ",
            info: { Name: "Dote", rating: 4, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
          {
            name: "Decuration",
            description:
              "Designer and planners will decurate our Yacht to your party",
            info: { Name: "Yacht Designers", rating: 4, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
        ]}
        price={{ rate: 10000, discountRate: 9000, type: "negosiable" }}
      />
      <Pack
        details={details}
        name={"Birthday Pack"}
        imgs={"/img/sdf.jpg"}
        description={
          <div>
            Birthday pack so enought to celebrate your Birthday its inculdes the
            followings :
          </div>
        }
        services={[
          {
            name: "DJ",
            description: "the private DJ will alote to your birthday party ",
            info: { Name: "Ditto", rating: 3, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
          {
            name: "Food",
            description:
              "the private Chef will alote to prepare foods for your party ",
            info: { Name: "Dote", rating: 4, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
          {
            name: "Decuration",
            description:
              "Designer and planners will decurate our Yacht to your party",
            info: { Name: "Yacht Designers", rating: 4, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
        ]}
        price={{ rate: 10000, discountRate: 9000, type: "negosiable" }}
      />
      <Pack
        details={details}
        name={"Birthday Pack"}
        imgs={"/img/sdf.jpg"}
        description={
          <div>
            Birthday pack so enought to celebrate your Birthday its inculdes the
            followings :
          </div>
        }
        services={[
          {
            name: "DJ",
            description: "the private DJ will alote to your birthday party ",
            info: { Name: "Ditto", rating: 3, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
          {
            name: "Food",
            description:
              "the private Chef will alote to prepare foods for your party ",
            info: { Name: "Dote", rating: 4, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
          {
            name: "Decuration",
            description:
              "Designer and planners will decurate our Yacht to your party",
            info: { Name: "Yacht Designers", rating: 4, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
        ]}
        price={{ rate: 10000, discountRate: 9000, type: "negosiable" }}
      />
      <Pack
        details={details}
        name={"Birthday Pack"}
        imgs={"/img/sdf.jpg"}
        description={
          <div>
            Birthday pack so enought to celebrate your Birthday its inculdes the
            followings :
          </div>
        }
        services={[
          {
            name: "DJ",
            description: "the private DJ will alote to your birthday party ",
            info: { Name: "Ditto", rating: 3, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
          {
            name: "Food",
            description:
              "the private Chef will alote to prepare foods for your party ",
            info: { Name: "Dote", rating: 4, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
          {
            name: "Decuration",
            description:
              "Designer and planners will decurate our Yacht to your party",
            info: { Name: "Yacht Designers", rating: 4, price: 1000 },
            timing: 2,
            price: { rate: 3000, discountRate: 2000, type: "negosiable" },
          },
        ]}
        price={{ rate: 10000, discountRate: 9000, type: "negosiable" }}
      />
    </div>
  );
}

export default Package;
