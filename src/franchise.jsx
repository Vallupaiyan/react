import React, { useState } from "react";
import "../src/css//multi2.css";

const whyPoints = [
  "Centralized dashboard for all franchise outlets",
  "Real-time sales tracking & performance monitoring",
  "Automated reporting & compliance management",
  "Secure and scalable system for franchise expansion",
  "Dedicated implementation & continuous technical support",
];

const offerItems = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/8743/8743921.png",
    title: "Centralized Franchise Dashboard",
    desc: "Monitor all franchise outlets, performance metrics, and operations from a unified control center.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10008/10008076.png",
    title: "Royalty & Revenue Management",
    desc: "Track franchise royalties, revenue sharing, expenses, and financial performance with precision.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10064/10064244.png",
    title: "Performance Analytics & Reporting",
    desc: "Generate automated reports to evaluate outlet performance and identify growth opportunities.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
    title: "Franchise Workflow Automation",
    desc: "Streamline daily franchise operations with automated approvals, billing, and compliance tracking.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/9958/9958082.png",
    title: "Role-Based Franchise Access",
    desc: "Ensure secure access control for franchisors, franchisees, managers, and staff members.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10064/10064244.png",
    title: "Scalable Cloud-Based System",
    desc: "Expand your franchise network confidently with a secure, flexible, and cloud-powered infrastructure.",
  },
];

/* ============ Extra content ============ */
const stats = [
  { number: "150+", label: "Franchise outlets managed" },
  { number: "60%", label: "Faster royalty & revenue reporting" },
  { number: "24/7", label: "Real-time outlet performance tracking" },
  { number: "99.9%", label: "Platform uptime for cloud operations" },
];

const processSteps = [
  {
    title: "Onboard",
    desc: "We map every franchise outlet, franchisee, and role into a single centralized system.",
  },
  {
    title: "Configure",
    desc: "We set up royalty rules, approval chains, and reporting structures to match your brand's model.",
  },
  {
    title: "Go Live",
    desc: "Outlets start operating on the platform with real-time visibility for franchisors and managers.",
  },
  {
    title: "Scale",
    desc: "We support you as you add new outlets, regions, and franchisees to the network.",
  },
];

const testimonials = [
  {
    text: "Managing 40+ outlets used to mean 40 different spreadsheets. Now everything sits on one dashboard and royalty tracking is automatic.",
    name: "Manoj Kumar",
    role: "Franchisor, Food & Beverage Chain",
  },
  {
    text: "The role-based access alone saved us from so many compliance headaches. Every franchisee sees only what they should.",
    name: "Deepika R",
    role: "Operations Director, Retail Franchise",
  },
  {
    text: "Onboarding a new outlet used to take weeks. With Profenaa's system, it's live and reporting within days.",
    name: "Selvam Ganesan",
    role: "Regional Manager, Service Franchise",
  },
];

const faqs = [
  {
    q: "Can this system handle franchises across different states?",
    a: "Yes. The platform is cloud-based and built to manage outlets across multiple states or regions from a single centralized dashboard.",
  },
  {
    q: "How is royalty and revenue sharing calculated?",
    a: "You define the royalty and revenue-sharing rules once, and the system automatically calculates and tracks them per outlet in real time.",
  },
  {
    q: "Can franchisees and franchisors see different data?",
    a: "Yes. Role-based access ensures franchisors, franchisees, managers, and staff each see only the data relevant to their role.",
  },
  {
    q: "How long does onboarding a new franchise network take?",
    a: "Most franchise networks are fully onboarded and reporting within 2-3 weeks, depending on the number of outlets and existing data.",
  },
];

