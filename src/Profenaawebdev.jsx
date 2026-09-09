import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  LayoutGrid,
  ShoppingCart,
  AppWindow,
  Wrench,
  Gauge,
  Search,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  ShieldCheck,
  Check,
  ChevronDown,
  ArrowRight,
  Layers,
  Users,
  Star,
  Headphones,
} from "lucide-react";

import "../src/css/ProfenaaWebDev.css";

/* ----------------------------------------------------------------------- */
/*  Design tokens & global styles                                          */
/* ----------------------------------------------------------------------- */


/* ----------------------------------------------------------------------- */
/*  Data                                                                    */
/* ----------------------------------------------------------------------- */

const WHY_LIST = [
  "Responsive, mobile-first and SEO-ready websites",
  "Transparent pricing with no hidden costs",
  "Timely delivery with professional project execution",
  "Clean and maintainable code that ensures high performance",
  "Dedicated support for updates, enhancements and maintenance",
];

const OFFERS = [
  { icon: Building2, title: "Corporate Website Development", text: "Professionally designed websites that build credibility, represent your brand and engage customers effectively." },
  { icon: LayoutGrid, title: "Custom Business Websites", text: "Tailor-made websites developed with modern technologies, optimised for performance, speed and security." },
  { icon: ShoppingCart, title: "E-Commerce Web Development", text: "Scalable online stores with secure payment integration and a smooth customer experience." },
  { icon: AppWindow, title: "Web App Development", text: "Feature-rich, dynamic web applications built to automate business processes and improve efficiency." },
  { icon: Wrench, title: "Website Maintenance & Support", text: "Regular updates, security checks, performance optimisation and quick issue resolution." },
  { icon: Gauge, title: "Speed & Performance Optimisation", text: "We enhance website stability, loading time and usability through deep technical optimisation." },
];

const PROCESS = [
  { icon: Search, title: "Discover", text: "Goals, audience and competitors." },
  { icon: PenTool, title: "Design", text: "Wireframes and visual direction." },
  { icon: Code2, title: "Develop", text: "Clean, maintainable build." },
  { icon: TestTube2, title: "Test", text: "Cross-device, cross-browser QA." },
  { icon: Rocket, title: "Launch", text: "Deploy and go live." },
  { icon: ShieldCheck, title: "Support", text: "Monitor, maintain, improve." },
];

const TECH = ["React", "Next.js", "Node.js", "WordPress", "Shopify", "PHP", "MongoDB", "MySQL", "Tailwind CSS"];

const STATS = [
  { icon: Layers, target: 120, suffix: "+", label: "Websites shipped" },
  { icon: Users, target: 40, suffix: "+", label: "Businesses supported" },
  { icon: Star, target: 98, suffix: "%", label: "Client satisfaction" },
  { icon: Headphones, target: 24, suffix: "/7", label: "Post-launch support" },
];

const FAQS = [
  { q: "How long does a typical website take to build?", a: "Most business websites are designed, developed and ready to launch within 3–5 weeks, depending on scope. E-commerce and custom web apps usually take longer — we'll give you a clear timeline after the discovery call." },
  { q: "Do you provide the domain and hosting?", a: "We can help you set up and connect a domain and hosting plan, or work with whatever you already have. Either way, you stay in control of your own accounts." },
  { q: "Can I update the content myself after launch?", a: "Yes. We build on editor-friendly foundations so you can update text, images and pages yourself, and we're on hand for anything trickier." },
  { q: "Do you build e-commerce stores?", a: "Yes — from small product catalogues to full online stores with secure payments, inventory and order management." },
];

/* ----------------------------------------------------------------------- */
/*  Helpers                                                                 */
/* ----------------------------------------------------------------------- */

