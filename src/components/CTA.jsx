import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function CTA() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const bodyFont = isAr ? "'Cairo',sans-serif" : "'Poppins',sans-serif";
  const headingFont = isAr ? "'Cairo',sans-serif" : "'Playfair Display',serif";

  const openWhatsApp = (message) =>
    window.open(`https://wa.me/60199563789?text=${encodeURIComponent(message)}`);

  const contactOptions = [
    {
      Icon: MessageCircle,
      accent: "#059669",
      bg: "#ecfdf5",
      en: "WhatsApp",
      ar: "واتساب",
      subEn: "Message or call us",
      subAr: "راسلنا أو اتصل بنا",
      value: "+60 19 956 3789",
      ltrValue: true,
      action: (ar) =>
        openWhatsApp(
          ar ? "مرحباً، أريد الاستفسار عن الدراسة في ماليزيا" : "Hello, I would like to inquire about studying in Malaysia",
        ),
    },
    {
      Icon: Mail,
      accent: "#1d4ed8",
      bg: "#eff6ff",
      en: "Email Us",
      ar: "راسلنا",
      subEn: "We respond within 24h",
      subAr: "نرد خلال 24 ساعة",
      value: "info@al-ghufran.com",
      action: () => window.open("mailto:info@al-ghufran.com"),
    },
  ];

  return (
    <section id="cta" style={{ background: "#f8fafc", padding: "clamp(56px,10vw,120px) 0" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        <div
          style={{
            background: "#0a1628",
            borderRadius: 28,
            padding: "clamp(48px,6vw,80px)",
            position: "relative",
            overflow: "hidden",
            marginBottom: 80,
          }}
        >
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
              width: 320,
              height: 320,
              borderRadius: "50%",
              pointerEvents: "none",
              background: "radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 65%)",
            }}
          />
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <div style={{ marginBottom: 28 }}>
              <span style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", letterSpacing: "0.04em" }}>
                {isAr ? "خدماتنا مجانية للطلاب" : "Free for students"}
              </span>
            </div>
            <h2
              style={{
                fontFamily: headingFont,
                color: "#ffffff",
                fontSize: "clamp(1.8rem,4vw,3rem)",
                fontWeight: isAr ? 800 : 700,
                lineHeight: 1.1,
                letterSpacing: isAr ? "-0.01em" : "-0.025em",
                marginBottom: 20,
              }}
            >
              {t("ctaTitle")}
            </h2>
            <p style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 560, margin: "0 auto 40px" }}>
              {t("ctaSubtitle")}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              <button
                onClick={() =>
                  openWhatsApp(
                    isAr ? "مرحباً، أريد البدء في رحلتي التعليمية في ماليزيا" : "Hello, I want to start my educational journey in Malaysia",
                  )
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: bodyFont,
                  background: "#dc2626",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 600,
                  padding: "14px 32px",
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity .15s, transform .15s",
                  boxShadow: "0 4px 24px rgba(220,38,38,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {t("ctaButton")}
                <ArrowRight style={{ width: 16, height: 16 }} />
              </button>
              <button
                onClick={() =>
                  openWhatsApp(isAr ? "مرحباً، أريد حجز استشارة مجانية" : "Hello, I would like to book a free consultation")
                }
                style={{
                  fontFamily: bodyFont,
                  background: "rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  padding: "14px 32px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.15)",
                  cursor: "pointer",
                  transition: "all .15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                }}
              >
                {t("bookFreeConsultation")}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactOptions.map((opt, i) => (
            <button
              key={i}
              style={{
                textAlign: isAr ? "right" : "left",
                width: "100%",
                padding: "28px",
                borderRadius: 20,
                background: "#fff",
                border: "1px solid #e8edf2",
                cursor: "pointer",
                transition: "all .2s",
              }}
              onClick={() => opt.action(isAr)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(10,22,40,0.09)";
                e.currentTarget.style.borderColor = opt.accent + "40";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#e8edf2";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: opt.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <opt.Icon style={{ width: 22, height: 22, color: opt.accent }} />
              </div>
              <div style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "0.95rem", fontWeight: 700, marginBottom: 4 }}>
                {isAr ? opt.ar : opt.en}
              </div>
              <div style={{ fontFamily: bodyFont, color: "#94a3b8", fontSize: "0.8rem", marginBottom: 10 }}>
                {isAr ? opt.subAr : opt.subEn}
              </div>
              <div
                dir={opt.ltrValue ? "ltr" : undefined}
                style={{ fontFamily: bodyFont, color: opt.accent, fontSize: "0.88rem", fontWeight: 600, textAlign: isAr ? "right" : "left" }}
              >
                {opt.value}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
