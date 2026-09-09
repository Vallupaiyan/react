import { useState, useEffect, useRef, Fragment } from "react";
import "../src/css//carres.css";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaHeartbeat,
  FaUsers,
  FaClock,
  FaRocket,
  FaChevronDown,
} from "react-icons/fa";


const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfgl9QiIM28yhhdfMi3n_Y_yx0bZkALay4tpxYLqLs_eIMVsw/viewform";

const stats = [
  { end: 10, suffix: "+", label: "Years of Experience" },
  { end: 5, suffix: "", label: "Open Roles" },
  { end: 40, suffix: "+", label: "Team Members" },
  { end: 6, suffix: "+", label: "Cities Represented" },
];

const cultureItems = [
  { num: "01", title: "Innovation First", desc: "We embrace new technologies and encourage creative problem-solving.", side: "left" },
  { num: "02", title: "Team Spirit", desc: "Collaboration and mutual support drive our success.", side: "right" },
  { num: "03", title: "Continuous Growth", desc: "Learning never stops, and we invest in your development.", side: "left" },
  { num: "04", title: "Excellence in Work", desc: "We strive for quality in everything we do, ensuring every task meets high standards.", side: "right" },
];

const benefits = [
  { icon: FaHeartbeat, title: "Health Coverage", desc: "Medical insurance for you, so a sick day doesn't become a financial one." },
  { icon: FaClock, title: "Flexible Hours", desc: "Core collaboration hours, flexible start and end times around them." },
  { icon: FaGraduationCap, title: "Learning Budget", desc: "Courses, certifications, and conference passes, funded, not fought for." },
  { icon: FaLaptopCode, title: "Modern Tooling", desc: "Real hardware and a stack you'll actually want on your resume." },
  { icon: FaUsers, title: "Small, Flat Teams", desc: "Direct access to decision-makers — no five layers between you and a yes." },
  { icon: FaRocket, title: "Real Ownership", desc: "You ship features end-to-end, not just tickets from a backlog." },
];

const jobs = [
  { title: "Full Stack Developer (Connectivity)", type: "Development", exp: "Internship", highlighted: true },
  { title: "Backend Developer", type: "Backend Development", exp: "Internship" },
  { title: "UI/UX Designer", type: "Design", exp: "Internship" },
  { title: "Full Stack Developer", type: "Development", exp: "Internship" },
  { title: "Human Resources", type: "Human Resources", exp: "Internship" },
];

const processSteps = [
  { step: "01", title: "Apply", desc: "Submit your resume through the form or by email — takes two minutes." },
  { step: "02", title: "Screening", desc: "A short call to understand your background and what you're looking for." },
  { step: "03", title: "Interview", desc: "A technical or role-specific round with the team you'd actually work with." },
  { step: "04", title: "Offer", desc: "We move fast — most candidates hear back within a week of the final round." },
];

// Sample placeholder quotes — replace with real employee feedback.
const voices = [
  { text: "I started as an intern here and shipped a feature to production in my second week. That kind of trust is rare.", name: "Vishnu Priya", role: "Full Stack Developer", initials: "VP" },
  { text: "The learning budget is real. I got certified in cloud infra within my first six months, fully funded.", role: "Backend Developer", name: "Karthik R", initials: "KR" },
  { text: "Flat structure means I can walk up to a founder with an idea, no five approvals needed first.", name: "Sneha M", role: "UI/UX Designer", initials: "SM" },
];

const faqs = [
  { q: "Do you hire freshers with no prior internship experience?", a: "Yes. Most of our roles are entry-level by design — we care more about problem-solving ability and willingness to learn than a packed resume." },
  { q: "Is this a paid internship?", a: "Yes, all internship roles listed here are paid. Compensation details are shared during the screening call." },
  { q: "Can I apply for more than one role?", a: "Absolutely — just mention your role preference (or say you're open to either) in your application form." },
  { q: "What's the interview process like?", a: "A short screening call, followed by a technical or role-specific round with the team, then an offer. Most candidates go through the full process in under two weeks." },
  { q: "Do you offer remote or hybrid roles?", a: "Most roles are on-site to support close team collaboration, though this varies by role — ask during your screening call." },
];

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

function Counter({ end, start, duration = 1600, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    let frame;
    let startTime = null;

    const tick = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setCount(end);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, end, duration]);

  return <span>{count}{suffix}</span>;
}

function FaqItem({ item, index, open, onToggle }) {
  const isOpen = open === index;
  return (
    <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => onToggle(isOpen ? null : index)}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <FaChevronDown className="faq-chevron" />
      </button>
      <div className="faq-answer-wrap">
        <p className="faq-answer">{item.a}</p>
      </div>
    </div>
  );
}

