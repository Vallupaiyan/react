import React, { useState } from "react";
import "../src/css/Contact.css";

// The exact registered address — used both for the map embed and the
// "open in Google Maps" link, so the pin lands on the right building.
const COMPANY_ADDRESS =
  "201/15, 2nd Floor, SSS Complex, Tiruchendur Main Road, Samathanapuram, Palayamkottai, Tirunelveli 627002";

// Web3Forms access key — get one free at web3forms.com, tied to the
// inbox that should receive these messages.
const WEB3FORMS_ACCESS_KEY = "93707e71-c641-4864-b425-c78cbe372dc4";

function buildMapsSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function MapSection() {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    COMPANY_ADDRESS
  )}&output=embed`;

  const fullSearchUrl = buildMapsSearchUrl(COMPANY_ADDRESS);

  return (
    <div className="map-card">
      <div className="map-frame-wrapper">
        <iframe
          className="map-frame"
          src={embedSrc}
          title="Profenaa Infotech location in Tirunelveli"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Transparent overlay: clicking anywhere on the map opens the
           real Google Maps search (with all 5 branch pins) in a new
           tab, instead of letting the user pan/zoom inside the iframe. */}

        <a
          className="map-overlay-link"
          href={fullSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Profenaa Infotech location in Google Maps"
        ></a>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phonenumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ sending: false, sent: false, error: null });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, sent: false, error: null });

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("name", form.name);
    formData.append("phonenumber", form.phonenumber);
    formData.append("email", form.email);
    formData.append("subject", form.subject);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus({ sending: false, sent: true, error: null });
        setForm({ name: "", phonenumber: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ sending: false, sent: false, error: "Something went wrong. Please try again." });
      }
    } catch (err) {
      console.error("Web3Forms error:", err);
      setStatus({ sending: false, sent: false, error: "Something went wrong. Please try again." });
    }
  };

  return (
    <>
      <section className="contact">
        {/* Left Content */}
        <div className="contact-info">
          <p className="tag">GET IN TOUCH</p>
          <h1>
            Let's Work <span>Together</span>
          </h1>
          <p className="description">
            Have a project, idea, or opportunity? Feel free to contact me. I
            would love to hear from you and discuss how we can work together.
          </p>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>profenaa.nellai@gmail.com</p>
          </div>
          <div className="info-box">
            <h3>📱 Phone</h3>
            <p>+91 88259 96495</p>
          </div>
          <div className="info-box">
            <h3>📍 Location</h3>
            <p> 201/15, 2nd Floor, SSS Complex <br/> 
            Tiruchendur Main Road,Samathanapuram Palayamkotai
             Tirunelveli-627002</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="tel"
                name="phonenumber"
                placeholder="Your Phone Number"
                value={form.phonenumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" disabled={status.sending}>
              {status.sending ? "Sending..." : "Send Message"}
            </button>

            {status.sent && <p className="form-success">Message sent successfully!</p>}
            {status.error && <p className="form-error">{status.error}</p>}
          </form>
        </div>
      </section>

      {/* Branch Locations Map */}
      <section className="branches-section">
        <MapSection />
      </section>
    </>
  );
}