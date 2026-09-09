import { useEffect, useRef, useState } from 'react'
import '../src/css/AIAutomation.css'

/* ---------- Reusable scroll-reveal hook ---------- */
function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

/* ---------- Reveal wrapper (fades/slides up on scroll) ---------- */
function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/* ---------- Static content ---------- */
const services = [
  {
    icon: 'fa-robot',
    title: 'AI Chatbots',
    description:
      'Build intelligent AI chatbots that answer customer questions and provide instant support 24/7.',
  },
  {
    icon: 'fa-gears',
    title: 'Workflow Automation',
    description:
      'Automate repetitive workflows and connect your business applications into one intelligent system.',
  },
  {
    icon: 'fa-envelope-open-text',
    title: 'Marketing Automation',
    description:
      'Automate email campaigns, lead generation, social media and customer engagement using AI.',
  },
  {
    icon: 'fa-chart-simple',
    title: 'Business Analytics',
    description:
      'Turn business data into actionable insights using AI-powered analytics and intelligent reporting.',
  },
]

const chartBars = [35, 48, 42, 62, 55, 78, 92]

const dashboardItems = [
  { label: 'Customer Support', status: 'Automated' },
  { label: 'Lead Generation', status: 'Automated' },
  { label: 'Email Marketing', status: 'Automated' },
]

const checklist = [
  'Automate repetitive tasks',
  'Connect your business applications',
  'Reduce operational costs',
  'Improve customer experience',
]

const steps = [
  {
    number: '01',
    icon: 'fa-magnifying-glass',
    title: 'Analyze',
    description:
      'We identify repetitive tasks and business processes that can be automated.',
  },
  {
    number: '02',
    icon: 'fa-lightbulb',
    title: 'Design',
    description:
      'We design a customized AI automation strategy for your business.',
  },
  {
    number: '03',
    icon: 'fa-code',
    title: 'Build',
    description:
      'Our team develops and integrates your AI-powered automation system.',
  },
  {
    number: '04',
    icon: 'fa-rocket',
    title: 'Launch',
    description: 'We deploy, monitor and optimize your automation workflows.',
  },
]

const benefits = [
  {
    icon: 'fa-clock',
    title: 'Save Time',
    description:
      'Automate repetitive tasks and focus on important business activities.',
  },
  {
    icon: 'fa-money-bill-trend-up',
    title: 'Reduce Costs',
    description: 'Reduce manual work and improve operational efficiency.',
  },
  {
    icon: 'fa-users',
    title: 'Better Customer Experience',
    description: 'Provide faster and smarter customer support.',
  },
]

const miniStats = [
  { value: '24/7', label: 'Automation' },
  { value: '99%', label: 'Efficiency' },
  { value: '10x', label: 'Faster' },
]

/* ---------- NEW: logos strip ---------- */
const trustedLogos = [
  'NimbusCart',
  'Fernbank Labs',
  'Orbital Retail',
  'Kestrel Finance',
  'Havenwell Health',
  'Pinecrest Logistics',
]

/* ---------- NEW: stats band ---------- */
const bandStats = [
  { value: '3,200+', label: 'Workflows automated' },
  { value: '18M', label: 'Tasks handled monthly' },
  { value: '4.9/5', label: 'Average client rating' },
  { value: '11 days', label: 'Average time to launch' },
]

/* ---------- NEW: testimonials ---------- */
const testimonials = [
  {
    quote:
      'Our support queue used to pile up every Monday. Now the AI agent clears the routine tickets before our team even logs in.',
    name: 'Priya Raman',
    role: 'Head of Support, NimbusCart',
  },
  {
    quote:
      'We connected five different tools into one workflow in under two weeks. What used to take three people a full day now runs itself.',
    name: 'Daniel Osei',
    role: 'Operations Lead, Kestrel Finance',
  },
  {
    quote:
      'The analytics dashboard actually tells us what to fix next instead of just showing numbers. That shift alone paid for itself.',
    name: 'Marta Iglesias',
    role: 'Founder, Havenwell Health',
  },
]

