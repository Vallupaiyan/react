import React from "react";
import "../src/css/CseIt.css";

const topics = [
  {
    icon: "💻",
    title: "Programming",
    desc: "Learn Python, Java, C, C++ and JavaScript programming.",
  },
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Build modern websites using HTML, CSS, JavaScript and React.",
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    desc: "Explore AI, Machine Learning and Generative AI technologies.",
  },
  {
    icon: "📊",
    title: "Data Science",
    desc: "Learn data analysis, visualization and data-driven solutions.",
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    desc: "Understand cloud platforms, deployment and modern infrastructure.",
  },
  {
    icon: "🔐",
    title: "Cyber Security",
    desc: "Learn the basics of networks, security and protecting systems.",
  },
];

const careers = [
  { icon: "💻", label: "Software Developer" },
  { icon: "🌐", label: "Full Stack Developer" },
  { icon: "📊", label: "Data Analyst" },
  { icon: "🤖", label: "AI / ML Engineer" },
  { icon: "☁️", label: "Cloud Engineer" },
  { icon: "🔐", label: "Cyber Security Analyst" },
];

const stats = [
  { number: "500+", label: "Students Trained" },
  { number: "40+", label: "Expert Mentors" },
  { number: "95%", label: "Placement Rate" },
  { number: "50+", label: "Hiring Partners" },
];

const roadmap = [
  {
    step: "01",
    title: "Foundation",
    desc: "Programming basics, logic building and problem solving with C, Python and Java.",
  },
  {
    step: "02",
    title: "Core Skills",
    desc: "Data structures, algorithms, databases and web development fundamentals.",
  },
  {
    step: "03",
    title: "Specialization",
    desc: "Choose AI/ML, Data Science, Cloud or Cyber Security as your focus track.",
  },
  {
    step: "04",
    title: "Project & Placement",
    desc: "Build real-world projects, prepare for interviews and get placed with our partners.",
  },
];

const testimonials = [
  {
    quote:
      "The hands-on projects helped me land my first developer role within weeks of completing the course.",
    name: "Priya S.",
    role: "Software Developer",
  },
  {
    quote:
      "The mentors made complex AI concepts easy to understand with real examples.",
    name: "Arun K.",
    role: "AI / ML Engineer",
  },
  {
    quote:
      "Great balance of theory and practice. The cloud track prepared me for my current job.",
    name: "Divya R.",
    role: "Cloud Engineer",
  },
];

const faqs = [
  {
    q: "Do I need prior coding experience to join?",
    a: "No prior experience is required. The course starts from programming fundamentals before moving to advanced topics.",
  },
  {
    q: "How long does the full program take?",
    a: "The complete track, from foundation to specialization, typically takes 6 to 9 months depending on your pace.",
  },
  {
    q: "Will I work on real projects?",
    a: "Yes, every module includes hands-on projects, and the final stage focuses on a portfolio-ready capstone project.",
  },
  {
    q: "Is placement assistance provided?",
    a: "Yes, we offer resume support, mock interviews and access to our network of hiring partners.",
  },
];

export default function CseIt() {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div className="cse-it-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="tag">TECHNOLOGY • INNOVATION • FUTURE</p>
          <h1>CSE / IT</h1>
          <h2>Computer Science &amp; Information Technology</h2>
          <p>
            Explore the world of programming, software development,
            artificial intelligence, data science, cloud computing, and
            modern technologies.
          </p>
          <button>Explore Course</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
            alt="Computer Science and IT"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About CSE / IT</h2>
        <p>
          Computer Science and Information Technology focus on designing,
          developing, and managing software, applications, databases,
          networks, and intelligent systems that power the digital world.
        </p>
      </section>

      {/* Learning Section */}
      <section className="topics">
        <h2>What You Will Learn</h2>
        <div className="card-container">
          {topics.map((topic) => (
            <div className="card" key={topic.title}>
              <div className="icon">{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p>{topic.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Career Section */}
      <section className="career">
        <h2>Career Opportunities</h2>
        <div className="career-list">
          {careers.map((career) => (
            <div key={career.label}>
              {career.icon} {career.label}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap">
        <h2>Your Learning Path</h2>
        <div className="roadmap-list">
          {roadmap.map((item) => (
            <div className="roadmap-item" key={item.step}>
              <div className="step-num">{item.step}</div>
              <div className="step-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p className="quote">&ldquo;{t.quote}&rdquo;</p>
              <p className="author">{t.name}</p>
              <p className="role">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div
              className={`faq-item ${openFaq === idx ? "open" : ""}`}
              key={item.q}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div className="faq-question">
                <span>{item.q}</span>
                <span className="faq-toggle">{openFaq === idx ? "−" : "+"}</span>
              </div>
              {openFaq === idx && <p className="faq-answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Footer / CTA Section */}
      <footer className="footer">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join CSE / IT and build the skills that shape the future of technology.</p>
        <button className="footer-btn">Enroll Now</button>
        <p className="footer-note">© 2026 CSE / IT Department. All rights reserved.</p>
      </footer>
    </div>
  );
}