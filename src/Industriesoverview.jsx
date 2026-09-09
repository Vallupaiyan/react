import { useEffect, useRef, useState } from "react";
import {
  Landmark,
  CreditCard,
  ShieldAlert,
  Banknote,
  ClipboardCheck,
  Lock,
  Zap,
  Activity,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Smartphone,
  BrainCircuit,
  CalendarClock,
  Video,
  FileText,
  TrendingUp,
  Users,
  ArrowRight,
  Sparkles,
  Quote,
  Monitor,
  Globe,
  ClipboardList,
  BookOpen,
  BarChart3,
  Factory,
  Wifi,
  Truck,
  Wrench,
  Settings,
  Cpu,
  Plane,
  MapPin,
  Compass,
  Luggage,
  Dumbbell,
  Flame,
  Trophy,
} from "lucide-react";
import "../src/css/industriesoverview.css";

// Finance
import financeHeroImg from "../src/assets/industry/finance.jpeg";
import financeInnovationImg from "../src/assets/industry/finance-innovation.jpeg";

// Healthcare
import healthcareHeroImg from "../src/assets/industry/healthcare.jpeg";
import healthInnovationImg from "../src/assets/industry/medical-innovation.jpeg";

// Education
import educationHeroImg from "../src/assets/industry/education.jpeg";
import educationInnovationImg from "../src/assets/industry/education-innovation.jpeg";

// Manufacturing
import manufacturingHeroImg from "../src/assets/industry/manufacturing.jpeg";
import manufacturingInnovationImg from "../src/assets/industry/manufacturing-innovation.jpeg";

// Travel
import travelHeroImg from "../src/assets/industry/travel.jpeg";
import travelInnovationImg from "../src/assets/industry/travel-innovation.jpeg";

// Fitness
import fitnessHeroImg from "../src/assets/industry/fitness.jpeg";
import fitnessInnovationImg from "../src/assets/industry/fitness-innovation.jpg";

/**
 * IndustriesOverview — a single merged page for the industry pages
 * (Finance, Healthcare, Education, Manufacturing, Travel, Fitness Studio).
 * Every industry shares the same section pattern (Hero -> Benefits ->
 * Solutions -> Marketing), colored by its own accent token, so the page
 * reads as one coherent story instead of pasted-together pages.
 * Healthcare keeps its extra stats band, process timeline, testimonial
 * and FAQ, since that was the richest of the source pages.
 */

// ---------------------------------------------------------------------
// Reveal-on-scroll utility (shared by every section)
// ---------------------------------------------------------------------
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(26px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}

// Animated counter for stat numbers like "40+", "98%", "2M+"
function extractNumber(str) {
  const m = String(str).match(/^(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}
function extractSuffix(str) {
  return String(str).replace(/^\d+/, "");
}

function Counter({ value, duration = 1400 }) {
  const target = extractNumber(value);
  const suffix = extractSuffix(value);
  const [ref, visible] = useReveal(0.4);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible || target === 0) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setCount(target);
      return;
    }
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration]);

  return (
    <span ref={ref}>
      {target > 0 ? count : value.replace(/\d+/, "")}
      {target > 0 ? suffix : ""}
    </span>
  );
}