export default function Careers() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [statsRef, statsVisible] = useReveal(0.2);
  const [cultureRef, cultureVisible] = useReveal(0.1);
  const [benefitsRef, benefitsVisible] = useReveal();
  const [hiringRef, hiringVisible] = useReveal(0.05);
  const [processRef, processVisible] = useReveal(0.15);
  const [voicesRef, voicesVisible] = useReveal();
  const [faqRef, faqVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="cr-root">
      {/* ================= CAREERS HERO ================= */}
      <section className={`careers-hero ${heroLoaded ? "is-loaded" : ""}`}>
        <div className="careers-hero-bg"></div>
        <div className="careers-hero-overlay"></div>
        <div className="hero-orb hero-orb-a"></div>
        <div className="hero-orb hero-orb-b"></div>
        <div className="careers-hero-content">
          <h1>Join Our Team</h1>
          <p>Be part of a dynamic and innovative organization shaping the future of technology.</p>
          <a href="#job-openings" className="btn-hero">Explore Opportunities</a>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section ref={statsRef} className="cr-stats-section">
        <div className="cr-stats-card">
          {stats.map((s, i) => (
            <div key={s.label} className={`cr-stat-item reveal ${statsVisible ? "is-visible" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <h3 className="cr-stat-number"><Counter end={s.end} start={statsVisible} suffix={s.suffix} /></h3>
              <p className="cr-stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CULTURE / TIMELINE ================= */}
      <section ref={cultureRef} className="culture-section">
        <div className="container">
          <h1 className="section-heading">Our Culture</h1>
          <div className="timeline-section">
            <div className="timeline">
              {cultureItems.map((item, i) => (
                <Fragment key={item.num}>
                  <div
                    className={`timeline-item ${item.side} reveal`.concat(cultureVisible ? " is-visible" : "")}
                    style={{ transitionDelay: `${i * 0.12}s` }}
                  >
                    <h2>{item.num}</h2>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  {i === 0 && <div className="timeline-line"></div>}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY PROFENAA / BENEFITS ================= */}
      <section ref={benefitsRef} className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Profenaa</h2>
          <p className="section-subtitle">Concrete reasons, not a list of adjectives.</p>

          <div className="benefits-grid">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className={`benefit-card reveal-pop ${benefitsVisible ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="benefit-icon"><Icon /></div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HIRING SECTION ================= */}
      <section id="job-openings" ref={hiringRef} className="hiring-section">
        <div className="container">
          <h2 className="section-title">We Are Hiring</h2>
          <p className="section-subtitle">
            Do you want to be a part of an inclusive and forward-thinking organization? <br />
            Apply now! Submit your resume at{" "}
            <a href="mailto:hr@profenaainfotech.com" className="email-link">hr@profenaainfotech.com</a>
          </p>

          {jobs.map((job, i) => (
            <div
              key={job.title}
              className={`job-card ${job.highlighted ? "highlighted-card" : ""} reveal ${hiringVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="job-info">
                <p className="experience">{job.exp}</p>
                <h3 className="job-title">{job.title}</h3>
                <div className="job-meta">
                  <span className="job-type">{job.type}</span>
                  <span className="job-time">⏱ FULL TIME</span>
                </div>
              </div>
              <a href={APPLY_URL} className="apply-btn">APPLY NOW</a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= APPLICATION PROCESS ================= */}
      <section ref={processRef} className="process-section">
        <div className="container">
          <h2 className="section-title">How You'll Apply</h2>
          <p className="section-subtitle">Four steps, most candidates hear back within two weeks.</p>

          <div className="process-wrapper">
            {processSteps.map((p, i) => (
              <div key={p.step} className={`process-card reveal ${processVisible ? "is-visible" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="process-step">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {i < processSteps.length - 1 && <div className="process-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EMPLOYEE VOICES ================= */}
      <section ref={voicesRef} className="voices-section">
        <div className="container">
          <h2 className="section-title">In Their Words</h2>
          <p className="section-subtitle">What it's actually like on the inside.</p>

          <div className="voices-wrapper">
            {voices.map((v, i) => (
              <div key={v.name} className={`voice-card reveal ${voicesVisible ? "is-visible" : ""}`} style={{ transitionDelay: `${i * 0.12}s` }}>
                <p className="voice-text">"{v.text}"</p>
                <div className="voice-author">
                  <div className="voice-avatar">{v.initials}</div>
                  <div>
                    <h4>{v.name}</h4>
                    <span>{v.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section ref={faqRef} className="faq-section">
        <div className="container">
          <h2 className="section-title">Common Questions</h2>
          <div className={`faq-list reveal ${faqVisible ? "is-visible" : ""}`}>
            {faqs.map((item, i) => (
              <FaqItem key={item.q} item={item} index={i} open={openFaq} onToggle={setOpenFaq} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section ref={ctaRef} className={`careers-cta-section reveal ${ctaVisible ? "is-visible" : ""}`}>
        <h2>Don't See Your Role Listed?</h2>
        <p>We're always open to meeting people who'd be a strong fit for the team.</p>
        <a href="mailto:hr@profenaainfotech.com" className="btn-hero cta-btn">Send Your Resume</a>
      </section>
    </div>
  );
}