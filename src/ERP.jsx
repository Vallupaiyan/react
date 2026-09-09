import { useState } from "react";
import "../src/css//erp.css";

// TODO: point these at your actual Navbar / Footer components.
// The original page loaded them dynamically via load.js / footer.js —
// in React these should be real components you already have (or build).
import Navbar from "./Navbar";
import Footer from "./Footer";

const featureCards = [
  {
    title: "Centralizes Business Data",
    description:
      "Combines accounting, inventory, sales, manufacturing and HR data into a single, authoritative source.",
  },
  {
    title: "Access Across Devices",
    description:
      "Empower teams to view transactions and reports from desktops, tablets, or phones with secure role-based access.",
  },
  {
    title: "Automates Financial Processes",
    description:
      "Streamlines invoicing, reconciliations, and reporting to reduce errors and month-end cycles.",
  },
  {
    title: "Optimizes Supply Chain",
    description:
      "Improves demand planning, procurement, and inventory turnover so you deliver on time and lower costs.",
  },
];

// TODO: swap in real, verified figures before this goes live.
const stats = [
  { number: "10+", label: "Years Delivering ERP Solutions" },
  { number: "500+", label: "Businesses Automated" },
  { number: "50+", label: "Configurable Modules" },
  { number: "24/7", label: "Support & Monitoring" },
];

const modules = [
  {
    code: "FI",
    title: "Finance & Accounting",
    description:
      "Automate invoicing, reconciliations, and statutory reporting from one ledger.",
  },
  {
    code: "HR",
    title: "HR & Payroll",
    description:
      "Manage attendance, payroll runs, and employee records in one place.",
  },
  {
    code: "IN",
    title: "Inventory & Warehouse",
    description:
      "Track stock levels, transfers, and reorder points across every location.",
  },
  {
    code: "SA",
    title: "Sales & CRM",
    description:
      "Manage leads, quotes, and customer contracts tied to delivery and billing.",
  },
  {
    code: "PN",
    title: "Production & Manufacturing",
    description:
      "Plan work orders, BOMs, and shop-floor schedules with full traceability.",
  },
  {
    code: "PC",
    title: "Procurement",
    description:
      "Raise purchase requests, compare vendors, and automate approval routing.",
  },
];

const whyErpPoints = [
  {
    label: "Automates Core Business Processes",
    text: "Remove manual handoffs and ensure consistent execution across teams.",
  },
  {
    label: "Improves Forecasting & Planning",
    text: "Use consolidated data to predict demand, plan capacity, and reduce stockouts.",
  },
  {
    label: "Drives Operational Efficiency",
    text: "Standardize processes and reduce duplicate work across departments.",
  },
  {
    label: "Secures & Stores Business Records",
    text: "Maintain auditable transactional history and protect sensitive financial and HR data.",
  },
];

const suiteFeatures = [
  "Easily map products and BOMs from engineering into production and costing modules.",
  "Automate approval workflows for purchase requests, invoices, and expense claims.",
  "Manage campaigns and customer contracts that tie back to billing and delivery schedules.",
  "Run mass updates for pricing, stock adjustments, and batch operations across SKUs.",
  "Create and reuse financial templates for journals, closing tasks, and statutory reporting.",
  "Schedule and assign manufacturing and logistics tasks to teams with clear SLAs.",
  "Trigger alerts for stock thresholds, overdue payments, and compliance events.",
  "Track documents, quality checks, and stage-based approvals using configurable forms.",
  "Integrated document management for bills of materials, SOPs, invoices, and contracts.",
  "Gain instant insights into cash flow, inventory health, production efficiency, and utilization metrics.",
];

// Sample quotes — replace with real client testimonials before launch.
const testimonials = [
  {
    quote:
      "Switching to this ERP cut our month-end closing time in half — everything reconciles automatically now.",
    author: "Finance Head",
    role: "Manufacturing Sector",
  },
  {
    quote:
      "We finally have one view across inventory and production. No more chasing spreadsheets between teams.",
    author: "Operations Manager",
    role: "Distribution",
  },
  {
    quote:
      "The approval workflows alone saved our procurement team hours every week.",
    author: "Procurement Lead",
    role: "Retail",
  },
];

const faqs = [
  {
    question: "How long does implementation usually take?",
    answer:
      "Most rollouts run 6–12 weeks depending on modules and data volume, with a phased go-live so teams aren't disrupted all at once.",
  },
  {
    question: "Can the ERP be customized for our industry?",
    answer:
      "Yes — modules, fields, and workflows are configurable to match how your team already works, from manufacturing to distribution.",
  },
  {
    question: "Will our existing data migrate safely?",
    answer:
      "We run structured imports with validation checks, so historical records, stock counts, and customer data move over intact.",
  },
  {
    question: "Is this cloud-based or on-premise?",
    answer:
      "Both options are supported — host on our secure cloud or deploy on your own infrastructure.",
  },
  {
    question: "What support do we get after go-live?",
    answer:
      "Ongoing training, a dedicated support line, and monitoring so issues get caught before they affect operations.",
  },
];

