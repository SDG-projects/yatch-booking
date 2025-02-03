import React, { useEffect, useState } from "react";
import { getOffers } from "../data/Services";
import "./styles/offer.css";
import { CiTextAlignCenter } from "react-icons/ci";

function Offer({ offer }) {
  const [remainTime, setRemainTime] = useState(null);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const currentTime = new Date();
      const endTime = offer.endTime;
      const timeDiff = endTime.getTime() - currentTime.getTime();

      if (timeDiff <= 0) {
        setRemainTime(null);
      } else {
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setRemainTime({ hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [offer.endTime]);

  return (
    offer.endTime >= new Date() &&
    offer.startTime <= new Date() && (
      <div className="offer">
        <div className="offerName">{offer.name}</div>
       <div>
          <img className="offerImg" src={offer.images[0]} alt={offer.name} />
        </div>
        <div className="offerDescription">{offer.description}</div>
        <div className="offerFeatures">
          {offer.features.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </div>
        <div className="offerTime">
          {remainTime ? (
            <>
              <span className="rmHrs">
                {remainTime.hours < 10 && "0"}
                {remainTime.hours}{" "}
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
          <button>Book Now</button>
        </div>
      </div>
    )
  );
}

function Offers() {
  const offers = getOffers();
  const [offerOpen, setOfferOpen] = useState(false);

  return (
    <>
      {/* Offer Button (Always Visible) */}
      <button
        className="offerBtn"
        onClick={() => setOfferOpen((prev) => !prev)}
      >
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
              {offers.map((offer, i) => (
                <Offer key={i} offer={offer} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Offers;
