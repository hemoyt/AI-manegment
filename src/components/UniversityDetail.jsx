import { useEffect, useState } from "react";
import { ArrowLeft, Award, BookOpen, Calendar, Globe, MapPin, Star, Users } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { universities } from "../data/universities";

export default function UniversityDetail() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const bodyFont = isAr ? "'Cairo',sans-serif" : "'Poppins',sans-serif";
  const headingFont = isAr ? "'Cairo',sans-serif" : "'Playfair Display',serif";
  const [uniId, setUniId] = useState(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash.startsWith("university/")) setUniId(hash.split("/")[1]);
  }, []);

  const uni = uniId ? universities.find((u) => u.id === uniId) : null;
  const isPublic = uni ? uni.type.en.toLowerCase().includes("public") : false;

  const openWhatsApp = (message) =>
    window.open(`https://wa.me/60199563789?text=${encodeURIComponent(message)}`);

  if (!uni) {
    return (
      <div style={{ minHeight: "100vh", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "48px 24px" }}>
          <div style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "1.5rem", fontWeight: 700, marginBottom: 12 }}>
            {isAr ? "الجامعة غير موجودة" : "University Not Found"}
          </div>
          <p style={{ fontFamily: bodyFont, color: "#64748b", fontSize: "0.9rem", marginBottom: 28 }}>
            {isAr ? `المعرف: ${uniId}` : `ID: ${uniId}`}
          </p>
          <button
            onClick={() => {
              window.location.hash = "#universities";
            }}
            style={{ fontFamily: bodyFont, background: "#0a1628", color: "#fff", padding: "12px 28px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: "0.9rem", fontWeight: 600 }}
          >
            {isAr ? "العودة للجامعات" : "Back to Universities"}
          </button>
        </div>
      </div>
    );
  }

  const name = uni.name[isAr ? "ar" : "en"];
  const shortName = uni.shortName[isAr ? "ar" : "en"];
  const location = uni.location[isAr ? "ar" : "en"];
  const description = uni.description[isAr ? "ar" : "en"];
  const type = uni.type[isAr ? "ar" : "en"];

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .udp-hero { padding: clamp(56px,10vw,88px) 0 clamp(44px,8vw,64px) !important; }
          .udp-hero-grid { grid-template-columns: 1fr !important; }
          .udp-hero-logo { display: none !important; }
          .udp-pills { flex-wrap: wrap !important; }
          .udp-body { padding: 32px 0 64px !important; }
          .udp-main-grid { grid-template-columns: 1fr !important; }
          .udp-card { padding: 24px !important; }
          .udp-programs { grid-template-columns: 1fr !important; }
          .udp-highlights { grid-template-columns: 1fr !important; }
          .udp-cta { padding: 36px 24px !important; }
        }
      `}</style>
      <div style={{ minHeight: "100vh", background: "#ffffff" }}>
        <div className="udp-hero" style={{ background: "#0a1628", padding: "clamp(56px,10vw,88px) 0 clamp(44px,8vw,72px)", position: "relative", overflow: "hidden" }}>
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
              top: -100,
              right: -100,
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${isPublic ? "rgba(29,78,216,0.14)" : "rgba(220,38,38,0.12)"} 0%, transparent 65%)`,
              pointerEvents: "none",
            }}
          />
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16" style={{ position: "relative", zIndex: 1 }}>
            <button
              onClick={() => {
                window.location.hash = "#universities";
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
                padding: "9px 18px",
                cursor: "pointer",
                fontFamily: bodyFont,
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.85rem",
                fontWeight: 500,
                marginBottom: 36,
                transition: "background .15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
            >
              <ArrowLeft style={{ width: 15, height: 15 }} />
              {isAr ? "العودة للجامعات" : "Back to Universities"}
            </button>

            <div className="udp-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "48px", alignItems: "center" }}>
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: isPublic ? "rgba(29,78,216,0.18)" : "rgba(220,38,38,0.18)",
                    border: `1px solid ${isPublic ? "rgba(29,78,216,0.35)" : "rgba(220,38,38,0.35)"}`,
                    borderRadius: 100,
                    padding: "5px 14px",
                    marginBottom: 20,
                  }}
                >
                  <span style={{ fontFamily: bodyFont, color: isPublic ? "#93c5fd" : "#fca5a5", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {type}
                  </span>
                </div>
                <h1
                  style={{
                    fontFamily: headingFont,
                    color: "#fff",
                    fontSize: "clamp(1.6rem,3.5vw,2.8rem)",
                    fontWeight: isAr ? 800 : 700,
                    lineHeight: 1.1,
                    letterSpacing: isAr ? "-0.01em" : "-0.02em",
                    marginBottom: 10,
                  }}
                >
                  {name}
                </h1>
                <div style={{ fontFamily: headingFont, color: "#dc2626", fontSize: "clamp(1.1rem,2vw,1.5rem)", fontWeight: 700, marginBottom: 28, letterSpacing: "0.04em" }}>
                  {shortName}
                </div>
                <div className="udp-pills" style={{ display: "flex", flexWrap: "nowrap", gap: 12 }}>
                  {[
                    { Icon: MapPin, val: location, color: "#94a3b8" },
                    { Icon: Star, val: uni.ranking, color: "#fbbf24" },
                    { Icon: Calendar, val: `${isAr ? "تأسست" : "Est."} ${uni.established}`, color: "#6ee7b7" },
                    { Icon: Users, val: uni.students, color: "#93c5fd" },
                  ].map(({ Icon, val, color }, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "7px 14px", flexShrink: 0 }}>
                      <Icon style={{ width: 13, height: 13, color, flexShrink: 0 }} />
                      <span style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.65)", fontSize: "0.78rem", whiteSpace: "nowrap" }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="udp-hero-logo"
                style={{ width: 168, height: 168, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: 16 }}
              >
                <img
                  src={uni.logo}
                  alt={shortName}
                  style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 8 }}
                  onError={(e) => {
                    e.currentTarget.src = "/image/universiti bg.jpg";
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="udp-body" style={{ padding: "64px 0 96px" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="udp-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 28, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div className="udp-card" style={{ background: "#f8fafc", borderRadius: 20, padding: "36px 36px", border: "1px solid #e8edf2" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <BookOpen style={{ width: 18, height: 18, color: "#1d4ed8" }} />
                    </div>
                    <h2 style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "1.05rem", fontWeight: 700 }}>
                      {isAr ? "عن الجامعة" : "About the University"}
                    </h2>
                  </div>
                  <p style={{ fontFamily: bodyFont, color: "#374151", fontSize: "0.95rem", lineHeight: 1.85, margin: 0 }}>{description}</p>
                </div>

                <div className="udp-card" style={{ background: "#f8fafc", borderRadius: 20, padding: "36px 36px", border: "1px solid #e8edf2" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <BookOpen style={{ width: 18, height: 18, color: "#059669" }} />
                    </div>
                    <h2 style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "1.05rem", fontWeight: 700 }}>
                      {isAr ? "التخصصات المتاحة" : "Available Programs"}
                    </h2>
                  </div>
                  <div className="udp-programs" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                    {uni.programs.map((p, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: "#ffffff", borderRadius: 12, border: "1px solid #e2e8f0" }}>
                        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#059669", flexShrink: 0 }} />
                        <span style={{ fontFamily: bodyFont, color: "#374151", fontSize: "0.87rem", fontWeight: 500 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="udp-card" style={{ background: "#f8fafc", borderRadius: 20, padding: "36px 36px", border: "1px solid #e8edf2" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "#fffbeb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Award style={{ width: 18, height: 18, color: "#d97706" }} />
                    </div>
                    <h2 style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "1.05rem", fontWeight: 700 }}>
                      {isAr ? "المميزات والإنجازات" : "Highlights & Achievements"}
                    </h2>
                  </div>
                  <div className="udp-highlights" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                    {uni.highlights.map((h, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "14px 16px", background: "#fffbeb", borderRadius: 12, border: "1px solid #fde68a" }}>
                        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#d97706", flexShrink: 0, marginTop: 5 }} />
                        <span style={{ fontFamily: bodyFont, color: "#374151", fontSize: "0.87rem", lineHeight: 1.55 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="udp-card" style={{ background: "#0a1628", borderRadius: 20, padding: "32px 28px", position: "relative", overflow: "hidden" }}>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      opacity: 0.04,
                      backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <h3 style={{ fontFamily: headingFont, color: "#fff", fontSize: "0.95rem", fontWeight: 700, marginBottom: 20, position: "relative", zIndex: 1 }}>
                    {isAr ? "معلومات سريعة" : "Quick Info"}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative", zIndex: 1 }}>
                    {[
                      { Icon: MapPin, label: isAr ? "الموقع" : "Location", val: location },
                      { Icon: Star, label: isAr ? "التصنيف" : "Ranking", val: uni.ranking },
                      { Icon: Calendar, label: isAr ? "تأسست" : "Established", val: uni.established },
                      { Icon: Users, label: isAr ? "الطلاب" : "Students", val: uni.students },
                      { Icon: Globe, label: isAr ? "الموقع الإلكتروني" : "Website", val: null, link: uni.website },
                    ].map(({ Icon, label, val, link }, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, paddingBottom: i < 4 ? 14 : 0, borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                        <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon style={{ width: 14, height: 14, color: "rgba(255,255,255,0.5)" }} />
                        </div>
                        <div>
                          <div style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.35)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
                            {label}
                          </div>
                          {link ? (
                            <a href={link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: bodyFont, color: "#93c5fd", fontSize: "0.82rem", wordBreak: "break-all" }}>
                              {link}
                            </a>
                          ) : (
                            <div style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.75)", fontSize: "0.85rem" }}>{val}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="udp-card" style={{ background: "#f8fafc", borderRadius: 20, padding: "28px", border: "1px solid #e8edf2" }}>
                  <h3 style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "0.95rem", fontWeight: 700, marginBottom: 8 }}>
                    {isAr ? "مهتم بهذه الجامعة؟" : "Interested in this university?"}
                  </h3>
                  <p style={{ fontFamily: bodyFont, color: "#64748b", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: 18 }}>
                    {isAr ? "تواصل معنا مباشرة عبر واتساب ونساعدك في خطوات التقديم." : "Message us on WhatsApp and we will walk you through the application."}
                  </p>
                  <button
                    onClick={() =>
                      openWhatsApp(isAr ? `مرحباً، أنا مهتم بالدراسة في ${name} وأحتاج مساعدتكم` : `Hello, I'm interested in studying at ${name} and need your help`)
                    }
                    style={{ width: "100%", fontFamily: bodyFont, background: "#25d366", color: "#fff", fontSize: "0.88rem", fontWeight: 700, padding: "13px 20px", borderRadius: 12, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(37,211,102,0.3)" }}
                  >
                    {isAr ? "تواصل عبر واتساب" : "Message on WhatsApp"}
                  </button>
                </div>
              </div>
            </div>

            <div className="udp-cta" style={{ marginTop: 48, background: "#0a1628", borderRadius: 24, padding: "56px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
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
                {isAr ? "هل تريد التقديم في هذه الجامعة؟" : "Ready to apply to this university?"}
              </h3>
              <p style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.5)", fontSize: "1rem", marginBottom: 28, position: "relative", zIndex: 1 }}>
                {isAr ? "فريقنا يساعدك في كل خطوة — من القبول حتى الفيزا." : "Our team guides you every step — from admission to visa."}
              </p>
              <button
                onClick={() => openWhatsApp(isAr ? `مرحباً، أريد التقديم في ${name} وأحتاج مساعدتكم` : `Hello, I want to apply to ${name} and need your help`)}
                style={{ fontFamily: bodyFont, background: "#dc2626", color: "#fff", fontSize: "0.95rem", fontWeight: 700, padding: "14px 36px", borderRadius: 12, border: "none", cursor: "pointer", position: "relative", zIndex: 1, boxShadow: "0 4px 20px rgba(220,38,38,0.4)" }}
              >
                {isAr ? "احصل على استشارة مجانية" : "Get Free Consultation"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
