import React from "react";
import "../src/css/CivilEngineering.css";

const aboutStats = [
  {
    icon: "🏗️",
    title: "Infrastructure",
    desc: "Design and develop modern cities and structures.",
  },
  {
    icon: "📐",
    title: "Planning",
    desc: "Create safe, efficient, and sustainable projects.",
  },
  {
    icon: "🌍",
    title: "Sustainability",
    desc: "Build solutions that protect our environment.",
  },
];

const specializations = [
  {
    number: "01",
    title: "Structural Engineering",
    desc: "Learn how buildings, bridges, and large structures are designed to withstand different loads and forces.",
  },
  {
    number: "02",
    title: "Construction Technology",
    desc: "Understand modern construction methods, materials, equipment, and project execution.",
  },
  {
    number: "03",
    title: "Transportation Engineering",
    desc: "Study the design and management of roads, highways, railways, and transportation systems.",
  },
  {
    number: "04",
    title: "Geotechnical Engineering",
    desc: "Explore soil behavior, foundations, and the relationship between structures and the ground.",
  },
  {
    number: "05",
    title: "Environmental Engineering",
    desc: "Learn about water treatment, waste management, pollution control, and sustainable development.",
  },
  {
    number: "06",
    title: "Surveying & GIS",
    desc: "Discover land measurement, mapping, GPS, and geographic information systems.",
  },
];

const software = ["AutoCAD", "STAAD.Pro", "Revit", "ETABS", "SketchUp", "Primavera"];

const careers = [
  {
    icon: "🏢",
    title: "Site Engineer",
    desc: "Manage and supervise construction projects.",
  },
  {
    icon: "📊",
    title: "Structural Engineer",
    desc: "Design safe and strong structures.",
  },
  {
    icon: "🏗️",
    title: "Project Engineer",
    desc: "Plan and coordinate engineering projects.",
  },
  {
    icon: "📐",
    title: "Quantity Surveyor",
    desc: "Estimate project costs and materials.",
  },
];

export default function CivilEngineering() {
  return (
    <div className="civil-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="tag">BUILD • DESIGN • INNOVATE</span>
          <h1>Civil Engineering</h1>
          <h2>Building the Future, One Structure at a Time</h2>
          <p>
            Discover the world of infrastructure, construction, structural
            design, transportation, and sustainable engineering solutions.
          </p>
          <button>Explore Department</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
            alt="Civil Engineering"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="section-title">
          <span>ABOUT THE FIELD</span>
          <h2>What is Civil Engineering?</h2>
        </div>

        <p>
          Civil Engineering is one of the oldest and most important branches
          of engineering. It focuses on planning, designing, constructing,
          and maintaining buildings, roads, bridges, dams, airports, and
          other essential infrastructure.
        </p>

        <div className="stats">
          {aboutStats.map((stat) => (
            <div className="stat-box" key={stat.title}>
              <h3>{stat.icon}</h3>
              <h4>{stat.title}</h4>
              <p>{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specializations Section */}
      <section className="specializations">
        <div className="section-title">
          <span>CORE SUBJECTS</span>
          <h2>Areas You Will Explore</h2>
        </div>

        <div className="specialization-grid">
          {specializations.map((item) => (
            <div className="special-card" key={item.number}>
              <div className="number">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Software Section */}
      <section className="software">
        <div className="software-content">
          <div>
            <span className="tag">INDUSTRY TOOLS</span>
            <h2>Engineering Software Skills</h2>
            <p>
              Modern civil engineers use advanced software to design,
              analyze, visualize, and manage projects.
            </p>
          </div>

          <div className="software-list">
            {software.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="career">
        <div className="section-title">
          <span>YOUR FUTURE</span>
          <h2>Career Opportunities</h2>
        </div>

        <div className="career-grid">
          {careers.map((career) => (
            <div className="career-card" key={career.title}>
              {career.icon}
              <h3>{career.title}</h3>
              <p>{career.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Build Your Future?</h2>
        <p>
          Start your journey in Civil Engineering and transform ideas into
          real-world structures.
        </p>
        <button>Get Started</button>
      </section>
    </div>
  );
}