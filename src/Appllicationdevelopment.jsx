import React, { useEffect, useRef, useState } from "react";
import "../src/css/Appllicationdevelopment.css";

const OFFERS = [
  {
    icon: "🏢",
    title: "Enterprise software solutions",
    text: "Robust enterprise applications that streamline operations, improve efficiency, and support large-scale organizational workflows.",
  },
  {
    icon: "🖥️",
    title: "Modern web applications",
    text: "Interactive dashboards to high-performance web platforms, built for speed, security and a clean user experience.",
  },
  {
    icon: "📱",
    title: "Mobile app solutions",
    text: "Android and iOS apps built on modern frameworks, tuned for seamless performance across every device.",
  },
  {
    icon: "🔗",
    title: "API development & integration",
    text: "Third-party APIs, payment gateways, automation tools and internal systems, wired together for smooth data flow.",
  },
  {
    icon: "📡",
    title: "Application support & monitoring",
    text: "Round-the-clock monitoring, issue resolution and system health checks that keep applications running at peak efficiency.",
  },
  {
    icon: "⚡",
    title: "Performance optimization",
    text: "Deep performance analysis, tuning and modern optimization techniques for speed, stability and lean resource usage.",
  },
];

const WHY = [
  "Expertise with industry-proven methodologies and best practices",
  "Transparent pricing — no hidden charges",
  "Strict adherence to timelines with structured project planning",
  "Zero-compromise on code quality, performance, and security",
  "Dedicated support team for updates, enhancements, and quick issue resolution",
];

const STATS = [
  { value: "120+", label: "Projects delivered" },
  { value: "40+", label: "Businesses served" },
  { value: "8+", label: "Years of experience" },
  { value: "24/7", label: "Support coverage" },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery & planning",
    text: "We study your workflow, goals and constraints, then lay out a clear scope, timeline and architecture plan.",
  },
  {
    step: "02",
    title: "Design & prototyping",
    text: "Wireframes and UI prototypes so you can see and refine the product before a single line of production code is written.",
  },
  {
    step: "03",
    title: "Development & testing",
    text: "Agile sprints with continuous testing, so features ship in reviewable increments instead of one big reveal at the end.",
  },
  {
    step: "04",
    title: "Deployment & support",
    text: "Smooth go-live, followed by monitoring, quick fixes and ongoing enhancements as your business evolves.",
  },
];

const TECH_STACK = [
  "React", "Node.js", "Next.js", "Flutter", "Python", "PostgreSQL",
  "AWS", "Docker", "GraphQL", "TypeScript", "MongoDB", "Kubernetes",
];

const TESTIMONIALS = [
  {
    quote:
      "Profenaa Infotech rebuilt our internal tools from scratch and cut our order-processing time by half. Communication was clear through every sprint.",
    name: "Karthik R.",
    role: "Operations head, retail distribution",
  },
  {
    quote:
      "They delivered our mobile app ahead of schedule and stayed responsive well after launch. Exactly the kind of dependable partner a growing team needs.",
    name: "Divya S.",
    role: "Founder, healthtech startup",
  },
  {
    quote:
      "Solid architecture decisions from day one meant we never had to rebuild as we scaled. That upfront planning saved us months later.",
    name: "Arun M.",
    role: "CTO, logistics platform",
  },
];