function useReveal(threshold = 0.18) {
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

function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`pw-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms", ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function useCountUp(target, active, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    let start = null;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

/* ----------------------------------------------------------------------- */
/*  Small sub-components                                                    */
/* ----------------------------------------------------------------------- */

function HeroMock() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const reduced = typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
    if (reduced) return;
    const id = setInterval(() => setCycle((c) => c + 1), 6800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pw-mock-wrap">
      <div className="pw-mock-browser" key={cycle}>
        <div className="pw-mock-top">
          <span className="pw-mdot r" />
          <span className="pw-mdot y" />
          <span className="pw-mdot g" />
          <div className="pw-murl">profenaainfotech.com</div>
        </div>
        <div className="pw-mock-body">
          <div className="pw-code-pane">
            <div className="pw-code-line" style={{ animationDelay: "0.1s" }}>
              <span className="tok-tag">&lt;section</span> <span className="tok-attr">class</span>=<span className="tok-str">"hero"</span><span className="tok-tag">&gt;</span>
            </div>
            <div className="pw-code-line" style={{ animationDelay: "0.4s" }}>
              &nbsp;&nbsp;<span className="tok-tag">&lt;h1&gt;</span><span className="tok-txt">Grow your business</span><span className="tok-tag">&lt;/h1&gt;</span>
            </div>
            <div className="pw-code-line" style={{ animationDelay: "0.7s" }}>
              &nbsp;&nbsp;<span className="tok-tag">&lt;Button</span> <span className="tok-attr">cta</span> <span className="tok-tag">/&gt;</span>
            </div>
            <div className="pw-code-line" style={{ animationDelay: "1.0s" }}>
              <span className="tok-tag">&lt;/section&gt;</span> <span className="pw-cursor">▍</span>
            </div>
          </div>
          <div className="pw-preview-pane">
            <div className="pw-pv-block pw-pv-nav" style={{ animationDelay: "1.35s" }} />
            <div className="pw-pv-block pw-pv-hero" style={{ animationDelay: "1.6s" }}>
              <div className="pw-pv-line lg" />
              <div className="pw-pv-line sm" />
              <div className="pw-pv-btn" />
            </div>
            <div className="pw-pv-cards">
              <div className="pw-pv-block pw-pv-card" style={{ animationDelay: "1.9s" }} />
              <div className="pw-pv-block pw-pv-card" style={{ animationDelay: "2.05s" }} />
              <div className="pw-pv-block pw-pv-card" style={{ animationDelay: "2.2s" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat, active, delay }) {
  const value = useCountUp(stat.target, active);
  const Icon = stat.icon;
  return (
    <Reveal className="pw-stat" delay={delay}>
      <div className="ic"><Icon size={20} /></div>
      <div className="num">{value}{stat.suffix}</div>
      <div className="label">{stat.label}</div>
    </Reveal>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`pw-faq-item ${isOpen ? "open" : ""}`}>
      <button className="pw-faq-q" onClick={onToggle} aria-expanded={isOpen}>
        {item.q}
        <ChevronDown size={18} />
      </button>
      <div className="pw-faq-a">
        <div className="pw-faq-a-inner">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/*  Main page                                                               */
/* ----------------------------------------------------------------------- */

export default function ProfenaaWebDev() {
  const [openFaq, setOpenFaq] = useState(0);
  const [statsRef, statsVisible] = useReveal(0.3);

  return (
    <div className="pw-root">
      {/* HERO */}
      <header id="top" className="pw-hero">
        <div className="pw-shell pw-hero-grid">
          <div>
            <span className="pw-eyebrow">Web Development Services</span>
            <h1>Websites built to work <em>as hard as you do.</em></h1>
            <p className="lead">
              Custom sites and web apps for businesses across Tamil Nadu — fast to load, easy to
              manage, and built to bring in customers, not just look good.
            </p>
            <div className="pw-hero-actions">
              <a href="./contact" className="pw-btn on-dark">Start your project <ArrowRight size={17} /></a>
              <span className="pw-hero-note">Free consultation · Reply within 24 hours</span>
            </div>
          </div>
          <HeroMock />
        </div>
      </header>

      {/* PROMO CARDS */}
      <section className="pw-promo">
        <div className="pw-shell pw-promo-grid">
          <Reveal as="div" className="pw-card">
            <h3>From idea to interface</h3>
            <p>We turn a rough idea into a working website that's simple to update, easy to navigate and built to convert visitors into customers.</p>
            <a href="#cta" className="pw-link">Get in touch <ArrowRight /></a>
          </Reveal>
          <Reveal as="div" className="pw-card" delay={120}>
            <h3>Engineered to last</h3>
            <p>Modern stack, clean code and a build that stays fast and secure as your business grows — whether you're a startup or an established company.</p>
            <a href="#offer" className="pw-link">See what's included <ArrowRight /></a>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="pw-why">
        <div className="pw-shell pw-why-grid">
          <Reveal as="div" className="pw-why-visual">
            <div className="pw-why-image-frame">
              <img
                src="/src/assets/industry/WebDevelopment.jpg"
                alt="Profenaa Infotech web development team at work"
                className="pw-why-image"
              />
            </div>
            <div className="pw-stack">
              <div className="pw-stack-card">
                <div className="ic"><Gauge size={18} /></div>
                <div><strong>96 / 100</strong><span>Performance score</span></div>
              </div>
              <div className="pw-stack-card">
                <div className="ic"><ShieldCheck size={18} /></div>
                <div><strong>SSL secured</strong><span>Built-in from day one</span></div>
              </div>
              <div className="pw-stack-card">
                <div className="ic"><AppWindow size={18} /></div>
                <div><strong>Mobile ready</strong><span>Every screen size</span></div>
              </div>
            </div>
          </Reveal>

          <div className="pw-why-right">
            <span className="pw-eyebrow">Why choose us</span>
            <h2 style={{ marginTop: 14 }}>Built for how your business actually runs online</h2>
            <p>
              We deliver user-friendly, secure and visually appealing web solutions that help
              businesses stand out. Our structured process keeps every project reliable,
              scalable and on brand.
            </p>
            <ul className="pw-why-list">
              {WHY_LIST.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 70}>
                  <span className="ic-wrap"><Check /></span>
                  {item}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section id="offer" className="pw-offer">
        <div className="pw-shell">
          <Reveal as="div" className="pw-section-head">
            <span className="pw-eyebrow">What we offer</span>
            <h2>Everything your website needs, under one roof</h2>
            <p>From your first landing page to a full storefront — powerful, visually sound builds that improve visibility and strengthen your brand.</p>
          </Reveal>
          <div className="pw-offer-grid">
            {OFFERS.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal as="div" key={o.title} className="pw-offer-item" delay={(i % 3) * 90}>
                  <div className="ic"><Icon size={22} /></div>
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="pw-process">
        <div className="pw-shell">
          <Reveal as="div" className="pw-section-head">
            <span className="pw-eyebrow">How we work</span>
            <h2>Six steps from first call to launch day</h2>
            <p>A structured process so you always know what's happening and what comes next.</p>
          </Reveal>
          <div className="pw-process-track">
            {PROCESS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal as="div" key={s.title} className="pw-step" delay={i * 90}>
                  <div className="pw-step-num">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="pw-tech">
        <div className="pw-shell pw-tech-head">
          <span className="pw-eyebrow">Our toolkit</span>
          <h2>Technologies we build with</h2>
        </div>
        <div className="pw-marquee" aria-hidden="true">
          <div className="pw-marquee-track">
            {TECH.map((t) => (
              <div className="pw-chip" key={`a-${t}`}><span className="dot" />{t}</div>
            ))}
          </div>
          <div className="pw-marquee-track">
            {TECH.map((t) => (
              <div className="pw-chip" key={`b-${t}`}><span className="dot" />{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="pw-stats" ref={statsRef}>
        <div className="pw-shell">
          <Reveal as="div" className="pw-section-head">
            <span className="pw-eyebrow">Track record</span>
            <h2>Numbers our clients see the results of</h2>
          </Reveal>
          <div className="pw-stats-grid">
            {STATS.map((s, i) => (
              <StatCard key={s.label} stat={s} active={statsVisible} delay={i * 90} />
            ))}
          </div>
          <p className="pw-stat-note">Sample figures for this layout — swap in your real numbers before publishing.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="pw-faq">
        <div className="pw-shell">
          <Reveal as="div" className="pw-section-head" style={{ margin: "0 auto 44px", textAlign: "center" }}>
            <span className="pw-eyebrow">Questions</span>
            <h2>Frequently asked questions</h2>
          </Reveal>
          <div className="pw-faq-list">
            {FAQS.map((item, i) => (
              <Reveal as="div" key={item.q} delay={i * 60}>
                <FaqItem
                  item={item}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="cta" className="pw-cta">
        <div className="pw-shell">
          <Reveal as="div" className="pw-cta-box">
            <div>
              <h2>Let's build something that works.</h2>
              <p>Tell us about your business and we'll put together a plan — no obligation, no jargon.</p>
            </div>
            <a href="#top" className="pw-btn on-dark">Get in touch <ArrowRight size={17} /></a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}