import {
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
  FaCertificate,
  FaChalkboardTeacher,
  FaRocket,
} from "react-icons/fa";
import "../src/css/internship.css";

export default function Internship() {
  return (
    <main className="intern-page">
      {/* Hero */}
      <section className="intern-hero">
        <div className="intern-hero-content">
          <span className="intern-hero-badge">Internship Program</span>
          <h1>Kickstart Your Career With Us</h1>
          <p>
            Learn by doing. Work with our team on real projects, sharpen your
            skills, and step into your career with confidence.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfgl9QiIM28yhhdfMi3n_Y_yx0bZkALay4tpxYLqLs_eIMVsw/viewform" className="intern-cta-btn">
            Apply for Internship
          </a>
        </div>
      </section>

      {/* Why Intern With Us */}
      <section className="intern-why">
        <h2>Why Intern With Profenaa Infotech?</h2>
        <div className="intern-cards">
          <div className="intern-card">
            <FaLaptopCode className="intern-icon" />
            <h3>Real Project Exposure</h3>
            <p>Work on live client projects, not just theory or dummy tasks.</p>
          </div>
          <div className="intern-card">
            <FaChalkboardTeacher className="intern-icon" />
            <h3>Expert Mentorship</h3>
            <p>Get guided by experienced developers and industry professionals.</p>
          </div>
          <div className="intern-card">
            <FaUsers className="intern-icon" />
            <h3>Team Collaboration</h3>
            <p>Learn how real teams plan, build, and ship software together.</p>
          </div>
          <div className="intern-card">
            <FaCertificate className="intern-icon" />
            <h3>Internship Certificate</h3>
            <p>Receive an official certificate recognizing your training.</p>
          </div>
          <div className="intern-card">
            <FaGraduationCap className="intern-icon" />
            <h3>Skill Development</h3>
            <p>Sharpen both technical and workplace skills for the industry.</p>
          </div>
          <div className="intern-card">
            <FaRocket className="intern-icon" />
            <h3>Career Growth</h3>
            <p>Top-performing interns get priority for full-time opportunities.</p>
          </div>
        </div>
      </section>

      {/* Internship Domains */}
      <section className="intern-domains">
        <h2>Internship Domains</h2>
        <ul className="intern-domain-list">
          <li>Web Development (Frontend & Backend)</li>
          <li>Mobile App Development</li>
          <li>Data Science & AI/ML</li>
          <li>Software Testing & QA</li>
          <li>UI / UX Design</li>
          <li>Digital Marketing</li>
        </ul>
      </section>

      {/* Process */}
      <section className="intern-process">
        <h2>How to Join</h2>
        <div className="intern-steps">
          <div className="intern-step">
            <span className="intern-step-number">1</span>
            <p>Submit your application through our website.</p>
          </div>
          <div className="intern-step">
            <span className="intern-step-number">2</span>
            <p>Attend a short screening call or interview.</p>
          </div>
          <div className="intern-step">
            <span className="intern-step-number">3</span>
            <p>Get onboarded and start working with your mentor.</p>
          </div>
          <div className="intern-step">
            <span className="intern-step-number">4</span>
            <p>Complete the internship and receive your certificate.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="intern-final-cta">
        <h2>Ready to Begin Your Internship?</h2>
        <p>Take the first step toward real-world experience with us.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfgl9QiIM28yhhdfMi3n_Y_yx0bZkALay4tpxYLqLs_eIMVsw/viewform" className="intern-cta-btn">
          Apply Now
        </a>
      </section>
    </main>
  );
}