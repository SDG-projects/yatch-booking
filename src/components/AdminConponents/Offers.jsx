import React, { useEffect, useState } from "react";
import { addOffer, deleteOffers, getOffers } from "../../data/Services";
import Image from "../utils/Image";

import "./adminOffers.css";
import ImageUpload from "../utils/ImageUpload";
function EditOffers() {
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({
    name: "",
    description: "",
    image: "",
    features: [],
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    getOffers().then(setOffers);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newOfferDetails = {
      ...newOffer,
      features: newOffer.features?.split(",") || [],
    };
    addOffer(newOfferDetails).then((newOffer) => {
      setOffers((prevOffers) => [...prevOffers, newOffer]);
    });
  };

  const handleDeleteOffer = (id) => {
    deleteOffers(id);
    setOffers((prevOffers) => prevOffers.filter((offer) => offer.id !== id));
  };

  //   const addNewOffer = () => {
  //     setOffers((prevOffers) => [
  //       ...prevOffers,
  //       {
  //         id: Date.now(),
  //         name: "",
  //         description: "",
  //         image: "",
  //         features: [],
  //         startTime: "",
  //         endTime: "",
  //       },
  //     ]);
  //   };

  return (
    <div className="offer-details">
      {offers.map((offer) => (
        <div key={offer.id}>
          <h3>{offer.name}</h3>
          <Image url={offer.image} alt={offer.name} width={200} />
          <p>{offer.description}</p>
          <ul className="features">
            {offer.features?.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <p>Start Time: {new Date(offer.startTime).toLocaleString()}</p>
          <p>End Time: {new Date(offer.endTime).toLocaleString()}</p>
          <button
            className="delete-btn"
            onClick={() => handleDeleteOffer(offer.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newOffer.name}
          onChange={(e) =>
            setNewOffer((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newOffer.description}
          onChange={(e) =>
            setNewOffer((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Features (comma separated)"
          value={newOffer.features}
          onChange={(e) =>
            setNewOffer((prevState) => ({
              ...prevState,
              features: e.target.value,
            }))
          }
        />
        <input
          type="datetime-local"
          placeholder="Start Time"
          value={newOffer.startTime}
          onChange={(e) =>
            setNewOffer((prevState) => ({
              ...prevState,
              startTime: e.target.value,
            }))
          }
        />
        <input
          type="datetime-local"
          placeholder="End Time"
          value={newOffer.endTime}
          onChange={(e) =>
            setNewOffer((prevState) => ({
              ...prevState,
              endTime: e.target.value,
            }))
          }
        />
        <ImageUpload
          urlToUpload={"Offers/offer-at-"}
          afterUpload={(uploadTask) => {
            setNewOffer((prevState) => ({
              ...prevState,
              image: uploadTask.snapshot.ref.fullPath,
            }));
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default EditOffers;
