import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Footer from "./footer";

// Every page is lazy-loaded so its CSS file only loads when that
// page is actually visited.
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Client = lazy(() => import("./client"));
const Careers = lazy(() => import("./carres"));
const BusinessAutomation = lazy(() => import("./Businessautomation"));
const ProjectPage = lazy(() => import("./project"));
const ErpSolutions = lazy(() => import("./ERP"));
const MultiBusinessManagement = lazy(() => import("./manage"));
const MultiFranchiseManagement = lazy(() => import("./franchise"));
const IndustriesOverview = lazy(() => import("./Industriesoverview"));
const ProfenaaWebDev = lazy(() => import("./Profenaawebdev"));
const EcommerceServicePage = lazy(() => import("./ecommers"));
const UiUxServicePage = lazy(() => import("./Uiuxservice"));
const MobileAppDevelopment = lazy(() => import("./Mobileappdevelopment"));
const SoftwareTesting = lazy(() => import("./Softwaretesting"));
const SEOServices = lazy(() => import("./Seoservices"));
const GMBOptimization = lazy(() => import("./GMBOptimization"));
const SocialMediaMarketing = lazy(() => import("./Socialmediamarketing"));
const ChatbotLanding = lazy(() => import("./Chatbotlanding"));
const Generative = lazy(() => import("./Generative"));
const AIAutomations = lazy(() => import("./AIAutomations"));
const AppllicationDevelopment = lazy(() => import("./Appllicationdevelopment"));
const ApplicationMaintenance = lazy(() => import("./Maintenance"));
const MechanicalEngineeringSite = lazy(() => import("./Mechanicalengineering "));
const ElectricalEngineeringSite = lazy(() => import("./Electricalengineering "));
const CseIt = lazy(() => import("./Cseit"));
const CivilEngineeringSite = lazy(() => import("./Civilengineering"));
const ArtsMultimedia = lazy(() => import("./Artsmultimedia"));
const DataScience = lazy(() => import("./Datascience "));
const AiMl = lazy(() => import("./ml"));
const Contact = lazy(() => import("./Contact "));
const Softwaresolutions = lazy(() => import("./Softwaresolutions"));
const Internship = lazy(() => import("./Internship"));

const pageFallback = (
  <div
    style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, -apple-system, sans-serif",
      color: "#8993a8",
      fontSize: "14px",
      letterSpacing: "0.04em",
    }}
  >
    Loading…
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={pageFallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/client" element={<Client />} />
          <Route path="/business-automation" element={<BusinessAutomation />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/erp-solutions" element={<ErpSolutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/manage" element={<MultiBusinessManagement />} />
          <Route path="/franchise" element={<MultiFranchiseManagement />} />
          <Route path="/industriesoverview" element={<IndustriesOverview />} />
          <Route path="/ProfenaaWebDev" element={<ProfenaaWebDev />} />
          <Route path="/ecommers" element={<EcommerceServicePage />} />
          <Route path="/Uiuxservice" element={<UiUxServicePage />} />
          <Route path="/MobileAppDevelopment" element={<MobileAppDevelopment />} />
          <Route path="/SoftwareTesting" element={<SoftwareTesting />} />
          <Route path="/Seoservices" element={<SEOServices />} />
          <Route path="/GMBOptimization" element={<GMBOptimization />} />
          <Route path="/SocialMediaMarketing" element={<SocialMediaMarketing />} />
          <Route path="/Chatbotlanding" element={<ChatbotLanding />} />
          <Route path="/Generative" element={<Generative />} />
          <Route path="/AIAutomations" element={<AIAutomations />} />
          <Route path="/Appllicationdevelopment" element={<AppllicationDevelopment />} />
          <Route path="/Maintenance" element={<ApplicationMaintenance />} />
          <Route path="/MechanicalEngineering" element={<MechanicalEngineeringSite />} />
          <Route path="/ElectricalEngineering" element={<ElectricalEngineeringSite />} />
          <Route path="/Cseit" element={<CseIt />} />
          <Route path="/CivilEngineering" element={<CivilEngineeringSite />} />
          <Route path="/ArtsMultimedia" element={<ArtsMultimedia />} />
          <Route path="/Datascience" element={<DataScience />} />
          <Route path="/AiMl" element={<AiMl />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Softwaresolution" element={<Softwaresolutions />} />
          <Route path="/Internship" element={<Internship />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;