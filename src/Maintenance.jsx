import React, { useEffect, useRef, useState } from "react";
import "../src/css/Maintenance.css";

/**
 * Application Maintenance Services — single-function React version
 *
 * Everything (hero, stats, cards, why-choose-us, process, offer grid,
 * plans, FAQ, final CTA) lives inside one component function below.
 * Scroll-reveal and count-up animation are handled with plain
 * IntersectionObserver + requestAnimationFrame inside a couple of
 * useEffect blocks — no separate sub-components, no separate hooks.
 *
 * The hero background animation (an animated "monitoring network" —
 * pulsing nodes, connecting lines, traveling signal pulses, health-check
 * ping rings) lives inline in this same file via a canvas ref + one
 * useEffect. Plain canvas, no dependencies, no separate file.
 *
 * NOTE: STATS numbers are placeholders — swap for real figures before
 * this goes live.
 *
 * Files needed: ApplicationMaintenance.jsx (this file) +
 * Maintenance.css (same class names as before) in the same folder.
 */

const WHY_POINTS = [
  "Problems get caught in monitoring, not reported by your users.",
  "Real response-time commitments, not vague promises.",
  "Code that gets cleaner with every release cycle, never messier.",
  "Security patched against threats as they emerge, not months later.",
  "One support team that actually knows your codebase, no ticket rotation.",
];

const OFFER_ITEMS = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/8743/8743921.png",
    title: "Bug Fixing & Issue Resolution",
    text: "We track down bugs, errors, and performance bottlenecks fast, and fix them before they reach your users.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10008/10008076.png",
    title: "24/7 Application Monitoring",
    text: "Automated alerts and human oversight watch your system around the clock, catching failures before they become outages.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10064/10064244.png",
    title: "Performance Optimization",
    text: "We tune load times, responsiveness, and database queries so your application stays fast as usage grows.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
    title: "Security Patching & Audits",
    text: "Regular vulnerability scans, patches, and compliance checks keep your application ahead of new threats.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/9958/9958082.png",
    title: "Feature Enhancements",
    text: "Need a new capability or a UI refresh? We ship enhancements without disrupting the application your users already rely on.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10064/10064244.png",
    title: "Version Upgrades & Modernization",
    text: "We migrate outdated applications onto current frameworks, APIs, and infrastructure, on your timeline.",
  },
];

// Placeholder figures — replace with real numbers before publishing.
const STATS = [
  { value: 100, suffix: "+", label: "Applications Supported" },
  { literal: "24/7", label: "Monitoring & Support" },
  { value: 2, prefix: "<", suffix: " hrs", label: "Avg. Response Time" },
  { value: 10, suffix: "+ yrs", label: "Team Experience" },
];

const PROCESS_STEPS = [
  {
    title: "Assess",
    text: "We audit your application's health, dependencies, and risk areas before touching a single line of code.",
  },
  {
    title: "Plan",
    text: "You get a clear maintenance roadmap: what's urgent, what can wait, and what it will take to fix.",
  },
  {
    title: "Execute",
    text: "Our engineers patch, optimize, and upgrade with minimal disruption to your users.",
  },
  {
    title: "Monitor",
    text: "Automated alerts and human oversight catch issues before your customers do.",
  },
  {
    title: "Report",
    text: "Regular, plain-language updates on what changed, what improved, and what's next.",
  },
];

