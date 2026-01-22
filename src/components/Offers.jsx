import React, { useEffect, useState } from "react";
import { getOffers } from "../data/Services";
import "./styles/offer.css";
import Image from "./utils/Image";

function Offer({ offer }) {
  const [remainTime, setRemainTime] = useState(null);

  useEffect(() => {
    if (!offer?.endTime) return;

    const updateRemainingTime = () => {
      const currentTime = new Date();
      const endTime = new Date(offer.endTime);
      const timeDiff = endTime - currentTime;

      if (timeDiff <= 0) {
        setRemainTime(null);
        return;
      }

      setRemainTime({
        hours: Math.floor(timeDiff / (1000 * 60 * 60)),
        minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
      });
    };

    updateRemainingTime(); 
    const timeInterval = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(timeInterval); 
  }, [offer?.endTime]);

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `Hello, I am interested in the offer: ${offer.name}. Please provide more details.`
    );
    window.open(`https://wa.me/971555930716?text=${message}`, "_blank");
  };

  return (
    <div className="offer">
      <div className="offerName">{offer.name}</div>
      <div>
        <Image className="offerImg" url={offer.image} alt={offer.name} />
      </div>
      <div className="offerDescription">{offer.description}</div>
      <ul className="offerFeatures">
        {offer.features?.length > 0 ? (
          offer.features.map((feature, i) => <li key={i}>{feature}</li>)
        ) : (
          <li>No features available</li>
        )}
      </ul>
      <div className="offerTime">
        {remainTime ? (
          <>
            <span className="rmHrs">
              {remainTime.hours < 10 && "0"}
              {remainTime.hours}
            </span>
            <span className="rmMins">
              {remainTime.minutes < 10 && "0"}
              {remainTime.minutes}
            </span>
            <span className="rmSec">
              {remainTime.seconds < 10 && "0"}
              {remainTime.seconds}
            </span>
          </>
        ) : (
          "Time's up!"
        )}
      </div>
      <div className="offerCTC">
        <button className="bookNowBtn" onClick={handleWhatsAppRedirect}>
          Book Now
        </button>
      </div>
    </div>
  );
}

function Offers() {
  const [offers, setOffers] = useState([]);
  const [offerOpen, setOfferOpen] = useState(false);

  useEffect(() => {
    getOffers()
      .then((data) => {
        console.log("Fetched Offers:", data); 
        setOffers(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Error fetching offers:", error);
        setOffers([]); 
      });
  }, []);

  return (
    <>
      <button className="offerBtn" onClick={() => setOfferOpen((prev) => !prev)}>
        {offerOpen ? "Close Offers" : "View Offers"}
      </button>

      {offerOpen && (
        <div className="offerContainer">
          <button className="offerCloseBtn" onClick={() => setOfferOpen(false)}>
            X
          </button>
          <div className="offerSection">
            <div className="offers">
              {offers.length > 0 ? (
                offers.map((offer, i) => <Offer key={i} offer={offer} />)
              ) : (
                <p>N Offers available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Offers;
