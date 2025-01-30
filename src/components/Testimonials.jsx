import React, { useEffect, useState } from "react";
import { getReviews } from "../data/Services";
import "./styles/testimonials.css";
export function Review({ review, ...props }) {
  return (
    <div className="review" {...props}>
      <div className="imgReview">
        {review?.reviewImgs?.map((url) => (
          <img src={url} alt="Review Image" />
        ))}
      </div>
      <div className="txtReview">{review?.reviewText}</div>
      <div className="ratings">
        {review?.ratings} {review?.ratings > 1 ? "stars" : "star"}
      </div>
      <div className="userInfo">{review?.userName}</div>
    </div>
  );
}

function Testimonials() {
  const [feedbacks, setFeedbacks] = useState();
  useEffect(() => {
    setFeedbacks(getReviews());
  });
  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="reviews">
        {feedbacks?.map((re, i) => (
          <Review review={re} style={{ "--position": i + 1 }} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
