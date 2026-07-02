import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function PromoBanner() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const fontFamily = isAr ? "'Cairo',sans-serif" : "'Poppins',sans-serif";
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const openWhatsApp = () => {
    const message = isAr ? "مرحباً، أريد استشارة مجانية" : "Hello, I want a free consultation";
    window.open(`https://wa.me/60199563789?text=${encodeURIComponent(message)}`);
  };

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .banner-inner { flex-direction: column !important; gap: 6px !important; padding: 10px 40px 10px 16px !important; }
          .banner-text { font-size: 0.78rem !important; }
          .banner-btn { font-size: 0.75rem !important; padding: 5px 12px !important; }
        }
      `}</style>
      <div style={{ background: "#dc2626", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="banner-inner"
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "10px 48px 10px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#fde68a",
              display: "inline-block",
              flexShrink: 0,
              animation: "pulse 1.5s infinite",
            }}
          />
          <p
            className="banner-text"
            style={{
              fontFamily,
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 600,
              margin: 0,
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            {isAr
              ? "خدماتنا مجانية بالكامل — احصل على استشارتك المجانية الآن"
              : "Our services are completely FREE — get your free consultation now"}
          </p>
          <button
            className="banner-btn"
            onClick={openWhatsApp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily,
              background: "rgba(255,255,255,0.18)",
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: 700,
              padding: "6px 14px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.35)",
              cursor: "pointer",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            {isAr ? "ابدأ الآن" : "Start Now"}
            <ArrowRight style={{ width: 13, height: 13 }} />
          </button>
        </div>
        <button
          onClick={() => setVisible(false)}
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "rgba(255,255,255,0.7)",
            padding: 6,
            lineHeight: 0,
          }}
        >
          <X style={{ width: 15, height: 15 }} />
        </button>
      </div>
    </>
  );
}
