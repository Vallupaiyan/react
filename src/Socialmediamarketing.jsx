import React, { useState } from "react";
import "../src/css/smm-service.css";

const whyPoints = [
  "Platform-specific strategy for Instagram, Facebook, and LinkedIn.",
  "Creative content calendars planned around your goals.",
  "Transparent monthly performance & engagement reporting.",
  "Data-driven ad targeting for lower cost-per-lead.",
  "Dedicated social media manager & content support.",
];

const offerItems = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    title: "Content Strategy & Calendar",
    desc: "A planned content calendar mapped to your brand voice, audience, and key business moments.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3670/3670151.png",
    title: "Creative Design & Reels",
    desc: "Scroll-stopping graphics, carousels, and short-form video content built for engagement.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    title: "Paid Social Advertising",
    desc: "Targeted Facebook, Instagram, and LinkedIn ad campaigns optimized for leads and sales.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png",
    title: "Community Management",
    desc: "Timely responses to comments and DMs that build trust and keep followers engaged.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    title: "Influencer Collaborations",
    desc: "Partnering with relevant creators to extend your reach to new, trusted audiences.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828765.png",
    title: "Analytics & Reporting",
    desc: "Monthly reports on reach, engagement, follower growth, and campaign ROI.",
  },
];

/* ============ Extra content ============ */
const stats = [
  { number: "2.5x", label: "Average engagement growth" },
  { number: "80+", label: "Brands managed across platforms" },
  { number: "45%", label: "Lower cost-per-lead with paid social" },
  { number: "10M+", label: "Monthly impressions generated" },
];

const processSteps = [
  {
    title: "Discover",
    desc: "We study your brand, audience, and competitors to shape a social strategy that fits your goals.",
  },
  {
    title: "Create",
    desc: "Our team designs content, reels, and captions that match your brand voice and platform trends.",
  },
  {
    title: "Publish",
    desc: "We schedule and post consistently, managing comments and messages as they come in.",
  },
  {
    title: "Optimize",
    desc: "We analyze performance data monthly and refine content and ad targeting for better results.",
  },
];

const testimonials = [
  {
    text: "Our Instagram engagement more than doubled within three months. The content finally feels like our brand.",
    name: "Sneha Kannan",
    role: "Founder, D2C Skincare Brand",
  },
  {
    text: "Paid social campaigns brought in qualified leads at half the cost we were paying before. Great targeting work.",
    name: "Vignesh Raja",
    role: "Marketing Head, Real Estate Firm",
  },
  {
    text: "Consistent posting and quick community responses turned our page into an active, trusted brand presence.",
    name: "Priyanka Das",
    role: "Owner, Restaurant Chain",
  },
];

const faqs = [
  {
    q: "Which social platforms do you manage?",
    a: "We work across Instagram, Facebook, LinkedIn, and YouTube, choosing the right mix based on where your audience actually is.",
  },
  {
    q: "Do you create the content or just post it?",
    a: "We handle the full cycle — strategy, design, copywriting, video editing, scheduling, and community management.",
  },
  {
    q: "Can you run paid ad campaigns as well as organic content?",
    a: "Yes. We manage both organic content and paid social advertising, and use data from one to improve the other.",
  },
  {
    q: "How is success measured?",
    a: "We track engagement, follower growth, reach, and — for paid campaigns — leads and cost-per-result, shared in monthly reports.",
  },
];

