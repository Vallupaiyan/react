import React, { useEffect, useRef, useState } from "react";
import '../src/css/MechanicalEngineering.css';
import { Cog, Car, Bot, Factory, Plane, Thermometer, ArrowRight } from "lucide-react";

/* ---- pure math helpers (not components) ---- */
function gearPath(teeth, outerR, rootR) {
  const step = (Math.PI * 2) / teeth;
  const m = step * 0.3;
  let d = "";
  for (let i = 0; i < teeth; i++) {
    const a0 = i * step;
    const P = (r, a) => `${(r * Math.cos(a)).toFixed(2)},${(r * Math.sin(a)).toFixed(2)}`;
    d += `${i === 0 ? "M" : "L"} ${P(rootR, a0)} L ${P(outerR, a0 + m)} L ${P(outerR, a0 + step - m)} `;
  }
  return d + "Z";
}

function meshPoint(cx, cy, r1, r2, angleDeg, overlap = 0.16) {
  const a = (angleDeg * Math.PI) / 180;
  const d = r1 + r2 - Math.min(r1, r2) * overlap;
  return [cx + d * Math.cos(a), cy + d * Math.sin(a)];
}

function renderGear({ cx, cy, outerR, rootR, teeth, boreR, duration, reverse, fill, showSpokes, showRim }) {
  const d = gearPath(teeth, outerR, rootR);
  const spokeCount = showSpokes ? 6 : 0;
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <g
        className="gear-spin"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        <path d={d} fill={fill} stroke="var(--line-2)" strokeWidth="1" />
        {showRim && <circle r={rootR - 10} fill="none" stroke="var(--line-2)" strokeWidth="1.5" />}
        {Array.from({ length: spokeCount }).map((_, i) => {
          const a = (i * (Math.PI * 2)) / spokeCount;
          const inner = boreR + 6;
          const outer = rootR - 14;
          return (
            <line
              key={i}
              x1={(inner * Math.cos(a)).toFixed(2)}
              y1={(inner * Math.sin(a)).toFixed(2)}
              x2={(outer * Math.cos(a)).toFixed(2)}
              y2={(outer * Math.sin(a)).toFixed(2)}
              stroke="var(--bg)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          );
        })}
        <circle r={boreR} fill="var(--bg)" stroke="var(--line-2)" strokeWidth="2" />
      </g>
    </g>
  );
}

function cornerMark(className, delay) {
  return (
    <svg className={`corner-mark ${className}`} viewBox="0 0 32 32" style={{ "--d": `${delay}ms` }} aria-hidden="true">
      <circle cx="16" cy="16" r="9" pathLength="1" />
      <line x1="16" y1="1" x2="16" y2="9" pathLength="1" />
      <line x1="16" y1="23" x2="16" y2="31" pathLength="1" />
      <line x1="1" y1="16" x2="9" y2="16" pathLength="1" />
      <line x1="23" y1="16" x2="31" y2="16" pathLength="1" />
    </svg>
  );
}

/* ---- custom hooks (state helpers, not components) ---- */
function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useCountUp(target, active, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return undefined;
    let start = null;
    let raf;
    const step = (t) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return val;
}

/* ---- content data ---- */
const FIELDS = [
  { icon: Cog, tag: "ITEM 01", title: "Machine Design", desc: "Design and development of mechanical components, machines and industrial equipment." },
  { icon: Car, tag: "ITEM 02", title: "Automobile Engineering", desc: "Study vehicle design, engines, transmission systems and automotive technology." },
  { icon: Bot, tag: "ITEM 03", title: "Robotics", desc: "Development of robots, automation systems and intelligent machines." },
  { icon: Factory, tag: "ITEM 04", title: "Manufacturing", desc: "Learn modern manufacturing processes, production systems and industrial automation." },
  { icon: Plane, tag: "ITEM 05", title: "Aerospace", desc: "Design and development of aircraft, engines and aerospace systems." },
  { icon: Thermometer, tag: "ITEM 06", title: "Thermal Engineering", desc: "Study heat transfer, thermodynamics, engines and energy systems." },
];