export default function ErpSolutions() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((current) => (current === index ? null : index));
  };

  return (
    <>
     

      {/* ================= ERP HERO SECTION ================= */}
      <section className="erp-hero">
        <div className="erp-hero-overlay"></div>

        <div className="erp-hero-content">
          <h1>Integrated ERP Solutions for Scaling Enterprises</h1>
          <p>
            Unify finance, inventory, manufacturing, and HR — automate
            workflows, gain real-time visibility, and make data-driven
            decisions with one powerful ERP platform.
          </p>
          <a href="/contact" className="erp-hero-btn">
            Request a Free Demo
          </a>
        </div>
      </section>

      {/* ================= STATS / TRUST BAR ================= */}
      <section className="erp-stats-bar">
        <div className="erp-stats-wrapper">
          {stats.map((stat) => (
            <div className="erp-stat" key={stat.label}>
              <span className="erp-stat-number">{stat.number}</span>
              <span className="erp-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ERP FLOW SIMPLE SECTION ================= */}
      <section className="erp-flow-simple">
        <div className="erp-flow-wrapper">
          <div className="erp-flow-left">
            <h2>Well-Structured Open Source ERP Flow</h2>

            <p>
              Struggling with disconnected systems and manual
              reconciliations? Profenaa Infotech&apos;s Open Source ERP Flow
              consolidates operations across departments so every process
              runs smoothly.
            </p>

            <p>
              Monitor inventory, manage purchase orders, track production,
              and reconcile finances in real time — all within a unified
              system.
            </p>

            <p>
              Our ERP workflows automate approvals, reduce silos, and
              deliver consistent, auditable business processes.
            </p>

            <p>
              Gain cross-department visibility, forecast demand accurately,
              and optimize resource allocation with configurable dashboards
              and reports.
            </p>
          </div>

          <div className="erp-flow-right">
            <img
              src="./src/assets/solution/ERP.jpg"
              alt="ERP Flow Image"
            />
          </div>
        </div>
      </section>

      {/* ================= ERP FEATURES CARDS SECTION ================= */}
      <section className="erp-features-cards">
        <div className="erp-features-container">
          <h2 className="erp-features-title">What Does an ERP Do?</h2>

          <div className="erp-cards-wrapper">
            {featureCards.map((card) => (
              <div className="erp-card" key={card.title}>
                <div className="erp-card-shape"></div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ERP MODULES GRID SECTION ================= */}
      <section className="erp-modules-section">
        <div className="erp-modules-container">
          <h2 className="erp-modules-title">Every Department, One Platform</h2>
          <p className="erp-modules-subtitle">
            Turn on the modules your business needs today, and add more as
            you grow — all connected to the same live data.
          </p>

          <div className="erp-modules-grid">
            {modules.map((module) => (
              <div className="erp-module-card" key={module.title}>
                <div className="erp-module-badge">{module.code}</div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY ERP MATTERS SECTION ================= */}
      <section className="erp-why-left">
        <div className="erp-why-wrapper">
          <div className="erp-why-image">
            <img src="./src/assets/solution/ERP2.jpg" alt="Why ERP Matters Illustration" />
          </div>

          <div className="erp-why-content">
            <h2>Why ERP Matters</h2>

            {whyErpPoints.map((point) => (
              <p key={point.label}>
                <strong>{point.label}:</strong> {point.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOMIZED ERP BUSINESS SUITE SECTION ================= */}
      <section className="erp-business-suite">
        <div className="erp-suite-wrapper">
          <h2 className="erp-suite-title">
            Our Customized ERP Business Suite Solutions
          </h2>

          <div className="erp-suite-features">
            {suiteFeatures.map((text, index) => (
              <div className="erp-suite-feature" key={text}>
                <span className="feature-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLIENT TESTIMONIALS SECTION ================= */}
      <section className="erp-testimonials">
        <div className="erp-testimonials-container">
          <h2 className="erp-testimonials-title">What Our Clients Say</h2>

          <div className="erp-testimonials-grid">
            {testimonials.map((t) => (
              <div className="erp-testimonial-card" key={t.author}>
                <p className="erp-testimonial-quote">{t.quote}</p>
                <div className="erp-testimonial-author">{t.author}</div>
                <div className="erp-testimonial-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="erp-faq">
        <div className="erp-faq-container">
          <h2 className="erp-faq-title">Frequently Asked Questions</h2>

          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                className={`erp-faq-item${isOpen ? " open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="erp-faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <span className="erp-faq-icon">+</span>
                </button>

                <div className="erp-faq-answer-wrapper">
                  <div className="erp-faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    
    </>
  );
}