export default function SocialMediaMarketing() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="smm-hero">
        <div className="smm-hero-overlay"></div>
        <span className="smm-hero-particle p1"></span>
        <span className="smm-hero-particle p2"></span>
        <span className="smm-hero-particle p3"></span>
        <span className="smm-hero-particle p4"></span>
        <span className="smm-hero-particle p5"></span>
        <span className="smm-hero-particle p6"></span>

        <div className="smm-hero-content">
          <h1>Social Media Marketing</h1>
          <p>
            Build an engaged audience and turn followers into customers with
            strategy-driven social media marketing across every platform
            that matters.
          </p>
          <a href="/contact" className="smm-btn">
            Get in Touch
          </a>
        </div>
      </section>

      {/* ================= STATS / IMPACT SECTION ================= */}
      <section className="smm-stats">
        <div className="smm-stats-wrapper">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="smm-stat-number">{s.number}</div>
              <div className="smm-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CARDS SECTION ================= */}
      <section className="smm-card-area">
        <div className="smm-card-container">
          <div className="smm-card">
            <h3>Grow an Engaged Audience</h3>
            <p>
              We build content strategies that turn casual scrollers into
              loyal followers who actually engage with your brand.
            </p>
            <a href="/contact" className="smm-card-btn">
              Get in touch →
            </a>
          </div>

          <div className="smm-card">
            <h3>Convert Followers Into Customers</h3>
            <p>
              From reels to paid campaigns, we design social content that
              drives real business outcomes — not just likes.
            </p>
            <p>
              Improve brand recall, engagement, leads, and sales consistently.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="smm-why-wrapper">
        <div className="smm-why-left">
          <div className="smm-image-shape"></div>
          <img
            src="./src/assets/industry/Social.jpg"
            alt="Social Media Marketing"
          />
        </div>

        <div className="smm-why-right">
          <h2>Why Choose Our Social Media Marketing?</h2>
          <p>
            At Profenaa Infotech, we craft social media strategies rooted in
            your brand identity and audience behavior — not generic
            templates. Every post, reel, and campaign works toward measurable
            growth.
          </p>

          <ul>
            {whyPoints.map((point) => (
              <li key={point}>✔ {point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="smm-offer-section">
        <div className="smm-offer-left">
          <h2>What Do We Offer?</h2>
          <p>
            We manage every part of your social media presence — from
            content creation and community management to paid advertising
            and performance reporting.
          </p>

          <div className="smm-offer-illustration">
            <div className="smm-bg-shape"></div>
            <img
              src="./src/assets/industry/Social2.jpg"
              alt="Social Media Marketing Illustration"
            />
          </div>
        </div>

        <div className="smm-offer-right">
          {offerItems.map((item) => (
            <div className="smm-offer-item" key={item.title}>
              <img src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="smm-process">
        <div className="smm-process-wrapper">
          <h2 className="smm-process-title">How We Grow Your Social Presence</h2>
          <p className="smm-process-subtitle">
            A repeatable four-step process that keeps your content
            consistent, on-brand, and performance-driven.
          </p>

          <div className="smm-process-steps">
            {processSteps.map((step, i) => (
              <div className="smm-process-step" key={step.title}>
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
      <section className="smm-testimonials">
        <div className="smm-testimonials-wrapper">
          <h2 className="smm-testimonials-title">What Our Clients Say</h2>

          <div className="smm-testimonials-grid">
            {testimonials.map((t) => (
              <div className="smm-testimonial-card" key={t.name}>
                <span className="smm-testimonial-quote">&ldquo;</span>
                <p className="smm-testimonial-text">{t.text}</p>
                <div className="smm-testimonial-person">
                  <div className="smm-testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="smm-testimonial-name">{t.name}</div>
                    <div className="smm-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="smm-faq">
        <div className="smm-faq-wrapper">
          <h2 className="smm-faq-title">Frequently Asked Questions</h2>

          {faqs.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                className="smm-faq-item"
                key={item.q}
                onClick={() => setOpenFaq(isOpen ? -1 : i)}
              >
                <div className="smm-faq-question">
                  {item.q}
                  <span className={`smm-faq-toggle ${isOpen ? "open" : ""}`}>+</span>
                </div>
                <div className={`smm-faq-answer ${isOpen ? "open" : ""}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="smm-cta-banner">
        <h2>Ready to Grow Your Social Presence?</h2>
        <p>
          Talk to us about a social media strategy built around your brand,
          your audience, and your goals.
        </p>
        <a href="/contact" className="smm-cta-btn">
          Get in Touch
        </a>
      </section>
    </>
  );
}