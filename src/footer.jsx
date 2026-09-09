import React from "react";
import "../src/css//footer.css";
import logo from "../src/assets/plogo2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Footer() {
  return (
    <footer className="pf-footer">
      <div className="pf-container">

        {/* Column 1: Logo + Company Name + Short Text */}
        <div className="pf-footer-col">
          <img
             src={logo} alt="Profenaa Infotech" className="pf-logo" 
          />
          <p className="pf-short-about">
            We deliver high-quality IT consulting, software development and digital transformation solutions.
          </p>
        </div>

        {/* Column 2: Main Links */}
        <div className="pf-footer-col">
          <h4>Main Links</h4>
          <ul>
            <li>
              <a href="./">
                <i className="fa-solid fa-chevron-right"></i> Home
              </a>
            </li>

             <li>
              <a href="./About">
                <i className="fa-solid fa-chevron-right"></i> About
              </a>
            </li>
            <li>
              <a href="./careers">
                <i className="fa-solid fa-chevron-right"></i> Careers
              </a>
            </li>
            <li>
              <a href="./contact-us.html">
                <i className="fa-solid fa-chevron-right"></i> Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="pf-footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="./Appllicationdevelopment">
                <i className="fa-solid fa-chevron-right"></i> Application Development
              </a>
            </li>
            <li>
              <a href="./Mobileappdevelopment">
                <i className="fa-solid fa-chevron-right"></i> Mobile App Development
              </a>
            </li>
            <li>
              <a href="./ecommers">
                <i className="fa-solid fa-chevron-right"></i> Web Development
              </a>
            </li>
            <li>
              <a href="./Softwaretesting">
                <i className="fa-solid fa-chevron-right"></i> Software Testing
              </a>
            </li>
            <li>
              <a href="./Seoservices">
                <i className="fa-solid fa-chevron-right"></i> Digital Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Industries */}
        <div className="pf-footer-col">
          <h4>Industries</h4>
          <ul>
            <li>
              <a href="./Industriesoverview">
                <i className="fa-solid fa-chevron-right"></i> Healthcare
              </a>
            </li>
            <li>
              <a href="./Industriesoverview">
                <i className="fa-solid fa-chevron-right"></i> Education
              </a>
            </li>
            <li>
              <a href="./Industriesoverview">
                <i className="fa-solid fa-chevron-right"></i> Manufacturing
              </a>
            </li>
            <li>
                <a href="./Industriesoverview">
                <i className="fa-solid fa-chevron-right"></i> Finance
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Contact */}
        <div className="pf-footer-col pf-contact-col">
          <h4>Contact</h4>

          <p className="pf-contact">
            <i className="fa-solid fa-phone"></i> +91 88259 96495
          </p>
          <p className="pf-contact">
            <i className="fa-solid fa-envelope"></i> profenaa.nellai@gmail.com
          </p>
          <p className="pf-contact">
            <i className="fa-solid fa-location-dot"></i>
            {"SSS Complex Tiruchendur Main Road Samathanapuram Palayamkotai, Tirunelveli 627002 "}
          </p>
        </div>

      </div>

      {/* Bottom Row */}
      <div className="pf-bottom">

        {/* Copyright */}
        <div className="pf-bottom-right">
          © {new Date().getFullYear()} Profenaa Infotech
        </div>

        {/* Policies */}
        <div className="pf-bottom-center">
          <a href="#">Privacy Policy</a> | <a href="#">Terms &amp; Conditions</a>
        </div>

        {/* Social */}
        <div className="pf-bottom-left">
          <a href="https://www.facebook.com/share/1Jaod7D1YZ/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/in/profenaa-technologies-nellai-756985325/?skipRedirect=true">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/profenaa__nellai?utm_source=qr&igsh=cXkxOGYzNGY3eHRq/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://youtube.com/@profenaanellai-t6d?si=U5S4Tc6eLoYdaV_F" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}