import React, { useState } from "react";
import "../src/css//Businessautomation.css";

const features = [
  {
    title: "Automates Manual Work",
    desc: "Reduce repetitive tasks by automating day-to-day workflows across business operations.",
  },
  {
    title: "Enhances Team Productivity",
    desc: "Helps teams collaborate efficiently with real-time access from any device.",
  },
  {
    title: "Centralizes Business Data",
    desc: "Keeps all your business information organized in one platform for easy access.",
  },
  {
    title: "Improves Decision Making",
    desc: "Provides instant reports and insights, enabling data-backed decisions.",
  },
];

const whyPoints = [
  {
    label: "Streamlines Operations:",
    text: "Eliminates inefficiencies and simplifies complex tasks.",
  },
  {
    label: "Saves Time & Costs:",
    text: "Reduces workload, cuts operational expenses, and improves output.",
  },
  {
    label: "Ensures Better Accuracy:",
    text: "Minimizes human errors and ensures consistent workflows.",
  },
  {
    label: "Boosts Business Scalability:",
    text: "Supports organizational growth with intelligent automation tools.",
  },
];

const suiteFeatures = [
  "Auto-assign tasks to employees with priority rules and time tracking.",
  "Automated follow-up reminders for leads, clients, and internal teams.",
  "Manage entire workflows with drag-and-drop process automation.",
  "Mass communication tools for sending updates and notifications instantly.",
  "Create custom automation rules to match your industry needs.",
  "Track and monitor employee tasks, deadlines, and progress from a single dashboard.",
  "Instant alerts and triggers based on workflow actions.",
  "Automated document management with smart approval workflows.",
  "AI-based insights to track performance and improve efficiency.",
  "Full visibility into business operations for better control and strategy.",
];

const stats = [
  { number: "70%", label: "Reduction in manual task time" },
  { number: "3x", label: "Faster team turnaround on workflows" },
  { number: "24/7", label: "Automated monitoring & alerts" },
  { number: "100+", label: "Businesses automated across Tamil Nadu" },
];

const processSteps = [
  {
    title: "Discover",
    desc: "We audit your current workflows and pinpoint exactly where manual effort is slowing your team down.",
  },
  {
    title: "Design",
    desc: "We map out an automation blueprint tailored to your business rules, tools, and approval chains.",
  },
  {
    title: "Deploy",
    desc: "We build and roll out the automation with minimal disruption to your existing operations.",
  },
  {
    title: "Optimize",
    desc: "We track performance and continuously refine the workflows as your business scales.",
  },
];

const industries = [
  { icon: "🏭", title: "Manufacturing", desc: "Automate production tracking, inventory, and vendor approvals." },
  { icon: "🏥", title: "Healthcare", desc: "Streamline patient records, appointments, and staff scheduling." },
  { icon: "🛍️", title: "Retail & E-commerce", desc: "Automate order processing, stock alerts, and customer follow-ups." },
  { icon: "🏦", title: "Finance & Accounting", desc: "Automate invoicing, approvals, and compliance reporting." },
  { icon: "🎓", title: "Education", desc: "Automate admissions, attendance, and fee reminders." },
  { icon: "🚚", title: "Logistics", desc: "Automate dispatch tracking, delivery updates, and route planning." },
  { icon: "🏗️", title: "Construction", desc: "Automate project timelines, material tracking, and contractor billing." },
  { icon: "💼", title: "Professional Services", desc: "Automate client onboarding, contracts, and task handoffs." },
];

const testimonials = [
  {
    text: "Profenaa Infotech automated our entire lead follow-up process. What used to take our team hours every day now runs on its own.",
    name: "Karthik Raja",
    role: "Operations Head, Coimbatore",
  },
  {
    text: "The task allocation and approval workflows they built cut our turnaround time by more than half. Excellent execution.",
    name: "Priya Suresh",
    role: "Founder, Retail Business",
  },
  {
    text: "Their team understood our processes deeply and built automation that actually matched how our staff works.",
    name: "Arun Vignesh",
    role: "Director, Manufacturing Unit",
  },
];

const faqs = [
  {
    q: "How long does it take to automate our business processes?",
    a: "Most workflow automations go live within 2-4 weeks, depending on complexity. We start with your highest-impact process first so you see results early.",
  },
  {
    q: "Do we need to change our existing tools and software?",
    a: "No. We design automation around your existing tools wherever possible, and only recommend new tools when it genuinely improves the workflow.",
  },
  {
    q: "Is business automation suitable for small businesses too?",
    a: "Yes. We build automation solutions scaled to your team size and budget, from a single automated workflow to a full digital transformation.",
  },
  {
    q: "What kind of support do you provide after deployment?",
    a: "We provide ongoing monitoring, optimization, and support to make sure your automated workflows keep up with your business as it grows.",
  },
];

