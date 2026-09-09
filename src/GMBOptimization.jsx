import React, { useState } from "react";
import "../src/css//gmb-service.css";
// NOTE: point these at wherever these images actually live in your project —
// they were previously raw string paths (one even pointed at a different
// service page's folder), which won't resolve reliably through the bundler
import heroImg from "../src/assets/Google-My-Business-Optimization/Hero.jpeg";
import whyImg from "../src/assets/Google-My-Business-Optimization/What-we-offer.jpeg";
import offerImg from "../src/assets/Google-My-Business-Optimization/choose-us.jpeg";

const whyPoints = [
  "Local SEO tactics focused on real visibility.",
  "Transparent strategy – no hidden steps.",
  "Monthly reporting & ranking improvement tracking.",
  "White-hat optimization practices.",
  "Dedicated optimization & technical support.",
];

const offerItems = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/8743/8743921.png",
    title: "Google Profile Setup",
    desc: "Complete listing creation with business details, services, products, images, and location accuracy.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10008/10008076.png",
    title: "GMB On-Page Optimization",
    desc: "Proper categories, keywords, descriptions, services, and structured information for high visibility.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10064/10064244.png",
    title: "Review & Reputation Building",
    desc: "Connect with customers and build credibility through professional review outreach and response management.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
    title: "Local Ranking Optimization",
    desc: "Targeting map pack results to maximize walk-ins and local customer discovery.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/9958/9958082.png",
    title: "Insights & Performance Reports",
    desc: "Monthly reports covering search impressions, leads, calls, actions, and ranking growth.",
  },
  {
    // was a duplicate of "Review & Reputation Building"'s icon — swapped for a distinct one
    icon: "https://cdn-icons-png.flaticon.com/512/2933/2933116.png",
    title: "Posting & Updates",
    desc: "Weekly updates, promotions, new offerings, images, menus, products, and business activities.",
  },
];

/* ============ Extra content ============ */
const stats = [
  { number: "3x", label: "Increase in map pack visibility" },
  { number: "60%", label: "More calls & direction requests" },
  { number: "150+", label: "GMB profiles optimized" },
  { number: "4.8★", label: "Average client review rating improvement" },
];

const processSteps = [
  {
    title: "Audit",
    desc: "We review your current GMB profile, categories, photos, and competitor rankings in your local area.",
  },
  {
    title: "Optimize",
    desc: "We fix categories, keywords, descriptions, and business info to maximize local search relevance.",
  },
  {
    title: "Engage",
    desc: "We manage posts, reviews, and Q&A to keep your profile active and trustworthy.",
  },
  {
    title: "Track",
    desc: "We monitor rankings, calls, and direction requests with monthly performance reports.",
  },
];

const testimonials = [
  {
    text: "Our GMB listing barely showed up in local search before. Now we're consistently in the map pack for our main keywords.",
    name: "Ramesh Kumar",
    role: "Owner, Home Services Business",
  },
  {
    text: "Walk-ins increased noticeably within the first two months. The review management alone made a huge difference.",
    name: "Anitha Suresh",
    role: "Founder, Boutique Store",
  },
  {
    text: "Clear monthly reports showing exactly how our calls and direction requests grew. No guesswork, just results.",
    name: "Praveen Raj",
    role: "Manager, Multi-Location Restaurant",
  },
];

const faqs = [
  {
    q: "How long does it take to see results from GMB optimization?",
    a: "Most businesses start seeing improved visibility and engagement within 4-8 weeks, with stronger ranking gains building over 3-6 months.",
  },
  {
    q: "Do you handle review responses too?",
    a: "Yes. We help manage and respond to customer reviews professionally to build trust and improve your local reputation.",
  },
  {
    q: "Can you manage multiple business locations?",
    a: "Yes. We optimize and manage GMB profiles for single-location businesses as well as multi-location franchises and chains.",
  },
  {
    q: "Is this a one-time setup or ongoing service?",
    a: "GMB optimization works best as an ongoing service — regular posts, review management, and monitoring keep your profile ranking well over time.",
  },
];

