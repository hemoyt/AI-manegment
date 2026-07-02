import {
  BookOpen,
  FileText,
  GraduationCap,
  House,
  MapPin,
  MessageSquare,
  Plane,
  Shield,
  UserCheck,
  Users,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const services = [
  { Icon: GraduationCap, accent: "#dc2626", bg: "#fef2f2", en: "University Admission", ar: "القبول الجامعي" },
  { Icon: FileText, accent: "#1d4ed8", bg: "#eff6ff", en: "Visa Processing", ar: "إجراءات التأشيرة" },
  { Icon: Plane, accent: "#7c3aed", bg: "#f5f3ff", en: "Travel Planning", ar: "ترتيبات السفر" },
  { Icon: UserCheck, accent: "#059669", bg: "#ecfdf5", en: "Airport Pickup", ar: "استقبال المطار" },
  { Icon: House, accent: "#d97706", bg: "#fffbeb", en: "Accommodation", ar: "السكن" },
  { Icon: MapPin, accent: "#dc2626", bg: "#fef2f2", en: "Major & University Guidance", ar: "اختيار التخصص والجامعة" },
  { Icon: BookOpen, accent: "#0891b2", bg: "#ecfeff", en: "English Language Courses", ar: "مراكز اللغة الإنجليزية" },
  { Icon: MessageSquare, accent: "#059669", bg: "#ecfdf5", en: "Free Consultation", ar: "استشارة مجانية" },
  { Icon: Users, accent: "#7c3aed", bg: "#f5f3ff", en: "Postgraduate Support", ar: "دعم الدراسات العليا" },
  { Icon: Shield, accent: "#0a1628", bg: "#eef2f7", en: "Health Insurance", ar: "التأمين الصحي" },
];

export default function Services() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const headingFont = isAr ? "'Cairo',sans-serif" : "'Playfair Display',serif";

  return (
    <section id="services" style={{ background: "#f8fafc", padding: "clamp(56px,10vw,120px) 0" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2
          style={{
            fontFamily: headingFont,
            color: "#0a1628",
            fontSize: "clamp(2.6rem,6vw,4.2rem)",
            fontWeight: isAr ? 800 : 700,
            lineHeight: 1.05,
            letterSpacing: isAr ? "-0.01em" : "-0.025em",
            margin: 0,
            marginBottom: 56,
          }}
        >
          {isAr ? "خدماتنا" : "Our Services"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ Icon, accent, bg, en, ar }, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                borderRadius: 20,
                padding: "28px 32px",
                border: "1px solid #e8edf2",
                display: "flex",
                alignItems: "center",
                gap: 20,
                transition: "transform .2s, box-shadow .2s, border-color .2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 20px 48px rgba(10,22,40,0.10)";
                el.style.borderColor = accent + "50";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "#e8edf2";
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 4px 16px ${accent}20`,
                }}
              >
                <Icon style={{ width: 24, height: 24, color: accent }} />
              </div>
              <h3 style={{ fontFamily: headingFont, color: "#0f172a", fontSize: "1.02rem", fontWeight: 700, margin: 0, lineHeight: 1.4 }}>
                {isAr ? ar : en}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
