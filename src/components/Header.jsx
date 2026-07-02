import { useEffect, useState } from "react";
import { Globe, Menu, Phone, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import Logo from "./Logo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const isAr = language === "ar";
  const fontFamily = isAr ? "'Cairo', sans-serif" : "'Poppins', sans-serif";

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setActiveSection(hash);
    };
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => setLanguage(isAr ? "en" : "ar");

  const navLinks = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "majors", href: "#majors" },
    { key: "universities", href: "#universities" },
    { key: "institutes", href: "#institutes" },
    { key: "contact", href: "#contact" },
  ];

  const openWhatsApp = () => {
    const message = isAr
      ? "مرحباً، أريد التقديم للدراسة في ماليزيا"
      : "Hello, I want to apply for studies in Malaysia";
    window.open(`https://wa.me/60199563789?text=${encodeURIComponent(message)}`);
  };

  return (
    <header
      className="w-full"
      style={{
        height: 64,
        background: "#ffffff",
        borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 16px rgba(10,22,40,0.06)" : "none",
        transition: "border-color .25s, box-shadow .25s",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className={`flex items-center justify-between h-full ${isAr ? "flex-row-reverse" : ""}`}>
          <Logo size="md" />

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.key;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium transition-colors duration-150"
                  style={{ color: isActive ? "#dc2626" : "#374151", fontFamily }}
                >
                  {t(link.key)}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                      style={{ background: "#dc2626" }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
              style={{ color: "#64748b", fontFamily }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1628")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            >
              <Globe className="h-4 w-4" />
              {isAr ? "EN" : "عربي"}
            </button>
            <button
              onClick={openWhatsApp}
              className="px-6 py-2.5 rounded-lg text-white text-sm font-semibold transition-all duration-150 hover:opacity-90"
              style={{ background: "#dc2626", fontFamily }}
            >
              {t("applyNow")}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleLanguage} className="p-2" style={{ color: "#64748b" }}>
              <Globe className="h-4 w-4" />
            </button>
            <button
              onClick={openWhatsApp}
              className="px-3 py-1.5 rounded-lg text-white text-xs font-semibold"
              style={{ background: "#dc2626", fontFamily }}
            >
              {t("applyNow")}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2"
              style={{ color: "#374151" }}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 bg-white"
            style={{
              borderBottom: "1px solid #e2e8f0",
              boxShadow: "0 8px 24px rgba(10,22,40,0.08)",
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.key;
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150"
                    style={{
                      color: isActive ? "#dc2626" : "#374151",
                      background: isActive ? "#fef2f2" : "transparent",
                      fontFamily,
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#dc2626" }}
                      />
                    )}
                    {t(link.key)}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 space-y-2" style={{ borderTop: "1px solid #f1f5f9" }}>
                <button
                  className="w-full py-3 rounded-xl text-white font-semibold text-sm"
                  style={{ background: "#dc2626", fontFamily }}
                  onClick={() => {
                    setMobileOpen(false);
                    openWhatsApp();
                  }}
                >
                  {t("applyNow")}
                </button>
                <button
                  className="w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2"
                  style={{ border: "1px solid #e2e8f0", color: "#374151", fontFamily }}
                  onClick={() => {
                    setMobileOpen(false);
                    window.open("tel:+60199563789");
                  }}
                >
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">+60 19 956 3789</span>
                </button>
                <button
                  className="w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2"
                  style={{ border: "1px solid #e2e8f0", color: "#374151", fontFamily }}
                  onClick={toggleLanguage}
                >
                  <Globe className="h-4 w-4" />
                  {isAr ? "Switch to English" : "التبديل إلى العربية"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
