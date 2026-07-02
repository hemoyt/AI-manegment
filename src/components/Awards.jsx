import { BadgeCheck, Building2, Handshake, Users } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const highlights = [
  {
    Icon: Handshake,
    accent: "#dc2626",
    bg: "#fef2f2",
    en: "Official partner agent with 17+ Malaysian universities",
    ar: "وكيل شريك رسمي لأكثر من ١٧ جامعة ماليزية",
  },
  {
    Icon: Building2,
    accent: "#1d4ed8",
    bg: "#eff6ff",
    en: "Fully registered consultancy in Malaysia, operating since 2017",
    ar: "مكتب استشارات مرخّص بالكامل في ماليزيا، يعمل منذ ٢٠١٧",
  },
  {
    Icon: Users,
    accent: "#059669",
    bg: "#ecfdf5",
    en: "Arab-led team based at UTM, Johor Bahru",
    ar: "فريق عربي مقره جامعة UTM في جوهور باهرو",
  },
  {
    Icon: BadgeCheck,
    accent: "#7c3aed",
    bg: "#f5f3ff",
    en: "Students from more than 20 countries placed in Malaysian universities",
    ar: "طلاب من أكثر من ٢٠ دولة التحقوا بالجامعات الماليزية عن طريقنا",
  },
];

export default function Awards() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const bodyFont = isAr ? "'Cairo',sans-serif" : "'Poppins',sans-serif";
  const headingFont = isAr ? "'Cairo',sans-serif" : "'Playfair Display',serif";

  return (
    <section id="awards" style={{ background: "#ffffff", padding: "clamp(56px,10vw,120px) 0" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <h2
            style={{
              fontFamily: headingFont,
              color: "#0a1628",
              fontSize: "clamp(2.2rem,5vw,3.4rem)",
              fontWeight: isAr ? 800 : 700,
              lineHeight: 1.1,
              letterSpacing: isAr ? "-0.01em" : "-0.025em",
              margin: 0,
            }}
          >
            {t("awardsTitle")}
          </h2>
          <p style={{ fontFamily: bodyFont, color: "#64748b", fontSize: "1.05rem", lineHeight: 1.8, margin: 0 }}>
            {isAr
              ? "شراكات رسمية وتسجيل قانوني كامل — هذا ما يميز مكتبنا منذ ٢٠١٧."
              : "Official partnerships and full legal registration — the foundation of our office since 2017."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {highlights.map(({ Icon, accent, bg, en, ar }, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: "28px 32px",
                borderRadius: 20,
                background: bg,
                border: `1px solid ${accent}18`,
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 16px 40px ${accent}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 4px 16px ${accent}22`,
                }}
              >
                <Icon style={{ width: 24, height: 24, color: accent }} />
              </div>
              <p style={{ fontFamily: bodyFont, color: "#1e293b", fontSize: "0.98rem", fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                {isAr ? ar : en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
