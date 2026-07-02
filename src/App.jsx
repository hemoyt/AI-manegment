import { useCallback, useEffect, useState } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PartnerLogos from "./components/PartnerLogos";
import About from "./components/About";
import Services from "./components/Services";
import Awards from "./components/Awards";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import MajorsPage from "./components/MajorsPage";
import MajorDetail from "./components/MajorDetail";
import UniversitiesPage from "./components/UniversitiesPage";
import UniversityDetail from "./components/UniversityDetail";
import InstitutesPage from "./components/InstitutesPage";
import Contact from "./components/Contact";

const KNOWN_SECTIONS = ["about", "majors", "universities", "institutes", "contact"];

const PAGE_TITLES = {
  home: "Al-Ghufran Educational Consultancy | Study in Malaysia",
  about: "About Us | Al-Ghufran Educational Consultancy",
  majors: "Academic Majors in Malaysia | Al-Ghufran Educational Consultancy",
  universities: "Malaysian Universities | Al-Ghufran Educational Consultancy",
  institutes: "English Language Institutes in Malaysia | Al-Ghufran Educational Consultancy",
  contact: "Contact Us | Al-Ghufran Educational Consultancy",
  "major-detail": "Major Details | Al-Ghufran Educational Consultancy",
  "university-detail": "University Details | Al-Ghufran Educational Consultancy",
};

function AppShell() {
  const [page, setPage] = useState("home");
  const [topBarHeight, setTopBarHeight] = useState(0);

  const handleTopBarHeight = useCallback((height) => {
    setTopBarHeight(height);
    document.documentElement.style.setProperty("--topbar-height", `${height}px`);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash || hash === "home") {
        setPage("home");
      } else if (KNOWN_SECTIONS.includes(hash)) {
        setPage(hash);
      } else if (hash.startsWith("major/")) {
        setPage("major-detail");
      } else if (hash.startsWith("university/")) {
        setPage("university-detail");
      }
    };
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[page] || PAGE_TITLES.home;
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <main>
            <Hero />
            <PartnerLogos />
            <About />
            <Services />
            <Awards />
            <Testimonials />
            <CTA />
          </main>
        );
      case "about":
        return (
          <main>
            <About />
            <Awards />
            <CTA />
          </main>
        );
      case "majors":
        return (
          <main>
            <MajorsPage />
            <CTA />
          </main>
        );
      case "universities":
        return (
          <main>
            <UniversitiesPage />
          </main>
        );
      case "institutes":
        return (
          <main>
            <InstitutesPage />
          </main>
        );
      case "contact":
        return (
          <main>
            <Contact />
          </main>
        );
      case "major-detail":
        return (
          <main>
            <MajorDetail />
          </main>
        );
      case "university-detail":
        return (
          <main>
            <UniversityDetail />
          </main>
        );
      default:
        return (
          <main>
            <Hero />
            <PartnerLogos />
            <About />
            <Services />
            <Awards />
            <Testimonials />
            <CTA />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
      <TopBar onHeightChange={handleTopBarHeight} />
      <div style={{ paddingTop: topBarHeight }}>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}