/* ---------- NEW: pricing ---------- */
const pricingPlans = [
  {
    name: 'Starter',
    price: '$149',
    period: '/month',
    description: 'For small teams automating their first workflow.',
    features: [
      '1 AI-powered workflow',
      'Email + chat support automation',
      'Up to 2,000 tasks / month',
      'Standard integrations',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$449',
    period: '/month',
    description: 'For growing businesses automating across departments.',
    features: [
      'Up to 8 AI-powered workflows',
      'Marketing + support automation',
      'Up to 25,000 tasks / month',
      'Priority integrations',
      'Dedicated automation strategist',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations automating at scale.',
    features: [
      'Unlimited workflows',
      'Custom AI model tuning',
      'Unlimited tasks',
      'Dedicated infrastructure',
      '24/7 priority support',
    ],
    highlighted: false,
  },
]

/* ---------- NEW: FAQ ---------- */
const faqs = [
  {
    question: 'How long does it take to launch our first automation?',
    answer:
      'Most clients launch their first workflow within 11 days of kickoff. Simple chatbot or email automations can go live in under a week.',
  },
  {
    question: 'Do we need technical staff to maintain the automation?',
    answer:
      'No. We handle setup, monitoring and optimization. Your team gets a simple dashboard to review performance and request changes.',
  },
  {
    question: 'Can this connect to the tools we already use?',
    answer:
      'Yes. We integrate with common CRMs, help desks, email platforms and databases, and can build custom connections for internal tools.',
  },
  {
    question: 'What happens if a workflow needs a human?',
    answer:
      'Every workflow includes handoff rules. When a task falls outside its confidence threshold, it routes straight to the right person on your team.',
  },
]

/* ---------- NEW: FAQ item with expand/collapse ---------- */
function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>{faq.question}</span>
        <i className={`fa-solid ${open ? 'fa-minus' : 'fa-plus'}`}></i>
      </button>

      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  )
}

