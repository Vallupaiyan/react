import React from "react";
import "../src/css//project.css";

/**
 * PROJECTS DATA
 * ─────────────
 * To add a new project later: copy one object below, paste it into this
 * array, and edit the fields. The grid re-renders automatically — no
 * other code needs to change.
 */
const projectsData = [
  {
    id: 1,
    image: "./src/assets/project/mepcoglobal.jpeg",
    alt: "MEPCO Global Private Limited Web Application",
    type: "Web Application",
    title: "MEPCO Global — Fullstack Web Application Development",
    description:
      "Built a comprehensive, fully responsive fullstack web platform for MEPCO Global Private Limited using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform features secure JWT-based user authentication and role-based access control, allowing admins, managers, and clients to access personalized dashboards. Integrated dynamic content management so the client can update services, announcements, and media without developer assistance. Designed and implemented RESTful APIs to handle data flow between the frontend and backend with optimized query performance. The database architecture was carefully structured for scalability, supporting real-time data and high traffic loads. Delivered a clean, modern UI with smooth navigation, mobile responsiveness, and cross-browser compatibility.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT Auth", "REST API"],
    link: "https://mepcoglobal.com/",
  },
  {
    id: 2,
    image: "./src/assets/project/crm.jpeg",
    alt: "Multiple Business Management CRM System",
    type: "CRM Web Application",
    title: "Multiple Business Management System CRM",
    description:
      "Designed and developed a powerful, fully responsive Multiple Business Management CRM system using React.js, tailored to help businesses streamline their operations under one unified platform. The system includes a dedicated customer management module where businesses can add, track, and manage client profiles with complete interaction history. The sales tracking module provides a real-time pipeline view from lead to closure, with performance reports and target monitoring. An employee management panel supports onboarding, attendance tracking, task assignments, and payroll summaries. The lead generation module captures and qualifies prospects automatically. An analytics dashboard presents visual insights using charts and graphs, helping decision-makers take data-driven actions. Inventory monitoring ensures stock levels are tracked with low-stock alerts. The platform supports multiple businesses simultaneously under separate workspaces with a single admin login.",
    tags: ["React.js", "CRM", "Analytics", "Sales Pipeline", "Inventory", "Multi-Workspace"],
    link: "https://profenaa.com/admin/",
  },
  {
    id: 3,
    image: "./src/assets/project/getzzready.jpeg",
    alt: "Kids School and Day Care Centre Website",
    type: "Web Application",
    title: "Kids School & Day Care Centre — Dynamic Web Platform",
    description:
      "Developed a warm, engaging, and fully responsive web platform for a Kids School and Day Care Centre based in Coimbatore. The website is designed to give parents a friendly and trustworthy first impression, with clear sections for activities, admissions, facilities, gallery, and contact information. Built on the MERN stack, the platform includes a secure admin panel where school staff can update announcements, upload photos, manage enquiries, and publish events in real time. An online enquiry and admission form collects parent information and sends automated email notifications. The gallery section features a dynamic photo grid organized by event and activity category. The site is optimized for mobile devices since most parents browse on smartphones, and includes SEO-friendly structure for better local search visibility in Coimbatore.",
    tags: ["MERN Stack", "Admin Panel", "Email Integration", "SEO", "Dynamic Gallery", "Mobile First"],
    link: "https://getzzreadykidzzschool.com/index.html",
  },
  {
    id: 4,
    image: "./src/assets/project/EduSync.jpeg",
    alt: "EduSync Learning Management System",
    type: "Web Application",
    title: "EduSync — Learning Management System for Coaching Centres",
    description:
      "Built a feature-rich, scalable Learning Management System (LMS) tailored specifically for private coaching centres. The platform supports live and recorded classes, structured course modules, topic-wise study materials, and downloadable resources. Students can take timed quizzes and mock tests with automated scoring and detailed performance reports. A parent dashboard provides real-time visibility into attendance, test scores, assignment submissions, and progress charts, improving parent-teacher communication. Teachers have dedicated dashboards to manage class schedules, upload content, create assessments, and track student performance by batch or individual. Admins can manage multiple batches, subjects, fee payments, and enrollment in one place. The system currently serves over 8,000 active students across multiple centres, built to handle concurrent users with zero downtime.",
    tags: ["LMS", "React.js", "Node.js", "Live Classes", "Parent Dashboard", "8000+ Students"],
    link: "https://www.pybotaisolutions.com/",
  },
  {
    id: 5,
    image: "./src/assets/project/amcurio.jpeg",
    alt: "AmCurio AI-Powered Career Guidance Platform",
    type: "EdTech Platform",
    title: "AmCurio — AI-Powered Career Guidance Platform",
    description:
      "AmCurio is an innovative EdTech platform built to guide students and working professionals through their career journey using artificial intelligence. The platform begins with a smart skill assessment that identifies the user's strengths, gaps, and interests, then generates a personalized career roadmap aligned with their goals. AI-powered course recommendations surface the most relevant learning resources from curated content libraries. The mentorship module connects users with industry professionals for one-on-one guidance, mock interviews, and career advice sessions. A built-in progress tracker monitors completed milestones, skill badges earned, and learning streaks. The platform also includes resume building tools, job opportunity alerts, and community forums for peer learning. Designed with a clean, motivating interface that keeps users engaged throughout their upskilling journey.",
    tags: ["AI/ML", "React.js", "EdTech", "Mentorship", "Career Roadmap", "Personalization"],
    link: "https://amcurio.com/login",
  },
  {
    id: 6,
    image: "./src/assets/project/UXFlow.jpeg",
    alt: "UXFlow Modern UI/UX Design System",
    type: "UI/UX Development",
    title: "UXFlow — Modern UI/UX Design System",
    description:
      "UXFlow is a comprehensive UI/UX design system crafted to deliver intuitive, visually consistent, and accessible user experiences across web and mobile products. The project began with in-depth user research — including user interviews, surveys, and competitive analysis — to identify pain points and define personas. Detailed user journey maps and information architecture diagrams were created before moving into low-fidelity wireframes. High-fidelity prototypes were built in Figma with interactive transitions, micro-animations, and component-level specifications. The design system includes a complete library of reusable UI components — buttons, forms, modals, cards, navigation patterns — all following WCAG accessibility standards. Responsive layouts were defined for mobile, tablet, and desktop breakpoints with design tokens for consistent spacing, typography, and color usage across teams.",
    tags: ["Figma", "Wireframing", "Prototyping", "Design System", "WCAG", "User Research"],
    link: "#",
  },
  {
    id: 7,
    image: "./src/assets/project/DesignHub.jpeg",
    alt: "DesignHub Interactive User Experience Platform",
    type: "UI/UX Development",
    title: "DesignHub — Interactive User Experience Platform",
    description:
      "DesignHub is a modern UI/UX design project focused on crafting engaging, interaction-rich digital experiences for web platforms. The project involved a full UX process: stakeholder workshops to define goals, user interviews to gather real-world insights, and affinity mapping to synthesize findings into actionable design decisions. Sitemap planning and task-flow diagrams ensured the information architecture was intuitive before any visual design began. Interactive prototypes were developed with realistic data and clickable flows for usability testing with actual users. Iteration cycles based on user feedback refined the experience significantly. Final deliverables included a comprehensive design file with annotated specs, a handoff-ready component library, and detailed developer documentation covering spacing, states, and responsive behaviour for seamless implementation.",
    tags: ["Figma", "Usability Testing", "Interaction Design", "Component Library", "Dev Handoff", "UX Research"],
    link: "#",
  },
  {
    id: 8,
    image: "./src/assets/project/DIgital.jpeg",
    alt: "Corporate Digital Marketing and Brand Promotion",
    type: "Digital Marketing",
    title: "Digital Marketing & Brand Promotion",
    description:
      "Planned and executed end-to-end digital marketing strategies to drive measurable business growth for corporate clients across multiple industries. The engagement covered complete SEO audits and on-page/off-page optimization to improve organic search rankings, resulting in a significant increase in website traffic within 90 days. Social media marketing covered content calendars, platform-specific creatives, hashtag strategy, and community management across Instagram, LinkedIn, and Facebook. Content creation included blogs, case studies, email newsletters, and video scripts designed to educate, engage, and convert target audiences. Lead generation campaigns were configured using landing pages, lead magnets, and automated follow-up sequences. Targeted performance advertising on Google and social platforms delivered consistent ROAS improvements. Monthly performance reports tracked KPIs including impressions, CTR, conversion rate, and cost per lead.",
    tags: ["SEO", "Social Media", "Content Marketing", "Google Ads", "Lead Generation", "Analytics"],
    link: "#",
  },
  {
    id: 9,
    image: "./src/assets/project/Digital2.jpeg",
    alt: "Meta Ads Campaign and Lead Generation",
    type: "Meta Campaigns",
    title: "Meta Ads Campaign & Lead Generation",
    description:
      "Designed, launched, and continuously optimized high-performing Meta advertising campaigns across Facebook and Instagram for multiple business clients. The process began with deep audience research — building custom audiences, lookalike audiences, and interest-based segments tailored to each business's ideal customer profile. Compelling ad creatives were crafted including static image ads, carousel formats, short video reels, and story ads — each with A/B tested copy variations to identify the highest-converting messaging. Lead generation campaigns used Meta Instant Forms and custom landing pages with retargeting sequences to re-engage warm prospects. Campaign structures followed full-funnel strategies covering awareness, consideration, and conversion stages. Real-time performance monitoring tracked metrics including CPL (cost per lead), CPC, CTR, reach, and ROAS. Regular optimization cycles — adjusting bids, creative rotation, and audience exclusions — consistently improved campaign efficiency and reduced ad spend wastage.",
    tags: ["Meta Ads", "Facebook", "Instagram", "A/B Testing", "Retargeting", "Full-Funnel"],
    link: "#",
  },
 
];