export default function MultiFranchiseManagement() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="mfms-hero">
        <div className="mfms-hero-overlay"></div>
        <span className="mfms-hero-particle p1"></span>
        <span className="mfms-hero-particle p2"></span>
        <span className="mfms-hero-particle p3"></span>
        <span className="mfms-hero-particle p4"></span>
        <span className="mfms-hero-particle p5"></span>
        <span className="mfms-hero-particle p6"></span>

        <div className="mfms-hero-content">
          <h1>Multiple Franchise Management System</h1>
          <p>
            Manage multiple franchise outlets, branches, operations, and
            financial performance from one centralized platform built for
            expansion and smart business control.
          </p>
          <a href="/contact" className="mfms-btn">
            Get Started
          </a>
        </div>
      </section>

      {/* ================= STATS / IMPACT SECTION ================= */}
      <section className="mfms-stats">
        <div className="mfms-stats-wrapper">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="mfms-stat-number">{s.number}</div>
              <div className="mfms-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CARDS SECTION ================= */}
      <section className="mfms-card-area">
        <div className="mfms-card-container">
          <div className="mfms-card">
            <h3>Centralized Franchise Control</h3>
            <p>
              Manage multiple franchise outlets, locations, teams, and daily
              operations from one powerful centralized dashboard for better
              visibility and faster decisions.
            </p>
            <a href="/contact" className="mfms-card-btn">
              Get Started →
            </a>
          </div>

          <div className="mfms-card">
            <h3>Scalable & Performance-Driven Management</h3>
            <p>
              Monitor franchise sales, revenue, compliance, and performance in
              real time using smart analytics and automated reporting tools.
            </p>
            <p>
              Built to increase operational efficiency, reduce manual
              dependency, and support rapid franchise expansion.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="mfms-why-wrapper">
        <div className="mfms-why-left">
          <div className="mfms-image-shape"></div>
          <img
            src="./src/assets/solution/Franchise.jpg"
            alt="Multiple Franchise Management System"
          />
        </div>

        <div className="mfms-why-right">
          <h2>Why Choose Our Multiple Franchise Management System?</h2>
          <p>
            At Profenaa Infotech, our franchise management platform is
            designed to streamline complex franchise networks. We provide
            centralized monitoring, automation, and real-time performance
            insights to help franchise brands scale efficiently and maintain
            operational excellence.
          </p>

          <ul>
            {whyPoints.map((point) => (
              <li key={point}>✔ {point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="mfms-offer-section">
        <div className="mfms-offer-left">
          <h2>What Do We Offer?</h2>
          <p>
            Our franchise management system empowers brands to manage
            outlets, monitor performance, control finances, and standardize
            operations across all franchise locations from one scalable
            platform.
          </p>

          <div className="mfms-offer-illustration">
            <div className="mfms-bg-shape"></div>
            <img
              src="./src/assets/solution/Franchise2.jpg"
              alt="Multiple Franchise Management Illustration"
            />
          </div>
        </div>

        <div className="mfms-offer-right">
          {offerItems.map((item) => (
            <div className="mfms-offer-item" key={item.title}>
              <img src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="mfms-process">
        <div className="mfms-process-wrapper">
          <h2 className="mfms-process-title">How We Roll Out Your Franchise System</h2>
          <p className="mfms-process-subtitle">
            A proven four-step rollout that takes your franchise network from
            scattered spreadsheets to one connected platform.
          </p>

          <div className="mfms-process-steps">
            {processSteps.map((step, i) => (
              <div className="mfms-process-step" key={step.title}>
                <span className="step-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="mfms-testimonials">
        <div className="mfms-testimonials-wrapper">
          <h2 className="mfms-testimonials-title">What Franchise Owners Say</h2>

          <div className="mfms-testimonials-grid">
            {testimonials.map((t) => (
              <div className="mfms-testimonial-card" key={t.name}>
                <span className="mfms-testimonial-quote">&ldquo;</span>
                <p className="mfms-testimonial-text">{t.text}</p>
                <div className="mfms-testimonial-person">
                  <div className="mfms-testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="mfms-testimonial-name">{t.name}</div>
                    <div className="mfms-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="mfms-faq">
        <div className="mfms-faq-wrapper">
          <h2 className="mfms-faq-title">Frequently Asked Questions</h2>

          {faqs.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                className="mfms-faq-item"
                key={item.q}
                onClick={() => setOpenFaq(isOpen ? -1 : i)}
              >
                <div className="mfms-faq-question">
                  {item.q}
                  <span className={`mfms-faq-toggle ${isOpen ? "open" : ""}`}>+</span>
                </div>
                <div className={`mfms-faq-answer ${isOpen ? "open" : ""}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="mfms-cta-banner">
        <h2>Ready to Unify Your Franchise Network?</h2>
        <p>
          Talk to us about how a single centralized platform can simplify
          reporting, royalties, and operations across every outlet.
        </p>
        <a href="/contact-us" className="mfms-cta-btn">
          Get Started
        </a>
      </section>
    </>
  );
}