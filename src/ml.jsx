import React from "react";
import "../src/css/Ml.css";

const learning = [
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    desc: "Understand how intelligent systems can think, learn, and solve complex problems.",
  },
  {
    icon: "🧠",
    title: "Machine Learning",
    desc: "Learn how machines identify patterns and make predictions using data.",
  },
  {
    icon: "🐍",
    title: "Python Programming",
    desc: "Learn Python programming and use powerful libraries for AI and ML.",
  },
  {
    icon: "📊",
    title: "Deep Learning",
    desc: "Explore neural networks and advanced deep learning technologies.",
  },
];

const tools = ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "Jupyter"];

export default function AiMl() {
  return (
    <div className="aiml-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="tag">INTELLIGENCE • TECHNOLOGY • INNOVATION</p>
          <h1>
            Explore the Future of
            <span> AI & ML</span>
          </h1>
          <p className="description">
            Discover how Artificial Intelligence and Machine Learning are
            transforming the world through intelligent systems, automation,
            data, and innovation.
          </p>
          <button>Explore Course</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80"
            alt="AI and Machine Learning"
          />
        </div>
      </section>

      {/* Learning Section */}
      <section className="learning">
        <h2>What You Will Learn</h2>
        <p className="subtitle">
          Build the skills needed to create intelligent applications and
          solve real-world problems.
        </p>
        <div className="card-container">
          {learning.map((item) => (
            <div className="card" key={item.title}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="technologies">
        <h2>Tools & Technologies</h2>
        <div className="tool-list">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>
    </div>
  );
}