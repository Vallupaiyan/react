import React from 'react';
import '../src/css/electrical-engineering.css';

function ElectricalEngineering() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Electrical Engineering</h1>
          <p>
            Explore the world of electricity, power systems, electronics,
            automation, and innovative technologies.
          </p>
          <button>Explore Course</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
            alt="Electrical Engineering"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat">
            <h3>2,400+</h3>
            <span>Students Trained</span>
          </div>
          <div className="stat">
            <h3>92%</h3>
            <span>Placement Rate</span>
          </div>
          <div className="stat">
            <h3>12+</h3>
            <span>Years Teaching</span>
          </div>
          <div className="stat">
            <h3>150+</h3>
            <span>Hiring Partners</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Electrical Engineering</h2>
        <p>
          Electrical Engineering is a branch of engineering that focuses on
          electricity, electronics, power generation, communication systems,
          automation, and electrical machines.
        </p>
      </section>

      {/* Topics Section */}
      <section className="topics">
        <h2>What You Will Learn</h2>
        <div className="card-container">
          <div className="card">
            <h3>⚡ Electrical Circuits</h3>
            <p>
              Learn about voltage, current, resistance, and different
              types of electrical circuits.
            </p>
          </div>
          <div className="card">
            <h3>🔋 Power Systems</h3>
            <p>
              Understand power generation, transmission, and
              distribution systems.
            </p>
          </div>
          <div className="card">
            <h3>⚙️ Electrical Machines</h3>
            <p>
              Learn about motors, generators, transformers,
              and their working principles.
            </p>
          </div>
          <div className="card">
            <h3>💡 Electronics</h3>
            <p>
              Explore electronic components, circuits,
              semiconductors, and modern devices.
            </p>
          </div>
          <div className="card">
            <h3>🤖 Automation</h3>
            <p>
              Learn about PLC, industrial automation,
              and smart electrical systems.
            </p>
          </div>
          <div className="card">
            <h3>🔌 Renewable Energy</h3>
            <p>
              Understand solar energy, wind energy,
              and sustainable power technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum">
        <h2>Course Curriculum</h2>
        <div className="curriculum-list">
          <div className="curriculum-item">
            <span className="curriculum-number">01</span>
            <div>
              <h3>Fundamentals of Electrical Circuits</h3>
              <p>Ohm's law, Kirchhoff's laws, AC/DC analysis, and network theorems.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <span className="curriculum-number">02</span>
            <div>
              <h3>Power Systems and Distribution</h3>
              <p>Generation, transmission lines, substations, and grid protection basics.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <span className="curriculum-number">03</span>
            <div>
              <h3>Electrical Machines and Drives</h3>
              <p>Transformers, motors, generators, and variable frequency drives.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <span className="curriculum-number">04</span>
            <div>
              <h3>Electronics and Semiconductor Devices</h3>
              <p>Diodes, transistors, op-amps, and analog/digital circuit design.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <span className="curriculum-number">05</span>
            <div>
              <h3>Industrial Automation and PLC</h3>
              <p>Ladder logic, SCADA basics, sensors, and control systems.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <span className="curriculum-number">06</span>
            <div>
              <h3>Renewable Energy Systems</h3>
              <p>Solar PV design, wind energy conversion, and grid integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="career">
        <h2>Career Opportunities</h2>
        <div className="career-list">
          <div>Electrical Engineer</div>
          <div>Power System Engineer</div>
          <div>Electronics Engineer</div>
          <div>Automation Engineer</div>
          <div>Maintenance Engineer</div>
          <div>Renewable Energy Engineer</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Students Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              The hands-on lab sessions made circuit theory finally click for
              me. I went from memorizing formulas to actually understanding
              how current flows through a real board.
            </p>
            <div className="testimonial-author">
              <h4>Arjun Kumar</h4>
              <span>Batch of 2024</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              The faculty explained power systems with real substation case
              studies, not just textbook diagrams. That practical angle
              helped a lot during my interviews.
            </p>
            <div className="testimonial-author">
              <h4>Divya Shree</h4>
              <span>Power Systems Trainee</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              I came in with zero automation background. The PLC module and
              placement support together got me my first automation
              engineer role within two months of graduating.
            </p>
            <div className="testimonial-author">
              <h4>Mohammed Rafiq</h4>
              <span>Automation Engineer</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ElectricalEngineering;