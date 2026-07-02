import { useState } from "react";
import { ArrowRight, Award, Briefcase, Clock, GraduationCap, HeartPulse, Scale, Star, BookOpen, Users } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { majors } from "../data/majors";

const categories = [
  { key: "engineering", Icon: Award, en: "Engineering", ar: "الهندسة", accent: "#dc2626", bg: "#fef2f2" },
  { key: "business", Icon: Briefcase, en: "Business", ar: "إدارة الأعمال", accent: "#1d4ed8", bg: "#eff6ff" },
  { key: "medicine", Icon: HeartPulse, en: "Medical", ar: "الدراسات الطبية", accent: "#059669", bg: "#ecfdf5" },
  { key: "humanities", Icon: BookOpen, en: "Humanities", ar: "الإنسانية", accent: "#7c3aed", bg: "#f5f3ff" },
  { key: "law", Icon: Scale, en: "Law", ar: "القانون", accent: "#d97706", bg: "#fffbeb" },
];

export const getMajorsByCategory = (category) => majors.filter((m) => m.category === category);
export const getMajorById = (id) => majors.find((m) => m.id === id);

export default function MajorsPage() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const bodyFont = isAr ? "'Cairo',sans-serif" : "'Poppins',sans-serif";
  const headingFont = isAr ? "'Cairo',sans-serif" : "'Playfair Display',serif";

  const [activeCategory, setActiveCategory] = useState("engineering");
  const activeCategoryData = categories.find((c) => c.key === activeCategory);
  const filteredMajors = getMajorsByCategory(activeCategory);
  const totalPrograms = categories.reduce((sum, c) => sum + getMajorsByCategory(c.key).length, 0);

  const openWhatsApp = (message) =>
    window.open(`https://wa.me/60199563789?text=${encodeURIComponent(message)}`);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .majors-header { padding: 56px 0 44px !important; }
          .majors-stats { gap: 28px !important; }
          .majors-tabs {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 4px;
          }
          .majors-tabs::-webkit-scrollbar { display: none; }
          .majors-tabs > button { flex-shrink: 0; }
          .majors-cards-section { padding: 48px 0 64px !important; }
          .majors-cta { padding: 36px 24px !important; }
        }
      `}</style>
      <section id="majors" style={{ background: "#ffffff" }}>
        <div className="majors-header" style={{ background: "#0a1628", padding: "88px 0 72px", position: "relative", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              opacity: 0.04,
              backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -80,
              width: 360,
              height: 360,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -80,
              left: -80,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 24 }}>
              <div style={{ height: 1, width: 32, background: "#dc2626" }} />
              <span style={{ color: "#dc2626", fontSize: "0.72rem", fontFamily: bodyFont, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                {isAr ? "التخصصات" : "Academic Majors"}
              </span>
              <div style={{ height: 1, width: 32, background: "#dc2626" }} />
            </div>
            <h2
              style={{
                fontFamily: headingFont,
                color: "#fff",
                fontSize: "clamp(2.2rem,5vw,3.6rem)",
                fontWeight: isAr ? 800 : 700,
                lineHeight: 1.05,
                marginBottom: 20,
                letterSpacing: isAr ? "-0.01em" : "-0.025em",
              }}
            >
              {isAr ? (
                <>اختر <span style={{ color: "#dc2626" }}>تخصصك</span></>
              ) : (
                <>Browse the <span style={{ color: "#dc2626" }}>majors</span></>
              )}
            </h2>
            <p style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 500, margin: "0 auto 52px" }}>
              {isAr
                ? "تخصصات متاحة في جامعات ماليزية مختلفة. اختر الفئة وشوف ما يناسبك — وإذا ما لقيت، راسلنا مباشرة."
                : "Majors across different Malaysian universities. Browse by field — and if you don't see what you need, ask us directly."}
            </p>
            <div className="majors-stats" style={{ display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "center" }}>
              {[
                { n: totalPrograms, en: "Programs", ar: "برنامج دراسي" },
                { n: categories.length, en: "Fields", ar: "مجال أكاديمي" },
                { n: "17+", en: "Partner Universities", ar: "جامعة شريكة" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", color: "#dc2626", fontSize: "2.4rem", fontWeight: 700, lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 6 }}>
                    {isAr ? s.ar : s.en}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="majors-cards-section" style={{ padding: "80px 0 120px" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="majors-tabs" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48, justifyContent: "center" }}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "12px 22px",
                      borderRadius: 12,
                      cursor: "pointer",
                      fontFamily: bodyFont,
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      border: `1.5px solid ${isActive ? cat.accent : "#e2e8f0"}`,
                      background: isActive ? cat.bg : "#fff",
                      color: isActive ? cat.accent : "#64748b",
                      transition: "all .15s",
                      boxShadow: isActive ? `0 4px 16px ${cat.accent}20` : "none",
                    }}
                  >
                    <cat.Icon style={{ width: 16, height: 16, color: isActive ? cat.accent : "#94a3b8" }} />
                    {isAr ? cat.ar : cat.en}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredMajors.map((major) => (
                <div
                  key={major.id}
                  style={{ background: "#f8fafc", borderRadius: 20, padding: "28px", border: "1px solid transparent", cursor: "pointer", transition: "all .2s" }}
                  onClick={() => {
                    window.location.hash = `#major/${major.id}`;
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#fff";
                    el.style.borderColor = activeCategoryData.accent + "30";
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 16px 40px rgba(10,22,40,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#f8fafc";
                    el.style.borderColor = "transparent";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <h3 style={{ fontFamily: headingFont, color: "#0f172a", fontSize: "1rem", fontWeight: 700, marginBottom: 4 }}>
                    {major.name[isAr ? "ar" : "en"]}
                  </h3>
                  <p style={{ fontFamily: bodyFont, color: "#94a3b8", fontSize: "0.78rem", marginBottom: 14, fontStyle: "italic" }}>
                    {major.name[isAr ? "en" : "ar"]}
                  </p>
                  <p style={{ fontFamily: bodyFont, color: "#475569", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: 18 }}>
                    {major.description[isAr ? "ar" : "en"]}
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 8,
                      padding: "16px 0",
                      borderTop: "1px solid #f1f5f9",
                      borderBottom: "1px solid #f1f5f9",
                      marginBottom: 16,
                    }}
                  >
                    {[
                      { Icon: Star, val: major.rating, color: "#f59e0b" },
                      { Icon: Users, val: major.students, color: activeCategoryData.accent },
                      { Icon: Clock, val: major.duration[isAr ? "ar" : "en"], color: "#059669" },
                      { Icon: GraduationCap, val: `${major.universities.length} ${isAr ? "جامعة" : "Univs"}`, color: "#7c3aed" },
                    ].map(({ Icon, val, color }, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Icon style={{ width: 14, height: 14, color, flexShrink: 0 }} />
                        <span style={{ fontFamily: bodyFont, color: "#64748b", fontSize: "0.78rem" }}>{val}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                    {major.universities.slice(0, 3).map((u, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: bodyFont,
                          fontSize: "0.7rem",
                          color: "#475569",
                          background: "#f1f5f9",
                          padding: "3px 10px",
                          borderRadius: 100,
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        {u}
                      </span>
                    ))}
                    {major.universities.length > 3 && (
                      <span
                        style={{ fontFamily: bodyFont, fontSize: "0.7rem", color: activeCategoryData.accent, background: activeCategoryData.bg, padding: "3px 10px", borderRadius: 100 }}
                      >
                        +{major.universities.length - 3}
                      </span>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: activeCategoryData.accent, fontFamily: bodyFont, fontSize: "0.85rem", fontWeight: 600 }}>
                    {isAr ? "عرض التفاصيل" : "View Details"} <ArrowRight style={{ width: 14, height: 14 }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="majors-cta" style={{ background: "#0a1628", borderRadius: 24, padding: "56px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  opacity: 0.04,
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <h3 style={{ fontFamily: headingFont, color: "#fff", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", fontWeight: 700, marginBottom: 12, position: "relative", zIndex: 1 }}>
                {t("cantFindMajor")}
              </h3>
              <p style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.5)", fontSize: "1rem", marginBottom: 28, position: "relative", zIndex: 1 }}>
                {t("contactForConsultation")}
              </p>
              <button
                onClick={() =>
                  openWhatsApp(
                    isAr ? "مرحباً، لم أجد التخصص المناسب وأحتاج مساعدتكم" : "Hello, I could not find the right major and need your help",
                  )
                }
                style={{
                  fontFamily: bodyFont,
                  background: "#dc2626",
                  color: "#fff",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  padding: "14px 36px",
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 4px 20px rgba(220,38,38,0.4)",
                }}
              >
                {t("getFreeConsultation")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
