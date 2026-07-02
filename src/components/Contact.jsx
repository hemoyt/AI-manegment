import { useState } from "react";
import { ChevronDown, ChevronUp, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const bodyFont = isAr ? "'Cairo',sans-serif" : "'Poppins',sans-serif";
  const headingFont = isAr ? "'Cairo',sans-serif" : "'Playfair Display',serif";

  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", major: "", message: "" });
  const [openFaq, setOpenFaq] = useState(null);
  const setField = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = isAr
      ? `استفسار من الموقع — ${form.name}`
      : `Website inquiry — ${form.name}`;
    const body = isAr
      ? `الاسم: ${form.name}
البريد: ${form.email}
الهاتف: ${form.phone}
البلد: ${form.country || "غير محدد"}
التخصص: ${form.major || "غير محدد"}

الرسالة:
${form.message}`
      : `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Country: ${form.country || "Not specified"}
Major: ${form.major || "Not specified"}

Message:
${form.message}`;
    window.location.href = `mailto:contact@al-ghufran.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const faqs = [
    { q: t("faqQ1"), a: t("faqA1") },
    { q: t("faqQ2"), a: t("faqA2") },
    { q: t("faqQ3"), a: t("faqA3") },
    { q: t("faqQ4"), a: t("faqA4") },
    { q: t("faqQ5"), a: t("faqA5") },
    { q: t("faqQ6"), a: t("faqA6") },
    { q: t("faqQ7"), a: t("faqA7") },
    { q: t("faqQ8"), a: t("faqA8") },
    { q: t("faqQ9"), a: t("faqA9") },
    { q: t("faqQ10"), a: t("faqA10") },
    { q: t("faqQ11"), a: t("faqA11") },
    { q: t("faqQ12"), a: t("faqA12") },
  ];

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    border: "1.5px solid #e2e8f0",
    background: "#fff",
    fontFamily: bodyFont,
    fontSize: "0.9rem",
    color: "#0f172a",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color .15s",
  };
  const labelStyle = { display: "block", fontFamily: bodyFont, fontSize: "0.82rem", fontWeight: 600, color: "#374151", marginBottom: 6 };

  const officeInfo = [
    { Icon: MapPin, lines: ["203-01, Block L53 Arked Cengal, UTM", "Postal: 81310, Johor Bahru, Malaysia"] },
    { Icon: Phone, lines: ["+60 19 956 3789", "+60 11-2093 0016", "+60 17-345 3240"], ltr: true },
    { Icon: Mail, lines: ["info@al-ghufran.com", "contact@al-ghufran.com"] },
    { Icon: Clock, lines: [isAr ? "الأحد – الخميس: 9 ص – 6 م" : "Sun – Thu: 9 AM – 6 PM", isAr ? "الجمعة: 2 م – 6 م" : "Fri: 2 PM – 6 PM"] },
  ];

  const quickActions = [
    {
      label: isAr ? "واتساب مباشر" : "WhatsApp Direct",
      bg: "#059669",
      action: () =>
        window.open(`https://wa.me/60199563789?text=${encodeURIComponent(isAr ? "مرحباً، أريد الاستفسار" : "Hello, I want to inquire")}`),
    },
    { label: isAr ? "اتصل الآن" : "Call Now", bg: "#0a1628", action: () => window.open("tel:+60199563789") },
  ];

  return (
    <section id="contact" style={{ background: "#f8fafc", padding: "120px 0" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16" style={{ alignItems: "end" }}>
          <h2
            style={{
              fontFamily: headingFont,
              color: "#0a1628",
              fontSize: "clamp(2.6rem,6vw,4.2rem)",
              fontWeight: isAr ? 800 : 700,
              lineHeight: 1.05,
              letterSpacing: isAr ? "-0.01em" : "-0.025em",
              margin: 0,
            }}
          >
            {isAr ? "تواصل معنا" : "Contact Us"}
          </h2>
          <p style={{ fontFamily: bodyFont, color: "#64748b", fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}>
            {isAr
              ? "تواصل معنا واحصل على استشارة مجانية من فريقنا."
              : "Reach out and get a free consultation from our team."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#0a1628", borderRadius: 20, padding: 32, position: "relative", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  opacity: 0.04,
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <h3 style={{ fontFamily: headingFont, color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: 24, position: "relative", zIndex: 1 }}>
                {isAr ? "معلومات المكتب" : "Office Information"}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "relative", zIndex: 1 }}>
                {officeInfo.map(({ Icon, lines, ltr }, i) => (
                  <div key={i} style={{ display: "flex", gap: 12 }}>
                    <Icon style={{ width: 16, height: 16, color: "#dc2626", flexShrink: 0, marginTop: 2 }} />
                    <div dir={ltr ? "ltr" : undefined} style={ltr && isAr ? { textAlign: "right", width: "100%" } : undefined}>
                      {lines.map((line, j) => (
                        <p key={j} style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.75)", fontSize: "0.82rem", margin: "0 0 2px", lineHeight: 1.6 }}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {quickActions.map((a, i) => (
              <button
                key={i}
                onClick={a.action}
                style={{
                  width: "100%",
                  padding: "13px",
                  borderRadius: 12,
                  background: a.bg,
                  color: "#fff",
                  fontFamily: bodyFont,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity .15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {a.label}
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div style={{ background: "#fff", borderRadius: 20, padding: 40, border: "1px solid #e8edf2" }}>
              <h3 style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "1.2rem", fontWeight: 700, marginBottom: 28 }}>
                {isAr ? "أرسل لنا رسالة" : "Send Us a Message"}
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginBottom: 20 }}>
                  <div>
                    <label style={labelStyle}>{t("fullName")} *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setField("name", e.target.value)}
                      placeholder={isAr ? "أدخل اسمك الكامل" : "Enter your full name"}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#dc2626")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{t("email")} *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                      placeholder="example@email.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#dc2626")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{t("phone")} *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                      placeholder="+60 19 956 3789"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#dc2626")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{isAr ? "البلد" : "Country"}</label>
                    <select
                      value={form.country}
                      onChange={(e) => setField("country", e.target.value)}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="">{isAr ? "اختر بلدك" : "Select country"}</option>
                      {["السعودية", "الإمارات", "الكويت", "قطر", "البحرين", "عُمان", "الأردن", "مصر", "المغرب"].map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                      <option value="other">{isAr ? "أخرى" : "Other"}</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>{isAr ? "التخصص المرغوب" : "Desired Major"}</label>
                  <select value={form.major} onChange={(e) => setField("major", e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">{isAr ? "اختر التخصص" : "Select major"}</option>
                    {(isAr
                      ? ["الهندسة", "الطب", "إدارة الأعمال", "تقنية المعلومات", "القانون", "الصيدلة", "التعليم", "لم أحدد بعد"]
                      : ["Engineering", "Medicine", "Business", "IT", "Law", "Pharmacy", "Education", "Undecided"]
                    ).map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>{isAr ? "رسالتك *" : "Your Message *"}</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                    placeholder={isAr ? "أخبرنا عن أهدافك التعليمية..." : "Tell us about your educational goals..."}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                    onFocus={(e) => (e.target.style.borderColor = "#dc2626")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "15px",
                    borderRadius: 12,
                    background: "#dc2626",
                    color: "#fff",
                    fontFamily: bodyFont,
                    fontSize: "1rem",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(220,38,38,0.35)",
                    transition: "opacity .15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <Mail style={{ width: 18, height: 18 }} />
                  {isAr ? "إرسال الرسالة" : "Send Message"}
                </button>
                <p style={{ fontFamily: bodyFont, color: "#94a3b8", fontSize: "0.78rem", textAlign: "center", marginTop: 12 }}>
                  {isAr ? "سيتم فتح بريدك الإلكتروني مع رسالتك جاهزة للإرسال" : "Your email app will open with the message ready to send"}
                </p>
              </form>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#0a1628",
            borderRadius: 20,
            padding: "48px 40px",
            textAlign: "center",
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
          <MapPin style={{ width: 40, height: 40, color: "#dc2626", margin: "0 auto 16px", position: "relative", zIndex: 1 }} />
          <h3 style={{ fontFamily: headingFont, color: "#fff", fontSize: "1.2rem", fontWeight: 700, marginBottom: 8, position: "relative", zIndex: 1 }}>
            {isAr ? "موقعنا" : "Our Location"}
          </h3>
          <p style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.78)", fontSize: "0.9rem", marginBottom: 4, position: "relative", zIndex: 1 }}>
            203-01, Block L53 Arked Cengal, UTM
          </p>
          <p style={{ fontFamily: bodyFont, color: "rgba(255,255,255,0.78)", fontSize: "0.9rem", marginBottom: 28, position: "relative", zIndex: 1 }}>
            Johor Bahru, Malaysia
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", position: "relative", zIndex: 1 }}>
            <button
              onClick={() => window.open("https://maps.google.com/?q=203-01+Block+L53+Arked+Cengal+UTM+Johor+Bahru+Malaysia", "_blank")}
              style={{ fontFamily: bodyFont, background: "#dc2626", color: "#fff", fontSize: "0.88rem", fontWeight: 600, padding: "11px 24px", borderRadius: 10, border: "none", cursor: "pointer" }}
            >
              {isAr ? "فتح في خرائط جوجل" : "Open in Google Maps"}
            </button>
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/60199563789?text=${encodeURIComponent(isAr ? "مرحباً، أريد معرفة كيفية الوصول إلى مكتبكم" : "Hello, I would like directions to your office")}`,
                  "_blank",
                )
              }
              style={{
                fontFamily: bodyFont,
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: "0.88rem",
                fontWeight: 600,
                padding: "11px 24px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.15)",
                cursor: "pointer",
              }}
            >
              {isAr ? "استفسر عن الاتجاهات" : "Ask for Directions"}
            </button>
          </div>
        </div>

        <div>
          <h3 style={{ fontFamily: headingFont, color: "#0a1628", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: isAr ? 800 : 700, marginBottom: 12 }}>
            {t("faqTitle")}
          </h3>
          <p style={{ fontFamily: bodyFont, color: "#64748b", fontSize: "1rem", marginBottom: 40, maxWidth: 560 }}>{t("faqSubtitle")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 16, border: "1px solid #e8edf2", overflow: "hidden", transition: "border-color .15s" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: isAr ? "right" : "left",
                  }}
                >
                  <span style={{ fontFamily: bodyFont, color: "#0f172a", fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.5 }}>{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp style={{ width: 16, height: 16, color: "#dc2626", flexShrink: 0 }} />
                  ) : (
                    <ChevronDown style={{ width: 16, height: 16, color: "#94a3b8", flexShrink: 0 }} />
                  )}
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", borderTop: "1px solid #f1f5f9" }}>
                    <p style={{ fontFamily: bodyFont, color: "#64748b", fontSize: "0.875rem", lineHeight: 1.75, paddingTop: 16 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
