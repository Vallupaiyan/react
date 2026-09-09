import { useEffect, useRef, useState } from "react";
import "../src/css//home.css";

// ---- 3D Utilities ---------------------------------------------------------
function extractNumber(str) {
  const m = String(str).match(/^(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}
function extractSuffix(str) {
  return String(str).replace(/^\d+/, "");
}

// 3D Tilt Wrapper — mouse-tracking card tilt
function TiltCard3D({ children, className = "", intensity = 12 }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    setStyle({
      "--rx": `${-dy * intensity}deg`,
      "--ry": `${dx * intensity}deg`,
      "--tz": "28px",
      "--sc": "1.02",
      transition: "transform 0.08s ease-out",
    });
  };

  const handleLeave = () => {
    setStyle({
      "--rx": "0deg",
      "--ry": "0deg",
      "--tz": "0px",
      "--sc": "1",
      transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
    });
  };

  return (
    <div
      ref={ref}
      className={`tilt-card-3d ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
    >
      {children}
    </div>
  );
}

// Animated 3D Counter
function AnimatedCounter3D({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = performance.now();
          const dur = 2200;
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 4);
            setCount(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="counter-3d">
      {count}
      {suffix}
    </span>
  );
}

// 3D Floating Shape for Hero Background
// NOTE: previously only "cube" | "sphere" | "ring" were handled, so
// "dodecahedron" | "round" | "box" rendered as empty divs (invisible!).
// Fixed below + added glow/spin/pulse variety.
function FloatingShape({ type, size = 50, style }) {
  const h = size / 2;
  const fStyle = { width: size, height: size };

  return (
    <div className="floating-shape" style={style}>
      {type === "cube" && (
        <div className="shape-cube" style={{ width: size, height: size }}>
          <div className="face front" style={{ ...fStyle, transform: `rotateY(0deg) translateZ(${h}px)` }} />
          <div className="face back" style={{ ...fStyle, transform: `rotateY(180deg) translateZ(${h}px)` }} />
          <div className="face left" style={{ ...fStyle, transform: `rotateY(-90deg) translateZ(${h}px)` }} />
          <div className="face right" style={{ ...fStyle, transform: `rotateY(90deg) translateZ(${h}px)` }} />
          <div className="face top" style={{ ...fStyle, transform: `rotateX(90deg) translateZ(${h}px)` }} />
          <div className="face bottom" style={{ ...fStyle, transform: `rotateX(-90deg) translateZ(${h}px)` }} />
        </div>
      )}

      {type === "box" && (
        <div className="shape-cube shape-box" style={{ width: size, height: size * 1.3 }}>
          <div className="face front" style={{ width: size, height: size * 1.3, transform: `rotateY(0deg) translateZ(${h}px)` }} />
          <div className="face back" style={{ width: size, height: size * 1.3, transform: `rotateY(180deg) translateZ(${h}px)` }} />
          <div className="face left" style={{ width: size, height: size * 1.3, transform: `rotateY(-90deg) translateZ(${h}px)` }} />
          <div className="face right" style={{ width: size, height: size * 1.3, transform: `rotateY(90deg) translateZ(${h}px)` }} />
        </div>
      )}

      {type === "sphere" && <div className="shape-sphere" style={fStyle} />}
      {type === "round" && <div className="shape-sphere shape-round" style={fStyle} />}
      {type === "ring" && <div className="shape-ring" style={fStyle} />}

      {type === "dodecahedron" && (
        <div className="shape-dodeca" style={fStyle}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="dodeca-face"
              style={{
                width: size,
                height: size,
                transform: `rotateY(${i * 72}deg) translateZ(${h * 0.9}px) rotateX(20deg)`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ---- Reusable bits (3D Enhanced) -----------------------------------------
function StatCard({ value, label }) {
  const num = extractNumber(value);
  const sfx = extractSuffix(value);
  return (
    <TiltCard3D className="stat-card">
      <h3>{num > 0 ? <AnimatedCounter3D target={num} suffix={sfx} /> : value}</h3>
      <span>{label}</span>
    </TiltCard3D>
  );
}

function ServiceBox({ icon, title, description, link, stagger }) {
  return (
    <TiltCard3D className={`service-box fade-in-up${stagger ? ` stagger-${stagger}` : ""}`}>
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link || "#contact"} className="service-arrow">
        Learn More <span aria-hidden="true">→</span>
      </a>
    </TiltCard3D>
  );
}

function FeatureCard({ number, title, description, stagger }) {
  return (
    <TiltCard3D className={`feature-card fade-in-up${stagger ? ` stagger-${stagger}` : ""}`}>
      <div className="feature-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </TiltCard3D>
  );
}

function ChooseBox({ icon, title, description, stagger }) {
  return (
    <TiltCard3D className={`choose-box fade-in-up${stagger ? ` stagger-${stagger}` : ""}`}>
      <div className="icon">
        <span style={{ fontSize: "22px", lineHeight: 1 }}>{icon}</span>
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </TiltCard3D>
  );
}

function StatItem({ number, label, stagger }) {
  const num = extractNumber(number);
  const sfx = extractSuffix(number);
  return (
    <TiltCard3D className={`stat-item fade-in-up${stagger ? ` stagger-${stagger}` : ""}`}>
      <div className="stat-number">
        {num > 0 ? <AnimatedCounter3D target={num} suffix={sfx} /> : number}
      </div>
      <div className="stat-label">{label}</div>
    </TiltCard3D>
  );
}

function DomainCard({ icon, label, stagger }) {
  return (
    <TiltCard3D className={`domain-card fade-in-up${stagger ? ` stagger-${stagger}` : ""}`} intensity={8}>
      <div className="domain-icon">
        <span style={{ fontSize: "20px", lineHeight: 1 }}>{icon}</span>
      </div>
      <span>{label}</span>
    </TiltCard3D>
  );
}

function ReviewCard({ stars, quote, image, name, role, featured, stagger }) {
  return (
    <TiltCard3D
      className={`review-card${featured ? " featured" : ""} fade-in-up${stagger ? ` stagger-${stagger}` : ""}`}
      intensity={featured ? 18 : 12}
    >
      <span className="quote-glyph" aria-hidden="true">"</span>
      {featured && <div className="review-badge">Featured</div>}
      <div className="review-stars">{"★".repeat(stars)}</div>
      <p>"{quote}"</p>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <span className="role">{role}</span>
    </TiltCard3D>
  );
}

// Client Logo Card with fallback (image fail aana initials show pannum)
function ClientLogo({ name, logo }) {
  const [imgError, setImgError] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="client-logo">
      {!imgError && logo ? (
        <img
          src={logo}
          alt={name}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="client-logo-fallback">{initials}</div>
      )}
      <span>{name}</span>
    </div>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="contact-item">
      <div className="icon-wrap">{icon}</div>
      <div className="info">
        <h4>{label}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
}

// ---- Data ----------------------------------------------------------------
const services = [
  { icon: "💻", title: "Web Development", description: "Modern responsive websites with fast performance, beautiful UI design, and SEO optimization for maximum online visibility.", link: "./Profenaawebdev" },
  { icon: "📱", title: "Mobile Apps", description: "Android and iOS mobile application development using cutting-edge technologies and best practices for seamless user experience.", stagger: 1, link: "./Mobileappdevelopment" },
  { icon: "🎨", title: "UI / UX Design", description: "Creative user interface and smooth user experience design that improves customer engagement and drives business growth.", stagger: 2, link: "./Uiuxservice" },
  { icon: "📈", title: "SEO Marketing", description: "Comprehensive SEO strategies to increase website traffic, improve search rankings, and boost online visibility effectively.", stagger: 3, link: "./Seoservices" },
  {
    icon: "🤖",
    title: "AI Automation",
    description: "Intelligent AI-powered automation solutions that streamline business processes, reduce manual work, and improve efficiency and productivity.",
    stagger: 4,
    link: "./AIAutomations"
  },
];

const features = [
  { number: "01", title: "Agile Methodology", description: "We use proven agile practices to deliver projects faster with better quality and continuous improvement." },
  { number: "02", title: "Expert Team", description: "Talented professionals with 10+ years of experience in latest technologies and industry best practices.", stagger: 1 },
  { number: "03", title: "Client Focused", description: "Your success is our success. We prioritize understanding your needs and delivering customized solutions.", stagger: 2 },
  { number: "04", title: "Innovation First", description: "We stay ahead of technology trends and constantly innovate to give you competitive advantages.", stagger: 3 },
  { number: "05", title: "Quality Assurance", description: "Rigorous testing and quality checks ensure every product meets the highest standards before delivery.", stagger: 4 },
  { number: "06", title: "Transparency", description: "Regular communication and progress updates keep you informed at every stage of the project.", stagger: 5 },
];

const chooseUs = [
  { icon: "🏆", title: "Expertise with Credibility", description: "Strong industrial knowledge and proven process expertise across implementation, customization, integration and migration." },
  { icon: "💰", title: "Transparent & No Hidden Costs", description: "Clear pricing from start to finish, backed by structured engagement models with full flexibility during development.", stagger: 1 },
  { icon: "⏱️", title: "On-Time Delivery Assurance", description: "Strategic timelines supported by proper planning, monitoring and resource allocation for predictable delivery.", stagger: 2 },
  { icon: "🎖️", title: "Quality Without Compromise", description: "A solid QA workflow and continuous improvement mindset ensure clean, stable, high-performing solutions.", stagger: 3 },
  { icon: "🎧", title: "Dedicated Support Team", description: "Our specialists stay connected through multiple channels, ready to troubleshoot or guide enhancements anytime.", stagger: 4 },
  { icon: "🚀", title: "Future-Ready Innovation", description: "We adopt modern tools and best practices so your business stays ahead as market needs evolve.", stagger: 5 },
];

// Client data with name + logo path. Replace logo path with your actual image location.
const clients = [
  { name: "MEPCO", logo: "../src/assets/client/mepco.png" },
  { name: "GK Group", logo: "../src/assets/client/gkgroup.png" },
  { name: "SunV", logo: "../src/assets/client/sunv.png" },
  { name: "TVS", logo: "../src/assets/client/TVS.jpeg" },
  { name: "Kavin Engineering", logo: "../src/assets/client/kavin.jpeg" },
  { name: "Windcare", logo: "../src/assets/client/windcare.jpg" },
  { name: "LTIMindtree", logo: "../src/assets/client/ltimindtree.png" },
  { name: "Roots Industries", logo: "../src/assets/client/roots.jpeg" },
  { name: "Caresoft", logo: "../src/assets/client/caresoft.jpg" },
  { name: "Pricol", logo: "../src/assets/client/pricol.jpeg" },
  { name: "AXIS cades", logo: "../src/assets/client/axiscades.jpg" },
  { name: "CAdopt", logo: "../src/assets/client/cadopt.jpg" },
  { name: "HYUNDAI", logo: "../src/assets/client/HYUNDAI.jpg" },
];

const domains = [
  { icon: "❤️", label: "Health Care" },
  { icon: "🎓", label: "Education", stagger: 1 },
  { icon: "🏭", label: "Manufacturing", stagger: 2 },
  { icon: "🏢", label: "Real Estate", stagger: 3 },
  { icon: "💡", label: "Startups", stagger: 4 },
  { icon: "🍽️", label: "Restaurants", stagger: 5 },
  { icon: "✈️", label: "Travel" },
  { icon: "🛒", label: "Ecommerce", stagger: 1 },
  { icon: "💪", label: "Fitness Studio", stagger: 2 },
  { icon: "🐾", label: "Pet Services", stagger: 3 },
  { icon: "📅", label: "Event Management", stagger: 4 },
  { icon: "📷", label: "Photographers", stagger: 5 },
];

const reviews = [
  { stars: 5, quote: "Profenaa Infotech delivered high-quality products ahead of schedule. Their communication and support throughout the project were excellent. Highly recommended!", image: "../src/assets/home/priya.png", name: "Ms. Priya Narayanan", role: "CEO, TechStart India" },
  { stars: 5, quote: "Outstanding service with innovative solutions and timely delivery. Their professional team ensured smooth communication and excellent support throughout the entire project. Best choice!", image: "https://randomuser.me/api/portraits/women/65.jpg", name: "Ms. Anjali Sharma", role: "Founder, DesignHub", featured: true, stagger: 1 },
  { stars: 5, quote: "Working with Profenaa Infotech was a fantastic experience. Their team delivered exactly what we needed with excellent quality and professionalism. Highly recommended!", image: "../src/assets/home/arjun.png", name: "Mr. Arjun Kumar", role: "CTO, DataFlow Systems", stagger: 2 },
  { stars: 5, quote: "Your team's help in assisting us with our IT endeavours was really impressive. Kudos to the excellent smart app you developed for us — it works flawlessly.", image: "https://randomuser.me/api/portraits/men/52.jpg", name: "Mr. Tariq Lathif", role: "Director, Operations", stagger: 3 },
];

// ---- Main component --------------------------------------------------------
function Home() {
  const particlesRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse parallax tracker
  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Back-to-top visibility
  useEffect(() => {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    const onScroll = () => {
      if (window.scrollY > 400) btn.classList.add("visible");
      else btn.classList.remove("visible");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 15 + "s";
      particle.style.animationDuration = 10 + Math.random() * 10 + "s";
      particle.style.width = 2 + Math.random() * 4 + "px";
      particle.style.height = particle.style.width;
      container.appendChild(particle);
    }
    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  // IntersectionObserver for scroll fade-ins
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* 3D Scroll Progress Bar */}
      <div
        className="scroll-progress-3d"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-particles" id="particles" ref={particlesRef}></div>

        {/* 3D Floating Shapes — repositioned so nothing overlaps + all types render */}
        <div className="hero-shapes-3d">
          <FloatingShape type="cube" size={60} style={{ top: "12%", left: "6%", animationDelay: "0s" }} />
          <FloatingShape type="sphere" size={40} style={{ top: "22%", right: "10%", animationDelay: "1.2s" }} />
          <FloatingShape type="ring" size={55} style={{ bottom: "20%", left: "12%", animationDelay: "2.5s" }} />
          <FloatingShape type="cube" size={45} style={{ bottom: "12%", right: "8%", animationDelay: "0.7s" }} />
          <FloatingShape type="sphere" size={35} style={{ top: "65%", left: "4%", animationDelay: "3s" }} />
          <FloatingShape type="ring" size={50} style={{ top: "8%", right: "22%", animationDelay: "4s" }} />
          <FloatingShape type="dodecahedron" size={50} style={{ top: "38%", right: "32%", animationDelay: "1.8s" }} />
          <FloatingShape type="round" size={38} style={{ bottom: "32%", right: "18%", animationDelay: "2.2s" }} />
          <FloatingShape type="box" size={42} style={{ top: "48%", left: "24%", animationDelay: "3.5s" }} />
        </div>

        <div className="tech-float html">HTML</div>
        <div className="tech-float css">CSS</div>
        <div className="tech-float js">JS</div>
        <div className="tech-float react">⚛</div>
        <div className="tech-float java">JAVA</div>
        <div className="tech-float python">PY</div>
        <div className="tech-float php">PHP</div>
        <div className="tech-float node">NODE</div>
        <div className="tech-float express">EXPRESS</div>

        <div
          className="hero-content"
          style={{
            transform: `translateX(${mousePos.x * -12}px) translateY(${mousePos.y * -12}px) translateZ(40px)`,
          }}
        >
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Trusted by 500+ Global Clients
          </div>
          <h1>
            Crafting <span>Reliable Software</span> Experiences That Scale With Your Business
          </h1>
          <p>
            Empowering businesses with seamless applications, modern websites, UI/UX experiences and digital solutions
            that transform your vision into reality
          </p>
          <div className="hero-buttons">
            <a href="./contact" className="btn primary-btn">
              <span aria-hidden="true">🚀</span> Get Started Today
            </a>
            <a href="/MobileAppDevelopment" className="btn secondary-btn">
              <span aria-hidden="true">→</span> Explore Our Services
            </a>
          </div>
        </div>

        <div className="scroll-indicator" onClick={(e) => handleAnchorClick(e, "#about")}>
          <span>Scroll Down</span>
          <span aria-hidden="true">⌄</span>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section" id="about">
        <h1 className="section-title">Who We Are</h1>
        <p className="section-subtitle">
          We are a team of passionate technologists dedicated to delivering excellence in every project we undertake.
        </p>

        <div className="about-container">
          <div className="about-content">
            <h2>
              IT Consulting & <span>Software Development</span> Solutions
            </h2>
            <p>
              We provide modern digital services including website development, UI/UX design, branding and software
              solutions for startups and businesses around the world.
            </p>
            <p>
              Our expert developers create high-quality responsive products with modern technologies and innovative
              designs. With over a decade of experience, we've helped hundreds of companies achieve their digital
              transformation goals.
            </p>
            <p>
              We believe in delivering excellence through innovation, dedication, and customer-focused solutions that
              drive real business value.
            </p>

            <div className="about-stats">
              <StatCard value="10+" label="Countries" />
              <StatCard value="50+" label="Projects" />
              <StatCard value="100+" label="Employees" />
            </div>
          </div>

          <div className="about-image">
            <img src="../src/assets/home/about.jpeg" alt="Team Collaboration" />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section" id="services">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">
          Comprehensive digital solutions tailored to accelerate your business growth and digital presence.
        </p>

        <div className="services-grid">
          {services.map((s) => (
            <ServiceBox key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section" id="features">
        <h1 className="section-title">Why Our Approach Works</h1>
        <p className="section-subtitle">Our proven methodology ensures successful project delivery every single time.</p>

        <div className="features-grid">
          {features.map((f) => (
            <FeatureCard key={f.number} {...f} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-section" id="why-choose-us">
        <h1 className="section-title">Why Choose Us</h1>
        <p className="section-subtitle">Expertise, transparency and commitment that set us apart from the rest.</p>

        <div className="choose-container">
          {chooseUs.map((c) => (
            <ChooseBox key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="stats-section">
        <div className="stats-grid">
          <StatItem number="500+" label="Happy Clients" />
          <StatItem number="1000+" label="Projects Delivered" stagger={1} />
          <StatItem number="15+" label="Years Experience" stagger={2} />
          <StatItem number="24/7" label="Support Available" stagger={3} />
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="section" id="clients">
        <h1 className="section-title">Our Clients</h1>
        <p className="section-subtitle">Trusted by leading brands and businesses across multiple industries.</p>

        <div className="clients-marquee fade-in-up">
          <div className="clients-track">
            {clients.map((c) => (
              <ClientLogo key={c.name} name={c.name} logo={c.logo} />
            ))}
            {clients.map((c) => (
              <ClientLogo key={`${c.name}-dup`} name={c.name} logo={c.logo} />
            ))}
          </div>
        </div>
      </section>

      {/* DOMAINS WE WORK IN SECTION */}
      <section className="domains-section" id="domains">
        <h1 className="section-title">Domains We Work In</h1>
        <p className="section-subtitle">Delivering tailored digital solutions across a wide range of industries.</p>

        <div className="domains-grid">
          {domains.map((d) => (
            <DomainCard key={d.label} {...d} />
          ))}
        </div>
      </section>

      {/* RECENT WORK SECTION */}
      <section className="section" id="recent-work">
        <h1 className="section-title">Our Recent Work</h1>
        <p className="section-subtitle">A glimpse into the projects we're proud to have delivered for our clients.</p>

        <div className="about-container">
          <div className="about-image">
            <img src="../src/assets/home/our.png" alt="Recent Project Showcase" />
          </div>

          <div className="about-content">
            <h2>
              Official Website for <span>MEPCO Global</span>
            </h2>
            <p>
              We designed and developed the official website for MEPCO Global with great attention to detail and
              clarity. The entire process — from planning to execution — was smooth, timely and well-organized.
            </p>
            <p>
              Our team stayed proactive at every stage, ensuring requirements were met perfectly with clear and
              comfortable communication throughout the project.
            </p>
            <div className="about-stats">
              <div className="stat-card" style={{ minWidth: "100%", textAlign: "left" }}>
                <span style={{ textTransform: "none", fontSize: "15px", color: "var(--text)", fontWeight: 600 }}>
                  MEPCO Global — Management Team
                </span>
              </div>
            </div>

            <a href="./project" className="btn primary-btn" style={{ marginTop: "24px", display: "inline-flex" }}>
              <span aria-hidden="true">📂</span> Discover Our Work
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="section" id="reviews">
        <h1 className="section-title">What Our Clients Say</h1>
        <p className="section-subtitle">Real feedback from real clients who trusted us with their digital transformation.</p>

        <div className="reviews-container">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </section>
      <button className="back-to-top" id="backToTop" aria-label="Back to top" onClick={scrollToTop}>
        <span aria-hidden="true" style={{ fontSize: "18px" }}>↑</span>
      </button>
    </>
  );
}

export default Home;