export default function BusinessAutomation() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="ba-hero">
        <div className="ba-hero-overlay"></div>
        <span className="ba-hero-particle p1"></span>
        <span className="ba-hero-particle p2"></span>
        <span className="ba-hero-particle p3"></span>
        <span className="ba-hero-particle p4"></span>
        <span className="ba-hero-particle p5"></span>
        <div className="ba-hero-content">
          <h1>End-to-End Business Automation for Modern Enterprises</h1>
          <p>
            Automate workflows, eliminate manual tasks, and accelerate
            business growth with our intelligent automation solutions.
          </p>
          <a href="/contact" className="ba-hero-btn">
            Get Free Automation Audit
          </a>
        </div>
      </section>

      {/* ================= STATS / IMPACT SECTION ================= */}
      <section className="ba-stats">
        <div className="ba-stats-wrapper">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="ba-stat-number">{s.number}</div>
              <div className="ba-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SIMPLE WORKFLOW SECTION ================= */}
      <section className="ba-flow-simple">
        <div className="ba-flow-wrapper">
          <div className="ba-flow-left">
            <h2>Simplified Automation Flow for Every Business</h2>
            <p>
              Is your team still spending hours on repetitive manual work?
              Our Business Automation Flow helps you streamline processes,
              reduce errors, and improve operational efficiency.
            </p>
            <p>
              From lead tracking to task allocation, every workflow is
              automated to ensure smooth coordination across departments.
            </p>
            <p>
              The system gives complete visibility over your business
              activities and connects your teams with real-time data
              insights.
            </p>
            <p>
              With centralized dashboards, you can monitor business
              performance, optimize processes, and achieve faster
              decision-making.
            </p>
          </div>

          <div className="ba-flow-right">
            <img
              src="./src/assets/solution/Business.jpg"
              alt="Business Automation Flow"
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES CARDS ================= */}
      <section className="ba-features-cards">
        <div className="ba-features-container">
          <h2 className="ba-features-title">What Can Business Automation Do?</h2>

          <div className="ba-cards-wrapper">
            {features.map((f) => (
              <div className="ba-card" key={f.title}>
                <div className="ba-card-shape"></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY AUTOMATION MATTERS ================= */}
      <section className="ba-why-left">
        <div className="ba-why-wrapper">
          <div className="ba-why-image">
            <img
              src="./src/assets/solution/Business2.jpg"
              alt="Business Automation Benefits"
            />
          </div>

          <div className="ba-why-content">
            <h2>Why Business Automation Matters</h2>
            {whyPoints.map((p) => (
              <p key={p.label}>
                <strong>{p.label}</strong> {p.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section className="ba-industries">
        <div className="ba-industries-wrapper">
          <h2 className="ba-industries-title">Industries We Serve</h2>
          <p className="ba-industries-subtitle">
            Our automation solutions are built to fit the way different
            industries actually work — not a one-size-fits-all template.
          </p>

          <div className="ba-industries-grid">
            {industries.map((ind) => (
              <div className="ba-industry-card" key={ind.title}>
                <div className="ba-industry-icon">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AUTOMATION SUITE ================= */}
      <section className="ba-automation-suite">
        <div className="ba-suite-wrapper">
          <h2 className="ba-suite-title">Our Business Automation Suite Features</h2>

          <div className="ba-suite-features">
            {suiteFeatures.map((text, i) => (
              <div className="ba-suite-feature" key={text}>
                <span className="feature-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS / HOW IT WORKS ================= */}
      <section className="ba-process">
        <div className="ba-process-wrapper">
          <h2 className="ba-process-title">How We Automate Your Business</h2>
          <p className="ba-process-subtitle">
            A simple, proven four-step approach that takes you from manual
            chaos to a fully automated workflow — without disrupting your
            day-to-day operations.
          </p>

          <div className="ba-process-steps">
            {processSteps.map((step, i) => (
              <div className="ba-process-step" key={step.title}>
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
      <section className="ba-testimonials">
        <div className="ba-testimonials-wrapper">
          <h2 className="ba-testimonials-title">What Our Clients Say</h2>

          <div className="ba-testimonials-grid">
            {testimonials.map((t) => (
              <div className="ba-testimonial-card" key={t.name}>
                <span className="ba-testimonial-quote">&ldquo;</span>
                <p className="ba-testimonial-text">{t.text}</p>
                <div className="ba-testimonial-person">
                  <div className="ba-testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="ba-testimonial-name">{t.name}</div>
                    <div className="ba-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="ba-faq">
        <div className="ba-faq-wrapper">
          <h2 className="ba-faq-title">Frequently Asked Questions</h2>

          {faqs.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                className="ba-faq-item"
                key={item.q}
                onClick={() => setOpenFaq(isOpen ? -1 : i)}
              >
                <div className="ba-faq-question">
                  {item.q}
                  <span className={`ba-faq-toggle ${isOpen ? "open" : ""}`}>+</span>
                </div>
                <div className={`ba-faq-answer ${isOpen ? "open" : ""}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="ba-cta-banner">
        <h2>Ready to Automate Your Business?</h2>
        <p>
          Book a free automation audit and see exactly where your team can
          save time, cut costs, and scale faster.
        </p>
        <a href="/contact-us" className="ba-cta-btn">
          Get Your Free Audit
        </a>
      </section>
    </>
  );
}