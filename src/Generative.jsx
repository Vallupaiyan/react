import { useEffect, useRef, useState } from 'react'
import "../src/css/Generative.css";

/* Scroll-reveal wrapper: fades + rises elements into view once, respecting reduced-motion */
function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 1400
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, value])

  return (
    <span ref={ref} className="stat-value">
      {count}
      {suffix}
    </span>
  )
}

const solutions = [
  {
    icon: '💬',
    title: 'AI Chatbots',
    text: 'Build intelligent conversational assistants that understand users and provide instant responses.',
  },
  {
    icon: '✍️',
    title: 'Content Generation',
    text: 'Generate high-quality text, marketing content, product descriptions and business documents.',
  },
  {
    icon: '⚙️',
    title: 'AI Automation',
    text: 'Automate repetitive business tasks using intelligent AI-powered workflows.',
  },
  {
    icon: '💻',
    title: 'AI Code Generation',
    text: 'Accelerate software development with AI-assisted code generation and developer tools.',
  },
]

const stats = [
  { value: 500, suffix: '+', label: 'Clients Worldwide' },
  { value: 10, suffix: 'M+', label: 'AI Requests Processed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'AI-Powered Support' },
]

const steps = [
  {
    num: '01',
    title: 'Share Your Goals',
    text: 'Tell us what you want to build, automate, or generate — we start from your business needs.',
  },
  {
    num: '02',
    title: 'We Design the Model',
    text: 'Our team architects the right generative AI approach, tools and integrations for your case.',
  },
  {
    num: '03',
    title: 'Train & Fine-Tune',
    text: 'We train and fine-tune models on your data so outputs match your brand and standards.',
  },
  {
    num: '04',
    title: 'Launch & Scale',
    text: 'Deploy into your workflows and scale confidently, with monitoring and continuous improvement.',
  },
]

const testimonials = [
  {
    quote:
      'Their generative AI chatbot cut our support response time in half within the first month.',
    name: 'Ariana Cole',
    role: 'Head of Support, Nimbus Retail',
  },
  {
    quote:
      'The content generation tools gave our marketing team a huge speed boost without losing our voice.',
    name: 'Devon Marsh',
    role: 'Marketing Director, Lattice Foods',
  },
  {
    quote:
      'Rock solid AI automation. Our manual workflows dropped by 60% almost immediately.',
    name: 'Priya Shah',
    role: 'Operations Lead, Verve Logistics',
  },
]

// const team = [
//   { name: 'Sarah Kim', role: 'Founder & CEO', emoji: '👩🏻‍💼' },
//   { name: 'Marcus Lee', role: 'Head of AI Research', emoji: '👨🏻‍🔬' },
//   { name: 'Elena Ruiz', role: 'Lead ML Engineer', emoji: '👩🏽‍💻' },
//   { name: 'Jordan Blake', role: 'Product Director', emoji: '🧑🏾‍💼' },
// ]

const benefits = [
  {
    num: '01',
    title: 'Increase Productivity',
    text: 'Automate repetitive tasks and allow your teams to focus on high-value activities.',
  },
  {
    num: '02',
    title: 'Improve Customer Experience',
    text: 'Deliver personalized and intelligent experiences across digital platforms.',
  },
  {
    num: '03',
    title: 'Reduce Operational Costs',
    text: 'Optimize workflows and reduce manual processes using AI-powered automation.',
  },
  {
    num: '04',
    title: 'Make Better Decisions',
    text: 'Use AI-driven insights to support faster and smarter business decisions.',
  },
]

export default function Generative() {
  return (
    <div className="page">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-glow" />

        <Reveal className="hero-content" as="div">
          <div className="ai-badge">
            <span className="pulse-dot" />
            AI-POWERED SOLUTIONS
          </div>

          <h1>
            Generative <span className="accent">AI</span>
          </h1>

          <p>
            Transform your business with intelligent Generative AI solutions
            that create content, automate workflows and deliver smarter
            digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#solutions" className="primary-btn">
              Explore AI Solutions
            </a>
            <a href="#contact" className="secondary-btn">
              Get Started
            </a>
          </div>
        </Reveal>

        <Reveal className="ai-visual" delay={150}>
          <div className="ai-circle">
            <div className="ai-core">AI</div>
            <div className="orbit orbit-1">
              <span className="orbit-dot" />
            </div>
            <div className="orbit orbit-2">
              <span className="orbit-dot" />
            </div>
            <div className="orbit orbit-3">
              <span className="orbit-dot" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="stat">
            <Counter value={s.value} suffix={s.suffix} />
            <span className="stat-label">{s.label}</span>
          </Reveal>
        ))}
      </section>

      {/* ================= ABOUT / SOLUTIONS ================= */}
      <section className="about-ai" id="solutions">
        <Reveal className="section-title" as="div">
          <span className="eyebrow">WHAT IS GENERATIVE AI?</span>
          <h2>
            Intelligence That <strong>Creates</strong>
          </h2>
          <p>
            Generative AI uses advanced artificial intelligence models to
            generate new content such as text, images, code, audio and other
            digital experiences.
          </p>
        </Reveal>

        <div className="ai-cards">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="ai-card">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="how-it-works">
        <Reveal className="section-title" as="div">
          <span className="eyebrow">HOW IT WORKS</span>
          <h2>
            From Idea To <strong>Impact</strong>
          </h2>
          <p>A simple, guided path from your first conversation to a fully deployed AI solution.</p>
        </Reveal>

        <div className="steps-track">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 110} className="step">
              <div className="step-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="benefits">
        <Reveal className="section-title" as="div">
          <span className="eyebrow">WHY GENERATIVE AI?</span>
          <h2>
            Build Smarter. <strong>Work Faster.</strong>
          </h2>
        </Reveal>

        <div className="benefit-grid">
          {benefits.map((b, i) => (
            <Reveal key={b.num} delay={i * 90} className="benefit">
              <h3>{b.num}</h3>
              <h4>{b.title}</h4>
              <p>{b.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials">
        <Reveal className="section-title" as="div">
          <span className="eyebrow">WHAT CLIENTS SAY</span>
          <h2>
            Trusted By <strong>Growing Teams</strong>
          </h2>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="testimonial-card">
              <p className="quote">“{t.quote}”</p>
              <div className="testimonial-person">
                <span className="avatar-dot" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
      {/* <section className="team">
        <Reveal className="section-title" as="div">
          <span className="eyebrow">THE PEOPLE BEHIND IT</span>
          <h2>
            Meet The <strong>Team</strong>
          </h2>
        </Reveal>

        <div className="team-grid">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100} className="team-card">
              <div className="team-avatar">{m.emoji}</div>
              <h4>{m.name}</h4>
              <p>{m.role}</p>
            </Reveal>
          ))}
        </div>
      </section> */}

      {/* ================= CTA ================= */}
      <section className="cta" id="contact">
        <Reveal as="div">
          <span className="eyebrow">READY FOR THE FUTURE?</span>
          <h2>
            Let's Build With <strong>Generative AI</strong>
          </h2>
          <p>Turn your ideas into intelligent digital solutions.</p>
          <a href="./contact" className="primary-btn">
            Talk To Our Experts
          </a>
        </Reveal>
      </section>
    </div>
  )
}