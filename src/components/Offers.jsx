import React, { useEffect, useState } from "react";
import { getOffers } from "../data/Services";
import "./styles/offer.css";
import { CiTextAlignCenter } from "react-icons/ci";
import Image from "./utils/Image";

function Offer({ offer }) {
  const [remainTime, setRemainTime] = useState(null);

  useEffect(() => {
    if (!offer || !offer.endTime) return; // Prevent errors if offer is undefined

    const timeInterval = setInterval(() => {
      const currentTime = new Date();
      const endTime = new Date(offer.endTime);
      const timeDiff = endTime.getTime() - currentTime.getTime();

      if (timeDiff <= 0) {
        setRemainTime(null);
        clearInterval(timeInterval);
      } else {
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setRemainTime({ hours, minutes, seconds });
      }
    }, 1000);

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
        {offer.features && offer.features.length > 0 ? (
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
              {remainTime.seconds < 10 && "0"} {remainTime.seconds}
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
  const [offers, setOffers] = useState([]); // Ensure offers is always an array
  const [offerOpen, setOfferOpen] = useState(false);

  useEffect(() => {
    getOffers()
      .then((data) => {
        setOffers(data || []); // Ensure we always store an array
      })
      .catch((error) => {
        console.error("Error fetching offers:", error);
        setOffers([]); // Set an empty array on error
      });
  }, []); // Run only on mount

  return (
    <>
      {/* Offer Button (Always Visible) */}
      <button className="offerBtn" onClick={() => setOfferOpen((prev) => !prev)}>
        {offerOpen ? "Close Offers" : "View Offers"}
      </button>

      {/* Popup Container */}
      {offerOpen && (
        <div className="offerContainer">
          <button className="offerCloseBtn" onClick={() => setOfferOpen(false)}>
            X
          </button>
          <div className="offerSection">
            <div className="offers">
              {Array.isArray(offers) && offers.length > 0 ? (
                offers.map((offer, i) => <Offer key={i} offer={offer} />)
              ) : (
                <p>No offers available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Offers;
