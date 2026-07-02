import { useLanguage } from "../i18n/LanguageContext";

const galleryImages = [
  "5.webp", "6.webp", "7.webp", "8.webp", "9.webp",
  "10.webp", "11.webp", "12.webp", "13.webp", "14.webp",
  "15.webp", "16.webp", "17.webp", "18.webp", "19.webp",
];

const CARD_WIDTH = 200;
const CARD_GAP = 16;

export default function PartnerLogos() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const bodyFont = isAr ? "'Cairo',sans-serif" : "'Poppins',sans-serif";
  const headingFont = isAr ? "'Cairo',sans-serif" : "'Playfair Display',serif";

  const renderCards = (prefix) =>
    galleryImages.map((img, i) => (
      <div
        key={`${prefix}-${i}`}
        style={{
          flexShrink: 0,
          width: CARD_WIDTH,
          height: 110,
          marginRight: CARD_GAP,
          borderRadius: 14,
          background: "#ffffff",
          border: "1.5px solid #e8edf2",
          boxShadow: "0 2px 10px rgba(10,22,40,0.06)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 14,
          boxSizing: "border-box",
        }}
      >
        <img
          src={`/image/${img}`}
          alt=""
          loading="eager"
          decoding="async"
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        />
      </div>
    ));

  return (
    <section style={{ background: "#ffffff", padding: "72px 0", overflow: "hidden", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 mb-10">
        <h2 style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: isAr ? 800 : 700, lineHeight: 1.2, margin: 0 }}>
          {isAr ? "جامعاتنا الشريكة" : "Partner Universities"}
        </h2>
      </div>

      <div style={{ position: "relative", direction: "ltr" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to right, #ffffff, transparent)" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to left, #ffffff, transparent)" }} />
        <div style={{ display: "flex", direction: "ltr", width: "max-content", animation: "uni-scroll 38s linear infinite", willChange: "transform" }}>
          {renderCards("a")}
          {renderCards("b")}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 mt-8">
        <p style={{ fontFamily: bodyFont, color: "#94a3b8", fontSize: "0.78rem", margin: 0 }}>
          {isAr ? "١٧+ جامعة ماليزية مرموقة — شراكات رسمية مضمونة" : "17+ top Malaysian universities — guaranteed official partnerships"}
        </p>
      </div>
    </section>
  );
}
