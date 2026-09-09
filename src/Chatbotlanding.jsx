import React, { useEffect, useRef, useState } from "react";
import "../src/css/ChatbotLanding.css";

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
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Typing dots ---------- */
function TypingDots() {
  return (
    <div className="typing">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

/* ---------- Chat bubbles that "type in" one by one on load ---------- */
function ChatBody() {
  const messages = [
    { from: "bot", text: "Hello! 👋 How can I help you today?" },
    { from: "user", text: "I want to know about your services." },
    {
      from: "bot",
      text: "Sure! We provide AI chatbot development, automation and custom conversational solutions.",
    },
    { from: "user", text: "Can I build a custom chatbot?" },
    {
      from: "bot",
      text: "Absolutely! We can create a chatbot specifically for your business.",
    },
  ];

  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= messages.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 650);
    return () => clearTimeout(t);
  }, [shown, messages.length]);

  return (
    <div className="chat-body">
      {messages.slice(0, shown).map((m, i) => (
        <div
          key={i}
          className={`message ${m.from === "bot" ? "bot-message" : "user-message"} bubble-in`}
        >
          {m.text}
        </div>
      ))}
      {shown < messages.length && <TypingDots />}
    </div>
  );
}

/* ---------- Data ---------- */
const services = [
  {
    icon: "🤖",
    title: "AI Chatbot Development",
    desc: "Intelligent AI chatbots capable of understanding customer questions and providing accurate responses.",
  },
  {
    icon: "💬",
    title: "Customer Support Chatbots",
    desc: "Automate customer support and provide instant responses 24/7.",
  },
  {
    icon: "⚙️",
    title: "AI Automation",
    desc: "Automate repetitive conversations, lead generation and business workflows.",
  },
  {
    icon: "🧠",
    title: "Generative AI",
    desc: "Integrate modern generative AI technologies into your business applications.",
  },
  {
    icon: "🌐",
    title: "Website Chatbots",
    desc: "Deploy intelligent chat assistants directly on your website.",
  },
  {
    icon: "📱",
    title: "WhatsApp Chatbots",
    desc: "Connect AI chatbots with WhatsApp to automate customer conversations and leads.",
  },
];

const features = [
  {
    title: "24/7 Customer Support",
    desc: "Give customers instant assistance at any time of the day.",
  },
  {
    title: "Natural Language Processing",
    desc: "Enable chatbots to understand natural human conversations.",
  },
  {
    title: "Lead Generation",
    desc: "Capture leads automatically through intelligent conversations.",
  },
  {
    title: "Business Automation",
    desc: "Automate repetitive tasks and improve overall business productivity.",
  },
  {
    title: "Multi-Platform Integration",
    desc: "Connect chatbots with websites, WhatsApp and business applications.",
  },
  {
    title: "Analytics & Reports",
    desc: "Track conversations, leads and chatbot performance.",
  },
];

const process = [
  { num: "01", title: "Requirement", desc: "Understand your business, customers and chatbot goals." },
  { num: "02", title: "Design", desc: "Design conversation flows and chatbot user experience." },
  { num: "03", title: "Development", desc: "Develop and integrate AI, APIs and business systems." },
  { num: "04", title: "Launch", desc: "Test, deploy and continuously improve your chatbot." },
];

const techs = [
  "Python",
  "OpenAI",
  "Generative AI",
  "NLP",
  "FAST API",
  "MySQL",
];

/* ---------- Main component ---------- */
export default function ChatbotLanding() {
  return (
    <div className="chatbot-landing">
      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content fade-in-up">
            <div className="tag pulse-tag">AI-Powered Solutions</div>

            <h1>
              Smart <span>Chatbot Development</span> For Modern Businesses
            </h1>

            <p>
              Build intelligent, engaging and scalable chatbots that automate
              conversations, improve customer support and help your business
              grow faster.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Start Your Project
              </a>
              <a href="#services" className="btn btn-outline">
                Explore Services
              </a>
            </div>
          </div>

          {/* CHATBOT UI */}
          <div className="chatbot-wrapper fade-in-up delay-2">
            <div className="chatbot float">
              <div className="chat-header">
                <div className="bot-icon spin-slow">🤖</div>
                <div>
                  <h3>AI Assistant</h3>
                  <small>
                    <span className="dot-live"></span> Online
                  </small>
                </div>
              </div>

              <ChatBody />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <span>Our Services</span>
              <h2>Chatbot Development Solutions</h2>
              <p>
                Powerful conversational AI solutions designed to automate
                business communication and improve customer experience.
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            {services.map((s, i) => (
              <Reveal delay={i * 0.08} key={s.title}>
                <div className="service-card hover-lift">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features" id="features">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <span>Why Choose Us</span>
              <h2>Powerful Chatbot Features</h2>
              <p>
                Our chatbot solutions are designed for performance,
                scalability and better customer engagement.
              </p>
            </div>
          </Reveal>

          <div className="feature-grid">
            {features.map((f, i) => (
              <Reveal delay={i * 0.06} key={f.title}>
                <div className="feature hover-lift">
                  <div className="check">✓</div>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <span>Our Process</span>
              <h2>How We Build Your Chatbot</h2>
            </div>
          </Reveal>

          <div className="process-grid">
            {process.map((p, i) => (
              <Reveal delay={i * 0.1} key={p.num}>
                <div className="process hover-lift">
                  <div className="number">{p.num}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section>
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <span>Technology</span>
              <h2>Technologies We Use</h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="tech-list">
              {techs.map((t) => (
                <div className="tech hover-pop" key={t}>
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta" id="contact">
        <Reveal>
          <div className="cta-box">
            <h2>Build Your AI Chatbot Today</h2>
            <p>
              Transform customer conversations with intelligent chatbot
              technology.
            </p>
            <a href="mailto:info@example.com" className="btn btn-primary glow-btn">
              Talk to Our Experts
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}