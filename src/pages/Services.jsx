import React, { Suspense, useEffect, useState } from "react";
import "../components/styles/service.css";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "/src/data/firebase"; // Adjust the import based on your project structure
import Loading from "../components/Loading";

const db = getFirestore(app);

export const serviceWhatsAppRedirect = (service) => {
  const phoneNumber = "971555930716";
  const message = `Hi, I am interested in booking (${service.name}) in your Golden Yacht Rentals.`;
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

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { service } = useParams();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const servicesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (service) {
          const filteredServices = servicesData.filter(
            (s) => s.name.toLowerCase().replaceAll(" ", "_") === service
          );
          setServices(filteredServices);
        } else {
          setServices(servicesData);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [service]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="servicesCon">
      <h1 className="service-h1">Our Services</h1>
      <p className="service-p">Explore the exclusive services we offer</p>
      <hr className="styled-line" />
      
      {services.map((service, index) => (
        <Suspense key={index} fallback={<Loading />}>
          <div
            key={index}
            id={service.name.toLowerCase().replaceAll(" ", "_")}
            className="serviceCon"
          >
            <div className="serviceContent">
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
                <h3>Rating: {service.rating}</h3>
                <button
                  className="bookNowBtn"
                  onClick={() => serviceWhatsAppRedirect(service)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </Suspense>
      ))}
    </div>
  );
}

export default Services;
