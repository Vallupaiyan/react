import { useState, useEffect, useRef, useCallback } from "react";
import '../src/css//client.css';
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";

const industries = [
  { name: 'IT & Software Companies', img: './Assets/Client-Page/Industries/it-software.jpg', label: 'IT & Software' },
  { name: 'Manufacturing & Engineering', img: './Assets/Client-Page/Industries/manufacturing.jpg', label: 'Manufacturing' },
  { name: 'Education & Training Institutes', img: './Assets/Client-Page/Industries/education.jpg', label: 'Education' },
  { name: 'Retail & E-commerce', img: './Assets/Client-Page/Industries/retail.jpg', label: 'Retail' },
  { name: 'Healthcare & Diagnostics', img: './Assets/Client-Page/Industries/healthcare.jpg', label: 'Healthcare' },
  { name: 'Banking & Financial Services', img: './Assets/Client-Page/Industries/banking.jpg', label: 'Banking' },
  { name: 'Logistics & Supply Chain', img: './Assets/Client-Page/Industries/logistics.jpg', label: 'Logistics' },
  { name: 'Startups & MSMEs', img: './Assets/Client-Page/Industries/startups.jpg', label: 'Startups' },
];

const processSteps = [
  { title: 'Requirement Gathering', desc: 'We understand your project goals, audience, and business needs to plan the perfect solution.', img: './Assets/Client-Page/Requirement-Gathering.jpg' },
  { title: 'Planning & UI/UX Design', desc: 'We create wireframes, layout structures, and user-friendly interface designs.', img: './Assets/Client-Page/UIUX-Design.jpg' },
  { title: 'Development', desc: 'Our developers bring your project to life using modern frameworks and clean coding practices.', img: './Assets/Client-Page/Development.jpg' },
  { title: 'Testing & Quality Assurance', desc: 'We perform various tests to ensure your project is secure, fast, and error-free.', img: './Assets/Client-Page/Testing.jpg' },
  { title: 'Deployment', desc: 'We deploy your project with complete configuration, optimization, and monitoring.', img: './Assets/Client-Page/Deployment.jpg' },
  { title: 'Support & Maintenance', desc: 'We continue to provide updates, new features, and long-term technical support.', img: './Assets/Client-Page/Support.jpg' },
];

const stats = [
  { end: 10, suffix: '+', label: 'Years of Experience' },
  { end: 150, suffix: '+', label: 'Projects Delivered' },
  { end: 60, suffix: '+', label: 'Happy Clients' },
  { end: 15, suffix: '+', label: 'Industries Served' },
];

// Sample placeholder testimonials — replace with real client feedback.
const testimonials = [
  {
    text: 'Profenaa Infotech understood our requirements from day one. The team delivered a robust platform on time and has stayed responsive for every update since.',
    name: 'Arun Kumar',
    role: 'Operations Head, Manufacturing',
    initials: 'AK',
  },
  {
    text: 'Working with Profenaa felt like having an in-house tech team. Communication was clear and the final product exceeded what we expected.',
    name: 'Priya Raman',
    role: 'Founder, E-commerce Startup',
    initials: 'PR',
  },
  {
    text: 'From planning to deployment, the process was smooth and transparent. Our new system has genuinely improved how our team works day to day.',
    name: 'Deepak Suresh',
    role: 'IT Manager, Healthcare',
    initials: 'DS',
  },
];

const clientLogos = [
  { src: './Assets/Client-Page/AxisCades.png', label: 'AxisCades' },
  { src: './Assets/Client-Page/CADOpt-logo.png', label: 'CADOpt' },
  { src: './Assets/Client-Page/Caresoft_Logo.jpg', label: 'Caresoft' },
  { src: './Assets/Client-Page/hyundai-logo.jpg', label: 'Hyundai' },
  { src: './Assets/Client-Page/Roots-logo.png', label: 'Roots' },
  { src: './Assets/Client-Page/Pricol_logo.png', label: 'Pricol' },
];

const placeholderTile = (label, bg = '0657A3', fg = 'ffffff') =>
  `https://placehold.co/500x360/${bg}/${fg}?font=poppins&text=${encodeURIComponent(label)}`;

const placeholderLogo = (label) =>
  `https://placehold.co/150x70/eef4fc/0657A3?font=poppins&text=${encodeURIComponent(label)}`;

function handleImgFallback(url) {
  return (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = url;
  };
}

// Fires once, the first time the referenced element scrolls into view.
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Counter({ end, start, duration = 1800, suffix = '', label, onDone }) {
  const [count, setCount] = useState(0);

  // Keep the latest onDone reachable without making the animation effect
  // depend on it. onDone is recreated every parent render (it's an inline
  // arrow function), so putting it in the deps array below was causing the
  // whole count-up to cancel and restart from 0 every single time — that's
  // the "running forever" bug: it never got to stay at the finished number.
  const onDoneRef = useRef(onDone);
  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!start) return undefined;
    let frame;
    let startTime = null;

    const tick = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setCount(end);
        onDoneRef.current?.(label);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, end, duration, label]);

  return <span>{count}{suffix}</span>;
}