const PLANS = [
  {
    name: "Essential",
    tagline: "For stable applications that just need a safety net.",
    features: [
      "Monthly health checks",
      "Critical security patches",
      "Email support, next business day",
      "Monthly status report",
    ],
  },
  {
    name: "Growth",
    tagline: "For applications your customers use every day.",
    featured: true,
    features: [
      "Weekly monitoring & health checks",
      "Priority bug fixes",
      "Security patches within 48 hours",
      "Phone & email support, same day",
      "Quarterly performance review",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For business-critical systems that can't go down.",
    features: [
      "24/7 monitoring & incident response",
      "Dedicated support engineer",
      "Same-day critical patching",
      "Custom SLA",
      "Monthly roadmap & architecture review",
    ],
  },
];

const FAQS = [
  {
    q: "Do you take over maintenance from our current vendor?",
    a: "Yes. We start with a technical handover audit so nothing gets lost in the transition, then take full ownership of ongoing support.",
  },
  {
    q: "What counts as an emergency versus a scheduled fix?",
    a: "Anything affecting live users or data, like outages, security incidents, or a broken checkout, is treated as an emergency. Everything else is scheduled into your regular maintenance window.",
  },
  {
    q: "Can you support older or legacy applications?",
    a: "Yes. We regularly maintain applications built on older frameworks and can plan a modernization path alongside day-to-day support.",
  },
  {
    q: "Do you provide a formal SLA?",
    a: "Growth and Enterprise plans include a written SLA covering response times, escalation paths, and reporting.",
  },
  {
    q: "How do you keep us updated?",
    a: "You get scheduled reports plus direct access to your support engineer, so nothing disappears into a ticket queue.",
  },
];

// Section keys observed for scroll-reveal (order doesn't matter here).
const SECTION_KEYS = ["stats", "cards", "why", "offer", "plans", "faq", "cta"];

// ---------- Hero background animation tuning ----------
// A mesh of nodes (your monitored applications/servers) connected by faint
// lines. Small glowing pulses travel along those lines at intervals, and
// nodes occasionally emit a soft "ping" ring — standing in for continuous
// health checks / uptime monitoring, matching "Your Applications, Always On".
const HERO_NODE_COUNT = 30;
const HERO_MAX_LINK_DIST = 170; // px, before DPR scaling
const HERO_PULSE_INTERVAL_MS = 550;
const HERO_MAX_PULSES = 19;
const HERO_PING_INTERVAL_MS = 1400;
const HERO_COLOR_LINE = "169,169,169"; // teal, matches brand accent
const HERO_COLOR_NODE = "18, 165, 148";
const HERO_COLOR_PULSE = "232, 163, 61"; // gold, matches brand accent
const HERO_COLOR_PING = "18, 165, 148";

function heroRand(min, max) {
  return min + Math.random() * (max - min);
}

export default function ApplicationMaintenance() {
  const [heroIn, setHeroIn] = useState(false);
  const [sectionVisible, setSectionVisible] = useState({});
  const [statsTrigger, setStatsTrigger] = useState(false);
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const [processVisible, setProcessVisible] = useState({});
  const [openFaq, setOpenFaq] = useState(-1);

  // section-level refs (one per named section)
  const statsRef = useRef(null);
  const cardsRef = useRef(null);
  const whyRef = useRef(null);
  const offerRef = useRef(null);
  const plansRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);
  const sectionRefMap = {
    stats: statsRef,
    cards: cardsRef,
    why: whyRef,
    offer: offerRef,
    plans: plansRef,
    faq: faqRef,
    cta: ctaRef,
  };

  // one ref per process step, filled in via callback refs
  const processStepRefs = useRef([]);

  // hero background animation canvas ref
  const heroCanvasRef = useRef(null);

  // hero: fade in on mount
  useEffect(() => {
    const t = requestAnimationFrame(() => setHeroIn(true));
    return () => cancelAnimationFrame(t);
  }, []);

  // hero background animation: monitoring-network canvas
  useEffect(() => {
    const canvas = heroCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let nodes = [];
    let pulses = [];
    let pings = [];
    let lastPulseTime = 0;
    let lastPingTime = 0;
    let rafId = null;
    let running = true;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initNodes() {
      nodes = Array.from({ length: HERO_NODE_COUNT }, () => ({
        x: heroRand(0, width),
        y: heroRand(0, height),
        vx: heroRand(-0.06, 0.06),
        vy: heroRand(-0.05, 0.05),
        r: heroRand(1.4, 2.6),
        phase: heroRand(0, Math.PI * 2),
      }));
    }

    function buildEdges() {
      const edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < HERO_MAX_LINK_DIST) edges.push([i, j, dist]);
        }
      }
      return edges;
    }

    function spawnPulse(edges) {
      if (!edges.length || pulses.length >= HERO_MAX_PULSES) return;
      const [a, b] = edges[Math.floor(heroRand(0, edges.length))];
      const forward = Math.random() > 0.5;
      pulses.push({
        a: forward ? a : b,
        b: forward ? b : a,
        t: 0,
        speed: heroRand(0.006, 0.012),
      });
    }

    function spawnPing() {
      if (!nodes.length) return;
      const node = nodes[Math.floor(heroRand(0, nodes.length))];
      pings.push({ x: node.x, y: node.y, r: 0, alpha: 0.55 });
    }

    function step(timestamp) {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      // drift nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }

      const edges = buildEdges();

      // connecting lines
      for (const [i, j, dist] of edges) {
        const alpha = (1 - dist / HERO_MAX_LINK_DIST) * 0.22;
        ctx.strokeStyle = `rgba(${HERO_COLOR_LINE}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }

      // nodes (subtle pulse in size via sine wave)
      for (const n of nodes) {
        const glow = 0.5 + 0.5 * Math.sin(timestamp * 0.0012 + n.phase);
        const radius = n.r + glow * 0.6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${HERO_COLOR_NODE}, ${(0.35 + glow * 0.25).toFixed(3)})`;
        ctx.fill();
      }

      // spawn + draw traveling pulses (signal moving along the network)
      if (timestamp - lastPulseTime > HERO_PULSE_INTERVAL_MS) {
        spawnPulse(edges);
        lastPulseTime = timestamp;
      }
      pulses = pulses.filter((p) => p.t <= 1);
      for (const p of pulses) {
        p.t += p.speed;
        const na = nodes[p.a];
        const nb = nodes[p.b];
        if (!na || !nb) continue;
        const x = na.x + (nb.x - na.x) * p.t;
        const y = na.y + (nb.y - na.y) * p.t;
        const fade = Math.sin(Math.PI * p.t);
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${HERO_COLOR_PULSE}, ${(0.75 * fade + 0.15).toFixed(3)})`;
        ctx.shadowColor = `rgba(${HERO_COLOR_PULSE}, 0.8)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // spawn + draw health-check "ping" rings
      if (timestamp - lastPingTime > HERO_PING_INTERVAL_MS) {
        spawnPing();
        lastPingTime = timestamp;
      }
      pings = pings.filter((ring) => ring.alpha > 0.02);
      for (const ring of pings) {
        ring.r += 0.35;
        ring.alpha *= 0.965;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${HERO_COLOR_PING}, ${ring.alpha.toFixed(3)})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      rafId = requestAnimationFrame(step);
    }

    resize();
    initNodes();

    if (prefersReducedMotion) {
      // Single calm static frame: nodes + faint links, no motion loop.
      const edges = buildEdges();
      ctx.clearRect(0, 0, width, height);
      for (const [i, j, dist] of edges) {
        const alpha = (1 - dist / HERO_MAX_LINK_DIST) * 0.18;
        ctx.strokeStyle = `rgba(${HERO_COLOR_LINE}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${HERO_COLOR_NODE}, 0.45)`;
        ctx.fill();
      }
    } else {
      rafId = requestAnimationFrame(step);
    }

    const handleResize = () => {
      resize();
      initNodes();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // scroll-reveal for the seven named sections
  useEffect(() => {
    const observers = [];

    SECTION_KEYS.forEach((key) => {
      const el = sectionRefMap[key].current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSectionVisible((prev) => ({ ...prev, [key]: true }));
            if (key === "stats") setStatsTrigger(true);
            observer.unobserve(el);
          }
        },
        { threshold: key === "stats" ? 0.4 : 0.15, rootMargin: "0px 0px -60px 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // scroll-reveal for each process step (drives the connector-line fill too)
  useEffect(() => {
    const observers = [];

    processStepRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setProcessVisible((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(el);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // count-up animation for the stats bar, triggered once it scrolls in
  useEffect(() => {
    if (!statsTrigger) return;
    const duration = 1200;
    let startTime = null;
    let frame;

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(STATS.map((s) => Math.round(eased * (s.value || 0))));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [statsTrigger]);

  return (
    <div className="am-root">
      {/* ---------- HERO ---------- */}
      <section className="am-hero">
        <div className="am-hero-overlay" />
        <canvas ref={heroCanvasRef} className="am-hero-canvas" aria-hidden="true" />
        <div className={`am-hero-content ${heroIn ? "am-hero-content--in" : ""}`}>
          <h1 className="am-fade-item am-fade-item--1">Your Applications, Always On</h1>
          <p className="am-fade-item am-fade-item--2">
            From bug fixes to security patches, we keep your software fast,
            stable, and ready for what's next, so downtime never becomes your
            problem.
          </p>
          <a href="/contact" className="am-btn am-fade-item am-fade-item--3">
            Talk to an Engineer
          </a>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="am-stats" ref={statsRef}>
        <div className="am-stats-grid">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`am-stat ${sectionVisible.stats ? "am-stat--in" : ""}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="am-stat-value">
                {s.literal ? s.literal : `${s.prefix || ""}${counts[i]}${s.suffix || ""}`}
              </div>
              <div className="am-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CARD HIGHLIGHTS ---------- */}
      <section className="am-card-area" ref={cardsRef}>
        <div className="am-card-container">
          <div
            className={`am-card am-reveal ${sectionVisible.cards ? "am-reveal--in" : ""}`}
            style={{ transitionDelay: "0ms" }}
          >
            <h3>Built for Systems That Can't Go Down</h3>
            <p>
              Continuous monitoring, proactive patching, and hands-on support
              keep business-critical applications running, day or night,
              without interruption.
            </p>
            <a href="/contact-support" className="am-card-btn">
              Contact Support →
            </a>
          </div>

          <div
            className={`am-card am-reveal ${sectionVisible.cards ? "am-reveal--in" : ""}`}
            style={{ transitionDelay: "150ms" }}
          >
            <h3>Fewer Failures, Faster Fixes</h3>
            <p>
              Maintenance isn't just about reacting when something breaks. We
              track performance trends and catch problems while they're still
              small.
            </p>
            <p>
              Whether it's a same-day fix or a long-term improvement plan, your
              team gets an application that simply works.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="am-why-wrapper" ref={whyRef}>
        <div
          className={`am-why-left am-reveal am-reveal--left ${
            sectionVisible.why ? "am-reveal--in" : ""
          }`}
        >
          <div className="am-image-shape am-blob-float" />
          <img src="../src/assets/home/Application2.jpg" alt="Application Maintenance Services" />
        </div>

        <div
          className={`am-why-right am-reveal am-reveal--right ${
            sectionVisible.why ? "am-reveal--in" : ""
          }`}
        >
          <h2>Application Health, Handled</h2>
          <p>
            We don't just fix what breaks. We build a maintenance rhythm that
            keeps issues rare, so your team stays focused on what's next
            instead of what's on fire.
          </p>

          <ul>
            {WHY_POINTS.map((point, i) => (
              <li
                key={point}
                className={`am-list-item ${sectionVisible.why ? "am-list-item--in" : ""}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <span className="am-check">✔</span> {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="am-process">
        <div className="am-process-head">
          <span className="am-eyebrow">How We Work</span>
          <h2>A Maintenance Cycle, Not a One-Time Fix</h2>
          <p>Every engagement follows the same disciplined loop, so nothing falls through the cracks.</p>
        </div>

        <div className="am-process-track">
          {PROCESS_STEPS.map((step, index) => {
            const isVisible = !!processVisible[index];
            const isLast = index === PROCESS_STEPS.length - 1;
            return (
              <div
                key={step.title}
                className="am-process-step"
                ref={(el) => (processStepRefs.current[index] = el)}
              >
                <div className="am-process-marker">
                  <span className={`am-process-num ${isVisible ? "am-process-num--in" : ""}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {!isLast && (
                    <div className="am-process-connector">
                      <div
                        className={`am-process-connector-fill ${
                          isVisible ? "am-process-connector-fill--in" : ""
                        }`}
                      />
                    </div>
                  )}
                </div>
                <div className={`am-process-body am-reveal am-reveal--left ${isVisible ? "am-reveal--in" : ""}`}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- WHAT WE OFFER ---------- */}
      <section className="am-offer-section" ref={offerRef}>
        <div
          className={`am-offer-left am-reveal am-reveal--left ${
            sectionVisible.offer ? "am-reveal--in" : ""
          }`}
        >
          <h2>What Do We Offer?</h2>
          <p>
            We deliver end-to-end application maintenance solutions covering
            security, optimization, performance, bug fixes, enhancements, and
            continuous upgrades to ensure business continuity.
          </p>

          <div className="am-offer-illustration">
            <div className="am-bg-shape am-blob-float am-blob-float--slow" />
            <img
              src="../src/assets/home/What-we-offers.jpg"
              alt="Maintenance Services Illustration"
            />
          </div>
        </div>

        <div className="am-offer-right">
          {OFFER_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`am-offer-item am-reveal ${sectionVisible.offer ? "am-reveal--in" : ""}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <img src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- PLANS ---------- */}
      <section className="am-plans" ref={plansRef}>
        <div className="am-plans-head">
          <span className="am-eyebrow">Plans</span>
          <h2>Pick the Level of Support You Need</h2>
          <p>Every plan includes bug fixes and security updates. Scale up as your application grows.</p>
        </div>

        <div className="am-plans-grid">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`am-plan-card ${plan.featured ? "am-plan-card--featured" : ""} am-reveal ${
                sectionVisible.plans ? "am-reveal--in" : ""
              }`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {plan.featured && <span className="am-plan-badge">Most Popular</span>}
              <h3>{plan.name}</h3>
              <p className="am-plan-tagline">{plan.tagline}</p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f} className="am-plan-feature">
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/contact-us" className={plan.featured ? "am-btn" : "am-card-btn"}>
                Get a Quote
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="am-faq" ref={faqRef}>
        <div className={`am-faq-head am-reveal ${sectionVisible.faq ? "am-reveal--in" : ""}`}>
          <span className="am-eyebrow">FAQ</span>
          <h2>Questions Teams Usually Ask</h2>
        </div>

        <div className="am-faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={item.q}
                className={`am-faq-item am-reveal ${sectionVisible.faq ? "am-reveal--in" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  type="button"
                  className="am-faq-question"
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className={`am-faq-icon ${isOpen ? "am-faq-icon--open" : ""}`}>+</span>
                </button>
                <div className={`am-faq-answer ${isOpen ? "am-faq-answer--open" : ""}`}>
                  <div className="am-faq-answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="am-final-cta" ref={ctaRef}>
        <div className={`am-final-cta-inner am-reveal ${sectionVisible.cta ? "am-reveal--in" : ""}`}>
          <h2>Ready for Applications That Just Work?</h2>
          <p>Tell us what you're running today, and we'll show you exactly how we'd maintain it.</p>
          <a href="/contact-us" className="am-btn am-btn--light">
            Talk to an Engineer
          </a>
        </div>
      </section>
    </div>
  );
}