function useReveal() {
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
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`adp-reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default function ApplicationDevelopment() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [pathProgress, setPathProgress] = useState(0);
  const pathSectionRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    function onScroll() {
      const el = pathSectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const passed = vh - rect.top;
      const p = Math.min(1, Math.max(0, passed / total));
      setPathProgress(p);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="adp-root">
      {/* HERO */}
      <section className="adp-hero">
        <div className="adp-hero-overlay" />
        <span className="adp-hero-particle" style={{ width: 10, height: 10, top: "18%", left: "12%", animationDelay: "0s" }} />
        <span className="adp-hero-particle" style={{ width: 6, height: 6, top: "68%", left: "22%", animationDelay: "1.2s" }} />
        <span className="adp-hero-particle" style={{ width: 8, height: 8, top: "30%", left: "85%", animationDelay: "2.4s" }} />
        <span className="adp-hero-particle" style={{ width: 5, height: 5, top: "78%", left: "80%", animationDelay: "0.8s" }} />

        <div className="adp-hero-content">
          <div className={`adp-hero-eyebrow ${heroLoaded ? "is-loaded" : ""}`}>
            <span className="adp-pulse-dot" /> 
          </div>
          <h1 className={`adp-h1 ${heroLoaded ? "is-loaded" : ""}`}>Application development</h1>
          <p className={`adp-hero-p ${heroLoaded ? "is-loaded" : ""}`}>
            Building scalable, secure and modern digital solutions tailored for your business growth.
          </p>
          <div className={`adp-hero-cta ${heroLoaded ? "is-loaded" : ""}`}>
            <button className="adp-btn">
              <a href="./contact" style={{ textDecoration: "none", color: "inherit" }}>
                Get in touch <span className="adp-btn-arrow">→</span>
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* INTRO CARDS */}
      <section className="adp-card-section">
        <div className="adp-card-container adp-two-col">
          <Reveal className="adp-flex-1">
            <div className="adp-card">
              <h3 className="adp-card-h3">Turning concepts into smart digital solutions</h3>
              <p className="adp-card-p">
                We craft scalable and efficient applications tailored to your business goals, ensuring
                smooth operations and long-term performance.
              </p>
              <button className="adp-btn">
                Get in touch <span className="adp-btn-arrow">→</span>
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="adp-flex-1">
            <div className="adp-card">
              <h3 className="adp-card-h3">Reliable software for growing businesses</h3>
              <p className="adp-card-p">
                We build secure, robust applications with clean architecture and modern technologies to
                support real business growth.
              </p>
              <p className="adp-card-p">
                Our team creates reliable, future-ready applications that enhance efficiency and empower
                businesses to achieve long-term success.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="adp-stats-section">
        <div className="adp-stats-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="adp-stat-card">
                <div className="adp-stat-value">{s.value}</div>
                <div className="adp-stat-label">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section ref={pathSectionRef} className="adp-why-wrapper adp-two-col">
        <Reveal className="adp-why-left-wrap">
          <div className="adp-why-left">
            <div className="adp-image-shape" />
            <img
              src="../src/assets/home/Application.jpg"
              alt="Application development delivery"
              className="adp-why-image"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <div className="adp-eyebrow">Why choose us</div>
            <h2 className="adp-h2">Why choose our application development services?</h2>
            <p className="adp-body-p">
              At Profenaa Infotech, we focus on delivering high-performance applications that align with
              your business goals. Our development approach combines innovation, modern technology stacks,
              and structured processes to ensure reliable, scalable, and secure software solutions.
            </p>
            <ul className="adp-why-list">
              {WHY.map((item, i) => (
                <li key={i} className="adp-why-item">
                  <span
                    className="adp-why-check"
                    style={{
                      transform: `scaleX(${Math.min(1, Math.max(0, pathProgress * 6 - i * 0.6))})`,
                    }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="adp-process-section">
        <Reveal className="adp-process-intro">
          <div className="adp-eyebrow">How we work</div>
          <h2 className="adp-h2">A process built for predictability</h2>
          <p className="adp-body-p">
            Four stages, no surprises — you always know what's next and where the project stands.
          </p>
        </Reveal>

        <div className="adp-process-grid">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className="adp-card adp-process-card">
                <div className="adp-process-step">{p.step}</div>
                <h3 className="adp-card-h3">{p.title}</h3>
                <p className="adp-card-p">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="adp-offer-section">
        <div className="adp-offer-left">
          <Reveal>
            <div className="adp-eyebrow">What we offer</div>
            <h2 className="adp-h2 adp-h2--light">Software built around how you work</h2>
            <p className="adp-body-p adp-body-p--light">
              At Profenaa Infotech, we build intelligent, scalable and user-centric software solutions
              crafted to support modern business needs. Our team focuses on innovation, performance and
              long-term reliability to help you accelerate digital transformation.
            </p>
          </Reveal>
        </div>

        <div className="adp-offer-right adp-grid-offer">
          {OFFERS.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.08}>
              <div className="adp-card adp-card--dark">
                <div className="adp-icon adp-icon--dark">{o.icon}</div>
                <h3 className="adp-card-h3 adp-card-h3--light">{o.title}</h3>
                <p className="adp-card-p adp-card-p--light">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="adp-tech-section">
        <Reveal className="adp-tech-intro">
          <div className="adp-eyebrow">Tools we build with</div>
          <h2 className="adp-h2">A modern, proven technology stack</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="adp-tech-grid">
            {TECH_STACK.map((t) => (
              <span key={t} className="adp-tech-chip">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="adp-testimonial-section">
        <Reveal className="adp-testimonial-intro">
          <div className="adp-eyebrow">Client voices</div>
          <h2 className="adp-h2">What businesses say about working with us</h2>
        </Reveal>

        <div className="adp-testimonial-grid adp-grid-offer">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="adp-card adp-card--full-height">
                <p className="adp-quote-text">&ldquo;{t.quote}&rdquo;</p>
                <div className="adp-testimonial-footer">
                  <div className="adp-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="adp-testimonial-name">{t.name}</div>
                    <div className="adp-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOOTER CTA
      <section className="adp-footer-cta">
        <Reveal>
          <h2 className="adp-h2">Ready to build something reliable?</h2>
          <p className="adp-body-p">
            Tell us what you're building — we'll help you plan the right architecture from day one.
          </p>
          <button className="adp-btn">
            Get in touch <span className="adp-btn-arrow">→</span>
          </button>
        </Reveal>
      </section> */}
    </div>
  );
}