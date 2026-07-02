import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import Logo from "./Logo";

const quickLinks = [
  { key: "home", href: "#home" },
  { key: "majors", href: "#majors" },
  { key: "universities", href: "#universities" },
  { key: "institutes", href: "#institutes" },
  { key: "contact", href: "#contact" },
];

const majorLinks = [
  { key: "engineering", href: "#majors" },
  { key: "business", href: "#majors" },
  { key: "medicine", href: "#majors" },
  { key: "humanities", href: "#majors" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/alghufran_consultancy?igsh=czR0aXN2Y20wcDNo",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@alghufran_0?_t=ZS-90ATl5ET4xZ&_r=1",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/60199563789",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.885 3.488" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const fontFamily = isAr ? "'Cairo', sans-serif" : "'Poppins', sans-serif";

  const contactBlocks = [
    {
      Icon: MapPin,
      text: ["203-01, Block L53 Arked Cengal, UTM", "81310, Johor Bahru, Malaysia"],
    },
    { Icon: Phone, text: ["+60 19 956 3789", "+60 17-345 3240"], ltr: true },
    { Icon: Mail, text: ["info@al-ghufran.com", "contact@al-ghufran.com"] },
  ];

  return (
    <footer style={{ background: "#0a1628" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <Logo size="sm" variant="white" />
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)", fontFamily }}
            >
              {isAr
                ? "بوابتك إلى التعليم العالي في ماليزيا. نساعد الطلاب على تحقيق أحلامهم الأكاديمية منذ 2017."
                : "Your gateway to higher education in Malaysia. Helping students achieve their academic dreams since 2017."}
            </p>
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
              >
                {t("followUs")}
              </p>
              <div className="flex gap-2">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                    style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.72)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Poppins', sans-serif" }}
            >
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.72)", fontFamily }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#dc2626" }} />
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Poppins', sans-serif" }}
            >
              {isAr ? "التخصصات" : "Majors"}
            </h4>
            <ul className="space-y-2.5">
              {majorLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.72)", fontFamily }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "rgba(96,165,250,0.8)" }}
                    />
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Poppins', sans-serif" }}
            >
              {t("contactInfo")}
            </h4>
            <div className="space-y-4">
              {contactBlocks.map(({ Icon, text, ltr }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#dc2626" }} />
                  <div className="space-y-0.5" dir={ltr ? "ltr" : undefined}>
                    {text.map((line, j) => (
                      <p
                        key={j}
                        className="text-sm"
                        style={{ color: "rgba(255,255,255,0.68)", fontFamily, textAlign: ltr && isAr ? "right" : undefined }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              <div
                className="mt-4 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.7)", fontFamily }}>
                  {isAr ? "ساعات العمل" : "Office Hours"}
                </p>
                {[
                  isAr ? "الأحد – الخميس: 9 ص – 6 م" : "Sun – Thu: 9 AM – 6 PM",
                  isAr ? "الجمعة: 2 م – 6 م" : "Friday: 2 PM – 6 PM",
                ].map((line, i) => (
                  <p key={i} className="text-xs" style={{ color: "rgba(255,255,255,0.55)", fontFamily }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)", fontFamily }}>
            © 2024{" "}
            {isAr
              ? "مكتب الغفران للاستشارات التعليمية. جميع الحقوق محفوظة."
              : "Al-Ghufran Educational Consultancy. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
