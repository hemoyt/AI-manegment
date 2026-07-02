import { Calendar, GraduationCap, MapPin, Star, Users } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { universities } from "../data/universities";

export default function UniversitiesPage() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const bodyFont = isAr ? "'Cairo',sans-serif" : "'Poppins',sans-serif";
  const headingFont = isAr ? "'Cairo',sans-serif" : "'Playfair Display',serif";

  const publicCount = universities.filter((u) => u.type?.en === "Public University" || u.type?.ar === "جامعة حكومية").length;
  const privateCount = universities.filter((u) => u.type?.en === "Private University" || u.type?.ar === "جامعة خاصة").length;

  const openWhatsApp = (message) =>
    window.open(`https://wa.me/60199563789?text=${encodeURIComponent(message)}`);

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingBottom: 100 }}>
      <div style={{ background: "#0a1628", padding: "clamp(56px,10vw,88px) 0 clamp(44px,8vw,72px)", position: "relative", overflow: "hidden" }}>
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
              {isAr ? "الجامعات" : "Universities"}
            </span>
            <div style={{ height: 1, width: 32, background: "#dc2626" }} />
          </div>
          <h1
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
              <>الجامعات <span style={{ color: "#dc2626" }}>الماليزية</span></>
            ) : (
              <>Malaysian <span style={{ color: "#dc2626" }}>Universities</span></>
            )}
          </h1>
          <p style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 500, margin: "0 auto 52px" }}>
            {isAr
              ? "جامعات معترف بها دولياً — شراكاتنا الرسمية تفتح لك أبوابها مباشرة."
              : "Internationally recognized universities — our official partnerships give you direct access."}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "center" }}>
            {[
              { n: universities.length, en: "Universities", ar: "جامعة متاحة" },
              { n: publicCount, en: "Public", ar: "جامعة حكومية" },
              { n: privateCount, en: "Private", ar: "جامعة خاصة" },
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

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16" style={{ paddingTop: 60 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni) => (
            <div
              key={uni.id}
              style={{ background: "#fff", borderRadius: 20, border: "1px solid #e8edf2", overflow: "hidden", cursor: "pointer", transition: "all .2s" }}
              onClick={() => {
                window.location.hash = `#university/${uni.id}`;
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 20px 48px rgba(10,22,40,0.10)";
                el.style.borderColor = "#dc262640";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "#e8edf2";
              }}
            >
              <div style={{ width: "100%", height: 160, overflow: "hidden", position: "relative", background: "#f8fafc" }}>
                <img
                  src={uni.logo}
                  alt={uni.name[isAr ? "ar" : "en"]}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .3s" }}
                  onError={(e) => {
                    e.currentTarget.src = "/image/universiti bg.jpg";
                  }}
                />
                <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(255,255,255,0.92)", borderRadius: 100, padding: "4px 12px" }}>
                  <span style={{ fontFamily: bodyFont, fontSize: "0.7rem", fontWeight: 600, color: "#475569" }}>
                    {uni.type[isAr ? "ar" : "en"]}
                  </span>
                </div>
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontFamily: headingFont, color: "#0f172a", fontSize: "1rem", fontWeight: 700, marginBottom: 4, lineHeight: 1.3 }}>
                  {uni.name[isAr ? "ar" : "en"]}
                </h3>
                <p style={{ fontFamily: bodyFont, color: "#dc2626", fontSize: "0.78rem", fontWeight: 600, marginBottom: 10 }}>
                  {uni.shortName[isAr ? "ar" : "en"]}
                </p>
                <p
                  style={{
                    fontFamily: bodyFont,
                    color: "#64748b",
                    fontSize: "0.83rem",
                    lineHeight: 1.65,
                    marginBottom: 16,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {uni.description[isAr ? "ar" : "en"]}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
                  {[
                    { Icon: MapPin, val: uni.location[isAr ? "ar" : "en"], color: "#1d4ed8" },
                    { Icon: Star, val: uni.ranking, color: "#f59e0b" },
                    { Icon: Users, val: uni.students, color: "#059669" },
                    { Icon: Calendar, val: uni.established, color: "#7c3aed" },
                  ].map(({ Icon, val, color }, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Icon style={{ width: 13, height: 13, color, flexShrink: 0 }} />
                      <span style={{ fontFamily: bodyFont, color: "#64748b", fontSize: "0.75rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {uni.highlights.slice(0, 3).map((h, i) => (
                    <span
                      key={i}
                      style={{ fontFamily: bodyFont, fontSize: "0.68rem", color: "#475569", background: "#f1f5f9", padding: "3px 9px", borderRadius: 100, border: "1px solid #e2e8f0" }}
                    >
                      {h}
                    </span>
                  ))}
                  {uni.highlights.length > 3 && (
                    <span style={{ fontFamily: bodyFont, fontSize: "0.68rem", color: "#dc2626", background: "#fef2f2", padding: "3px 9px", borderRadius: 100 }}>
                      +{uni.highlights.length - 3}
                    </span>
                  )}
                </div>
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: 12,
                    background: "#0a1628",
                    color: "#fff",
                    fontFamily: bodyFont,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    transition: "background .15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#dc2626")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0a1628")}
                >
                  <GraduationCap style={{ width: 16, height: 16 }} />
                  {isAr ? "عرض التفاصيل" : "View Details"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 64, background: "#fff", borderRadius: 24, padding: "48px 40px", textAlign: "center", border: "1px solid #e8edf2" }}>
          <h3 style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", fontWeight: 700, marginBottom: 12 }}>
            {isAr ? "لم تجد الجامعة المناسبة؟" : "Can't find the right university?"}
          </h3>
          <p style={{ fontFamily: bodyFont, color: "#64748b", fontSize: "0.95rem", marginBottom: 24 }}>
            {isAr ? "تواصل معنا للحصول على استشارة مجانية" : "Contact us for a free consultation"}
          </p>
          <button
            onClick={() =>
              openWhatsApp(isAr ? "مرحباً، أحتاج مساعدتكم في اختيار الجامعة المناسبة" : "Hello, I need your help choosing the right university")
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
              boxShadow: "0 4px 20px rgba(220,38,38,0.3)",
            }}
          >
            {isAr ? "احصل على استشارة مجانية" : "Get Free Consultation"}
          </button>
        </div>
      </div>
    </div>
  );
}
