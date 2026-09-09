import React, { useState } from 'react';
import '../src/css//About.css';

const stats = [
  { value: '10+', label: 'Countries' },
  { value: '50+', label: 'Projects' },
  { value: '100+', label: 'Employees' },
];

const missionVisionValues = [
  {
    icon: '🎯',
    title: 'Our Mission',
    description:
      'To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital era.',
  },
  {
    icon: '👁️',
    title: 'Our Vision',
    description:
      'To be the most trusted technology partner for businesses worldwide, known for excellence, innovation, and customer success.',
  },
  {
    icon: '💎',
    title: 'Our Values',
    description:
      'Integrity, innovation, excellence, and customer-centricity form the foundation of everything we do at Profenaa.',
  },
];

const whyChooseUs = [
  {
    icon: '⚡',
    title: 'Fast Delivery',
    description: 'Agile sprints and clear milestones keep every project on schedule, without cutting corners.',
  },
  {
    icon: '🔒',
    title: 'Secure by Design',
    description: 'Security reviews and best practices are built into our process from day one, not bolted on later.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    description: 'A named team stays with your project after launch, so help is always a message away.',
  },
  {
    icon: '📈',
    title: 'Built to Scale',
    description: "Architecture decisions are made with growth in mind, so your product doesn't need a rebuild at scale.",
  },
];

const achievements = [
  { icon: 'fa-solid fa-award', title: 'ISO 9001:2015', description: 'Certified quality management' },
  { icon: 'fa-solid fa-star', title: '4.9 / 5 Rating', description: 'Average client satisfaction' },
  { icon: 'fa-solid fa-users', title: '200+ Clients', description: 'Served since inception' },
  { icon: 'fa-solid fa-trophy', title: 'Top IT Partner 2024', description: 'Regional tech excellence award' },
];

const timeline = [
  { year: '2014', title: 'Profenaa Founded', description: 'Started as a small web development team with a handful of local clients.' },
  { year: '2017', title: 'Expanded to Mobile & Cloud', description: 'Added mobile app development and cloud infrastructure to our service line.' },
  { year: '2020', title: 'Crossed 100 Employees', description: 'Grew our team to support a growing base of international clients.' },
  { year: '2023', title: 'Launched AI Solutions Practice', description: 'Began building AI-powered automation and chatbot products for clients.' },
  { year: '2025', title: 'Empowering Digital Growth', description: 'Established in Tirunelveli as a leading provider of innovative Information Technology and Digital Solutions.' },
];

const team = [
  { src: '../src/assets/about/md.jpeg', name: 'Ms.Birudha', role: 'Managing Director' },
  { src: '../src/assets/about/manager.jpeg', name: ' Mr.Satheeh Kumar', role: 'RegionalManager' },
  { src: '../src/assets/about/TL.png', name: 'Mr.Yokesh', role: 'Project Lead' },
  { src: '../src/assets/about/developer.jpg', name: 'Mr.gowtham', role: 'developer' },
];

const testimonials = [
  {
    src: '../src/assets/about/james.png',
    quote: 'Profenaa rebuilt our platform on time and on budget. Communication was clear at every stage of the project.',
    name: 'James Dawson',
    role: ' RetailFlow',
  },
  {
    src: '../src/assets/about/Lena.png',
    quote: 'Their AI automation work cut our support workload significantly within the first quarter of launch.',
    name: 'Lena Martins',
    role: 'Operations Head',
  },
  {
    src: '../src/assets/about/vikram.png',
    quote: 'Responsive team, solid engineering, and they actually explain tradeoffs instead of just saying yes to everything.',
    name: 'Vikram Kapoor',
    role: ' EduSpark',
  },
];

// const partners = ['NovaRetail', 'Brightline', 'Vertex Labs', 'Healthkart', 'EduSpark', 'Cloudora'];

const gallery = [
  { src: '../src/assets/about/blog1.jpeg', alt: 'Team working together', tall: true },
  { src: '../src/assets/about/blog2.png', alt: 'Developer coding', tall: false },
  { src: '../src/assets/about/blog3.jpeg', alt: 'Office meeting', tall: false },
  { src: '../src/assets/about/blog4.jpeg', alt: 'Team brainstorming', tall: false },
  { src: '../src/assets/about/blog5.jpeg', alt: 'Design review', tall: false },
  { src: '../src/assets/about/blog6.jpeg', alt: 'Office workspace', tall: true },
];

const faqs = [
  {
    question: 'What industries do you work with?',
    answer: "We work across healthcare, education, retail, manufacturing, and finance, adapting our process to each industry's compliance and workflow needs.",
    open: true,
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Most engagements run 6-16 weeks depending on scope. We share a detailed timeline with milestones before any work begins.',
  },
  {
    question: 'Do you offer support after launch?',
    answer: 'Yes. Every project includes a post-launch support window, and we offer ongoing maintenance retainers after that.',
  },
  {
    question: 'Can you work with our in-house team?',
    answer: 'Definitely. We regularly work alongside in-house developers and designers as an extension of your existing team.',
  },
  {
    question: "What's your pricing model?",
    answer: 'We offer both fixed-price and time-and-materials engagements, depending on how well-defined the project scope is.',
  },
];

