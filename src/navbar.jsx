import { useState, useEffect } from "react";
import "../src/css/navbar.css";
import logo from "../src/assets/plogo2.png";

import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

 useEffect(() => {
  if (menuOpen) {
    const scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add("menu-locked");
  } else {
    const scrollY = document.body.style.top;
    document.body.classList.remove("menu-locked");
    document.body.style.top = "";
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }
  return () => document.body.classList.remove("menu-locked");
}, [menuOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubmenu(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((cur) => (cur === name ? null : name));
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenu((cur) => (cur === name ? null : name));
  };

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <img src={logo} alt="Profenaa Infotech" />
          <span className="logo-text"> <i>Profenaa Technologies</i> <br/>
            <i> IT & Software Solutions</i>
          </span>
        </div>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? " active" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className="hamburger"
            style={{
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "24px",
              height: "18px",
            }}
          >
            <span
              style={{
                display: "block",
                height: "2px",
                width: "100%",
                background: "#ffffff",
                borderRadius: "2px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
              }}
            ></span>
            <span
              style={{
                display: "block",
                height: "2px",
                width: "100%",
                background: "#ffffff",
                borderRadius: "2px",
                transition: "opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            ></span>
            <span
              style={{
                display: "block",
                height: "2px",
                width: "100%",
                background: "#ffffff",
                borderRadius: "2px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
              }}
            ></span>
          </span>
        </button>
      </div>

      <nav className={menuOpen ? "open" : ""}>
        <ul className="nav-links">

          <li>
            <a href="/" onClick={closeAll}>
              Home
            </a>
          </li>

          <li>
            <a href="/about" onClick={closeAll}>
              About
            </a>
          </li>

          <li className={`dropdown${openDropdown === "services" ? " open" : ""}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown("services");
              }}
            >
              Services
              <FaChevronDown className="down-icon" />
            </a>

            <ul className="dropdown-menu">
                 <li className={`has-submenu${openSubmenu === "maintenance" ? " open" : ""}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("maintenance"); }}>
                  Application Development & Maintenance<FaChevronDown className="submenu-icon" />
                </a>
                <ul className="submenu">
                  <li><a href="/Appllicationdevelopment" onClick={closeAll}>Development</a></li>
                  <li><a href="/Maintenance" onClick={closeAll}>Maintenance</a></li>
                </ul>
              </li>


              <li className={`has-submenu${openSubmenu === "web-services" ? " open" : ""}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("web-services"); }}>
                  Web Services <FaChevronDown className="submenu-icon" />
                </a>
                <ul className="submenu">
                  <li><a href="/Profenaawebdev" onClick={closeAll}>Website Development</a></li>
                  <li><a href="/ecommers" onClick={closeAll}>E-Commerce Development</a></li>
                  <li><a href="./Uiuxservice" onClick={closeAll}>UI / UX Design</a></li>
                </ul>
              </li>

              <li className={`has-submenu${openSubmenu === "ai-solutions" ? " open" : ""}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("ai-solutions"); }}>
                  AI-Powered Solutions <FaChevronDown className="submenu-icon" />
                </a>
                <ul className="submenu">
                  <li><a href="/Chatbotlanding" onClick={closeAll}>Chatbot Development</a></li>
                  <li><a href="/Generative" onClick={closeAll}>Generative AI</a></li>
                  <li><a href="/AIAutomations" onClick={closeAll}>AI Automation</a></li>
                </ul>
              </li>

              <li><a href="/Mobileappdevelopment" onClick={closeAll}>Mobile App Development</a></li>
              <li><a href="/Softwaretesting" onClick={closeAll}>Software Testing</a></li>

              <li className={`has-submenu${openSubmenu === "digital-marketing" ? " open" : ""}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("digital-marketing"); }}>
                  Digital Marketing <FaChevronDown className="submenu-icon" />
                </a>
                <ul className="submenu">
                  <li><a href="/Seoservices" onClick={closeAll}>SEO</a></li>
                  <li><a href="/GMBOptimization" onClick={closeAll}>Google Management Business</a></li>
                  <li><a href="/SocialMediamarketing" onClick={closeAll}>Social Media Marketing</a></li>
                </ul>
              </li>
               <li className={`has-submenu${openSubmenu === "technologies" ? " open" : ""}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("technologies"); }}>
                  Technologies<FaChevronDown className="submenu-icon" />
                </a>
                <ul className="submenu">
                  <li><a href="/MechanicalEngineering" onClick={closeAll}>Mechanical Engineering</a></li>
                  <li><a href="/ElectricalEngineering" onClick={closeAll}>Electrical Engineering</a></li>
                  <li><a href="/CivilEngineering" onClick={closeAll}>Civil Engineering</a></li>
                  <li><a href="/Cseit" onClick={closeAll}>CSE / IT</a></li>
                  <li><a href="/ArtsMultimedia" onClick={closeAll}>Arts & Multimedia</a></li>
                  <li><a href="/Datascience" onClick={closeAll}>Data Science</a></li>
                  <li><a href="/AiMl" onClick={closeAll}>AI & ML</a></li>
                
                </ul>
              </li>
            </ul>
          </li>
          

          {/* <li>
            <a href="/client" onClick={closeAll}>
              Clients
            </a>
          </li> */}

          <li className={`dropdown${openDropdown === "solutions" ? " open" : ""}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown("solutions");
              }}
            >
              Solutions
              <FaChevronDown className="down-icon" />
            </a>

            <ul className="dropdown-menu">
              <li><a href="/erp-solutions" onClick={closeAll}>ERP Solutions</a></li>

              <li className={`has-submenu${openSubmenu === "crm-solutions" ? " open" : ""}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("crm-solutions"); }}>
                  CRM Solutions <FaChevronDown className="submenu-icon" />
                </a>
                <ul className="submenu">
                  <li><a href="/manage" onClick={closeAll}>Multiple Business Management System</a></li>
                  <li><a href="/franchise" onClick={closeAll}>Multiple Franchise Management System</a></li>
                </ul>
              </li>

              <li><a href="/business-automation" onClick={closeAll}>Business Automation</a></li>
              <li><a href="/project" onClick={closeAll}>Our Projects</a></li>
              <li><a href="/Industriesoverview" onClick={closeAll}>Industries</a></li>
            </ul>
          </li>

          {/* Industries - plain link to the overview page, its own icon */}
          {/* <li>
            <a href="/industriesoverview" onClick={closeAll}>
              Industries
            </a>
          </li> */}

          {/*
            On Job Training - separate dropdown
            holding Software Solutions and Internship links.
          */}
          <li className={`dropdown${openDropdown === "training" ? " open" : ""}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown("training");
              }}
            >
              On Job Training
              <FaChevronDown className="down-icon" />
            </a>

            <ul className="dropdown-menu">
              <li><a href="/Softwaresolution" onClick={closeAll}>Software Solutions</a></li>
              <li><a href="/internship" onClick={closeAll}>Internship</a></li>
            </ul>
          </li>

          <li>
            <a href="/careers" onClick={closeAll}>
              Careers
            </a>
          </li>
          <li className="nav-cta-item">
            <a href="/contact" className="nav-cta-btn" onClick={closeAll}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <a href="/Contact" className="nav-cta-btn nav-cta-desktop">
        Contact
      </a>
    </header>
  );
}