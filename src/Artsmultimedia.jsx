import React from "react";
import "../src/css/ArtsMultimedia.css";

const courses = [
  {
    icon: "🎨",
    title: "Graphic Design",
    desc: "Learn creative design, branding, typography, posters, and digital illustrations.",
  },
  {
    icon: "🎬",
    title: "Animation",
    desc: "Create engaging 2D and 3D animations using modern creative tools.",
  },
  {
    icon: "📷",
    title: "Photography",
    desc: "Learn photography techniques, lighting, editing, and visual storytelling.",
  },
  {
    icon: "🎥",
    title: "Video Editing",
    desc: "Create professional videos, reels, short films, and multimedia content.",
  },
];

const stats = [
  { number: "300+", label: "Students Enrolled" },
  { number: "25+", label: "Creative Mentors" },
  { number: "90%", label: "Portfolio Success" },
  { number: "35+", label: "Studio Partners" },
];

const tools = [
  "Photoshop",
  "Illustrator",
  "Premiere Pro",
  "After Effects",
  "Figma",
  "Blender",
];

const gallery = [
  {
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80",
    caption: "Digital Illustration",
  },
  {
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
    caption: "Brand Identity Design",
  },
  {
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
    caption: "Photography Project",
  },
  {
    img: "./src/assets/solution/Motion.png",
    caption: "Motion Graphics",
  },
];

const testimonials = [
  {
    quote:
      "The animation course gave me a strong portfolio that helped me get freelance clients quickly.",
    name: "Meena V.",
    role: "Animator",
  },
  {
    quote:
      "Hands-on photography assignments really improved my eye for composition and lighting.",
    name: "Karthik R.",
    role: "Photographer",
  },
  {
    quote:
      "The video editing track pushed me to create work good enough for my showreel.",
    name: "Sneha P.",
    role: "Video Editor",
  },
];

const careers = [
  { icon: "🖌️", title: "Graphic Designer", desc: "Create visual identities, branding and digital assets." },
  { icon: "🎞️", title: "Animator", desc: "Bring characters and stories to life in 2D and 3D." },
  { icon: "📸", title: "Photographer", desc: "Capture and edit compelling visual stories." },
  { icon: "🎬", title: "Video Editor", desc: "Craft films, reels and multimedia content." },
];

export default function ArtsMultimedia() {
  return (
    <div className="arts-page">
      {/* Hero Section */}
      <section className="arts-hero">
        <div className="content">
          <p className="tag">CREATIVITY • DESIGN • INNOVATION</p>
          <h1>
            Arts & <span>Multimedia</span>
          </h1>
          <p className="description">
            Explore the world of creativity, visual communication, digital
            design, animation, photography, video production, and
            interactive multimedia.
          </p>
          <button>Explore Courses</button>
        </div>
        <div className="image-section">
          <img
            src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=80"
            alt="Arts and Multimedia"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <h2>What You Can Learn</h2>
        <div className="course-container">
          {courses.map((course) => (
            <div className="card" key={course.title}>
              <div className="icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
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

      {/* Tools Section */}
      <section className="tools">
        <div className="tools-content">
          <div>
            <p className="tag">CREATIVE SOFTWARE</p>
            <h2>Tools You Will Master</h2>
            <p className="tools-desc">
              Get hands-on with the industry-standard software used by
              professional designers, animators, photographers and editors.
            </p>
          </div>
          <div className="tools-list">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Student Showcase</h2>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <div className="gallery-item" key={item.caption}>
              <img src={item.img} alt={item.caption} />
              <p>{item.caption}</p>
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

      
    </div>
  );
}