// Generic avatar with graceful fallback to initials if the image fails to load
function Avatar({ src, name, className = 'avatar' }) {
  const [imgError, setImgError] = useState(false);
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return !imgError && src ? (
    <img
      className={className}
      src={src}
      alt={name}
      onError={() => setImgError(true)}
    />
  ) : (
    <div className={className}>{initials}</div>
  );
}

export default function AboutUs() {
  return (
    <>
      <section className="section" id="about">
        <h1 className="section-title">Who We Are</h1>
        <p className="section-subtitle">Building the future of digital innovation, one project at a time.</p>

        <div className="about-container">
          <div className="about-content">
            <h2>
              IT Consulting &amp; <span>Software Development</span> Solutions
            </h2>
            <p>
              We provide modern digital services including website development, UI/UX design, branding and
              software solutions for startups and businesses around the world.
            </p>
            <p>
              Our expert developers create high-quality responsive products with modern technologies and
              innovative designs. With over a decade of experience, we've helped hundreds of companies achieve
              their digital transformation goals.
            </p>
            <p>
              We believe in delivering excellence through innovation, dedication, and customer-focused
              solutions that drive real business value.
            </p>

            <div className="about-stats">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <h3>{stat.value}</h3>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image">
            <img
              src="../src/assets/about/MDimage.jpg"
              alt="Team Collaboration"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="features-section">
        <div className="mvv-grid">
          {missionVisionValues.map((item) => (
            <div className="feature-card" key={item.title}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="extra-sections">
        {/* Why Choose Us */}
        <section className="section" id="why-choose-us">
          <span className="eyebrow">Why Profenaa</span>
          <h1 className="section-title">Why Choose Us</h1>
          <p className="section-subtitle">What sets us apart when you're picking a technology partner.</p>

          <div className="why-grid">
            {whyChooseUs.map((item) => (
              <div className="feature-card" key={item.title}>
                <div className="service-icon service-icon--sm">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements strip */}
        <section className="achievements-strip">
          <div className="achievements-grid">
            {achievements.map((item) => (
              <div className="achievement-badge" key={item.title}>
                <i className={item.icon} />
                <div>
                  <h4>{item.title}</h4>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="timeline-section" id="journey">
          <span className="eyebrow">Our Journey</span>
          <h1 className="section-title">Company Milestones</h1>
          <p className="section-subtitle">A decade of growth, one milestone at a time.</p>

          <div className="timeline-track">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.year}>
                <span className="year">{item.year}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="team-section" id="team">
          <span className="eyebrow"> The People</span>
          <h1 className="section-title">Meet Our Team</h1>
          <p className="section-subtitle">The people building Profenaa, one line of code at a time.</p>

          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <Avatar src={member.src} name={member.name} className="avatar" />
                <h4>{member.name}</h4>
                <span className="role">{member.role}</span>
                <div className="socials">
                  <a href="#">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-envelope" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section" id="testimonials">
          <span className="eyebrow"> Client Voices</span>
          <h1 className="section-title">What Our Clients Say</h1>
          <p className="section-subtitle">Real feedback from the businesses we've worked with.</p>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <div className="stars">★★★★★</div>
                <p className="quote">{t.quote}</p>
                <div className="person">
                  <Avatar src={t.src} name={t.name} className="initials" />
                  <div>
                    <h5>{t.name}</h5>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partner / client logos
        <section className="partners-strip">
          <p className="section-subtitle">Trusted by teams at</p>
          <div className="partners-track">
            {partners.map((name) => (
              <span className="partner-logo" key={name}>
                {name}
              </span>
            ))}
          </div>
        </section> */}

        {/* Gallery */}
        <section className="gallery-section" id="gallery">
          <span className="eyebrow"> Inside Profenaa</span>
          <h1 className="section-title">Life at Our Studio</h1>
          <p className="section-subtitle">A peek into how the team works, builds, and collaborates.</p>

          <div className="gallery-grid">
            {gallery.map((img) => (
              <img
                key={img.src}
                className={img.tall ? 'tall' : undefined}
                src={img.src}
                alt={img.alt}
              />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section" id="faq">
          <span className="eyebrow"> Questions</span>
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p className="section-subtitle">Answers to what clients usually ask before we start a project.</p>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question} open={faq.open}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Careers CTA */}
        <section className="careers-cta">
          <h2>Come Build With Us</h2>
          <p>We're always looking for curious engineers, designers, and strategists who care about doing great work.</p>
          <a href="/careers" className="btn">
            View Open Roles
          </a>
        </section>
      </div>
    </>
  );
}