import { Fragment } from "react";
import { Award, BookOpen, Globe, Users } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const pillars = [
  {
    Icon: Award,
    accent: "#dc2626",
    bg: "#fef2f2",
    titleEn: "Seven years in",
    titleAr: "سبع سنوات وأكثر",
    descEn:
      "We have been doing this since 2017. Long enough to have seen what can go wrong — and how to prevent it.",
    descAr: "نعمل منذ 2017. طول الفترة يكفي لنعرف ما يمكن أن يحدث خطأ — وكيف نتجنبه.",
  },
  {
    Icon: Users,
    accent: "#1d4ed8",
    bg: "#eff6ff",
    titleEn: "Arab-led team",
    titleAr: "فريق عربي",
    descEn: "Our team navigated this process themselves. Cultural fit is not a phrase for us — it is a lived reality.",
    descAr: "فريقنا مرّ بهذه التجربة بنفسه. الانتماء الثقافي ليس شعاراً عندنا — هو واقع معاش.",
  },
  {
    Icon: Globe,
    accent: "#059669",
    bg: "#ecfdf5",
    titleEn: "17 partner universities",
    titleAr: "١٧ جامعة شريكة",
    descEn:
      "Real official agreements — not directories. We have direct contacts at each university, not just a name on a list.",
    descAr: "اتفاقيات رسمية حقيقية — لا قوائم فقط. لدينا جهة اتصال مباشرة في كل جامعة.",
  },
  {
    Icon: BookOpen,
    accent: "#7c3aed",
    bg: "#f5f3ff",
    titleEn: "We stay involved",
    titleAr: "نبقى على تواصل",
    descEn: "Admission is not the finish line for us. Problems happen after you arrive — we stay reachable.",
    descAr: "القبول ليس نهاية المشوار. المشاكل تحدث بعد الوصول — ونحن لا نختفي.",
  },
];

const stats = [
  { num: "2017", en: "Founded", ar: "تأسيس" },
  { num: "100+", en: "Students Placed", ar: "طالب ملتحق" },
  { num: "17+", en: "Partner Universities", ar: "جامعة شريكة" },
  { num: "20+", en: "Countries", ar: "دولة" },
];

export default function About() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const bodyFont = isAr ? "'Cairo',sans-serif" : "'Poppins',sans-serif";
  const headingFont = isAr ? "'Cairo',sans-serif" : "'Playfair Display',serif";

  return (
    <Fragment>
      <style>{`
        @media (max-width: 768px) {
          #about { padding: clamp(56px,12vw,120px) 0 0 !important; }
          .about-heading-grid { gap: 2rem !important; margin-bottom: 2.5rem !important; }
          .about-numbers { margin-bottom: 2rem !important; }
          .about-stat-1 { border-right: none !important; }
          .about-numbers > div { padding: 28px 12px !important; }
          .about-pillars { padding-bottom: 2.5rem !important; }
        }
      `}</style>
      <section id="about" style={{ background: "#ffffff", padding: "clamp(56px,10vw,120px) 0 0" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="about-heading-grid grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
            <div>
              <h2
                style={{
                  fontFamily: headingFont,
                  color: "#0a1628",
                  fontSize: "clamp(2.6rem,6vw,4.2rem)",
                  fontWeight: isAr ? 800 : 700,
                  lineHeight: 1.1,
                  letterSpacing: isAr ? "-0.01em" : "-0.02em",
                  marginBottom: "1.5rem",
                }}
              >
                {isAr ? "من نحن" : "About Us"}
              </h2>
            </div>
            <div>
              <p style={{ fontFamily: bodyFont, color: "#64748b", fontSize: "1.1rem", lineHeight: 1.85 }}>
                {isAr
                  ? "بدأنا عام 2017 بملاحظة واحدة: الطلاب الذين يواجهون نظاماً جامعياً أجنبياً يحتاجون شخصاً صادقاً في صفّهم. منذ ذلك اليوم لم يدفع طالب واحد لنا رسوماً."
                  : "We started in 2017 with one observation: students navigating a foreign university system need someone honest in their corner. Since that day, not a single student has paid us a fee."}
              </p>
            </div>
          </div>

          <div
            className="about-numbers grid grid-cols-2 md:grid-cols-4 mb-16 md:mb-28"
            style={{ borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className={i === 1 ? "about-stat-1" : ""}
                style={{ padding: "48px 24px", textAlign: "center", borderRight: i < 3 ? "1px solid #f1f5f9" : "none" }}
              >
                <div
                  style={{
                    fontFamily: headingFont,
                    color: "#0a1628",
                    fontSize: "clamp(2.4rem,4vw,3.4rem)",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: bodyFont,
                    color: "#94a3b8",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                  }}
                >
                  {isAr ? s.ar : s.en}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-pillars max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-12 md:pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map(({ Icon, accent, bg, titleEn, titleAr, descEn, descAr }, i) => (
              <div
                key={i}
                style={{
                  padding: "36px 28px",
                  borderRadius: 20,
                  background: bg,
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <Icon style={{ position: "absolute", bottom: -12, right: -12, width: 80, height: 80, color: accent, opacity: 0.07 }} />
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    boxShadow: `0 4px 16px ${accent}22`,
                  }}
                >
                  <Icon style={{ width: 22, height: 22, color: accent }} />
                </div>
                <h3 style={{ fontFamily: bodyFont, color: "#0a1628", fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  {isAr ? titleAr : titleEn}
                </h3>
                <p style={{ fontFamily: bodyFont, color: "#475569", fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {isAr ? descAr : descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
