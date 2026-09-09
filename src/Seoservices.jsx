import React, { useEffect, useRef, useState } from "react";
import "../src/css//SEOServices.css";

/* ---------------------------------------------------
   Profenaa Infotech — SEO Services (React)
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

/* ---------- Animated counter (supports decimals + counting down) ---------- */
function Counter({ from = 0, to, suffix = "", duration = 1400, start, decimals = 0 }) {
  const [val, setVal] = useState(decimals > 0 ? from.toFixed(decimals) : from);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = from + (to - from) * eased;
      setVal(decimals > 0 ? current.toFixed(decimals) : Math.round(current));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, from, duration, decimals]);
  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

/* ---------- floating mini-icon used around the hero mockup ---------- */
function FloatIcon({ className, style, children }) {
  return (
    <div className={`so-float ${className || ""}`} style={style}>
      {children}
    </div>
  );
}

/* ---------- SERP mockup: types a keyword, ranks climb to #1 ---------- */
function SearchClimb({ play }) {
  const keyword = "web design company chennai";
  const [typed, setTyped] = useState("");
  const [showRank, setShowRank] = useState(false);

  useEffect(() => {
    if (!play) return;
    let i = 0;
    const typeIv = setInterval(() => {
      i += 1;
      setTyped(keyword.slice(0, i));
      if (i >= keyword.length) clearInterval(typeIv);
    }, 40);
    const rankT = setTimeout(() => setShowRank(true), 1500);
    return () => {
      clearInterval(typeIv);
      clearTimeout(rankT);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play]);

  return (
    <div className={`so-serp-wrap ${play ? "so-in" : ""}`}>
      <FloatIcon className="so-float--1" style={{ animationDelay: "0.15s" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M3 17l6-6 4 4 8-9" stroke="#3ED598" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 6h6v6" stroke="#3ED598" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </FloatIcon>
      <FloatIcon className="so-float--2" style={{ animationDelay: "0.35s" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 15l6-6" stroke="#FFB238" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M11 6.5l1-1a3.5 3.5 0 015 5l-1 1M13 17.5l-1 1a3.5 3.5 0 01-5-5l1-1" stroke="#FFB238" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </FloatIcon>

      <div className={`so-serp ${play ? "so-serp--play" : ""}`}>
        <div className="so-serp__bar">
          <span className="so-dot" style={{ background: "#FF6161" }} />
          <span className="so-dot" style={{ background: "#FFB238" }} />
          <span className="so-dot" style={{ background: "#3ED598" }} />
          <div className="so-serp__url">google.com/search</div>
        </div>

        <div className="so-serp__body">
          <div className="so-search-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#8A91AC" strokeWidth="1.8" />
              <path d="M21 21l-4.3-4.3" stroke="#8A91AC" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span className="so-search-text">
              {typed}
              <span className="so-caret" />
            </span>
          </div>

          <div className="so-results">
            <div className="so-result" style={{ animationDelay: "0.9s" }}>
              <div className="so-result__url" />
              <div className="so-result__title" />
              <div className="so-result__desc" />
            </div>
            <div className="so-result" style={{ animationDelay: "1.05s" }}>
              <div className="so-result__url" />
              <div className="so-result__title" />
              <div className="so-result__desc" />
            </div>
            <div className="so-result so-result--highlight" style={{ animationDelay: "1.2s" }}>
              <div className="so-result__badge">#1</div>
              <div className="so-result__url so-result__url--brand" />
              <div className="so-result__title so-result__title--brand" />
              <div className="so-result__desc" />
            </div>
          </div>
        </div>

        <div className="so-rank-card">
          <div className="so-rank-card__label">Your ranking</div>
          <div className="so-rank-card__num">
            <Counter from={47} to={1} start={showRank} />
          </div>
          <svg className="so-spark" viewBox="0 0 120 40" preserveAspectRatio="none">
            <path
              className={`so-spark__path ${showRank ? "so-spark__path--draw" : ""}`}
              d="M2,36 C20,34 30,20 45,22 C60,24 65,10 80,8 C95,6 105,4 118,2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN PAGE ================= */
export default function SEOServices() {
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

  const focusAreas = [
    { label: "On-Page", color: "#2F6FED" },
    { label: "Off-Page", color: "#FFB238" },
    { label: "Technical", color: "#3ED598" },
    { label: "Local", color: "#FF6161" },
  ];

  const offers = [
    {
      icon: "gear",
      title: "Technical SEO Optimization",
      text: "We improve your website loading speed, crawlability, indexing, and overall technical structure to meet search engine performance standards.",
    },
    {
      icon: "page",
      title: "On-Page SEO",
      text: "From keyword mapping to meta tags, content structuring, and internal linking — we ensure every page is fully optimized to rank.",
    },
    {
      icon: "link",
      title: "Off-Page SEO & Backlinks",
      text: "Gain authority with quality backlinks, listings, outreach, and brand-building tactics that improve trust and ranking strength.",
    },
    {
      icon: "pin",
      title: "Local SEO Services",
      text: "Improve your visibility on Google Maps, local directories, and geo-specific searches to attract more nearby customers.",
    },
    {
      icon: "chart",
      title: "SEO Monitoring & Reports",
      text: "Monthly tracking reports covering keywords, traffic, conversions, ranking growth, and insights for continuous improvement.",
    },
    {
      icon: "pencil",
      title: "SEO Content Strategy",
      text: "Keyword-rich, audience-centered content planning that improves authority, visibility, and attracts search-driven customers.",
    },
  ];

  const tools = [
    "Google Search Console", "Google Analytics 4", "Ahrefs", "SEMrush",
    "Screaming Frog", "PageSpeed Insights", "Google Business Profile",
    "Google Tag Manager", "Moz", "Looker Studio",
  ];

  const process = [
    { n: "01", t: "Audit", d: "A full technical, on-page, and competitive audit of where you stand today." },
    { n: "02", t: "Strategy", d: "Keyword mapping and a prioritized roadmap tied to real business goals." },
    { n: "03", t: "Optimize", d: "On-page, technical, and content fixes shipped in focused sprints." },
    { n: "04", t: "Track & Grow", d: "Monthly reporting, link building, and continuous iteration." },
  ];

  const stats = [
    { to: 250, suffix: "+", label: "Keywords ranked on page 1" },
    { to: 3.2, suffix: "x", decimals: 1, label: "Avg. organic traffic growth" },
    { to: 92, suffix: "%", label: "Client retention rate" },
    { to: 30, suffix: "+", label: "Industries served" },
  ];

  return (
    <div className="so-root">
      {/* ================= HERO ================= */}
      <section className="so-hero">
        <div className="so-hero__glow" />
        <div className="so-hero__grid">
          <div className={`so-hero__copy ${heroPlay ? "so-in-copy" : "so-pre"}`}>
            <span className="so-eyebrow">SEO Services · Tamil Nadu</span>
            <h1>
              Rank higher, and
              <br />
              <span className="so-underline">stay there.</span>
            </h1>
            <p>
              Result-driven SEO strategies — technical, on-page, off-page,
              and local — built to grow organic traffic and turn search
              visibility into real business.
            </p>

            <div className="so-focus">
              <span className="so-focus__label">Focus areas</span>
              {focusAreas.map((f) => (
                <span className="so-chip" key={f.label}>
                  <span className="so-chip__dot" style={{ background: f.color }} />
                  {f.label}
                </span>
              ))}
            </div>

            <div className="so-hero__actions">
              <a href="./contact" className="so-btn so-btn--primary">
                Get in Touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#offer" className="so-btn so-btn--ghost">
                See what we optimize
              </a>
            </div>
          </div>

          <div className={`so-hero__visual ${heroPlay ? "so-in-late" : "so-pre"}`}>
            <SearchClimb play={heroPlay} />
          </div>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="so-stats" ref={statsRef}>
        <div className="so-stats__grid">
          {stats.map((s, i) => (
            <div
              className={`so-stat ${statsVisible ? "so-fade-up" : "so-pre"}`}
              style={{ animationDelay: `${i * 0.09}s` }}
              key={s.label}
            >
              <div className="so-stat__num">
                <Counter to={s.to} suffix={s.suffix} decimals={s.decimals || 0} start={statsVisible} />
              </div>
              <div className="so-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="so-stats__note">*Figures shown are placeholders — swap in your real numbers.</p>
      </section>

      {/* ================= CARDS ================= */}
      <section className="so-card-area">
        <div className="so-card-container">
          <div className="so-card so-card--tilt">
            <span className="so-card__tag">Visibility</span>
            <h3>Boost Your Online Visibility</h3>
            <p>
              We craft powerful SEO strategies that help your website rank
              higher, drive authentic traffic, and deliver long-term search
              success.
            </p>
            <a href="./contact" className="so-card-link">
              Get in touch
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="so-card so-card--tilt so-card--dark">
            <span className="so-card__tag so-card__tag--amber">Growth</span>
            <h3>Grow Your Business With Quality Leads</h3>
            <p>
              Our SEO services are built for measurable business growth with
              proven tactics that improve authority, trust, and discovery
              online.
            </p>
            <p>
              We focus on long-term visibility that helps your brand attract
              customers from search engines consistently.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="so-why" ref={whyRef}>
        <div className={`so-why__visual ${whyVisible ? "so-fade-right" : "so-pre"}`}>
          <div className="so-why__shape" />
          <div className="so-why__frame">
            <div className="so-why__frame-head">
              <span className="so-why__frame-title" />
              <span className="so-why__frame-pill">Live tracking</span>
            </div>

            <div className="so-kw-row">
              <span className="so-kw-name" style={{ width: "58%" }} />
              <span className="so-kw-badge">▲ 14</span>
            </div>
            <div className="so-kw-row">
              <span className="so-kw-name" style={{ width: "42%" }} />
              <span className="so-kw-badge">▲ 6</span>
            </div>
            <div className="so-kw-row">
              <span className="so-kw-name" style={{ width: "68%" }} />
              <span className="so-kw-badge">▲ 23</span>
            </div>

            <svg className="so-why__mini-chart" viewBox="0 0 220 60" preserveAspectRatio="none">
              <polyline
                points="0,50 30,42 60,45 90,28 120,32 150,15 180,20 220,5"
                fill="none"
                stroke="#2F6FED"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className={`so-why__copy ${whyVisible ? "so-fade-left" : "so-pre"}`}>
          <span className="so-eyebrow so-eyebrow--dark">Why Choose Us</span>
          <h2>Why Choose Our SEO Services?</h2>
          <p>
            At Profenaa Infotech, we believe SEO is not just ranking — it's
            about generating ROI-focused growth. Our team delivers modern
            SEO strategies that enhance visibility, boost organic traffic,
            and help businesses dominate competition.
          </p>
          <ul className="so-checklist">
            {[
              "Data-driven SEO strategies tailored to your business.",
              "Complete transparency — no hidden strategies or costs.",
              "Consistent performance tracking & detailed reporting.",
              "White-hat SEO ensuring long-term results and compliance.",
              "Dedicated optimization and technical support team.",
            ].map((item, i) => (
              <li key={i} style={{ transitionDelay: `${0.08 * i}s` }}>
                <span className="so-check">
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
      <section className="so-offer" id="offer" ref={offerRef}>
        <div className="so-offer__intro">
          <span className="so-eyebrow so-eyebrow--dark">What We Offer</span>
          <h2>Every layer of SEO, covered.</h2>
          <p>
            On-page optimization, technical SEO, strategic keyword
            targeting, and content planning — helping you outperform
            competitors consistently.
          </p>
        </div>

        <div className="so-offer__grid">
          {offers.map((o, i) => (
            <div
              className={`so-offer-item ${offerVisible ? "so-fade-up" : "so-pre"}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              key={o.title}
            >
              <span className="so-offer-item__icon">
                <OfferIcon name={o.icon} />
              </span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TOOLS MARQUEE ================= */}
      <section className="so-tools">
        <div className="so-tools__intro">
          <span className="so-eyebrow">Platforms &amp; Tools</span>
          <h2>What we track and optimize with.</h2>
        </div>
        <div className="so-tools__track-wrap">
          <div className="so-tools__track">
            {[...tools, ...tools].map((tname, i) => (
              <span className="so-tools-chip" key={`${tname}-${i}`}>
                {tname}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="so-process">
        <div className="so-process__intro">
          <span className="so-eyebrow so-eyebrow--dark">How We Work</span>
          <h2>Four steps to page one.</h2>
        </div>
        <div className="so-process__rail">
          {process.map((p, i) => (
            <div className="so-process__step" key={p.n}>
              <div className="so-process__num">{p.n}</div>
              <h4>{p.t}</h4>
              <p>{p.d}</p>
              {i < process.length - 1 && <div className="so-process__connector" />}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="so-cta" ref={ctaRef}>
        <div className={`so-cta__box ${ctaVisible ? "so-fade-up" : "so-pre"}`}>
          <h2>Ready to own page one?</h2>
          <p>Tell us what you're ranking for — we'll show you the gap and how to close it.</p>
          <a href="./contact" className="so-btn so-btn--amber">
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
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3L5.6 5.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "page":
      return (
        <svg {...common}>
          <path d="M7 3h7l4 4v14H7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M9.5 12h6M9.5 15.5h6M9.5 8.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M9 15l6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path
            d="M11 6.5l1-1a3.5 3.5 0 015 5l-1 1M13 17.5l-1 1a3.5 3.5 0 01-5-5l1-1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="12" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M7 15l3.5-4 3 3L19 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "pencil":
      return (
        <svg {...common}>
          <path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M14 6l3 3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    default:
      return null;
  }
}