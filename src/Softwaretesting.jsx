import React, { useState } from "react";
import "../src/css//software-testing.css";
import software from "../src/assets/industry/Software.jpg";
import software2 from "../src/assets/industry/Software2.jpg";
// NOTE: point this at wherever your hero photo actually lives —
// it was previously only referenced from CSS with a mismatched path
import heroImg from "../src/assets/industry/Hero.jpeg";

const whyPoints = [
  "Industry-proven test planning and execution standards.",
  "Transparent reporting with measurable quality metrics.",
  "On-time delivery with structured testing cycles.",
  "Secure testing environments to protect data and IP.",
  "Dedicated support team for fixing issues and retesting.",
];

const offerItems = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/9958/9958082.png",
    title: "Functional Testing",
    desc: "Ensuring every feature works as intended through structured test cases, validation, and business rule verification.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/8743/8743921.png",
    title: "Automation Testing",
    desc: "We build automated frameworks that accelerate test cycles, reduce manual effort, and improve long-term product stability.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10064/10064244.png",
    title: "Performance & Load Testing",
    desc: "Testing your application under heavy usage to ensure responsiveness, stability, and smooth scalability.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
    title: "API Testing & Integration",
    desc: "We test REST/SOAP APIs for speed, security, reliability, and accurate data flow across systems.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10008/10008076.png",
    title: "Security Testing",
    desc: "Identifying vulnerabilities, risks, and exploits to ensure maximum protection against cyber threats.",
  },
  {
    // was a duplicate of Automation Testing's icon — swapped for a distinct one
    icon: "https://cdn-icons-png.flaticon.com/512/2933/2933116.png",
    title: "Regression Testing",
    desc: "Revalidating features after enhancements or bug fixes to ensure nothing breaks after new releases.",
  },
];

/* ============ Extra content ============ */
const stats = [
  { number: "500+", label: "Test cycles executed" },
  { number: "80%", label: "Faster releases with automation" },
  { number: "99.5%", label: "Defect detection accuracy" },
  { number: "24/7", label: "QA support during critical releases" },
];

const processSteps = [
  {
    title: "Plan",
    desc: "We study your application, define test scope, and build a detailed test plan aligned to your release goals.",
  },
  {
    title: "Test",
    desc: "Our team executes manual and automated test cases across functional, performance, and security layers.",
  },
  {
    title: "Report",
    desc: "You get clear, measurable defect reports and quality metrics — no vague pass/fail summaries.",
  },
  {
    title: "Retest",
    desc: "We verify every fix and re-run regression cycles so nothing breaks before you ship.",
  },
];

const testimonials = [
  {
    text: "Their automation framework cut our regression testing time from days to hours. Releases are so much faster now.",
    name: "Arjun Prasath",
    role: "CTO, SaaS Startup",
  },
  {
    text: "The security testing caught vulnerabilities our internal team completely missed. Worth every rupee.",
    name: "Divya Shankar",
    role: "Product Manager, Fintech App",
  },
  {
    text: "Clear, measurable QA reports instead of vague bug lists. We finally know exactly where our product stands.",
    name: "Karthik Subramanian",
    role: "Engineering Lead, E-commerce Platform",
  },
];

const faqs = [
  {
    q: "Do you offer both manual and automated testing?",
    a: "Yes. We combine manual testing for exploratory and usability checks with automation frameworks for regression and repetitive test cycles.",
  },
  {
    q: "Can you test applications that are already in production?",
    a: "Yes. We run non-disruptive testing on live applications, including performance, security, and regression testing with minimal impact on users.",
  },
  {
    q: "How long does a typical testing cycle take?",
    a: "It depends on application size, but most functional and regression cycles are completed within 1-2 weeks, with faster turnaround once automation is in place.",
  },
  {
    q: "Do you provide detailed bug reports?",
    a: "Yes. Every issue comes with steps to reproduce, severity, environment details, and screenshots or logs so your dev team can fix it quickly.",
  },
];

