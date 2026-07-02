import { Fragment } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function StarIcon({ size = 13, color = "#f59e0b" }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        background: color,
        flexShrink: 0,
        clipPath: "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
      }}
    />
  );
}

const testimonials = [
  {
    name: "أحمد محمد",
    country: "السعودية",
    major: "هندسة الحاسوب",
    initials: "أم",
    stars: 5,
    text: "ظننت إجراءات الفيزا ستأخذ شهوراً. خلصوا منها في ثلاثة أسابيع وأنا ما تحركت من البيت.",
  },
  {
    name: "فاطمة العلي",
    country: "الكويت",
    major: "الطب",
    initials: "فع",
    stars: 5,
    text: "كنت أقارن بين أربع جامعات وما عرفت أختار. أعطوني جدولاً فيه الرسوم السنوية ومعدلات التوظيف والمواعيد لكل جامعة — وبعدها اخترت بقناعة.",
  },
  {
    name: "عبدالله الزهراني",
    country: "السعودية",
    major: "إدارة الأعمال",
    initials: "عز",
    stars: 5,
    text: "ما قبلت في خياري الأول. صراحتهم معي كانت أفضل شيء — نصحوني بجامعة ثانية تناسب معدلي أكثر وميزانية عائلتي. ما ندمت.",
  },
  {
    name: "مريم الشامي",
    country: "الأردن",
    major: "الصيدلة",
    initials: "مش",
    stars: 5,
    text: "أهلي كانوا قلقين لأني رح أسكن لحالي بعيد عنهم. رتبوا السكن والاستقبال من المطار، وحتى الآن بيطمنوا عليّ من وقت لوقت.",
  },
  {
    name: "خالد المطيري",
    country: "الكويت",
    major: "هندسة البرمجيات",
    initials: "خم",
    stars: 5,
    text: "قدمت سبتمبر، الفيزا خلصت، وصلت ماليزيا ٣ نوفمبر.",
  },
  {
    name: "نورا العتيبي",
    country: "السعودية",
    major: "الدراسات الإسلامية",
    initials: "نع",
    stars: 5,
    text: "غيرت تخصصي مرتين قبل ما أسجل في أي جامعة. ما حسيت إني أثقّل عليهم ولا مرة — كل مرة جلسوا معي وعدنا من البداية بصبر.",
  },
];

const avatarColors = [
  { bg: "#fef2f2", c: "#dc2626" },
  { bg: "#eff6ff", c: "#1d4ed8" },
  { bg: "#f5f3ff", c: "#7c3aed" },
  { bg: "#ecfdf5", c: "#059669" },
  { bg: "#fffbeb", c: "#d97706" },
  { bg: "#eef2f7", c: "#0a1628" },
];

export default function Testimonials() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const bodyFont = isAr ? "'Cairo',sans-serif" : "'Poppins',sans-serif";
  const headingFont = isAr ? "'Cairo',sans-serif" : "'Playfair Display',serif";

  return (
    <Fragment>
      <style>{`
        @media (max-width: 768px) {
          #testimonials { padding: clamp(56px,10vw,120px) 0 !important; }
          .testimonials-mb { margin-bottom: 2rem !important; }
          .t-stat-1 { border-right: none !important; }
          .t-stat > div { padding: 28px 12px !important; }
        }
      `}</style>
      <section id="testimonials" style={{ background: "#f8fafc", padding: "clamp(56px,10vw,120px) 0" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div style={{ marginBottom: 64 }}>
            <h2
              style={{
                fontFamily: headingFont,
                color: "#0a1628",
                fontSize: "clamp(2rem,4.5vw,3.2rem)",
                fontWeight: isAr ? 800 : 700,
                lineHeight: 1.1,
                letterSpacing: isAr ? "-0.01em" : "-0.025em",
                marginBottom: 0,
              }}
            >
              {isAr ? "آراء طلابنا" : "Student Comments"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => {
              const c = avatarColors[i % avatarColors.length];
              return (
                <div
                  key={i}
                  style={{
                    background: "#ffffff",
                    borderRadius: 20,
                    padding: "28px",
                    border: "1px solid #e8edf2",
                    transition: "all .2s",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(10,22,40,0.08)";
                    e.currentTarget.style.borderColor = "#d1d9e2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#e8edf2";
                  }}
                >
                  <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <StarIcon key={j} size={13} color="#f59e0b" />
                    ))}
                  </div>
                  <div style={{ fontFamily: "'Georgia',serif", color: "#dc2626", fontSize: "2.4rem", lineHeight: 1, marginBottom: 2, opacity: 0.2 }}>
                    "
                  </div>
                  <p style={{ fontFamily: bodyFont, color: "#374151", fontSize: "0.9rem", lineHeight: 1.8, flex: 1, marginBottom: 20 }}>
                    {t.text}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid #f1f5f9" }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: c.bg,
                        color: c.c,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: headingFont,
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: bodyFont,
                          color: "#0f172a",
                          fontSize: "0.88rem",
                          fontWeight: 700,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontFamily: bodyFont,
                          color: "#94a3b8",
                          fontSize: "0.75rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t.country} · {t.major}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </Fragment>
  );
}