export default function GMBOptimization() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="gmb-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="gmb-hero-overlay"></div>
        <span className="gmb-hero-particle p1"></span>
        <span className="gmb-hero-particle p2"></span>
        <span className="gmb-hero-particle p3"></span>
        <span className="gmb-hero-particle p4"></span>
        <span className="gmb-hero-particle p5"></span>
        <span className="gmb-hero-particle p6"></span>

        <div className="gmb-hero-content">
          <h1>Google My Business Optimization</h1>
          <p>
            Boost visibility, generate walk-ins, and grow your business with
            strategic GMB optimization that ranks locally.
          </p>
          <a href="/contact" className="gmb-btn">
            Get in Touch
          </a>
        </div>
      </section>

      {/* ================= STATS / IMPACT SECTION ================= */}
      <section className="gmb-stats">
        <div className="gmb-stats-wrapper">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="gmb-stat-number">{s.number}</div>
              <div className="gmb-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CARDS SECTION ================= */}
      <section className="gmb-card-area">
        <div className="gmb-card-container">
          <div className="gmb-card">
            <div>
              <h3>Increase Local Visibility</h3>
              <p>
                We optimize your GMB profile to help you show up in local
                searches, map listings, and near-me results.
              </p>
            </div>
            <a href="/contact" className="gmb-card-btn">
              Get in touch →
            </a>
          </div>

          <div className="gmb-card">
            <div>
              <h3>Attract Local Customers</h3>
              <p>
                From reviews to descriptions and Google Maps ranking, we make
                your GMB listing stand out against competitors.
              </p>
              <p>
                Improve credibility, discovery, calls, and store visits
                consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="gmb-why-wrapper">
        <div className="gmb-why-left">
          <div className="gmb-image-shape"></div>
          <img src={whyImg} alt="Google My Business Services" />
        </div>

        <div className="gmb-why-right">
          <h2>Why Choose Our GMB Services?</h2>
          <p>
            At Profenaa Infotech, we help businesses dominate their local
            search area by strengthening Google Business Profiles with
            optimized content, reviews, and ranking practices.
          </p>

          <ul>
            {whyPoints.map((point) => (
              <li key={point}>✔ {point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="gmb-offer-section">
        <div className="gmb-offer-left">
          <h2>What Do We Offer?</h2>
          <p>
            We optimize your Google Business Profile to improve map
            visibility, ranking, lead generation, and customer engagement
            for long-term success.
          </p>

          <div className="gmb-offer-illustration">
            <div className="gmb-bg-shape"></div>
            <img src={offerImg} alt="GMB Services Illustration" />
          </div>
        </div>

        <div className="gmb-offer-right">
          {offerItems.map((item) => (
            <div className="gmb-offer-item" key={item.title}>
              <div className="gmb-offer-icon">
                <img src={item.icon} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="gmb-process">
        <div className="gmb-process-wrapper">
          <h2 className="gmb-process-title">How We Optimize Your GMB Profile</h2>
          <p className="gmb-process-subtitle">
            A repeatable four-step process that keeps your local listing
            visible, active, and trusted.
          </p>

          <div className="gmb-process-steps">
            {processSteps.map((step, i) => (
              <div className="gmb-process-step" key={step.title}>
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
      <section className="gmb-testimonials">
        <div className="gmb-testimonials-wrapper">
          <h2 className="gmb-testimonials-title">What Our Clients Say</h2>

          <div className="gmb-testimonials-grid">
            {testimonials.map((t) => (
              <div className="gmb-testimonial-card" key={t.name}>
                <span className="gmb-testimonial-quote">&ldquo;</span>
                <p className="gmb-testimonial-text">{t.text}</p>
                <div className="gmb-testimonial-person">
                  <div className="gmb-testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="gmb-testimonial-name">{t.name}</div>
                    <div className="gmb-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="gmb-faq">
        <div className="gmb-faq-wrapper">
          <h2 className="gmb-faq-title">Frequently Asked Questions</h2>

          {faqs.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                className="gmb-faq-item"
                key={item.q}
                onClick={() => setOpenFaq(isOpen ? -1 : i)}
              >
                <div className="gmb-faq-question">
                  {item.q}
                  <span className={`gmb-faq-toggle ${isOpen ? "open" : ""}`}>
                    +
                  </span>
                </div>
                <div className={`gmb-faq-answer ${isOpen ? "open" : ""}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="gmb-cta-banner">
        <h2>Ready to Own Your Local Search Results?</h2>
        <p>
          Talk to us about optimizing your Google Business Profile to bring
          in more calls, visits, and customers.
        </p>
        <a href="/contact" className="gmb-cta-btn">
          Get in Touch
        </a>
      </section>
    </>
  );
}