export default function SoftwareTesting() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="st-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="st-hero-overlay"></div>
        <span className="st-hero-particle p1"></span>
        <span className="st-hero-particle p2"></span>
        <span className="st-hero-particle p3"></span>
        <span className="st-hero-particle p4"></span>
        <span className="st-hero-particle p5"></span>
        <span className="st-hero-particle p6"></span>

        <div className="st-hero-content">
          <h1>Software Testing Services</h1>
          <p>
            Ensuring quality, performance, and reliability through
            structured, expert-driven testing solutions.
          </p>
          <a href="/contact" className="st-btn">
            Get in Touch
          </a>
        </div>
      </section>

      {/* ================= STATS / IMPACT SECTION ================= */}
      <section className="st-stats">
        <div className="st-stats-wrapper">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="st-stat-number">{s.number}</div>
              <div className="st-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CARDS SECTION ================= */}
      <section className="st-card-area">
        <div className="st-card-container">
          <div className="st-card">
            <div>
              <h3>Delivering Quality With Zero Compromises</h3>
              <p>
                We follow rigorous testing methodologies to ensure your
                software is bug-free, secure, and ready for real-world use.
              </p>
            </div>
            <a href="/contact" className="st-card-btn">
              Get in Touch →
            </a>
          </div>

          <div className="st-card">
            <div>
              <h3>Reliable Testing for Modern Digital Products</h3>
              <p>
                We ensure flawless performance across all devices,
                environments, and scenarios to deliver reliable digital
                experiences.
              </p>
              <p>
                Our team conducts in-depth testing to reduce risks, strengthen
                security, and ensure smooth business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="why-st-wrapper">
        <div className="why-st-left">
          <div className="image-shape"></div>
          <img src={software} alt="Software Testing" />
        </div>

        <div className="why-st-right">
          <h2>Why Choose Our Software Testing Services?</h2>
          <p>
            At Profenaa Infotech, we ensure your applications meet the
            highest standards of quality, usability, performance, and
            security. Our testing framework ensures full validation of every
            component before deployment.
          </p>

          <ul>
            {whyPoints.map((point) => (
              <li key={point}>✔ {point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="st-offer-section">
        <div className="st-offer-left">
          <h2>What Do We Offer?</h2>
          <p>
            We provide comprehensive manual and automation testing services
            to ensure software performs seamlessly in real-world conditions.
            Our structured approach reduces failures, enhances reliability,
            and improves user confidence.
          </p>

          <div className="st-offer-illustration">
            <div className="bg-shape"></div>
            <img src={software2} alt="Software Testing Illustration" />
          </div>
        </div>

        <div className="st-offer-right">
          {offerItems.map((item) => (
            <div className="st-offer-item" key={item.title}>
              <div className="st-offer-icon">
                <img src={item.icon} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="st-process">
        <div className="st-process-wrapper">
          <h2 className="st-process-title">How We Test Your Software</h2>
          <p className="st-process-subtitle">
            A clear, repeatable four-step QA cycle that keeps your releases
            reliable and your team confident.
          </p>

          <div className="st-process-steps">
            {processSteps.map((step, i) => (
              <div className="st-process-step" key={step.title}>
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
      <section className="st-testimonials">
        <div className="st-testimonials-wrapper">
          <h2 className="st-testimonials-title">What Our Clients Say</h2>

          <div className="st-testimonials-grid">
            {testimonials.map((t) => (
              <div className="st-testimonial-card" key={t.name}>
                <span className="st-testimonial-quote">&ldquo;</span>
                <p className="st-testimonial-text">{t.text}</p>
                <div className="st-testimonial-person">
                  <div className="st-testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="st-testimonial-name">{t.name}</div>
                    <div className="st-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="st-faq">
        <div className="st-faq-wrapper">
          <h2 className="st-faq-title">Frequently Asked Questions</h2>

          {faqs.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                className="st-faq-item"
                key={item.q}
                onClick={() => setOpenFaq(isOpen ? -1 : i)}
              >
                <div className="st-faq-question">
                  {item.q}
                  <span className={`st-faq-toggle ${isOpen ? "open" : ""}`}>
                    +
                  </span>
                </div>
                <div className={`st-faq-answer ${isOpen ? "open" : ""}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="st-cta-banner">
        <h2>Ready to Ship With Confidence?</h2>
        <p>
          Talk to us about a testing strategy that fits your release cycle,
          your stack, and your risk tolerance.
        </p>
        <a href="/contact-us" className="st-cta-btn">
          Get in Touch
        </a>
      </section>
    </>
  );
}