/* ---------- App ---------- */
function AIAutomations() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-bg"></div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="badge enter" style={{ animationDelay: '0.1s' }}>
              <span></span>
              AI-Powered Business Automation
            </div>

            <h1 className="enter" style={{ animationDelay: '0.22s' }}>
              Automate Your Business
              <strong> With AI</strong>
            </h1>

            <p className="enter" style={{ animationDelay: '0.34s' }}>
              Transform repetitive business processes into intelligent
              automated workflows. Save time, reduce costs and grow your
              business with next-generation AI automation.
            </p>

            <div className="hero-buttons enter" style={{ animationDelay: '0.46s' }}>
              <a href="#contact" className="btn primary">
                Start Automation
                <i className="fa-solid fa-arrow-right"></i>
              </a>

              <a href="#solutions" className="btn secondary">
                Explore Solutions
              </a>
            </div>

            <div className="hero-stats enter" style={{ animationDelay: '0.58s' }}>
              <div>
                <h3>80%</h3>
                <p>Time Saved</p>
              </div>

              <div>
                <h3>24/7</h3>
                <p>Automation</p>
              </div>

              <div>
                <h3>10x</h3>
                <p>Productivity</p>
              </div>
            </div>
          </div>

          <div className="hero-visual enter" style={{ animationDelay: '0.3s' }}>
            <div className="ai-circle">
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>

              <div className="ai-core">
                <i className="fa-solid fa-brain"></i>
              </div>

              <div className="floating-card card-one">
                <i className="fa-solid fa-robot"></i>
                <span>AI Agent</span>
                <b>Active</b>
              </div>

              <div className="floating-card card-two">
                <i className="fa-solid fa-bolt"></i>
                <span>Workflow</span>
                <b>Running</b>
              </div>

              <div className="floating-card card-three">
                <i className="fa-solid fa-chart-line"></i>
                <span>Growth</span>
                <b>+86%</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW: TRUSTED-BY LOGOS STRIP ================= */}
      <section className="logos-strip">
        <Reveal className="logos-track" as="div">
          <span className="logos-label">Trusted by teams at</span>
          <div className="logos-row">
            {trustedLogos.map((logo) => (
              <span className="logo-pill" key={logo}>
                {logo}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section" id="services">
        <Reveal className="section-heading">
          <span className="small-title">WHAT WE AUTOMATE</span>

          <h2>
            Powerful <span>AI Automation</span> Services
          </h2>

          <p>
            Automate your everyday business operations with intelligent
            AI-powered solutions.
          </p>
        </Reveal>

        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal
              as="div"
              className="service-card"
              delay={index * 100}
              key={service.title}
            >
              <div className="service-icon">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact">
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="solutions section" id="solutions">
        <div className="solution-content">
          <Reveal className="solution-image" as="div">
            <div className="dashboard">
              <div className="dashboard-top">
                <span>AI Automation Dashboard</span>
                <span className="online">● Online</span>
              </div>

              <div className="chart-box">
                <div className="chart-header">
                  <span>Automation Performance</span>
                  <strong>+42.8%</strong>
                </div>

                <div className="chart">
                  {chartBars.map((height, index) => (
                    <span
                      key={index}
                      className="chart-bar"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${index * 90}ms`,
                      }}
                    ></span>
                  ))}
                </div>
              </div>

              <div className="dashboard-items">
                {dashboardItems.map((item) => (
                  <div key={item.label}>
                    <i className="fa-solid fa-check"></i>
                    <span>{item.label}</span>
                    <b>{item.status}</b>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="solution-text" as="div" delay={150}>
            <span className="small-title">SMART TECHNOLOGY</span>

            <h2>
              Turn Manual Work Into <span>Smart Automation</span>
            </h2>

            <p>
              Our AI automation systems connect your tools, data and
              workflows to create a smarter and more efficient business.
            </p>

            <div className="check-list">
              {checklist.map((item) => (
                <div key={item}>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a href="./contact" className="btn primary">
              Build Your AI System
            </a>
          </Reveal>
        </div>
      </section>

      {/* ================= NEW: STATS BAND ================= */}
      <section className="stats-band">
        <div className="stats-band-grid">
          {bandStats.map((stat, index) => (
            <Reveal
              as="div"
              className="stats-band-item"
              delay={index * 100}
              key={stat.label}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section process-section" id="process">
        <Reveal className="section-heading">
          <span className="small-title">OUR PROCESS</span>

          <h2>
            From Idea To <span>AI Automation</span>
          </h2>

          <p>A simple process to transform your business operations.</p>
        </Reveal>

        <div className="process-grid">
          {steps.map((step, index) => (
            <Reveal
              as="div"
              className="process-card"
              delay={index * 120}
              key={step.number}
            >
              <div className="process-number">{step.number}</div>

              <i className={`fa-solid ${step.icon}`}></i>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about section" id="about">
        <div className="about-content">
          <Reveal className="about-text" as="div">
            <span className="small-title">WHY AI AUTOMATION?</span>

            <h2>
              Work Smarter. <span>Not Harder.</span>
            </h2>

            <p>
              AI automation helps businesses eliminate repetitive work,
              respond faster and make better decisions.
            </p>

            <div className="benefits">
              {benefits.map((benefit, index) => (
                <div
                  className="benefit enter-left"
                  style={{ animationDelay: `${0.15 + index * 0.12}s` }}
                  key={benefit.title}
                >
                  <div className="benefit-icon">
                    <i className={`fa-solid ${benefit.icon}`}></i>
                  </div>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="about-card" as="div" delay={200}>
            <div className="big-icon">
              <i className="fa-solid fa-brain"></i>
            </div>

            <h3>AI-Powered Future</h3>

            <p>
              Intelligent automation that works continuously for your
              business.
            </p>

            <div className="about-line"></div>

            <div className="mini-stats">
              {miniStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= NEW: TESTIMONIALS ================= */}
      <section className="section testimonials-section" id="testimonials">
        <Reveal className="section-heading">
          <span className="small-title">WHAT CLIENTS SAY</span>

          <h2>
            Real Results, <span>Real Teams</span>
          </h2>

          <p>Businesses that automated their busywork and never looked back.</p>
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal
              as="div"
              className="testimonial-card"
              delay={index * 120}
              key={testimonial.name}
            >
              <i className="fa-solid fa-quote-left quote-icon"></i>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <span className="author-avatar">
                  {testimonial.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= NEW: PRICING ================= */}
      <section className="section pricing-section" id="pricing">
        <Reveal className="section-heading">
          <span className="small-title">SIMPLE PRICING</span>

          <h2>
            Plans That <span>Scale With You</span>
          </h2>

          <p>Start with one workflow, or automate every department at once.</p>
        </Reveal>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <Reveal
              as="div"
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
              delay={index * 120}
              key={plan.name}
            >
              {plan.highlighted && (
                <span className="pricing-badge">Most Popular</span>
              )}

              <h3>{plan.name}</h3>

              <div className="pricing-price">
                <strong>{plan.price}</strong>
                <span>{plan.period}</span>
              </div>

              <p className="pricing-description">{plan.description}</p>

              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <i className="fa-solid fa-circle-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="./contact"
                className={`btn ${plan.highlighted ? 'primary' : 'secondary'}`}
              >
                Get Started
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= NEW: FAQ ================= */}
      <section className="section faq-section" id="faq">
        <Reveal className="section-heading">
          <span className="small-title">QUESTIONS</span>

          <h2>
            Frequently Asked <span>Questions</span>
          </h2>

          <p>Everything you need to know before you automate.</p>
        </Reveal>

        <Reveal className="faq-list" as="div" delay={100}>
          {faqs.map((faq, index) => (
            <FaqItem faq={faq} index={index} key={faq.question} />
          ))}
        </Reveal>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta" id="contact">
        <Reveal className="cta-content" as="div">
          <span className="small-title">READY TO AUTOMATE?</span>

          <h2>
            Build Your <span>AI-Powered Business</span> Today
          </h2>

          <p>
            Let's identify what you can automate and build a smarter
            workflow for your business.
          </p>

          <a href="./contact" className="btn primary">
            Talk To Our AI Experts
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </Reveal>
      </section>
    </>
  )
}

export default AIAutomations