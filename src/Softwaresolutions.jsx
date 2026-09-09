import {
  FaCode,
  FaCloud,
  FaMobileAlt,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import "../src/css/softwaresolutions.css";

export default function SoftwareSolutions() {
  return (
    <main className="sw-page">
      {/* ===================== ANIMATED HERO ===================== */}
      <section className="sw-hero">
        {/* Floating gradient blobs */}
        <div className="sw-blob sw-blob-1"></div>
        <div className="sw-blob sw-blob-2"></div>
        <div className="sw-blob sw-blob-3"></div>

        {/* Floating tech icons */}
        <FaCode className="sw-float-icon sw-icon-1" />
        <FaCloud className="sw-float-icon sw-icon-2" />
        <FaMobileAlt className="sw-float-icon sw-icon-3" />
        <FaDatabase className="sw-float-icon sw-icon-4" />
        <FaShieldAlt className="sw-float-icon sw-icon-5" />
        <FaRocket className="sw-float-icon sw-icon-6" />

        {/* Grid overlay for a "tech" feel */}
        <div className="sw-grid-overlay"></div>

        <div className="sw-hero-content">
          <span className="sw-hero-badge">Software Solutions</span>
          <h1>
            Building <span className="sw-highlight">Smart Software</span>
            <br />
            For Your Business Growth
          </h1>
          <p>
            From custom applications to enterprise-grade platforms, we design
            and build software that scales with you.
          </p>
          <div className="sw-hero-buttons">
            <a href="/contact" className="sw-cta-btn sw-cta-primary">
              Get Started
            </a>
            <a href="#sw-services" className="sw-cta-btn sw-cta-secondary">
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="sw-services" id="sw-services">
        <h2>What We Build</h2>
        <div className="sw-cards">
          <div className="sw-card">
            <FaCode className="sw-card-icon" />
            <h3>Custom Software</h3>
            <p>Tailor-made applications built around your exact business workflow.</p>
          </div>
          <div className="sw-card">
            <FaCloud className="sw-card-icon" />
            <h3>Cloud Solutions</h3>
            <p>Scalable, secure cloud infrastructure and migration services.</p>
          </div>
          <div className="sw-card">
            <FaMobileAlt className="sw-card-icon" />
            <h3>Mobile Applications</h3>
            <p>Native and cross-platform apps for Android and iOS.</p>
          </div>
          <div className="sw-card">
            <FaDatabase className="sw-card-icon" />
            <h3>Data Management</h3>
            <p>Robust database design and data pipeline engineering.</p>
          </div>
          <div className="sw-card">
            <FaShieldAlt className="sw-card-icon" />
            <h3>Security & Compliance</h3>
            <p>Application security audits and compliant system architecture.</p>
          </div>
          <div className="sw-card">
            <FaRocket className="sw-card-icon" />
            <h3>Product Launch</h3>
            <p>End-to-end MVP to production support for startups and enterprises.</p>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="sw-final-cta">
        <h2>Have a Software Idea?</h2>
        <p>Let's turn it into a real, working product together.</p>
        <a href="/contact" className="sw-cta-btn sw-cta-primary">
          Talk to Us
        </a>
      </section>
    </main>
  );
}