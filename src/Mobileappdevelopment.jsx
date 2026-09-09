import React, { useEffect, useRef, useState } from "react";
import "../src/css//MobileAppDevelopment.css";

/* ---------------------------------------------------
   Profenaa Infotech — Mobile App Development (React)
   Palette: #0F1B3D (indigo) #2F6FED (blue) #FFB238 (amber)
            #F6F7FB (paper) #111528 (ink)
   Fonts:   Space Grotesk (display) / Inter (body)
--------------------------------------------------- */

const FONT_LINK_ID = "pi-font-link";

function useInjectFonts() {
  useEffect(() => {
    if (document.getElementById(FONT_LINK_ID)) return;
    const link = document.createElement("link");
    link.id = FONT_LINK_ID;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
}

/* ---------- Scroll reveal hook ---------- */
function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ---------- Animated counter (supports decimals) ---------- */
function Counter({ to, suffix = "", duration = 1400, start, decimals = 0 }) {
  const [val, setVal] = useState(decimals > 0 ? (0).toFixed(decimals) : 0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = eased * to;
      setVal(decimals > 0 ? current.toFixed(decimals) : Math.round(current));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration, decimals]);
  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

/* ---------- floating mini-icon used around the phone ---------- */
function FloatIcon({ className, style, children }) {
  return (
    <div className={`ma-float ${className || ""}`} style={style}>
      {children}
    </div>
  );
}

/* ---------- Phone mockup that "assembles" itself on load ---------- */
function BuildingPhone({ play }) {
  return (
    <div className={`ma-phone-wrap ${play ? "ma-in" : ""}`}>
      <FloatIcon className="ma-float--1" style={{ animationDelay: "0.15s" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4 5h16v11H8l-4 4V5z" stroke="#2F6FED" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      </FloatIcon>
      <FloatIcon className="ma-float--2" style={{ animationDelay: "0.35s" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="20" r="1.4" stroke="#FFB238" strokeWidth="1.6" />
          <circle cx="18" cy="20" r="1.4" stroke="#FFB238" strokeWidth="1.6" />
          <path d="M2 3h2l2.2 11.4a2 2 0 002 1.6h8.6a2 2 0 002-1.6L21 7H6" stroke="#FFB238" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </FloatIcon>
      <FloatIcon className="ma-float--3" style={{ animationDelay: "0.55s" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 3a5 5 0 015 5c0 5 2 6 2 7H5c0-1 2-2 2-7a5 5 0 015-5z" stroke="#0F1B3D" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M10 19a2 2 0 004 0" stroke="#0F1B3D" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </FloatIcon>

      <div className={`ma-phone ${play ? "ma-phone--play" : ""}`}>
        <div className="ma-phone__notch" />
        <div className="ma-phone__screen">
          <div className="ma-phone__status">
            <span className="ma-phone__time">9:41</span>
            <div className="ma-status-icons">
              <span className="ma-bar" />
              <span className="ma-bar" />
              <span className="ma-bar" />
              <span className="ma-batt" />
            </div>
          </div>

          <div className="ma-phone__app-header">
            <div className="ma-app-icon" />
            <div className="ma-app-title">
              <div className="ma-app-title-line" />
              <div className="ma-app-title-line ma-app-title-line--sm" />
            </div>
          </div>

          <div className="ma-phone__card ma-phone__card--1">
            <div className="ma-card-icon" />
            <div className="ma-card-text">
              <div className="ma-card-line" />
              <div className="ma-card-line ma-card-line--sm" />
            </div>
          </div>
          <div className="ma-phone__card ma-phone__card--2">
            <div className="ma-card-icon" />
            <div className="ma-card-text">
              <div className="ma-card-line" />
              <div className="ma-card-line ma-card-line--sm" />
            </div>
          </div>

          <div className="ma-phone__grid">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="ma-phone__navbar">
            <span className="ma-nav-dot ma-nav-dot--active" />
            <span className="ma-nav-dot" />
            <span className="ma-nav-dot" />
            <span className="ma-nav-dot" />
          </div>
        </div>

        <div className="ma-phone__toast">
          <span className="ma-toast-dot" />
          Build complete — ready to ship
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN PAGE ================= */
export default function MobileAppDevelopment() {
  useInjectFonts();
  const [heroPlay, setHeroPlay] = useState(false);
  const [statsRef, statsVisible] = useReveal(0.4);
  const [whyRef, whyVisible] = useReveal();
  const [offerRef, offerVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal(0.3);

  useEffect(() => {
    const t = setTimeout(() => setHeroPlay(true), 200);
    return () => clearTimeout(t);
  }, []);

  const platforms = [
    { label: "Android", color: "#3ED598" },
    { label: "iOS", color: "#2F6FED" },
    { label: "Cross-platform", color: "#FFB238" },
  ];

  const offers = [
    {
      icon: "platforms",
      title: "Android & iOS Development",
      text: "We build native and cross-platform apps that deliver seamless user experiences across iOS and Android devices.",
    },
    {
      icon: "briefcase",
      title: "Custom Business Apps",
      text: "From booking systems to productivity platforms, we build business-focused apps designed to streamline workflows and improve efficiency.",
    },
    {
      icon: "cursor",
      title: "UI/UX App Design",
      text: "We craft visually appealing and user-friendly interface designs that improve usability and customer engagement.",
    },
    {
      icon: "api",
      title: "API Integration & Backend",
      text: "Smooth integration with databases, payment gateways, automation tools, and third-party services for intelligent app functionality.",
    },
    {
      icon: "pulse",
      title: "App Support & Monitoring",
      text: "We monitor performance, perform updates, and ensure apps remain fast, secure, and optimized 24/7.",
    },
    {
      icon: "gauge",
      title: "Performance Optimization",
      text: "We optimize app speed, reduce load times, and improve responsiveness for higher customer satisfaction.",
    },
  ];

  const stack = [
    "Kotlin", "Swift", "Flutter", "React Native", "Firebase",
    "Node.js", "GraphQL", "REST APIs", "AWS", "SQLite",
  ];

  const process = [
    { n: "01", t: "Discover", d: "We map your business goals, users, and the platforms they're on." },
    { n: "02", t: "Design", d: "Mobile-first wireframes and UI prototypes you review at every step." },
    { n: "03", t: "Develop", d: "Native or cross-platform build with clean, scalable, testable code." },
    { n: "04", t: "Launch & Support", d: "App store submission, monitoring, and updates after you go live." },
  ];

  const stats = [
    { to: 120, suffix: "+", decimals: 0, label: "Apps launched" },
    { to: 2, suffix: "M+", decimals: 0, label: "App downloads driven" },
    { to: 4.8, suffix: "★", decimals: 1, label: "Average store rating" },
    { to: 99.9, suffix: "%", decimals: 1, label: "Uptime & support" },
  ];

  return (
    <div className="ma-root">

      {/* ================= HERO ================= */}
      <section className="ma-hero">
        <div className="ma-hero__glow" />
        <div className="ma-hero__grid">
          <div className={`ma-hero__copy ${heroPlay ? "ma-in-copy" : "ma-pre"}`}>
            <span className="ma-eyebrow">Mobile App Development · Android &amp; iOS</span>
            <h1>
              Mobile apps that launch fast
              <br />
              and <span className="ma-underline">keep users coming back.</span>
            </h1>
            <p>
              We design and build native and cross-platform apps for Android
              and iOS — fast, secure, and ready to scale for businesses
              across Tamil Nadu.
            </p>

            <div className="ma-platforms">
              <span className="ma-platforms__label">Built for</span>
              {platforms.map((p) => (
                <span className="ma-chip" key={p.label}>
                  <span className="ma-chip__dot" style={{ background: p.color }} />
                  {p.label}
                </span>
              ))}
            </div>

            <div className="ma-hero__actions">
              <a href="./contact" className="ma-btn ma-btn--primary">
                Get in Touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#offer" className="ma-btn ma-btn--ghost">
                See what we build
              </a>
            </div>
          </div>

          <div className={`ma-hero__visual ${heroPlay ? "ma-in-late" : "ma-pre"}`}>
            <BuildingPhone play={heroPlay} />
          </div>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="ma-stats" ref={statsRef}>
        <div className="ma-stats__grid">
          {stats.map((s, i) => (
            <div
              className={`ma-stat ${statsVisible ? "ma-fade-up" : "ma-pre"}`}
              style={{ animationDelay: `${i * 0.09}s` }}
              key={s.label}
            >
              <div className="ma-stat__num">
                <Counter to={s.to} suffix={s.suffix} decimals={s.decimals} start={statsVisible} />
              </div>
              <div className="ma-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="ma-stats__note">*Figures shown are placeholders — swap in your real numbers.</p>
      </section>

      {/* ================= CARDS ================= */}
      <section className="ma-card-area">
        <div className="ma-card-container">
          <div className="ma-card ma-card--tilt">
            <span className="ma-card__tag">Product</span>
            <h3>Transforming Ideas into Feature-Packed Mobile Apps</h3>
            <p>
              We design and develop cross-platform mobile apps that focus on
              performance, convenience, and delightful user experience.
            </p>
            <a href="./contact" className="ma-card-link">
              Get in touch
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="ma-card ma-card--tilt ma-card--dark">
            <span className="ma-card__tag ma-card__tag--amber">Growth</span>
            <h3>Smart Apps Built for Business Growth</h3>
            <p>
              Our team uses modern frameworks and clean coding standards to
              deliver future-ready mobile solutions.
            </p>
            <p>
              We ensure every app supports scalability, security, and
              optimal performance for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="ma-why" ref={whyRef}>
        <div className={`ma-why__visual ${whyVisible ? "ma-fade-right" : "ma-pre"}`}>
          <div className="ma-why__shape" />
          <div className="ma-why__frame">
            <div className="ma-why__frame-top">
              <div className="ma-why__frame-icon" />
              <div className="ma-why__frame-meta">
                <div className="ma-why__frame-name" />
                <div className="ma-why__frame-stars">★★★★★</div>
              </div>
            </div>
            <div className="ma-why__frame-bars">
              <div className="ma-why__frame-bar" style={{ width: "92%" }} />
              <div className="ma-why__frame-bar" style={{ width: "78%" }} />
              <div className="ma-why__frame-bar" style={{ width: "85%" }} />
            </div>
          </div>
        </div>

        <div className={`ma-why__copy ${whyVisible ? "ma-fade-left" : "ma-pre"}`}>
          <span className="ma-eyebrow ma-eyebrow--dark">Why Choose Us</span>
          <h2>Why Choose Our Mobile App Development Services?</h2>
          <p>
            At Profenaa Infotech, we build advanced mobile applications that
            enhance engagement and enable businesses to operate more
            efficiently in the competitive digital world.
          </p>
          <ul className="ma-checklist">
            {[
              "Agile development with refined UI/UX workflows.",
              "Transparent costing with no hidden charges.",
              "On-time delivery with structured project execution.",
              "Clean, secure, and scalable mobile app architecture.",
              "Dedicated support team for updates and maintenance.",
            ].map((item, i) => (
              <li key={i} style={{ transitionDelay: `${0.08 * i}s` }}>
                <span className="ma-check">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8.5l3.2 3.2L13 4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="ma-offer" id="offer" ref={offerRef}>
        <div className="ma-offer__intro">
          <span className="ma-eyebrow ma-eyebrow--dark">What We Offer</span>
          <h2>Everything your app needs, in one team.</h2>
          <p>
            User-centric mobile applications that combine intuitive design,
            powerful functionality, and effortless performance across
            platforms and devices.
          </p>
        </div>

        <div className="ma-offer__grid">
          {offers.map((o, i) => (
            <div
              className={`ma-offer-item ${offerVisible ? "ma-fade-up" : "ma-pre"}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              key={o.title}
            >
              <span className="ma-offer-item__icon">
                <OfferIcon name={o.icon} />
              </span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECH STACK MARQUEE ================= */}
      <section className="ma-tech">
        <div className="ma-tech__intro">
          <span className="ma-eyebrow">Tools &amp; Tech</span>
          <h2>What we build with.</h2>
        </div>
        <div className="ma-tech__track-wrap">
          <div className="ma-tech__track">
            {[...stack, ...stack].map((tname, i) => (
              <span className="ma-tech-chip" key={`${tname}-${i}`}>
                {tname}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="ma-process">
        <div className="ma-process__intro">
          <span className="ma-eyebrow ma-eyebrow--dark">How We Work</span>
          <h2>Four steps from idea to app store.</h2>
        </div>
        <div className="ma-process__rail">
          {process.map((p, i) => (
            <div className="ma-process__step" key={p.n}>
              <div className="ma-process__num">{p.n}</div>
              <h4>{p.t}</h4>
              <p>{p.d}</p>
              {i < process.length - 1 && <div className="ma-process__connector" />}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="ma-cta" ref={ctaRef}>
        <div className={`ma-cta__box ${ctaVisible ? "ma-fade-up" : "ma-pre"}`}>
          <h2>Ready to put your business in your customer's pocket?</h2>
          <p>Tell us about your app idea — we'll get back within 24 hours.</p>
          <a href="./contact" className="ma-btn ma-btn--amber">
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

/* ---------- simple inline icon set (no external icon deps) ---------- */
function OfferIcon({ name }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" };
  switch (name) {
    case "platforms":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <rect x="9" y="9" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 13h18" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "cursor":
      return (
        <svg {...common}>
          <path d="M5 3l14 6-6 2-2 6-6-14z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "api":
      return (
        <svg {...common}>
          <path d="M9 3v4M15 3v4M9 17v4M15 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="6" y="7" width="12" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7 12h2.5l1.5-4 2.5 8 1.5-4H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <path d="M4 15a8 8 0 1116 0" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 15l4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}