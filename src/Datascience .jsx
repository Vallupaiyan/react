import React from "react";
import "../src/css/DataScience.css";

const skills = [
  {
    icon: "🐍",
    title: "Python",
    desc: "Learn Python programming for data analysis, automation, and data science.",
  },
  {
    icon: "📊",
    title: "Data Analysis",
    desc: "Learn how to collect, clean, process, and analyze large amounts of data.",
  },
  {
    icon: "🤖",
    title: "Machine Learning",
    desc: "Build intelligent models that can learn patterns and make predictions.",
  },
  {
    icon: "📈",
    title: "Data Visualization",
    desc: "Present data using charts, graphs, dashboards, and visual reports.",
  },
];

const tools = ["Python", "SQL", "Excel", "Power BI", "Tableau", "Pandas", "NumPy"];

const stats = [
  { number: "600+", label: "Students Trained" },
  { number: "30+", label: "Expert Mentors" },
  { number: "92%", label: "Placement Rate" },
  { number: "60+", label: "Hiring Partners" },
];

const roadmap = [
  {
    step: "01",
    title: "Foundations",
    desc: "Python programming, statistics, and core math for data science.",
  },
  {
    step: "02",
    title: "Data Handling",
    desc: "Data cleaning, wrangling, SQL, and working with real-world datasets.",
  },
  {
    step: "03",
    title: "Modeling",
    desc: "Machine learning algorithms, model evaluation, and tuning.",
  },
  {
    step: "04",
    title: "Deployment & Projects",
    desc: "Build dashboards, deploy models, and complete a capstone project.",
  },
];

const careers = [
  { icon: "📊", title: "Data Analyst", desc: "Turn raw data into actionable business insights." },
  { icon: "🤖", title: "ML Engineer", desc: "Design and deploy machine learning models." },
  { icon: "🧮", title: "Data Scientist", desc: "Solve complex problems with statistics and ML." },
  { icon: "📈", title: "BI Developer", desc: "Build dashboards and reporting systems." },
];

const testimonials = [
  {
    quote:
      "The hands-on projects with real datasets made all the difference in my job interviews.",
    name: "Ramesh T.",
    role: "Data Analyst",
  },
  {
    quote:
      "I went from zero coding knowledge to building ML models in a few months.",
    name: "Anitha M.",
    role: "ML Engineer",
  },
  {
    quote:
      "The dashboard and visualization modules were exactly what I needed for my BI role.",
    name: "Suresh K.",
    role: "BI Developer",
  },
];

const faqs = [
  {
    q: "Do I need a math background to start?",
    a: "Basic math is helpful, but the course covers the statistics and math concepts you need as you go.",
  },
  {
    q: "How long does the full program take?",
    a: "The complete track, from foundations to deployment, typically takes 5 to 8 months depending on your pace.",
  },
  {
    q: "Will I build real projects?",
    a: "Yes, every module includes hands-on datasets, and the final stage focuses on a portfolio-ready capstone project.",
  },
  {
    q: "Is placement assistance provided?",
    a: "Yes, we offer resume support, mock interviews and access to our network of hiring partners.",
  },
];

export default function DataScience() {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div className="ds-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="tag">DATA • TECHNOLOGY • INNOVATION</p>
          <h1>
            Explore the World of <span>Data Science</span>
          </h1>
          <p className="description">
            Learn how to collect, analyze, and transform data into
            meaningful insights using modern technologies and tools.
          </p>
          <button>Explore Course</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
            alt="Data Science"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>What You Will Learn</h2>
        <p className="subtitle">
          Build the skills needed to analyze data and solve real-world
          problems.
        </p>
        <div className="card-container">
          {skills.map((skill) => (
            <div className="card" key={skill.title}>
              <div className="icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools">
        <h2>Tools & Technologies</h2>
        <div className="tool-list">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
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

      {/* Career Section */}
      <section className="career">
        <h2>Career Opportunities</h2>
        <div className="career-grid">
          {careers.map((career) => (
            <div className="career-card" key={career.title}>
              <div className="icon">{career.icon}</div>
              <h3>{career.title}</h3>
              <p>{career.desc}</p>
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

   
    </div>
  );
}