// Small 3D tilt-on-hover wrapper used by the testimonial cards.
function TiltCard({ className, style, children }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--tiltX', `${(-y * 8).toFixed(2)}deg`);
    el.style.setProperty('--tiltY', `${(x * 8).toFixed(2)}deg`);
    el.style.setProperty('--glowX', `${(x + 0.5) * 100}%`);
    el.style.setProperty('--glowY', `${(y + 0.5) * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--tiltX', '0deg');
    el.style.setProperty('--tiltY', '0deg');
  };

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

export default function Client() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [statsRef, statsVisible] = useReveal(0.2);
  const [industriesRef, industriesVisible] = useReveal();
  const [processRef, processVisible] = useReveal(0.15);
  const [testimonialsRef, testimonialsVisible] = useReveal();
  const [logosRef, logosVisible] = useReveal();

  const [ctaRef, ctaVisible] = useReveal();
  const [statsPopped, setStatsPopped] = useState({});

  // Stable across renders (empty dep array), and idempotent — if a label is
  // already marked popped, it returns the same `prev` object so React bails
  // out of re-rendering instead of spinning again.
  const handleStatDone = useCallback((label) => {
    setStatsPopped((prev) => (prev[label] ? prev : { ...prev, [label]: true }));
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="cp-root">

      {/* ================= CLIENT HERO SECTION ================= */}
      <section className={`client-hero ${heroLoaded ? 'is-loaded' : ''}`}>
        <div className="client-hero-bg"></div>
        <div className="client-hero-overlay"></div>
        <div className="hero-orb hero-orb-a"></div>
        <div className="hero-orb hero-orb-b"></div>
        <div className="client-hero-content">
          <h1>Our Clients</h1>
          <p>Trusted by businesses of all sizes who rely on our expertise, innovation, and long-term support.</p>
          <a href="./contact-us.html" className="client-btn">Work With Us</a>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section ref={statsRef} className="stats-section">
        <div className="stats-card">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`stat-item reveal ${statsVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <h3 className={`stat-number ${statsPopped[s.label] ? 'pop' : ''}`}>
                <Counter
                  end={s.end}
                  start={statsVisible}
                  suffix={s.suffix}
                  label={s.label}
                  onDone={handleStatDone}
                />
              </h3>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES SECTION ================= */}
      <section ref={industriesRef} className="industries-section">
        <h2 className="industries-title">Industries We Work With</h2>
        <p className="industries-subtext">
          We collaborate with diverse businesses—helping them scale with reliable and innovative technology solutions.
        </p>

        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={`industry-item reveal-pop ${industriesVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="industry-img-wrap">
                <img
                  src={ind.img}
                  alt={ind.name}
                  onError={handleImgFallback(placeholderTile(ind.label))}
                />
              </div>
              <p>{ind.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DEVELOPMENT PROCESS SECTION ================= */}
      <section ref={processRef} className="dev-process">
        <h2 className="dev-title">Our Development Process</h2>

        <div className="dev-wrapper">
          {processSteps.map((step, i) => (
            <div
              key={step.title}
              className={`dev-row reveal ${processVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="dev-step">{i + 1}</div>
              <div className="dev-img">
                <img
                  src={step.img}
                  alt={step.title}
                  onError={handleImgFallback(placeholderTile(step.title))}
                />
              </div>
              <div className="dev-text">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section ref={testimonialsRef} className="testimonials-section">
        <h2 className="industries-title">What Our Clients Say</h2>
        <p className="industries-subtext">Real feedback from businesses we've partnered with.</p>

        <div className="testimonials-wrapper">
          {testimonials.map((t, i) => (
            <TiltCard
              key={t.name}
              className={`testimonial-card reveal ${testimonialsVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="avatar">{t.initials}</div>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ============== CLIENT LOGOS SECTION (marquee) ============== */}
      <section ref={logosRef} className="client-strip-section">
        <h2 className={`client-strip-title reveal ${logosVisible ? 'is-visible' : ''}`}>Our Trusted Clients</h2>
        <p className={`client-strip-subtext reveal ${logosVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          We are proud to be the technology partner for several respected brands and organizations.
        </p>

        <div className="marquee-viewport">
          <div className="marquee-track">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={`${logo.label}-${i}`} className="client-strip-item">
                <img
                  src={logo.src}
                  alt={`${logo.label} logo`}
                  onError={handleImgFallback(placeholderLogo(logo.label))}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section
        ref={ctaRef}
        className={`final-cta-section reveal ${ctaVisible ? 'is-visible' : ''}`}
      >
        <h2>Ready to Become Our Next Success Story?</h2>
        <p>Let's turn your idea into a solution that works.</p>
        <a href="./contact-us.html" className="client-btn cta-btn">
          Start a Conversation <FaArrowRight size={18} />
        </a>
      </section>
    </div>
  );
}