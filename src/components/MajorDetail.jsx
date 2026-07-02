import { useEffect, useState } from "react";
import { ArrowLeft, Award, Briefcase, Clock, GraduationCap, HeartPulse, Scale, Users, BookOpen } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { getMajorById } from "./MajorsPage";
import { universities } from "../data/universities";

const categoryMeta = {
  engineering: { accent: "#dc2626", bg: "#fef2f2", en: "Engineering", ar: "الهندسة", Icon: Award },
  business: { accent: "#1d4ed8", bg: "#eff6ff", en: "Business", ar: "إدارة الأعمال", Icon: Briefcase },
  medicine: { accent: "#059669", bg: "#ecfdf5", en: "Medical", ar: "الدراسات الطبية", Icon: HeartPulse },
  humanities: { accent: "#7c3aed", bg: "#f5f3ff", en: "Humanities", ar: "الإنسانية", Icon: BookOpen },
  law: { accent: "#d97706", bg: "#fffbeb", en: "Law", ar: "القانون", Icon: Scale },
};

function toArray(value, lang) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "string") return [value];
  if (typeof value === "object") {
    if (Array.isArray(value[lang])) return value[lang];
    if (Array.isArray(value.en)) return value.en;
  }
  return [];
}

export default function MajorDetail() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const bodyFont = isAr ? "'Cairo',sans-serif" : "'Poppins',sans-serif";
  const headingFont = isAr ? "'Cairo',sans-serif" : "'Playfair Display',serif";
  const [majorId, setMajorId] = useState(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash.startsWith("major/")) setMajorId(hash.split("/")[1]);
    window.scrollTo(0, 0);
  }, []);

  const major = majorId ? getMajorById(majorId) : null;
  const category = major ? categoryMeta[major.category] ?? categoryMeta.engineering : categoryMeta.engineering;
  const universitiesById = Object.fromEntries(universities.map((u) => [u.id, u]));

  const openWhatsApp = (message) =>
    window.open(`https://wa.me/60199563789?text=${encodeURIComponent(message)}`);

  if (!major) {
    return (
      <div style={{ minHeight: "60vh", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: bodyFont, color: "#64748b", marginBottom: 20, fontSize: "0.95rem" }}>
            {isAr ? "التخصص غير موجود" : "Major not found"}
          </p>
          <button
            onClick={() => {
              window.location.hash = "#majors";
            }}
            style={{ fontFamily: bodyFont, background: "#dc2626", color: "#fff", padding: "12px 28px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 600 }}
          >
            {isAr ? "العودة إلى التخصصات" : "Back to Majors"}
          </button>
        </div>
      </div>
    );
  }

  const name = major.name[isAr ? "ar" : "en"];
  const description = major.description[isAr ? "ar" : "en"];
  const duration = major.duration[isAr ? "ar" : "en"];
  const requirements = toArray(major.requirements, isAr ? "ar" : "en");

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingBottom: 100 }}>
      <style>{`
        @media (max-width: 640px) {
          .mjr-hero-inner { flex-direction: column !important; }
          .mjr-logo { display: none !important; }
        }
      `}</style>

      <div style={{ background: "#0a1628", padding: "clamp(56px,8vw,80px) 0 clamp(44px,6vw,60px)", position: "relative", overflow: "hidden" }}>
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
            top: -60,
            right: -60,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${category.accent}22 0%, transparent 65%)`,
            pointerEvents: "none",
          }}
        />
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16" style={{ position: "relative", zIndex: 1 }}>
          <button
            onClick={() => {
              window.location.hash = "#majors";
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: bodyFont,
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.83rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              marginBottom: 36,
              padding: 0,
              transition: "color .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
          >
            <ArrowLeft style={{ width: 15, height: 15 }} />
            {isAr ? "العودة إلى التخصصات" : "Back to Majors"}
          </button>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: category.accent + "20",
                border: `1px solid ${category.accent}40`,
                borderRadius: 8,
                padding: "5px 14px",
                marginBottom: 20,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: category.accent, flexShrink: 0 }} />
              <span style={{ fontFamily: bodyFont, fontSize: "0.7rem", fontWeight: 700, color: category.accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {isAr ? category.ar : category.en}
              </span>
            </div>
            <h1
              style={{
                fontFamily: headingFont,
                color: "#fff",
                fontSize: "clamp(2rem,5vw,3.2rem)",
                fontWeight: isAr ? 800 : 700,
                lineHeight: 1.1,
                letterSpacing: isAr ? "-0.01em" : "-0.025em",
                marginBottom: 16,
              }}
            >
              {name}
            </h1>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 28, marginTop: 28, justifyContent: "center" }}>
            {[
              { Icon: Clock, val: duration, label: isAr ? "مدة الدراسة" : "Duration", color: "#059669" },
              { Icon: GraduationCap, val: String(major.universities.length), label: isAr ? "جامعة متاحة" : "Universities", color: "#1d4ed8" },
              { Icon: Users, val: major.students ? `${major.students}+` : "200+", label: isAr ? "طالب مسجّل" : "Students", color: category.accent },
            ].map(({ Icon, val, label, color }, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: color + "20", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon style={{ width: 16, height: 16, color }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.1rem", fontWeight: 700, lineHeight: 1 }}>{val}</div>
                  <div style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.38)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 3 }}>
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16" style={{ paddingTop: 48 }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <div className="lg:col-span-2" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: "#fff", borderRadius: 20, padding: "32px", border: "1px solid #e8edf2" }}>
              <h2 style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "1rem", fontWeight: 700, marginBottom: 16 }}>
                {isAr ? "عن هذا التخصص" : "About this Major"}
              </h2>
              <p style={{ fontFamily: bodyFont, color: "#475569", fontSize: "0.92rem", lineHeight: 1.85, margin: 0 }}>{description}</p>
            </div>

            {requirements.length > 0 && (
              <div style={{ background: "#fff", borderRadius: 20, padding: "32px", border: "1px solid #e8edf2" }}>
                <h2 style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "1rem", fontWeight: 700, marginBottom: 20 }}>
                  {isAr ? "متطلبات القبول" : "Admission Requirements"}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {requirements.map((req, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ flexShrink: 0, width: 20, height: 20, borderRadius: "50%", background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: 9, height: 5.5, borderLeft: "1.5px solid #059669", borderBottom: "1.5px solid #059669", transform: "rotate(-45deg) translateY(-1px)" }} />
                      </div>
                      <span style={{ fontFamily: bodyFont, color: "#374151", fontSize: "0.88rem" }}>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ background: "#fff", borderRadius: 20, padding: "32px", border: "1px solid #e8edf2" }}>
              <h2 style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "1rem", fontWeight: 700, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Briefcase style={{ width: 17, height: 17, color: category.accent }} />
                  {isAr ? "المسارات المهنية" : "Career Paths"}
                </div>
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {major.career.map((c, i) => (
                  <span
                    key={i}
                    style={{ fontFamily: bodyFont, fontSize: "0.82rem", fontWeight: 500, color: category.accent, background: category.bg, padding: "7px 14px", borderRadius: 100, border: `1px solid ${category.accent}28` }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: "#fff", borderRadius: 20, padding: "28px", border: "1px solid #e8edf2" }}>
              <h2 style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "0.95rem", fontWeight: 700, marginBottom: 18 }}>
                {isAr ? "الجامعات المتاحة" : "Available Universities"}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {major.universities.map((uniId, i) => {
                  const uni = universitiesById[uniId];
                  const label = uni ? uni.shortName[isAr ? "ar" : "en"] : uniId.toUpperCase();
                  return (
                    <button
                      key={i}
                      onClick={() => uni && (window.location.hash = `#university/${uniId}`)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: "#f8fafc",
                        borderRadius: 12,
                        padding: "10px 13px",
                        border: "1px solid #e8edf2",
                        cursor: uni ? "pointer" : "default",
                        transition: "all .15s",
                        textAlign: isAr ? "right" : "left",
                        width: "100%",
                      }}
                      onMouseEnter={(e) => {
                        if (uni) {
                          e.currentTarget.style.borderColor = category.accent + "44";
                          e.currentTarget.style.background = category.bg;
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#e8edf2";
                        e.currentTarget.style.background = "#f8fafc";
                      }}
                    >
                      {uni?.logo ? (
                        <img
                          src={uni.logo}
                          alt=""
                          style={{ width: 30, height: 30, objectFit: "contain", borderRadius: 6, flexShrink: 0 }}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <div style={{ width: 30, height: 30, borderRadius: 6, background: category.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <span style={{ fontFamily: "'Playfair Display',serif", color: category.accent, fontSize: "0.6rem", fontWeight: 700 }}>
                            {uniId.slice(0, 3).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <span style={{ fontFamily: bodyFont, color: "#0f172a", fontSize: "0.8rem", fontWeight: 600, flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ background: "#0a1628", borderRadius: 20, padding: "28px" }}>
              <h2 style={{ fontFamily: headingFont, color: "#fff", fontSize: "0.95rem", fontWeight: 700, marginBottom: 20 }}>
                {isAr ? "معلومات سريعة" : "Quick Info"}
              </h2>
              {[
                { label: isAr ? "مدة الدراسة" : "Duration", val: duration },
                { label: isAr ? "لغة الدراسة" : "Language", val: "English" },
                { label: isAr ? "نوع الشهادة" : "Degree", val: isAr ? "بكالوريوس" : "Bachelor's" },
                { label: isAr ? "التخصص" : "Category", val: isAr ? category.ar : category.en },
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                  <span style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.4)", fontSize: "0.78rem" }}>{row.label}</span>
                  <span style={{ fontFamily: bodyFont, color: "#fff", fontSize: "0.8rem", fontWeight: 600 }}>{row.val}</span>
                </div>
              ))}
              <button
                onClick={() => openWhatsApp(isAr ? `مرحباً، أريد الاستفسار عن تخصص ${name}` : `Hello, I want to ask about the ${name} major`)}
                style={{
                  width: "100%",
                  marginTop: 20,
                  fontFamily: bodyFont,
                  background: "#dc2626",
                  color: "#fff",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  padding: "12px",
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 16px rgba(220,38,38,0.4)",
                }}
              >
                {isAr ? "استفسر عبر واتساب" : "Ask on WhatsApp"}
              </button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 48, background: "#0a1628", borderRadius: 24, padding: "clamp(36px,5vw,56px) clamp(24px,5vw,48px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
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
              top: -60,
              right: -60,
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <h3 style={{ fontFamily: headingFont, color: "#fff", fontSize: "clamp(1.3rem,3vw,1.8rem)", fontWeight: 700, marginBottom: 12, position: "relative", zIndex: 1 }}>
            {isAr ? `مهتم بدراسة ${name}؟` : `Interested in studying ${name}?`}
          </h3>
          <p style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.45)", fontSize: "0.95rem", marginBottom: 28, position: "relative", zIndex: 1 }}>
            {isAr ? "نساعدك في التسجيل والقبول مجاناً — لا رسوم من الطالب." : "We handle the application and admission — completely free for students."}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
            <button
              onClick={() => openWhatsApp(isAr ? `مرحباً، أريد التقديم لتخصص ${name}` : `Hello, I want to apply for the ${name} major`)}
              style={{ fontFamily: bodyFont, background: "#dc2626", color: "#fff", fontSize: "0.95rem", fontWeight: 700, padding: "13px 32px", borderRadius: 12, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(220,38,38,0.4)" }}
            >
              {isAr ? "قدّم الآن" : "Apply Now"}
            </button>
            <button
              onClick={() => openWhatsApp(isAr ? `مرحباً، أحتاج استشارة حول تخصص ${name}` : `Hello, I need advice about the ${name} major`)}
              style={{ fontFamily: bodyFont, background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", fontWeight: 600, padding: "13px 32px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer" }}
            >
              {isAr ? "استشارة مجانية" : "Free Consultation"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
