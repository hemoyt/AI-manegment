import { Fragment } from "react";
import { ArrowRight, Handshake } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const headingFont = isAr ? "'Cairo',sans-serif" : "'Playfair Display',serif";
  const bodyFont = isAr ? "'Cairo',sans-serif" : "'Poppins',sans-serif";

  const openWhatsApp = (message) =>
    window.open(`https://wa.me/60199563789?text=${encodeURIComponent(message)}`);

  return (
    <Fragment>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-text-1 { animation: fadeUp .7s ease forwards; opacity: 0; }
        .hero-text-2 { animation: fadeUp .7s ease .15s forwards; opacity: 0; }
        .hero-text-3 { animation: fadeUp .7s ease .3s forwards; opacity: 0; }
        .hero-text-4 { animation: fadeUp .7s ease .45s forwards; opacity: 0; }
        .hero-photo  { animation: fadeUp .7s ease .3s forwards; opacity: 0; }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 48px 20px 56px !important;
            gap: 36px !important;
          }
          .hero-photo { max-height: 300px; }
        }
      `}</style>

      <section
        id="home"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            alignItems: "center",
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            padding: "72px 48px 88px",
            gap: 56,
          }}
        >
          <div>
            <div className="hero-text-1" style={{ marginBottom: 28 }}>
              <span
                style={{
                  display: "inline-block",
                  fontFamily: bodyFont,
                  color: "#dc2626",
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: 100,
                  padding: "6px 16px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                }}
              >
                {isAr ? "مكتب الغفران للاستشارات التعليمية · منذ ٢٠١٧" : "Al-Ghufran Educational Consultancy · Est. 2017"}
              </span>
            </div>
            <h1
              className="hero-text-2"
              style={{
                fontFamily: headingFont,
                color: "#0a1628",
                margin: "0 0 24px",
                fontSize: isAr ? "clamp(2.2rem,5vw,4rem)" : "clamp(2.4rem,5vw,4.4rem)",
                fontWeight: isAr ? 800 : 700,
                lineHeight: isAr ? 1.25 : 1.1,
                letterSpacing: isAr ? "-0.01em" : "-0.02em",
              }}
            >
              {isAr ? (
                <Fragment>
                  بوابتك إلى <span style={{ color: "#dc2626" }}>الجامعات الماليزية</span>
                </Fragment>
              ) : (
                <Fragment>
                  Your Gateway to <span style={{ color: "#dc2626" }}>Malaysian Universities</span>
                </Fragment>
              )}
            </h1>
            <p
              className="hero-text-3"
              style={{
                fontFamily: bodyFont,
                color: "#475569",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                maxWidth: 480,
                margin: "0 0 40px",
              }}
            >
              {isAr
                ? "نتولى القبول والفيزا والسكن والاستقبال في المطار — وخدماتنا مجانية للطلاب."
                : "We handle admission, visa, housing, and airport pickup — free of charge for students."}
            </p>
            <div className="hero-text-4" style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <button
                onClick={() =>
                  openWhatsApp(
                    isAr ? "مرحباً، أريد التقديم للدراسة في ماليزيا" : "Hello, I want to apply for studies in Malaysia",
                  )
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: bodyFont,
                  fontWeight: 700,
                  fontSize: "1rem",
                  background: "#dc2626",
                  color: "#fff",
                  padding: "15px 34px",
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 8px 28px rgba(220,38,38,0.28)",
                  transition: "transform .15s, box-shadow .15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 36px rgba(220,38,38,0.36)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(220,38,38,0.28)";
                }}
              >
                {isAr ? "قدم الآن" : "Apply Now"}
                <ArrowRight style={{ width: 17, height: 17 }} />
              </button>
              <button
                onClick={() =>
                  openWhatsApp(
                    isAr
                      ? "مرحباً، أمثل وكالة تعليمية وأرغب في بحث شراكة معكم"
                      : "Hello, I represent an education agency and would like to discuss a partnership",
                  )
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: bodyFont,
                  fontWeight: 600,
                  fontSize: "1rem",
                  background: "#ffffff",
                  color: "#0a1628",
                  padding: "15px 34px",
                  borderRadius: 12,
                  border: "1.5px solid #cbd5e1",
                  cursor: "pointer",
                  transition: "border-color .15s, background .15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0a1628";
                  e.currentTarget.style.background = "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#cbd5e1";
                  e.currentTarget.style.background = "#ffffff";
                }}
              >
                <Handshake style={{ width: 17, height: 17, color: "#dc2626" }} />
                {isAr ? "كن شريكاً لنا" : "Partner With Us"}
              </button>
            </div>
          </div>

          <div className="hero-photo" style={{ position: "relative" }}>
            <img
              src="/image/home bg.jpg"
              alt={isAr ? "كوالالمبور، ماليزيا" : "Kuala Lumpur, Malaysia"}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: 440,
                objectFit: "cover",
                borderRadius: 24,
                boxShadow: "0 24px 64px rgba(10,22,40,0.18)",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 20,
                [isAr ? "right" : "left"]: 20,
                background: "rgba(255,255,255,0.94)",
                borderRadius: 14,
                padding: "12px 20px",
                boxShadow: "0 8px 24px rgba(10,22,40,0.14)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ fontFamily: headingFont, color: "#dc2626", fontSize: "1.4rem", fontWeight: 700, lineHeight: 1 }}>17+</span>
              <span style={{ fontFamily: bodyFont, color: "#334155", fontSize: "0.82rem", fontWeight: 600 }}>
                {isAr ? "جامعة شريكة" : "Partner Universities"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
