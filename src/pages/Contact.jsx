import React, { useState } from "react";
import emailjs from "emailjs-com"; 
import "../components/styles/Contact.css"
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredTime: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, preferredTime, message } = formData;
    if (!name || !phone) {
      setStatus("Please fill in all required fields.");
      return;
    }
    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      preferred_time: formData.preferredTime,
      message: formData.message || "No message",
    };
    emailjs
      .send(
        "service_lwaukmh", 
        "template_u2hooha", 
        templateParams,
        "NbkN4OM23omF2CKKi"
      )
      .then(
        (response) => {
          console.log("Success:", response);
          setStatus("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error:", error);
          setStatus("Something went wrong. Please try again.");
        }
      );
    setFormData({ name: "", phone: "", preferredTime: "", message: "" });
  };

  return (
    <div className="contact-page-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <div className="info">
          <p><strong>Address:</strong> Dubai Marina ,Marina suits</p>
          <p><strong>Phone:</strong> + 971 55 593 0716</p>
          <p><strong>Email:</strong> goldenyatchrentals@gmail.com</p>
          <p><strong>Time:</strong> Sun - Sat: 8 AM - 12 PM</p>
        </div>
      </div>
      <div className="contact-form">
        <h2>Request a Call Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required />
          </div>
          <div className="form-group">
            <label htmlFor="preferredTime">Preferred Time:</label>
            <input
              type="time"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Optional message"
            ></textarea>
          </div>
           <button type="submit" className="ct-btn btn-primary">
            Submit Request
          </button>
        </form>
        {status && <p className="form-status">{status}</p>}
      </div>
    </div>
  );
};
export default ContactPage;

