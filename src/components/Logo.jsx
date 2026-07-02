export default function Logo({ size = "md", variant = "default" }) {
  const heights = { sm: 38, md: 46, lg: 60 };

  if (variant === "white") {
    return (
      <div
        style={{
          display: "inline-block",
          background: "#ffffff",
          borderRadius: 12,
          padding: "10px 16px",
        }}
      >
        <img
          src="/image/1.png"
          alt="Al-Ghufran Consultancy"
          style={{
            height: heights[size],
            width: "auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </div>
    );
  }

  return (
    <img
      src="/image/1.png"
      alt="Al-Ghufran Consultancy"
      style={{
        height: heights[size],
        width: "auto",
        display: "block",
        objectFit: "contain",
      }}
    />
  );
}
