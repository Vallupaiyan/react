import "../src/css//multi-business-managment-system.css";

// TODO: point these at your actual Navbar / Footer components.
// The original page loaded them dynamically via load.js / footer.js —
// in React these should be real components you already have (or build).


const cards = [
  {
    title: "Centralized Multi-Business Control",
    description:
      "Manage multiple companies, branches, teams, and workflows from one intelligent dashboard for faster decisions and streamlined operations.",
    cta: { label: "Get Started ", href: "/contact-us" },
  },
  {
    title: "Scalable Data-Driven Operations",
    description:
      "Track performance, finances, and reporting across all businesses with real-time analytics and automation tools.",
    extraText:
      "Designed to improve productivity, reduce manual errors, and support long-term growth.",
  },
];

const whyPoints = [
  "\u2714 Unified dashboard for multiple businesses & branches",
  "\u2714 Real-time reporting & operational visibility",
  "\u2714 Automation to reduce manual workload",
  "\u2714 Secure, scalable architecture for growth",
  "\u2714 Expert implementation & ongoing support",
];

const offerItems = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/8743/8743921.png",
    title: "Centralized Multi-Company Dashboard",
    description:
      "Manage multiple businesses and branches from a unified control panel with real-time visibility.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10008/10008076.png",
    title: "Finance & Expense Management",
    description:
      "Track income, expenses, billing, and cash flow across all business units effortlessly.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10064/10064244.png",
    title: "Automated Reporting & Analytics",
    description:
      "Generate smart reports to monitor performance, trends, and growth opportunities.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
    title: "Branch & Workflow Automation",
    description:
      "Streamline daily operations with automation that reduces manual workload and errors.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/9958/9958082.png",
    title: "Role-Based Access Control",
    description:
      "Secure your system with permission-based access for teams and management.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10064/10064244.png",
    title: "Scalable Cloud Infrastructure",
    description:
      "Expand effortlessly as your business grows with a reliable and flexible architecture.",
  },
];

export default function MultiBusinessManagement() {
  return (
    <>
     

      {/* ================= HERO SECTION ================= */}
      <section className="mbms-hero">
        <div className="mbms-hero-overlay"></div>

        <div className="mbms-hero-content">
          <h1>Multiple Business Management System</h1>
          <p>
            Manage multiple businesses, branches, operations, and finances
            from one centralized platform designed for scalable growth and
            smarter decision-making.
          </p>
          <a href="/contact" className="mbms-btn">
            Get Started
          </a>
        </div>
      </section>

      {/* ================= CARDS SECTION ================= */}
      <section className="mbms-card-area">
        <div className="mbms-card-container">
          {cards.map((card) => (
            <div className="mbms-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.extraText && <p>{card.extraText}</p>}
              {card.cta && (
                <a href={card.cta.href} className="mbms-card-btn">
                  {card.cta.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="mbms-why-wrapper">
        <div className="mbms-why-left">
          <div className="mbms-image-shape"></div>
          <img
            src="./src/assets/solution/Multi.jpg"
            alt="Multi Business Management System"
          />
        </div>

        <div className="mbms-why-right">
          <h2>Why Choose Our Multi Business Management System?</h2>

          <p>
            At Profenaa Infotech, our platform is built to simplify complex
            multi-business operations. We deliver centralized control,
            automation, and real-time insights that help organizations grow
            smarter and faster.
          </p>

          <ul>
            {whyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= WHAT DO WE OFFER ================= */}
      <section className="mbms-offer-section">
        <div className="mbms-offer-left">
          <h2>What Do We Offer?</h2>
          <p>
            Our multi business management platform helps organizations
            control operations, finance, reporting, and branch activities
            from a centralized system built for scalability and efficiency.
          </p>

          <div className="mbms-offer-illustration">
            <div className="mbms-bg-shape"></div>
            <img
              src="./src/assets/solution/Multi2.jpg"
              alt="Multi Business Management Illustration"
            />
          </div>
        </div>

        <div className="mbms-offer-right">
          {offerItems.map((item) => (
            <div className="mbms-offer-item" key={item.title}>
              <img src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      
    </>
  );
}