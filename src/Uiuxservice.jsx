import React, { useEffect, useMemo, useRef, useState } from "react";
import "../src/css//UiUxService.css";

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
      className={`ux-reveal ${visible ? "ux-reveal-in" : ""} ${className}`}
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
    <span ref={ref} className="ux-counter-num">
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
  circle.className = "ux-ripple";
  const old = btn.querySelector(".ux-ripple");
  if (old) old.remove();
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 650);
}

/* ---------- FAQ Accordion item ---------- */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`ux-faq-item ${open ? "ux-faq-open" : ""}`}>
      <button className="ux-faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="ux-faq-icon">{open ? "−" : "+"}</span>
      </button>
      <div className="ux-faq-a-wrap">
        <p className="ux-faq-a">{a}</p>
      </div>
    </div>
  );
}

export default function UiUxServicePage() {
  const progress = useScrollProgress();
  const [testiIndex, setTestiIndex] = useState(0);

  /* ---------- Hero: mouse-parallax on the blobs ---------- */
  const heroRef = useRef(null);
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroTilt({ x: px * 24, y: py * 24 });
  };

  const handleHeroMouseLeave = () => setHeroTilt({ x: 0, y: 0 });

  /* ---------- Hero: floating particles, generated once ---------- */
  const heroParticles = useMemo(() => {
    return Array.from({ length: 16 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 3 + Math.random() * 5,
      duration: 7 + Math.random() * 6,
      delay: Math.random() * 8,
      drift: (Math.random() - 0.5) * 60,
    }));
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector(".ux-card-area");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const offers = [
    { icon: "https://cdn-icons-png.flaticon.com/512/2620/2620990.png", title: "User Research", text: "In-depth research and interviews to understand your users, their goals, and pain points." },
    { icon: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png", title: "Wireframing & Prototyping", text: "Low to high-fidelity wireframes and clickable prototypes to validate ideas early." },
    { icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png", title: "Visual UI Design", text: "Pixel-perfect interfaces with thoughtful typography, color and visual hierarchy." },
    { icon: "https://cdn-icons-png.flaticon.com/512/2620/2620993.png", title: "Design Systems", text: "Reusable component libraries and style guides that scale with your product." },
    { icon: "https://cdn-icons-png.flaticon.com/512/2620/2620989.png", title: "Usability Testing", text: "Real-user testing sessions to catch friction points before they reach production." },
    { icon: "https://cdn-icons-png.flaticon.com/512/1055/1055683.png", title: "Interaction & Motion Design", text: "Micro-interactions and motion that make interfaces feel alive and intuitive." },
  ];

  const steps = [
    { title: "Discover", text: "We dig into your users, competitors and business goals before drawing anything." },
    { title: "Wireframe", text: "Structure and flows are mapped out to get the experience right first." },
    { title: "Design", text: "High-fidelity visuals crafted with your brand identity in mind." },
    { title: "Test & Iterate", text: "Real feedback loops refine the design until it truly works." },
  ];

  const tools = [
    { name: "Figma", emoji: "🎨" },
    { name: "Adobe XD", emoji: "🖌️" },
    { name: "Sketch", emoji: "✏️" },
    { name: "InVision", emoji: "🧩" },
  ];

  const plans = [
    {
      name: "Starter",
      price: "₹25,000",
      period: " one-time",
      features: ["Up to 8 screens", "Wireframes + UI design", "1 revision round", "Mobile-first design"],
    },
    {
      name: "Growth",
      price: "₹55,000",
      period: " one-time",
      highlight: true,
      features: [
        "Up to 20 screens",
        "User research included",
        "Interactive prototype",
        "Design system starter kit",
        "3 revision rounds",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: " quote",
      features: [
        "Unlimited screens",
        "Full design system",
        "Usability testing sessions",
        "Dedicated design lead",
        "Ongoing design support",
      ],
    },
  ];

  const testimonials = [
    { quote: "Wireframe stage-laye user flow ellam clear ah puriyudhu, revisions kuda fast ah handle pannanga.", name: "Divya M.", role: "Product Manager" },
    { quote: "Prototype paathadhum client-ku straight ah approve aayiduchu, romba professional work.", name: "Suresh T.", role: "Startup Founder" },
    { quote: "Design system kudutha, engal dev team-ku implementation romba easy ah aayiduchu.", name: "Anitha R.", role: "Engineering Lead" },
  ];

  const faqs = [
    { q: "Do you design for both web and mobile apps?", a: "Yes, we design responsive web interfaces as well as native and cross-platform mobile app experiences." },
    { q: "Will I get the design files?", a: "You receive full access to Figma (or your preferred tool) source files, along with exported assets and specs for developers." },
    { q: "Do you conduct user research?", a: "Growth and Enterprise plans include user interviews and usability testing to validate design decisions with real users." },
    { q: "How many revisions are included?", a: "Each plan includes a set number of revision rounds; additional rounds can be added if needed." },
  ];

  const clients = ["Nova Retail", "Zenith Labs", "Bright Finance", "Orbit Health", "Palm Foods", "Vertex Tech"];

  const caseStudies = [
    {
      img: "../src/assets/industry/ui.jpg",
      name: "Orbit Health App",
      category: "Mobile App Redesign",
      metric: "+42% Daily Active Users",
      color: "1",
      blurb: "Redesigned onboarding and appointment flow, cutting drop-off in the first session.",
    },
    {
      name: "Nova Retail Store",
      category: "E-Commerce UX",
      metric: "+27% Checkout Completion",
      color: "2",
      blurb: "Simplified checkout from 5 steps to 2, with clearer cart and payment states.",
    },
    {
      name: "Vertex Dashboard",
      category: "SaaS Web App",
      metric: "-35% Support Tickets",
      color: "3",
      blurb: "Rebuilt the analytics dashboard with clearer data hierarchy and in-app guidance.",
    },
  ];

  const principles = [
    { icon: "🎯", title: "Clarity First", text: "Every screen has one clear job. If it doesn't help the user, it doesn't ship." },
    { icon: "🧭", title: "User-Led Decisions", text: "We design from research and testing, not personal taste or trends alone." },
    { icon: "♿", title: "Accessible By Default", text: "Contrast, spacing and interaction states are built for every kind of user." },
    { icon: "🔁", title: "Iterate, Don't Guess", text: "Designs are tested and refined in loops, not shipped as a single guess." },
  ];

  const deliverables = [
    "Figma source files with organized layers",
    "Interactive clickable prototype",
    "Design system / component library",
    "Developer handoff specs & assets",
    "Usability test recordings & notes",
    "Style guide (colors, type, spacing)",
  ];

  useEffect(() => {
    const id = setInterval(() => setTestiIndex((i) => (i + 1) % testimonials.length), 3500);
    return () => clearInterval(id);
  }, [testimonials.length]);



  return (
    <div className="ux-root">
      {/* ================= SCROLL PROGRESS ================= */}
      <div className="ux-progress-bar" style={{ width: `${progress}%` }}></div>

      {/* ================= MARQUEE ================= */}
      <div className="ux-marquee">
        <div className="ux-marquee-track">
          {Array(2).fill(0).map((_, i) => (
            <span key={i}>
              ✦ USER RESEARCH &nbsp; ✦ WIREFRAMES & PROTOTYPES &nbsp; ✦ DESIGN SYSTEMS &nbsp; ✦ USABILITY TESTING &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section
        className="ux-hero"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
      >
        <div className="ux-hero-overlay"></div>

        <div className="ux-hero-grid" aria-hidden="true"></div>

        <div
          className="ux-hero-blobs"
          aria-hidden="true"
          style={{ transform: `translate(${heroTilt.x}px, ${heroTilt.y}px)` }}
        ></div>

        <div className="ux-hero-particles" aria-hidden="true">
          {heroParticles.map((p) => (
            <span
              key={p.id}
              className="ux-particle"
              style={{
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                "--drift": `${p.drift}px`,
              }}
            />
          ))}
        </div>

        <div className="ux-hero-content">
          <div className="ux-hero-badge">
            <span className="ux-hero-badge-dot"></span>
            Now booking new design projects
          </div>

          <div className="ux-hero-title-wrap">
            <h1 className="ux-hero-title">
              {"Human-Centered UI/UX Design".split(" ").map((word, i) => (
                <span key={i} className="ux-word" style={{ animationDelay: `${0.15 + i * 0.1}s` }}>
                  {word}&nbsp;
                </span>
              ))}
            </h1>
          </div>

          <p>We design interfaces people actually enjoy using — research-backed, beautifully crafted, and built to convert.</p>
          <a href="./contact" className="ux-btn" onClick={addRipple}>Start Your Design</a>
        </div>

        <button className="ux-scroll-cue" onClick={scrollToNext} aria-label="Scroll to next section">
          <div className="ux-scroll-mouse"></div>
          <span>Scroll</span>
        </button>
      </section>

      {/* ================= CARDS ================= */}
      <section className="ux-card-area">
        <div className="ux-card-container">
          <Reveal>
            <div className="ux-card">
              <h3>Design That Converts</h3>
              <p>We craft intuitive layouts, clear flows and visual hierarchy that guide users to take action.</p>
              <a href="./contact" className="ux-card-btn" onClick={addRipple}>Contact Us →</a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="ux-card">
              <h3>Research-Backed Experiences</h3>
              <p>Every design decision is grounded in real user behavior, not guesswork — validated through testing and iteration.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TRUSTED BY ================= */}
      <section className="ux-trusted">
        <p className="ux-trusted-label">Trusted by teams at</p>
        <div className="ux-trusted-row">
          {clients.map((c, i) => (
            <Reveal key={c} delay={i * 60} className="ux-trusted-item">
              <span>{c}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="ux-stats">
        <div className="ux-stat"><Counter end={150} suffix="+" /><div className="ux-stat-label">Products Designed</div></div>
        <div className="ux-stat"><Counter end={5} suffix="d" /><div className="ux-stat-label">Avg. Prototype Turnaround</div></div>
        <div className="ux-stat"><Counter end={96} suffix="%" /><div className="ux-stat-label">Client Satisfaction</div></div>
        <div className="ux-stat"><Counter end={3} suffix="x" /><div className="ux-stat-label">Avg. Usability Improvement</div></div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="ux-why-wrapper">
        <Reveal className="ux-why-left">
          <div className="ux-image-shape"></div>
          <img src="../src/assets/industry/ui.jpg" alt="UI/UX Design Services" />
        </Reveal>

        <Reveal delay={150} className="ux-why-right">
          <h2>Why Choose Our UI/UX Design Services?</h2>
          <p>
            At Profenaa Infotech, we design digital products that balance beauty with usability — grounded in
            research, tested with real users, and built to scale with your product.
          </p>
          <ul>
            {[
              "User research and journey mapping before any design work.",
              "Wireframes and clickable prototypes for early validation.",
              "Consistent, scalable design systems for your team.",
              "Usability testing to catch friction before launch.",
              "Design handoff that developers can implement fast.",
            ].map((item, i) => (
              <li key={i} style={{ animationDelay: `${0.15 + i * 0.12}s` }}>✔ {item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ================= DESIGN PRINCIPLES ================= */}
      <section className="ux-principles">
        <Reveal className="ux-section-heading">
          <h2>Our Design Principles</h2>
          <p>The beliefs that shape every screen we design.</p>
        </Reveal>
        <div className="ux-principles-grid">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="ux-principle-card">
                <span className="ux-principle-icon">{p.icon}</span>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="ux-offer-section">
        <Reveal className="ux-section-heading">
          <h2>What Do We Offer?</h2>
          <p>From early research to pixel-perfect UI and testing, we cover the full design lifecycle of your product.</p>
        </Reveal>

        <div className="ux-offer-grid">
          {offers.map((o, i) => (
            <Reveal key={o.title} delay={i * 90}>
              <div className="ux-offer-item">
                <img src={o.icon} alt="" className="ux-offer-icon" />
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="ux-process">
        <Reveal className="ux-section-heading">
          <h2>Our Design Process</h2>
        </Reveal>
        <div className="ux-process-row">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="ux-step">
                <div className="ux-step-num">{i + 1}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="ux-cases">
        <Reveal className="ux-section-heading">
          <h2>Case Studies</h2>
          <p>A few products we've redesigned and the impact it made.</p>
        </Reveal>
        <div className="ux-cases-grid">
          {caseStudies.map((c, i) => (
            <Reveal key={c.name} delay={i * 110}>
              <div className="ux-case-card">
                <div className={`ux-case-thumb ux-case-thumb-${c.color}`}>
                  <span className="ux-case-metric">{c.metric}</span>
                </div>
                <div className="ux-case-info">
                  <span className="ux-case-cat">{c.category}</span>
                  <h4>{c.name}</h4>
                  <p>{c.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= TOOLS ================= */}
      <section className="ux-platforms">
        <Reveal className="ux-section-heading ux-heading-light">
          <h2>Tools We Design With</h2>
        </Reveal>
        <div className="ux-platform-row">
          {tools.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <div className="ux-platform-card">
                <span className="ux-platform-emoji">{t.emoji}</span>
                <p>{t.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= DELIVERABLES ================= */}
      <section className="ux-deliverables">
        <Reveal className="ux-section-heading ux-heading-light">
          <h2>What You Get</h2>
          <p>Every engagement ships with a complete, developer-ready package.</p>
        </Reveal>
        <div className="ux-deliverables-grid">
          {deliverables.map((d, i) => (
            <Reveal key={d} delay={i * 70}>
              <div className="ux-deliverable-item">
                <span className="ux-deliverable-check">✓</span>
                <span>{d}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="ux-pricing">
        <Reveal className="ux-section-heading">
          <h2>Design Packages</h2>
        </Reveal>
        <div className="ux-pricing-grid">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 130}>
              <div className={`ux-plan ${p.highlight ? "ux-plan-highlight" : ""}`}>
                {p.highlight && <span className="ux-plan-badge">Most Popular</span>}
                <h3>{p.name}</h3>
                <div className="ux-plan-price">{p.price}<span>{p.period}</span></div>
                <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <a href="./Contact" className="ux-plan-btn" onClick={addRipple}>Get Started</a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="ux-testimonials">
        <Reveal className="ux-section-heading ux-heading-light">
          <h2>What Our Clients Say</h2>
        </Reveal>
        <div className="ux-testi-carousel">
          <div className="ux-testi-track" style={{ transform: `translateX(-${testiIndex * 100}%)` }}>
            {testimonials.map((t) => (
              <div className="ux-testi-slide" key={t.name}>
                <div className="ux-testi-card">
                  <p className="ux-testi-quote">{t.quote}</p>
                  <div className="ux-testi-name">{t.name}</div>
                  <div className="ux-testi-role">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="ux-testi-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`ux-dot ${i === testiIndex ? "ux-dot-active" : ""}`}
                onClick={() => setTestiIndex(i)}
                aria-label={`testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="ux-faq">
        <Reveal className="ux-section-heading">
          <h2>Frequently Asked Questions</h2>
        </Reveal>
        {faqs.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
      </section>

      {/* ================= CTA ================= */}
      <section className="ux-cta">
        <h2>Ready to Design Something Users Love?</h2>
        <p>Let's turn your idea into an interface people enjoy using.</p>
        <a href="./Contact" className="ux-btn" onClick={addRipple}>Start Your Design</a>
      </section>
    </div>
  );
}