function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img className="card-img" src={project.image} alt={project.alt} />
      </div>
      <div className="card-body">
        <span className="card-type">{project.type}</span>
        <div className="card-title">{project.title}</div>
        <p className="card-desc">{project.description}</p>
        <div className="card-divider"></div>
        <div className="card-tags">
          {project.tags.map((tag, i) => (
            <span className="card-tag" key={`${project.id}-${i}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <a href={project.link} className="btn-view" target="_blank" rel="noopener noreferrer">
          View Project
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/**
 * HERO FLOATING ICONS
 * ────────────────────
 * Purely decorative SVGs (code brackets, browser window, mobile app,
 * gear, cloud, stacked pages) that float gently behind the hero text.
 * aria-hidden because they carry no information for screen readers.
 */
function HeroIcons() {
  return (
    <div className="hero-icons" aria-hidden="true">
      {/* decorative glowing bubbles, drifting slowly and independently */}
      <span className="hero-bubble b-1"></span>
      <span className="hero-bubble b-2"></span>
      <span className="hero-bubble b-3"></span>
      <span className="hero-bubble b-4"></span>
      <span className="hero-bubble b-5"></span>
      <span className="hero-bubble b-6"></span>

      {/* decorative icons, each on its own slow drift + pulse, unrelated to bubble positions */}

      {/* code brackets */}
      <svg className="hero-icon i-1" viewBox="0 0 24 24">
        <path d="M8 6L3 12L8 18M16 6L21 12L16 18" />
      </svg>

      {/* browser window */}
      <svg className="hero-icon i-2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <circle cx="6.5" cy="7" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="8.5" cy="7" r="0.6" fill="currentColor" stroke="none" />
      </svg>

      {/* mobile app */}
      <svg className="hero-icon i-3" viewBox="0 0 24 24">
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </svg>

      {/* gear */}
      <svg className="hero-icon i-4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
      </svg>

      {/* cloud */}
      <svg className="hero-icon i-5" viewBox="0 0 24 24">
        <path d="M6.5 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5a4.5 4.5 0 0 1 .5 8.5H6.5z" />
      </svg>

      {/* stacked pages */}
      <svg className="hero-icon i-6" viewBox="0 0 24 24">
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
      </svg>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-dots"></div>
        <HeroIcons />
        <div className="hero-eyebrow">
          <span className="dot"></span>Profenaa Infotech
        </div>
        <h1>
          Our <em>Projects</em>
        </h1>
        <p className="hero-sub">
          A curated look at what we've built — products, platforms, and digital experiences crafted with purpose.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">40+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat">
            <div className="stat-num">12</div>
            <div className="stat-label">Industries Served</div>
          </div>
          <div className="stat">
            <div className="stat-num">99%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat">
            <div className="stat-num">3</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}