const SKILLS = [
  { title: "CAD & 3D Modelling", pct: 95 },
  { title: "Manufacturing", pct: 88 },
  { title: "Automobile Technology", pct: 82 },
  { title: "Robotics & Automation", pct: 78 },
];

const PROJECTS = [
  {
    tag: "PRJ-01",
    title: "Industrial Robot",
    desc: "Automated robotic system for industrial manufacturing applications.",
    img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "PRJ-02",
    title: "Electric Vehicle",
    desc: "Development of an efficient and eco-friendly electric vehicle.",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "PRJ-03",
    title: "Smart Machine",
    desc: "Smart automated machine designed for modern manufacturing industries.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  },
];

/* =========================================================
   Everything lives in this one component function.
========================================================= */
export default function MechanicalEngineeringSite() {
  const [aboutRef, aboutVisible] = useReveal();
  const [fieldsRef, fieldsVisible] = useReveal();
  const [projectsRef, projectsVisible] = useReveal();

  const [skill1Ref, skill1Visible] = useReveal(0.4);
  const [skill2Ref, skill2Visible] = useReveal(0.4);
  const [skill3Ref, skill3Visible] = useReveal(0.4);
  const [skill4Ref, skill4Visible] = useReveal(0.4);
  const skill1Val = useCountUp(SKILLS[0].pct, skill1Visible);
  const skill2Val = useCountUp(SKILLS[1].pct, skill2Visible);
  const skill3Val = useCountUp(SKILLS[2].pct, skill3Visible);
  const skill4Val = useCountUp(SKILLS[3].pct, skill4Visible);

  const skillRows = [
    { ...SKILLS[0], ref: skill1Ref, visible: skill1Visible, val: skill1Val },
    { ...SKILLS[1], ref: skill2Ref, visible: skill2Visible, val: skill2Val },
    { ...SKILLS[2], ref: skill3Ref, visible: skill3Visible, val: skill3Val },
    { ...SKILLS[3], ref: skill4Ref, visible: skill4Visible, val: skill4Val },
  ];

  /* hero gear mechanism layout */
  const big = { teeth: 22, outerR: 92, rootR: 76, boreR: 20, cx: 235, cy: 225, duration: 26 };
  const [axc, ayc] = meshPoint(big.cx, big.cy, big.rootR, 54, -32);
  const [bxc, byc] = meshPoint(big.cx, big.cy, big.rootR, 42, 197);
  const dimR = big.rootR + 26;
  const labelA = -0.6;
  const labelX = big.cx + (dimR + 14) * Math.cos(labelA);
  const labelY = big.cy + (dimR + 14) * Math.sin(labelA);

  return (
    <div className="me-root">
      {/* ---------- Hero ---------- */}
      <section id="home" className="hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-scan" aria-hidden="true" />
        {cornerMark("tl", 0)}
        {cornerMark("tr", 120)}
        {cornerMark("bl", 240)}
        {cornerMark("br", 360)}

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow reveal-1">
              <span className="eyebrow-dot" />
              DEPT. OF MECHANICAL SYSTEMS
            </p>
            <h1 className="hero-title">
              <span className="line reveal-2">Mechanical</span>
              <span className="line accent reveal-3">Engineering</span>
            </h1>
            <svg className="title-underline" viewBox="0 0 320 12" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 6 L318 6" pathLength="1" />
            </svg>
            <p className="hero-sub reveal-5">
              Designing machines, developing innovative technologies, and building the future through
              engineering excellence.
            </p>
            <a href="/contact" className="btn reveal-6">
              Explore Engineering <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>

          <div className="hero-visual reveal-7">
            <svg viewBox="0 0 480 430" className="hero-gears" role="img" aria-label="Animated meshing gear mechanism">
              <circle
                cx={big.cx}
                cy={big.cy}
                r={dimR}
                fill="none"
                stroke="var(--blue)"
                strokeOpacity="0.35"
                strokeDasharray="3 6"
              />
              <line
                x1={big.cx}
                y1={big.cy}
                x2={big.cx + dimR * Math.cos(labelA)}
                y2={big.cy + dimR * Math.sin(labelA)}
                stroke="var(--blue)"
                strokeOpacity="0.35"
              />
              <text x={labelX} y={labelY} className="dim-label">
                ⌀ {big.outerR * 2}mm
              </text>

              {renderGear({ cx: axc, cy: ayc, outerR: 54, rootR: 44, teeth: 13, boreR: 12, duration: (26 * 13) / 22, reverse: true, fill: "var(--panel-2)" })}
              {renderGear({ cx: bxc, cy: byc, outerR: 42, rootR: 34, teeth: 10, boreR: 10, duration: (26 * 10) / 22, reverse: true, fill: "var(--panel-2)" })}
              {renderGear({ ...big, fill: "var(--blue)", showSpokes: true, showRim: true })}
            </svg>
          </div>
        </div>

        <div className="title-block reveal-8">
          <span>SHEET 01/06</span>
          <span>SCALE 1:1</span>
          <span>MATERIAL — STRUCTURAL STEEL</span>
          <span>REV. 2026</span>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="about" ref={aboutRef}>
        <div className={`about-media reveal-io ${aboutVisible ? "in-view" : ""}`}>
          <img
            src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1000&q=80"
            alt="Mechanical engineering workshop"
          />
          <span className="frame-tick tl" />
          <span className="frame-tick tr" />
          <span className="frame-tick bl" />
          <span className="frame-tick br" />
        </div>
        <div className={`about-copy reveal-io ${aboutVisible ? "in-view" : ""}`} style={{ transitionDelay: "120ms" }}>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            ABOUT THE DISCIPLINE
          </p>
          <h2>What Is Mechanical Engineering?</h2>
          <p>Mechanical Engineering is one of the oldest and most important branches of engineering.</p>
          <p>It focuses on designing, analyzing, manufacturing, and maintaining machines and mechanical systems.</p>
          <p>
            Mechanical engineers work in automobile, aerospace, robotics, manufacturing, energy, construction and
            many other industries.
          </p>
        </div>
      </section>

      {/* ---------- Fields ---------- */}
      <section id="departments" className="fields" ref={fieldsRef}>
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            CORE DISCIPLINES
          </p>
          <h2>Mechanical Fields</h2>
          <p className="section-sub">Explore the major areas of Mechanical Engineering.</p>
        </div>
        <div className="field-grid">
          {FIELDS.map((f, i) => (
            <div
              key={f.title}
              className={`field-card reveal-io ${fieldsVisible ? "in-view" : ""}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="field-tag">{f.tag}</span>
              <div className="field-icon">
                <f.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section id="skills" className="skills">
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            CAPABILITY GAUGE
          </p>
          <h2>Mechanical Skills</h2>
          <p className="section-sub">Important technical skills for mechanical engineers.</p>
        </div>
        <div className="skills-list">
          {skillRows.map((s, i) => (
            <div
              key={s.title}
              ref={s.ref}
              className={`skill-row reveal-io ${s.visible ? "in-view" : ""}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="skill-row-head">
                <h3>{s.title}</h3>
                <span className="skill-pct">{s.val}%</span>
              </div>
              <div className="gauge">
                <div className="gauge-ticks" aria-hidden="true">
                  {Array.from({ length: 20 }).map((_, t) => (
                    <span key={t} className="tick" />
                  ))}
                </div>
                <div className="gauge-fill" style={{ width: s.visible ? `${s.pct}%` : "0%" }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      <section id="projects" className="projects" ref={projectsRef}>
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            SELECTED WORK
          </p>
          <h2>Mechanical Projects</h2>
          <p className="section-sub">Innovative projects developed by mechanical engineers.</p>
        </div>
        <div className="project-grid">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className={`project-card reveal-io ${projectsVisible ? "in-view" : ""}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="project-media">
                <img src={p.img} alt={p.title} />
                <span className="project-tag">{p.tag}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Career ---------- */}
      <section id="career" className="career">
        <div className="career-frame">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            NEXT STEP
          </p>
          <h2>Build Your Career in Mechanical Engineering</h2>
          <p>Learn. Design. Innovate. Engineer the Future.</p>
          <a href="#home" className="btn btn-invert">
            Start Your Journey <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </section>
    </div>
  );
}