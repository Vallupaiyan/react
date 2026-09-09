import React, { useEffect, useRef, useState } from "react";
import "../src/css/EcommerceService.css";

/* ---------- Scroll reveal hook ---------- */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`es-reveal ${visible ? "es-reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Animated counter ---------- */
function Counter({ end, suffix = "", duration = 1600 }) {
  const [ref, visible] = useReveal(0.4);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, end, duration]);

  return (
    <span ref={ref} className="es-counter-num">
      {val}
      {suffix}
    </span>
  );
}

/* ---------- Scroll progress bar ---------- */
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

/* ---------- Ripple click effect ---------- */
function addRipple(e) {
  const btn = e.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(btn.clientWidth, btn.clientHeight);
  const rect = btn.getBoundingClientRect();
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
  circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;
  circle.className = "es-ripple";
  const old = btn.querySelector(".es-ripple");
  if (old) old.remove();
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 650);
}

/* ---------- FAQ Accordion item ---------- */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`es-faq-item ${open ? "es-faq-open" : ""}`}>
      <button className="es-faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="es-faq-icon">{open ? "−" : "+"}</span>
      </button>
      <div className="es-faq-a-wrap">
        <p className="es-faq-a">{a}</p>
      </div>
    </div>
  );
}

export default function EcommerceServicePage() {
  const progress = useScrollProgress();
  const [testiIndex, setTestiIndex] = useState(0);

  const offers = [
    { icon: "https://cdn-icons-png.flaticon.com/512/3500/3500185.png", title: "Custom E-Commerce Store", text: "Unique storefronts crafted around your business goals, brand identity, and buying experience." },
    { icon: "https://cdn-icons-png.flaticon.com/512/5397/5397913.png", title: "Product & Category Management", text: "Smooth catalog setup with advanced sorting, filtering, tagging, and search systems." },
    { icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png", title: "Mobile-Responsive Stores", text: "Your store looks perfect and works flawlessly across desktop, tablet, and mobile devices." },
    { icon: "https://cdn-icons-png.flaticon.com/512/619/619016.png", title: "Secure Payment Integration", text: "UPI, credit card, debit card, wallet, or COD — integrate fast and secure checkout systems." },
    { icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png", title: "Marketplace Development", text: "Single-vendor or multi-vendor e-commerce platforms with vendor dashboards and order management." },
    { icon: "https://cdn-icons-png.flaticon.com/512/1250/1250615.png", title: "Speed & Conversion Optimization", text: "Faster loading, improved experience, and analytics-driven enhancements to boost sales conversions." },
  ];

  const steps = [
    { title: "Discovery", text: "We study your products, audience and business goals to plan the right store structure." },
    { title: "Design", text: "Wireframes and UI crafted for engagement, trust and a smooth buying journey." },
    { title: "Development", text: "Store built with catalog, payments, and integrations — tested at every stage." },
    { title: "Launch & Support", text: "We deploy, monitor and keep improving your store post-launch." },
  ];

  const platforms = [
    { name: "Shopify", emoji: "🛍️" },
    { name: "WooCommerce", emoji: "🧩" },
    { name: "Magento", emoji: "🧱" },
    { name: "Custom Build", emoji: "⚙️" },
  ];

  const plans = [
    {
      name: "Starter Store",
      price: "₹35,000",
      period: " one-time",
      features: ["Up to 50 products", "Single payment gateway", "Responsive design", "Basic SEO setup"],
    },
    {
      name: "Growth Store",
      price: "₹75,000",
      period: " one-time",
      highlight: true,
      features: [
        "Unlimited products",
        "Multiple payment gateways",
        "Advanced filters & search",
        "Speed optimization",
        "3 months free support",
      ],
    },
    {
      name: "Marketplace",
      price: "Custom",
      period: " quote",
      features: [
        "Multi-vendor dashboards",
        "Order & inventory automation",
        "Custom integrations",
        "Dedicated support team",
        "Scalable infrastructure",
      ],
    },
  ];

  const testimonials = [
    { quote: "Store launch-ku fast timeline vachiruntha, expectation-ku mela deliver panninanga.", name: "Ramesh V.", role: "Founder, Retail Brand" },
    { quote: "Payment integration and checkout flow romba smooth ah irukku, returns kammi aayiduchu.", name: "Sowmya P.", role: "Owner, Boutique Store" },
    { quote: "Multi-vendor marketplace build panna best team, support kuda continuous ah irundhanga.", name: "Ajay K.", role: "CEO, Marketplace Startup" },
  ];

  const faqs = [
    { q: "Which platforms do you build on?", a: "We work with Shopify, WooCommerce, Magento, and fully custom-built stores depending on your scale and budget." },
    { q: "Can you migrate my existing store?", a: "Yes, we handle migration of products, orders and customer data from your current platform with minimal downtime." },
    { q: "Do you handle payment gateway setup?", a: "We integrate UPI, cards, wallets and COD with secure, PCI-compliant payment gateways as part of every build." },
    { q: "Is post-launch support included?", a: "Growth and Marketplace plans include free support windows, and ongoing maintenance plans are available separately." },
  ];

  useEffect(() => {
    const id = setInterval(() => setTestiIndex((i) => (i + 1) % testimonials.length), 3500);
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <div className="es-root">
      {/* ================= SCROLL PROGRESS ================= */}
      <div className="es-progress-bar" style={{ width: `${progress}%` }}></div>

      {/* ================= MARQUEE ================= */}
      <div className="es-marquee">
        <div className="es-marquee-track">
          {Array(2).fill(0).map((_, i) => (
            <span key={i}>
              ✦ CUSTOM STOREFRONTS &nbsp; ✦ SECURE PAYMENT INTEGRATION &nbsp; ✦ MULTI-VENDOR MARKETPLACES &nbsp; ✦ MOBILE-READY & FAST &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section className="es-hero">
        <div className="es-hero-overlay"></div>
        <div className="es-hero-blobs" aria-hidden="true"></div>
        <div className="es-hero-content">
          <h1 className="es-hero-title">
            {"Powerful E-Commerce Development".split(" ").map((word, i) => (
              <span key={i} className="es-word" style={{ animationDelay: `${0.15 + i * 0.1}s` }}>
                {word}&nbsp;
              </span>
            ))}
          </h1>
          <p>Build feature-rich online stores that are fast, scalable, secure and designed to convert visitors into customers.</p>
          <a href="./contact" className="es-btn" onClick={addRipple}>Start Selling Online</a>
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="es-card-area">
        <div className="es-card-container">
          <div className="es-card">
            <h3>E-Commerce That Converts</h3>
            <p>We create high-performance online stores with smart design, product layouts, search filters, and intuitive user experience.</p>
            <a href="./contact" className="es-card-btn" onClick={addRipple}>Contact Us →</a>
          </div>
          <div className="es-card">
            <h3>Performance-Driven Online Stores</h3>
            <p>Whether single-vendor or multi-vendor, we ensure your store loads fast, flows smoothly, and turns visitors into paying customers.</p>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="es-stats">
        <div className="es-stat"><Counter end={220} suffix="+" /><div className="es-stat-label">Stores Launched</div></div>
        <div className="es-stat"><Counter end={2} suffix="s" /><div className="es-stat-label">Avg. Page Load</div></div>
        <div className="es-stat"><Counter end={38} suffix="%" /><div className="es-stat-label">Avg. Conversion Uplift</div></div>
        <div className="es-stat"><Counter end={99} suffix="%" /><div className="es-stat-label">Uptime Guaranteed</div></div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="es-why-wrapper">
        <div className="es-why-left">
          <div className="es-image-shape"></div>
          <img src="../src/assets/industry/ecommers.jpg" alt="E-Commerce Development Services" />
        </div>

        <div className="es-why-right">
          <h2>Why Choose Our E-Commerce Services?</h2>
          <p>
            At Profenaa Infotech, we develop powerful online selling platforms built for performance, product
            discovery, smooth checkout, and business growth.
          </p>
          <ul>
            {[
              "Scalable and secure e-commerce website development.",
              "UI/UX optimized for shopping engagement and sales.",
              "Fast loading, responsive, and SEO-friendly architecture.",
              "Payment gateway integration and frictionless checkout.",
              "Fully managed maintenance and ongoing support.",
            ].map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="es-offer-section">
        <div className="es-section-heading">
          <h2>What Do We Offer?</h2>
          <p>We build complete e-commerce ecosystems including UI, development, product setup, integrations, optimization, and deployment.</p>
        </div>

        <div className="es-offer-grid">
          {offers.map((o) => (
            <div key={o.title} className="es-offer-item">
              <img src={o.icon} alt="" className="es-offer-icon" />
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="es-process">
        <div className="es-section-heading">
          <h2>How We Build Your Store</h2>
        </div>
        <div className="es-process-row">
          {steps.map((s, i) => (
            <div key={s.title} className="es-step">
              <div className="es-step-num">{i + 1}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PLATFORMS ================= */}
      <section className="es-platforms">
        <div className="es-section-heading es-heading-light">
          <h2>Platforms We Work With</h2>
        </div>
        <div className="es-platform-row">
          {platforms.map((p) => (
            <div key={p.name} className="es-platform-card">
              <span className="es-platform-emoji">{p.emoji}</span>
              <p>{p.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="es-pricing">
        <div className="es-section-heading">
          <h2>Store Packages</h2>
        </div>
        <div className="es-pricing-grid">
          {plans.map((p) => (
            <div key={p.name} className={`es-plan ${p.highlight ? "es-plan-highlight" : ""}`}>
              {p.highlight && <span className="es-plan-badge">Most Popular</span>}
              <h3>{p.name}</h3>
              <div className="es-plan-price">{p.price}<span>{p.period}</span></div>
              <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <a href="./contact" className="es-plan-btn" onClick={addRipple}>Get Started</a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="es-testimonials">
        <div className="es-section-heading es-heading-light">
          <h2>What Our Clients Say</h2>
        </div>
        <div className="es-testi-carousel">
          <div className="es-testi-track" style={{ transform: `translateX(-${testiIndex * 100}%)` }}>
            {testimonials.map((t) => (
              <div className="es-testi-slide" key={t.name}>
                <div className="es-testi-card">
                  <p className="es-testi-quote">{t.quote}</p>
                  <div className="es-testi-name">{t.name}</div>
                  <div className="es-testi-role">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="es-testi-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`es-dot ${i === testiIndex ? "es-dot-active" : ""}`}
                onClick={() => setTestiIndex(i)}
                aria-label={`testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="es-faq">
        <div className="es-section-heading">
          <h2>Frequently Asked Questions</h2>
        </div>
        {faqs.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
      </section>

      {/* ================= CTA ================= */}
      <section className="es-cta">
        <h2>Ready to Launch Your Online Store?</h2>
        <p>Talk to us and let's build a store that sells around the clock.</p>
        <a href="./contact" className="es-btn" onClick={addRipple}>Start Selling Online</a>
      </section>
    </div>
  );
}