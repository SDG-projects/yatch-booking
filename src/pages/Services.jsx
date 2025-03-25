import React, { Suspense, useContext, useEffect, useState } from "react";
import "../components/styles/service.css";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "/src/data/firebase";
import Loading from "../components/Loading";
import { DataContext } from "../data/context";

const db = getFirestore(app);

export const serviceWhatsAppRedirect = (service) => {
  const phoneNumber = "971555930716";
  const message = `Hi, I am interested in booking (${service.name}) in your Golden Yacht Rentals.`;
  const encodedMessage = encodeURIComponent(message);
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const whatsappUrl = isMobile
    ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};
function Service({ serviceData }) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="serviceCon">
        <div className="serviceContent">
          <div className="serviceImgCon">
            {serviceData.img && (
              // <Suspense fallback={<Loading />}>
              <img
                src={serviceData.img}
                className="serviceImg"
                alt={serviceData.name}
                loading="lazy"
              />
              // </Suspense>
            )}
            {serviceData.img2 && (
              // <Suspense fallback={<Loading />}>
              <img
                src={serviceData.img2}
                className="serviceImg"
                alt={serviceData.name}
                loading="lazy"
              />
              // </Suspense>
            )}
          </div>
          <div className="serviceDet">
            <h2>{serviceData.name}</h2>
            <h3>{serviceData.heading || "No Heading Available"}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  serviceData.description?.replace(/\n/g, "<br />") ||
                  "No Description",
              }}
            />
            <h3>We Offer:</h3>
            <p>{serviceData.weoffer1 || "Not Available"}</p>
            <p>{serviceData.weoffer2 || "Not Available"}</p>
            <p>{serviceData.weoffer3 || "Not Available"}</p>
            <p>{serviceData.weoffer4 || "Not Available"}</p>
            <h3>Rating: {serviceData.rating || "No Rating"}</h3>
            <button
              className="bookNowBtn"
              onClick={() => serviceWhatsAppRedirect(serviceData)}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

function Services() {
  const { services } = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  const { service } = useParams();
  const serviceData = services.find((serv) => serv.name == service);
  console.log(serviceData);
  // ✅ Extract service name without "&2" or extra parts
  // const cleanServiceName = service?.split("&")[0].trim();

  // useEffect(() => {
  //   const fetchService = async () => {
  //     if (!cleanServiceName) return;

  //     try {
  //       setLoading(true);
  //       const q = query(
  //         collection(db, "services"),
  //         where("name", "==", `${cleanServiceName}`)
  //       );
  //       const querySnapshot = await getDocs(q);

  //       if (!querySnapshot.empty) {
  //         // ✅ Fetch the first matching document correctly
  //         const fetchedData = querySnapshot.docs.map((doc) => doc.data());
  //         setServiceData(fetchedData[0]); // Get the first matching service
  //       } else {
  //         console.error("Service not found in Firestore");
  //         setServiceData(null);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching service:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchService();
  // }, [cleanServiceName]);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="servicesCon">
      <h1 className="service-h1">Our Services</h1>
      <p className="service-p">Explore the exclusive services we offer</p>
      <hr className="styled-line" />
      {service ? (
        serviceData ? (
          // <Suspense fallback={<Loading />}>
          //   <div className="serviceCon">
          //     <div className="serviceContent">
          //       <div className="serviceImgCon">
          //         {serviceData.img && (
          //           // <Suspense fallback={<Loading />}>
          //           <img
          //             src={serviceData.img}
          //             className="serviceImg"
          //             alt={serviceData.name}
          //             loading="lazy"
          //           />
          //           // </Suspense>
          //         )}
          //         {serviceData.img2 && (
          //           // <Suspense fallback={<Loading />}>
          //           <img
          //             src={serviceData.img2}
          //             className="serviceImg"
          //             alt={serviceData.name}
          //             loading="lazy"
          //           />
          //           // </Suspense>
          //         )}
          //       </div>
          //       <div className="serviceDet">
          //         <h2>{serviceData.name}</h2>
          //         <h3>{serviceData.heading || "No Heading Available"}</h3>
          //         <div
          //           dangerouslySetInnerHTML={{
          //             __html:
          //               serviceData.description?.replace(/\n/g, "<br />") ||
          //               "No Description",
          //           }}
          //         />
          //         <h3>We Offer:</h3>
          //         <p>{serviceData.weoffer1 || "Not Available"}</p>
          //         <p>{serviceData.weoffer2 || "Not Available"}</p>
          //         <p>{serviceData.weoffer3 || "Not Available"}</p>
          //         <p>{serviceData.weoffer4 || "Not Available"}</p>
          //         <h3>Rating: {serviceData.rating || "No Rating"}</h3>
          //         <button
          //           className="bookNowBtn"
          //           onClick={() => serviceWhatsAppRedirect(serviceData)}
          //         >
          //           Book Now
          //         </button>
          //       </div>
          //     </div>
          //   </div>
          // </Suspense>
          <Service serviceData={serviceData} />
        ) : (
          <p style={{ color: "red", fontSize: "20px" }}>Service not found</p>
        )
      ) : (
        services.map((service, i) => <Service key={i} serviceData={service} />)
      )}
    </div>
  );
}

export default Services;
