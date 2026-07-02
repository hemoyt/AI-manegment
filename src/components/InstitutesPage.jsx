import { Globe, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { institutes } from "../data/institutes";

export default function InstitutesPage() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const bodyFont = isAr ? "'Cairo',sans-serif" : "'Poppins',sans-serif";
  const headingFont = isAr ? "'Cairo',sans-serif" : "'Playfair Display',serif";

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
              {isAr ? "معاهد اللغة" : "Language Institutes"}
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
              <>معاهد <span style={{ color: "#dc2626" }}>اللغة الإنجليزية</span></>
            ) : (
              <>English <span style={{ color: "#dc2626" }}>Language Institutes</span></>
            )}
          </h1>
          <p style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 480, margin: "0 auto 52px" }}>
            {isAr
              ? "معاهد معتمدة في ماليزيا لتطوير مستوى اللغة الإنجليزية قبل الالتحاق بالجامعة."
              : "Accredited institutes in Malaysia to develop your English level before starting university."}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "center" }}>
            {[
              { n: institutes.length, en: "Institutes", ar: "معهد متاح" },
              { n: "KL", en: "Based in KL", ar: "في كوالالمبور" },
              { n: "Free", en: "Enrollment help", ar: "مساعدة مجانية" },
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
          {institutes.map((inst) => (
            <div
              key={inst.id}
              style={{ background: "#fff", borderRadius: 20, border: "1px solid #e8edf2", overflow: "hidden", transition: "all .2s" }}
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
              <div style={{ width: "100%", height: 160, overflow: "hidden", background: "#f8fafc" }}>
                <img
                  src={inst.image || inst.logo}
                  alt={inst.name[isAr ? "ar" : "en"]}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.src = "/image/institutes bg.jpg";
                  }}
                />
              </div>
              <div style={{ padding: 24 }}>
                <div
                  style={{
                    display: "inline-block",
                    fontFamily: bodyFont,
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "#0891b2",
                    background: "#ecfeff",
                    padding: "3px 10px",
                    borderRadius: 100,
                    marginBottom: 12,
                  }}
                >
                  {isAr ? "معهد لغة" : "Language Institute"}
                </div>
                <h3 style={{ fontFamily: headingFont, color: "#0f172a", fontSize: "1rem", fontWeight: 700, marginBottom: 10, lineHeight: 1.3 }}>
                  {inst.name[isAr ? "ar" : "en"]}
                </h3>
                <p style={{ fontFamily: bodyFont, color: "#64748b", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: 14 }}>
                  {inst.description[isAr ? "ar" : "en"]}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                  <MapPin style={{ width: 13, height: 13, color: "#1d4ed8", flexShrink: 0 }} />
                  <span style={{ fontFamily: bodyFont, color: "#64748b", fontSize: "0.8rem" }}>{inst.location[isAr ? "ar" : "en"]}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {inst.programs.slice(0, 3).map((p, i) => (
                    <span
                      key={i}
                      style={{ fontFamily: bodyFont, fontSize: "0.68rem", color: "#475569", background: "#f1f5f9", padding: "3px 9px", borderRadius: 100, border: "1px solid #e2e8f0" }}
                    >
                      {p}
                    </span>
                  ))}
                  {inst.programs.length > 3 && (
                    <span style={{ fontFamily: bodyFont, fontSize: "0.68rem", color: "#0891b2", background: "#ecfeff", padding: "3px 9px", borderRadius: 100 }}>
                      +{inst.programs.length - 3}
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {inst.highlights.slice(0, 2).map((h, i) => (
                    <span
                      key={i}
                      style={{ fontFamily: bodyFont, fontSize: "0.68rem", color: "#059669", background: "#ecfdf5", padding: "3px 9px", borderRadius: 100, border: "1px solid #d1fae5" }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={() => {
                      const name = inst.name[isAr ? "ar" : "en"];
                      openWhatsApp(
                        isAr
                          ? `مرحباً، أنا مهتم بمعرفة المزيد عن ${name}. هل يمكنكم مساعدتي؟`
                          : `Hello, I'm interested in learning more about ${name}. Can you help me?`,
                      );
                    }}
                    style={{
                      flex: 1,
                      padding: "11px",
                      borderRadius: 12,
                      background: "#059669",
                      color: "#fff",
                      fontFamily: bodyFont,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                      transition: "opacity .15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {isAr ? "استفسر واتساب" : "WhatsApp"}
                  </button>
                  {inst.website && (
                    <a
                      href={inst.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        padding: "11px 16px",
                        borderRadius: 12,
                        background: "#f8fafc",
                        color: "#475569",
                        fontFamily: bodyFont,
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        border: "1px solid #e2e8f0",
                        textDecoration: "none",
                        transition: "all .15s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#fff";
                        e.currentTarget.style.borderColor = "#94a3b8";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#f8fafc";
                        e.currentTarget.style.borderColor = "#e2e8f0";
                      }}
                    >
                      <Globe style={{ width: 14, height: 14 }} />
                      {isAr ? "الموقع" : "Website"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 64, background: "#fff", borderRadius: 24, padding: "48px 40px", textAlign: "center", border: "1px solid #e8edf2" }}>
          <h3 style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", fontWeight: 700, marginBottom: 12 }}>
            {isAr ? "لم تجد المعهد المناسب؟" : "Can't find the right institute?"}
          </h3>
          <p style={{ fontFamily: bodyFont, color: "#64748b", fontSize: "0.95rem", marginBottom: 24 }}>
            {isAr ? "تواصل معنا للحصول على توجيه مجاني" : "Contact us for free guidance"}
          </p>
          <button
            onClick={() =>
              openWhatsApp(
                isAr ? "مرحباً، أحتاج مساعدتكم في اختيار معهد اللغة الإنجليزية المناسب" : "Hello, I need help choosing the right English language institute",
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