// ---------------------------------------------------------------------
// Shared section building blocks
// ---------------------------------------------------------------------
function IndustryHero({
  id,
  eyebrow,
  title,
  highlight,
  desc,
  accent,
  image,
  imageAlt,
  ctaHref = "./Contact",
  ctaLabel = "Explore more",
}) {
  return (
    <section id={id} className="ind-hero" style={{ "--accent": accent }}>
      <div className="ind-hero-glow" />
      <div className="ind-hero-inner">
        <Reveal className="ind-hero-content">
          <div className="ind-eyebrow">
            <Sparkles size={14} strokeWidth={2} />
            {eyebrow}
          </div>
          <h1>
            {title} <span className="ind-highlight">{highlight}</span>
          </h1>
          <p className="ind-hero-desc">{desc}</p>
          <a href={ctaHref} className="ind-btn-primary ind-hero-cta">
            {ctaLabel} <ArrowRight size={16} strokeWidth={2} />
          </a>
        </Reveal>
        <Reveal delay={0.1} className="ind-hero-visual">
          <div className="ind-hero-image-card">
            <img
              src={image}
              alt={imageAlt || `${title} ${highlight}`}
              loading="lazy"
              className="ind-hero-img"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BenefitsSection({ heading, lead, items, accent, imageAlt, image }) {
  return (
    <section className="ind-section ind-section-light" style={{ "--accent": accent }}>
      <div className="ind-container ind-benefits-grid">
        <Reveal className="ind-benefits-text">
          <span className="ind-label">
            <span className="ind-label-dot" /> Why It Matters
          </span>
          <h2>{heading}</h2>
          <p className="ind-lead">{lead}</p>
          <ul className="ind-benefits-list">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title}>
                  <span className="ind-benefit-icon">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <span>
                    <strong>{item.title}:</strong> {item.desc}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="ind-benefits-visual">
          <div className="ind-visual-card">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="ind-visual-img"
            />
            <span className="ind-visual-tag">{imageAlt}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SolutionsSection({ heading, lead, items, accent }) {
  return (
    <section className="ind-section ind-section-dark" style={{ "--accent": accent }}>
      <div className="ind-container">
        <Reveal className="ind-section-head">
          <span className="ind-label ind-label-dark">
            <span className="ind-label-dot" /> What We Build
          </span>
          <h2>{heading}</h2>
          <p className="ind-lead ind-lead-dark">{lead}</p>
        </Reveal>
        <div className="ind-solution-grid">
          {items.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.06} className="ind-solution-card">
                <div className="ind-solution-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MarketingSection({ heading, desc, items, accent }) {
  return (
    <section className="ind-section ind-section-tint" style={{ "--accent": accent }}>
      <div className="ind-container">
        <Reveal className="ind-section-head">
          <span className="ind-label">
            <span className="ind-label-dot" /> Growth
          </span>
          <h2>{heading}</h2>
          <p className="ind-lead">{desc}</p>
        </Reveal>
        <div className="ind-marketing-grid">
          {items.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08} className="ind-marketing-card">
              <span className="ind-marketing-index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------
// Data — Finance
// ---------------------------------------------------------------------
const financeBenefits = [
  { icon: Monitor, title: "Digital Banking Tools", desc: "Real-time account access, transfers, and self-service portals for customers." },
  { icon: Zap, title: "Faster Loan Processing", desc: "Automated underwriting and approval workflows that cut turnaround time." },
  { icon: Lock, title: "Secure Transaction Data", desc: "Bank-grade encryption and access controls protecting every transaction." },
  { icon: ShieldAlert, title: "AI Fraud Detection", desc: "Real-time anomaly detection that flags suspicious activity instantly." },
  { icon: ClipboardCheck, title: "Regulatory Compliance", desc: "Automated reporting that keeps institutions audit-ready at all times." },
  { icon: Settings, title: "Operational Automation", desc: "Reduced manual reconciliation and paperwork across branches." },
];

const financeSolutions = [
  { icon: Landmark, title: "Core Banking Systems", desc: "Manage accounts, deposits, and transactions on one unified banking platform." },
  { icon: CreditCard, title: "Digital Payment Gateways", desc: "Process payments, transfers, and settlements securely in real time." },
  { icon: ShieldAlert, title: "AI Fraud Detection", desc: "Spot suspicious transactions instantly with real-time risk scoring." },
  { icon: Banknote, title: "Loan & Credit Management", desc: "Automate underwriting, approvals, and repayment tracking end to end." },
  { icon: ClipboardCheck, title: "Regulatory Compliance (RegTech)", desc: "Stay audit-ready with automated reporting and compliance checks." },
  { icon: Lock, title: "Financial Cybersecurity", desc: "Protect customer data and transactions with bank-grade security." },
];

const financeMarketing = [
  { title: "Finance SEO", desc: "Rank higher for banking and loan-related searches." },
  { title: "Lead Generation for Financial Services", desc: "Attract qualified leads for loans, accounts, and investment products." },
  { title: "Automation & CRM for Institutions", desc: "Automate customer onboarding, follow-ups, and support workflows." },
];

// ---------------------------------------------------------------------
// Data — Healthcare
// ---------------------------------------------------------------------
const healthcareBenefits = [
  { icon: CalendarClock, title: "Streamlined Operations", desc: "Automate scheduling, billing, and inventory so staff spend less time on paperwork and more time on patients." },
  { icon: HeartPulse, title: "Improved Patient Care", desc: "Instant access to patient history means faster, better-informed decisions at the point of care." },
  { icon: ShieldCheck, title: "Data Security & Compliance", desc: "Sensitive medical data protected end-to-end, built to align with HIPAA and GDPR requirements." },
  { icon: Video, title: "Telemedicine & Remote Care", desc: "Virtual consultations and remote monitoring extend care beyond hospital walls." },
  { icon: BrainCircuit, title: "Advanced Analytics & AI", desc: "Turn raw clinical data into insight that sharpens diagnostics and resource planning." },
  { icon: TrendingUp, title: "Cost Efficiency", desc: "Fewer manual bottlenecks and less redundant paperwork translate directly into lower operating cost." },
];

const healthcareSolutions = [
  { icon: Stethoscope, title: "Hospital Management Systems", desc: "Streamline appointments, billing, inventory, and staff management for efficient hospital operations." },
  { icon: Video, title: "Telemedicine Solutions", desc: "Enable virtual consultations, remote patient monitoring, and improved accessibility for patients." },
  { icon: FileText, title: "Electronic Health Records (EHR)", desc: "Digitize patient records for secure, fast, and accurate access across every department." },
  { icon: Smartphone, title: "Medical Mobile Apps", desc: "Empower patients, doctors, and caregivers with mobile tools for everyday healthcare management." },
  { icon: Activity, title: "Healthcare Analytics & AI", desc: "Use data-driven insight to improve diagnostics, track patient trends, and refine operations." },
  { icon: Lock, title: "Cybersecurity for Healthcare", desc: "Protect sensitive patient data and stay aligned with healthcare regulatory standards." },
];

const healthcareMarketing = [
  { title: "AI-Powered Healthcare SEO", desc: "Boost visibility with medical-intent keywords and structured data optimization." },
  { title: "Patient Lead Generation", desc: "Targeted campaigns that bring appointment-ready patients to your website." },
  { title: "Automation & CRM", desc: "Automated appointment reminders, follow-ups, and patient nurturing workflows." },
];

const healthcareStats = [
  { value: "40+", label: "Healthcare facilities served" },
  { value: "98%", label: "Uptime across deployed systems" },
  { value: "2M+", label: "Patient records securely managed" },
  { value: "24/7", label: "Support & system monitoring" },
];

const healthcareProcess = [
  { step: "01", title: "Diagnose", desc: "We audit existing workflows, systems, and data flows to find where time and accuracy are being lost." },
  { step: "02", title: "Design", desc: "A solution architecture is mapped around your departments — from front-desk intake to discharge." },
  { step: "03", title: "Build & Integrate", desc: "Systems are built and connected to your existing hospital infrastructure with minimal disruption." },
  { step: "04", title: "Monitor & Scale", desc: "Post-launch, we track performance and scale the system as patient volume and needs grow." },
];

const healthcareTestimonial = {
  quote:
    "Since moving our scheduling and records onto Profenaa's system, our front desk handles twice the patient volume with fewer errors, and our doctors get full history before they walk into the room.",
  name: "Dr. Ananya Krishnan",
  role: "Medical Director, Coimbatore Multispeciality Clinic",
};

const healthcareFaqs = [
  { q: "How long does a hospital management system take to deploy?", a: "Most single-facility deployments go live in 6–10 weeks, depending on how much historical data needs migration and how many departments are integrated at once." },
  { q: "Is patient data secure during and after migration?", a: "Yes. Data is encrypted in transit and at rest, and access is role-based, so only authorized staff see the records relevant to their work." },
  { q: "Can telemedicine integrate with our existing EHR?", a: "Yes. Our telemedicine module reads and writes directly to the same patient record used in-hospital, so there's no duplicate data entry." },
  { q: "Do you support multi-branch hospital networks?", a: "Yes. The system is built to scale across branches with centralized reporting and per-branch operational control." },
];

// ---------------------------------------------------------------------
// Data — Education
// ---------------------------------------------------------------------
const educationStats = [
  { value: "12+", label: "Years in EdTech" },
  { value: "150+", label: "Institutions Onboarded" },
  { value: "50000+", label: "Students Reached" },
  { value: "24/7", label: "Support & Uptime" },
];

const educationBenefits = [
  { icon: Monitor, title: "Smart Classroom Tools", desc: "Interactive digital content and modern teaching solutions." },
  { icon: Users, title: "Enhanced Student Engagement", desc: "Technology makes learning fun, interactive, and effective." },
  { icon: Lock, title: "Secure Data & Records", desc: "Safe management of student data, attendance, and academic performance." },
  { icon: Globe, title: "E-Learning & LMS Platforms", desc: "Learn from anywhere through online classes and virtual systems." },
  { icon: BrainCircuit, title: "AI Analytics", desc: "Track learning patterns and improve outcomes." },
  { icon: ClipboardList, title: "Administrative Automation", desc: "Reduced manual work for teachers and staff." },
];

const educationSolutions = [
  { icon: BookOpen, title: "Learning Management Systems (LMS)", desc: "Manage online classes, assignments, grading, and course content seamlessly." },
  { icon: Monitor, title: "Smart Classroom Solutions", desc: "Enhance teaching with digital boards, multimedia content, and interactive tools." },
  { icon: Smartphone, title: "E-Learning Mobile Apps", desc: "Deliver online courses, quizzes, and progress tracking through mobile platforms." },
  { icon: ClipboardList, title: "Student Information Systems", desc: "Manage admissions, attendance, fees, and academic reports digitally." },
  { icon: BarChart3, title: "AI Analytics for Students", desc: "Monitor performance and identify learning gaps using predictive analytics." },
  { icon: ShieldCheck, title: "Education Cybersecurity", desc: "Protect academic data and secure institutional digital infrastructure." },
];

const educationMarketing = [
  { title: "SEO for Education Institutes", desc: "Rank higher on Google for course searches and student queries." },
  { title: "Student Lead Generation", desc: "Attract enrollment-ready students through targeted ad campaigns." },
  { title: "Automation & CRM for Institutions", desc: "Automate admissions, follow-ups, and student engagement workflows." },
];

// ---------------------------------------------------------------------
// Data — Manufacturing
// ---------------------------------------------------------------------
const manufacturingBenefits = [
  { icon: Factory, title: "Smart Factory Tools", desc: "Real-time production monitoring and automated workflows." },
  { icon: TrendingUp, title: "Improved Efficiency", desc: "Data-driven decisions for faster output." },
  { icon: Lock, title: "Secure Production Data", desc: "Safe management of process data and machinery analytics." },
  { icon: Cpu, title: "IoT & Automation", desc: "Automated systems for reduced manual intervention." },
  { icon: Wrench, title: "AI Predictive Maintenance", desc: "Identify failures before they happen." },
  { icon: Settings, title: "Operational Automation", desc: "Streamlined workflows and reduced manual dependency." },
];

const manufacturingSolutions = [
  { icon: ClipboardList, title: "Manufacturing ERP Systems", desc: "Manage production, inventory, procurement, and plant operations seamlessly." },
  { icon: Factory, title: "Smart Factory Automation", desc: "Automate machines, workflows, and assembly lines with IoT-enabled systems." },
  { icon: Wifi, title: "Industrial IoT (IIoT)", desc: "Monitor equipment data, track performance, and reduce downtime." },
  { icon: Truck, title: "Supply Chain Management", desc: "Digitize logistics, warehousing, and distribution with real-time tracking." },
  { icon: Wrench, title: "AI Predictive Maintenance", desc: "Identify failures early and reduce machine breakdown time using AI." },
  { icon: ShieldCheck, title: "Industrial Cybersecurity", desc: "Protect plant operations, equipment data, and industrial networks." },
];

const manufacturingMarketing = [
  { title: "Manufacturing SEO", desc: "Rank higher for industrial product and machinery searches." },
  { title: "Lead Generation for Industries", desc: "Generate quality B2B leads through targeted ad campaigns." },
  { title: "Automation & CRM for Industries", desc: "Automate customer management, sales pipelines, and follow-ups." },
];

// ---------------------------------------------------------------------
// Data — Travel
// ---------------------------------------------------------------------
const travelBenefits = [
  { icon: Compass, title: "Seamless Trip Planning", desc: "Smart itinerary tools that make planning and booking effortless for travelers." },
  { icon: CreditCard, title: "Instant Online Payments", desc: "Secure, fast payment gateways for bookings, deposits, and refunds." },
  { icon: MapPin, title: "Real-Time Location Tracking", desc: "Live tracking for transport, tours, and logistics across every trip." },
  { icon: Lock, title: "Secure Traveler Data", desc: "Encrypted storage of passport, payment, and booking information." },
  { icon: BrainCircuit, title: "AI-Powered Recommendations", desc: "Personalized destination and package suggestions based on traveler behavior." },
  { icon: Settings, title: "Automated Booking Workflows", desc: "Reduced manual coordination across agents, vendors, and customers." },
];

const travelSolutions = [
  { icon: Plane, title: "Travel Booking Platforms", desc: "End-to-end flight, hotel, and package booking systems for agencies and operators." },
  { icon: Luggage, title: "Tour & Itinerary Management", desc: "Build, manage, and customize multi-day tour packages with ease." },
  { icon: Smartphone, title: "Travel Mobile Apps", desc: "Give travelers on-the-go access to bookings, itineraries, and support." },
  { icon: MapPin, title: "Real-Time Tracking Systems", desc: "Track vehicles, guides, and group movement across a tour in real time." },
  { icon: BarChart3, title: "Travel Analytics & AI", desc: "Understand booking trends and optimize pricing and packages with data." },
  { icon: ShieldCheck, title: "Travel Data Security", desc: "Protect traveler documents and payment data with strong encryption." },
];

const travelMarketing = [
  { title: "Travel SEO", desc: "Rank higher for destination, package, and booking-related searches." },
  { title: "Lead Generation for Travel Agencies", desc: "Attract ready-to-book travelers through targeted campaigns." },
  { title: "Automation & CRM for Tour Operators", desc: "Automate itinerary follow-ups, reminders, and customer engagement." },
];

// ---------------------------------------------------------------------
// Data — Fitness Studio
// ---------------------------------------------------------------------
const fitnessBenefits = [
  { icon: CalendarClock, title: "Smart Class Scheduling", desc: "Automated booking and scheduling for classes, trainers, and equipment." },
  { icon: Dumbbell, title: "Member Progress Tracking", desc: "Track workouts, attendance, and fitness goals in one place." },
  { icon: CreditCard, title: "Easy Membership Payments", desc: "Automated billing, renewals, and payment reminders for memberships." },
  { icon: Users, title: "Better Member Engagement", desc: "Apps and portals that keep members motivated and connected." },
  { icon: BrainCircuit, title: "AI Workout Insights", desc: "Data-driven recommendations to personalize training plans." },
  { icon: Lock, title: "Secure Member Data", desc: "Safe management of health, payment, and personal information." },
];

const fitnessSolutions = [
  { icon: Dumbbell, title: "Gym & Studio Management Systems", desc: "Manage memberships, classes, trainers, and billing from one dashboard." },
  { icon: Smartphone, title: "Fitness Mobile Apps", desc: "Let members book classes, track workouts, and manage plans on the go." },
  { icon: CalendarClock, title: "Class & Trainer Scheduling", desc: "Simplify booking for group classes, personal training, and facilities." },
  { icon: Activity, title: "Fitness Tracking & Analytics", desc: "Monitor member progress and studio performance with real-time data." },
  { icon: Trophy, title: "Loyalty & Engagement Programs", desc: "Gamified challenges and rewards that keep members coming back." },
  { icon: ShieldCheck, title: "Studio Cybersecurity", desc: "Protect member records and payment systems from data breaches." },
];

const fitnessMarketing = [
  { title: "Fitness Studio SEO", desc: "Rank higher for gym, class, and personal training searches nearby." },
  { title: "Membership Lead Generation", desc: "Targeted campaigns that bring in trial-ready, sign-up-ready leads." },
  { title: "Automation & CRM for Studios", desc: "Automate renewal reminders, follow-ups, and member re-engagement." },
];

// ---------------------------------------------------------------------
// Nav config
// ---------------------------------------------------------------------
const NAV = [
  { id: "finance", label: "Finance", accent: "#B8862E" },
  { id: "healthcare", label: "Healthcare", accent: "#1FB6A6" },
  { id: "education", label: "Education", accent: "#5B5BD6" },
  { id: "manufacturing", label: "Manufacturing", accent: "#D2571C" },
  { id: "travel", label: "Travel", accent: "#0E9F6E" },
  { id: "fitness", label: "Fitness Studio", accent: "#E63971" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ---------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------
export default function IndustriesOverview() {
  const [active, setActive] = useState("finance");

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ind-root">
      {/* ================= STICKY NAV ================= */}
      <nav className="ind-nav">
        {NAV.map((n) => (
          <button
            key={n.id}
            type="button"
            className={`ind-nav-btn${active === n.id ? " ind-nav-btn-active" : ""}`}
            style={{ "--accent": n.accent }}
            onClick={() => scrollToSection(n.id)}
          >
            {n.label}
          </button>
        ))}
      </nav>

      {/* ================= FINANCE ================= */}
      <IndustryHero
        id="finance"
        eyebrow="Finance & Banking Technology"
        title="Smart Digital Solutions for"
        highlight="Finance"
        desc="Empowering banks, NBFCs, and financial institutions with secure, intelligent digital tools for faster transactions, smarter risk management, and better customer experience."
        accent="#B8862E"
        image={financeHeroImg}
        imageAlt="Finance & Banking Technology"
      />
      <BenefitsSection
        heading="Why Finance Needs Digital Innovation"
        lead="The financial sector is under constant pressure to move faster and stay secure. Institutions must adopt smart technology to serve customers better, manage risk, and stay compliant."
        items={financeBenefits}
        accent="#B8862E"
        imageAlt="Finance Innovation"
        image={financeInnovationImg}
      />
      <SolutionsSection
        heading="Our Finance Technology Solutions"
        lead="At Profenaa Infotech, we build secure digital solutions for banks, NBFCs, and financial institutions. Our services strengthen risk management, speed up operations, and improve the customer experience."
        items={financeSolutions}
        accent="#B8862E"
      />
      <MarketingSection
        heading="Growing Your Financial Institution With Smart Digital Marketing"
        desc="We help banks, NBFCs, and financial service providers grow with targeted digital marketing strategies using SEO, automation, and compliant campaign management."
        items={financeMarketing}
        accent="#B8862E"
      />

      {/* ================= HEALTHCARE ================= */}
      <IndustryHero
        id="healthcare"
        eyebrow="Healthcare IT & Software Solutions"
        title="Smart digital systems for the"
        highlight="pulse of healthcare"
        desc="Streamline patient care, optimize hospital workflows, and enhance efficiency with technology built for the pace of a working ward."
        accent="#1FB6A6"
        image={healthcareHeroImg}
        imageAlt="Healthcare IT & Software Solutions"
      />

      <section className="ind-stats" style={{ "--accent": "#1FB6A6" }}>
        <div className="ind-stats-inner">
          {healthcareStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="ind-stat">
              <span className="ind-stat-num">
                <Counter value={s.value} />
              </span>
              <span className="ind-stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <BenefitsSection
        heading="Why Healthcare Needs IT Innovation"
        lead="Healthcare is one of the most critical sectors in the world, facing growing patient demand and the responsibility of managing deeply sensitive data. IT innovation is essential to improve efficiency, accuracy, and patient satisfaction."
        items={healthcareBenefits}
        accent="#1FB6A6"
        imageAlt="Healthcare Innovation"
        image={healthInnovationImg}
      />
      <SolutionsSection
        heading="Our Healthcare IT Solutions"
        lead="Tailored systems for hospitals, clinics, and healthcare providers — built to streamline operations, enhance patient care, and secure sensitive medical data."
        items={healthcareSolutions}
        accent="#1FB6A6"
      />

      <section className="ind-section ind-section-light" style={{ "--accent": "#1FB6A6" }}>
        <div className="ind-container">
          <Reveal className="ind-section-head">
            <span className="ind-label">
              <span className="ind-label-dot" /> How We Work
            </span>
            <h2>From Audit to Always-On System</h2>
            <p className="ind-lead">
              A typed, four-stage rollout designed to minimize disruption to live patient care while your systems come online.
            </p>
          </Reveal>
          <div className="ind-process-list">
            {healthcareProcess.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1} className="ind-process-step">
                <div className="ind-process-marker">
                  <span className="ind-process-number">{p.step}</span>
                  {i !== healthcareProcess.length - 1 && <span className="ind-process-connector" />}
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-testimonial" style={{ "--accent": "#1FB6A6" }}>
        <div className="ind-container">
          <Reveal className="ind-testimonial-card">
            <Quote size={30} strokeWidth={1.5} className="ind-quote-icon" />
            <p>{healthcareTestimonial.quote}</p>
            <div className="ind-testimonial-attribution">
              <div className="ind-testimonial-avatar">
                <Users size={18} strokeWidth={1.8} />
              </div>
              <div>
                <div className="ind-testimonial-name">{healthcareTestimonial.name}</div>
                <div className="ind-testimonial-role">{healthcareTestimonial.role}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <MarketingSection
        heading="Promoting Your Healthcare Brand Digitally"
        desc="We help hospitals, clinics, and healthcare providers grow their brand visibility using advanced digital tools — from AI-powered SEO to automated patient engagement systems."
        items={healthcareMarketing}
        accent="#1FB6A6"
      />

      <section className="ind-section ind-section-light" style={{ "--accent": "#1FB6A6" }}>
        <div className="ind-container ind-faq-inner">
          <Reveal className="ind-section-head">
            <span className="ind-label">
              <span className="ind-label-dot" /> Common Questions
            </span>
            <h2>Frequently Asked Questions</h2>
          </Reveal>
          <div className="ind-faq-list">
            {healthcareFaqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <IndustryHero
        id="education"
        eyebrow="Education Technology Solutions"
        title="Smart Digital Solutions for"
        highlight="Education"
        desc="Empowering schools, colleges, and universities with modern digital tools to enhance learning, streamline operations, and boost student success."
        accent="#5B5BD6"
        image={educationHeroImg}
        imageAlt="Education Technology Solutions"
      />

      <section className="ind-stats" style={{ "--accent": "#5B5BD6" }}>
        <div className="ind-stats-inner">
          {educationStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="ind-stat">
              <span className="ind-stat-num">
                <Counter value={s.value} />
              </span>
              <span className="ind-stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <BenefitsSection
        heading="Why Education Needs Digital Innovation"
        lead="The education sector is rapidly transforming. Institutions must adopt smart technology to enhance learning, improve engagement, and simplify academic operations."
        items={educationBenefits}
        accent="#5B5BD6"
        imageAlt="Education Innovation"
        image={educationInnovationImg}
      />
      <SolutionsSection
        heading="Our Education Technology Solutions"
        lead="We provide innovative digital solutions for educational institutions — helping schools, colleges, and universities enhance learning, manage operations, and offer a seamless academic experience."
        items={educationSolutions}
        accent="#5B5BD6"
      />
      <MarketingSection
        heading="Growing Your Education Brand With Smart Digital Marketing"
        desc="We help schools, coaching centers, and universities increase admissions with powerful digital marketing strategies using SEO, automation, and targeted campaigns."
        items={educationMarketing}
        accent="#5B5BD6"
      />

      <section className="ind-cta" style={{ "--accent": "#5B5BD6" }}>
        <Reveal className="ind-cta-inner">
          <h2>Ready to Modernize Your Institution?</h2>
          <p>Book a free demo and see how our education platform can simplify learning, teaching, and administration.</p>
          <a href="/contact-us" className="ind-btn-primary">
            Book a Demo <ArrowRight size={16} strokeWidth={2} />
          </a>
        </Reveal>
      </section>

      {/* ================= MANUFACTURING ================= */}
      <IndustryHero
        id="manufacturing"
        eyebrow="Manufacturing & Industrial Technology"
        title="Smart Digital Solutions for"
        highlight="Manufacturing"
        desc="Empowering industries with automation, analytics, and modern digital tools for improved efficiency, productivity, and operational excellence."
        accent="#D2571C"
        image={manufacturingHeroImg}
        imageAlt="Manufacturing & Industrial Technology"
      />
      <BenefitsSection
        heading="Why Manufacturing Needs Digital Innovation"
        lead="The manufacturing industry is undergoing massive transformation. Organizations must adopt smart technology to boost production, reduce downtime, and optimize operations."
        items={manufacturingBenefits}
        accent="#D2571C"
        imageAlt="Manufacturing Innovation"
        image={manufacturingInnovationImg}
      />
      <SolutionsSection
        heading="Our Manufacturing Technology Solutions"
        lead="We offer advanced digital solutions for manufacturing industries — enhancing production, improving plant efficiency, and enabling real-time decision making."
        items={manufacturingSolutions}
        accent="#D2571C"
      />
      <MarketingSection
        heading="Growing Your Manufacturing Business With Digital Marketing"
        desc="We help factories and manufacturing companies grow with powerful digital marketing strategies using SEO, automation, and targeted campaigns."
        items={manufacturingMarketing}
        accent="#D2571C"
      />

      {/* ================= TRAVEL ================= */}
      <IndustryHero
        id="travel"
        eyebrow="Travel & Tourism Technology"
        title="Smart Digital Solutions for"
        highlight="Travel"
        desc="Empowering travel agencies, tour operators, and hospitality businesses with digital tools for seamless bookings, smarter itineraries, and happier travelers."
        accent="#0E9F6E"
        image={travelHeroImg}
        imageAlt="Travel & Tourism Technology"
      />
      <BenefitsSection
        heading="Why Travel Businesses Need Digital Innovation"
        lead="Travelers expect instant bookings, real-time updates, and personalized experiences. Agencies and operators need smart technology to keep up and stand out."
        items={travelBenefits}
        accent="#0E9F6E"
        imageAlt="Travel Innovation"
        image={travelInnovationImg}
      />
      <SolutionsSection
        heading="Our Travel Technology Solutions"
        lead="We build digital platforms for travel agencies, tour operators, and hospitality businesses — simplifying bookings, itineraries, and traveler communication."
        items={travelSolutions}
        accent="#0E9F6E"
      />
      <MarketingSection
        heading="Growing Your Travel Business With Smart Digital Marketing"
        desc="We help travel agencies and tour operators attract more bookings with targeted SEO, automation, and destination-focused campaigns."
        items={travelMarketing}
        accent="#0E9F6E"
      />

      {/* ================= FITNESS STUDIO ================= */}
      <IndustryHero
        id="fitness"
        eyebrow="Fitness & Wellness Technology"
        title="Smart Digital Solutions for"
        highlight="Fitness Studios"
        desc="Empowering gyms, fitness studios, and wellness centers with digital tools to manage memberships, classes, and member engagement effortlessly."
        accent="#E63971"
        image={fitnessHeroImg}
        imageAlt="Fitness & Wellness Technology"
      />
      <BenefitsSection
        heading="Why Fitness Studios Need Digital Innovation"
        lead="Members expect easy bookings, progress tracking, and constant motivation. Studios need the right technology to deliver that experience and run efficiently."
        items={fitnessBenefits}
        accent="#E63971"
        imageAlt="Fitness Innovation"
        image={fitnessInnovationImg}
      />
      <SolutionsSection
        heading="Our Fitness Studio Technology Solutions"
        lead="We build management systems and apps for gyms and fitness studios — simplifying memberships, scheduling, and member engagement."
        items={fitnessSolutions}
        accent="#E63971"
      />
      <MarketingSection
        heading="Growing Your Fitness Studio With Smart Digital Marketing"
        desc="We help gyms and fitness studios attract and retain members with local SEO, automation, and targeted membership campaigns."
        items={fitnessMarketing}
        accent="#E63971"
      />

      {/* ================= FINAL CTA ================= */}
      <section className="ind-cta ind-cta-final">
        <Reveal className="ind-cta-inner">
          <h2>Have an Industry We Didn't List?</h2>
          <p>We build custom digital systems for any sector — tell us what you're running and we'll map out a solution.</p>
          <a href="/contact" className="ind-btn-primary">
            Talk to Our Team <ArrowRight size={16} strokeWidth={2} />
          </a>
        </Reveal>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------
// FAQ item (accordion)
// ---------------------------------------------------------------------
function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <Reveal delay={index * 0.06} className="ind-faq-item">
      <button className="ind-faq-question" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>{q}</span>
        <span className={`ind-faq-toggle${open ? " ind-faq-toggle-open" : ""}`}>
          <ArrowRight size={15} strokeWidth={2} />
        </span>
      </button>
      <div className="ind-faq-answer-wrap" style={{ maxHeight: open ? "220px" : "0px" }}>
        <p className="ind-faq-answer">{a}</p>
      </div>
    </Reveal>
  );
}