import { Link } from "react-router";

export default function HomePage() {
  return (
    <div
      style={{
        padding: 0,
        margin: 0,
        fontFamily:
          'Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
      }}
    >
      {/* Header with SVG and fancy title */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2.4rem 1rem",
          background: "linear-gradient(90deg, #E0F7FA, #E8F3FF)",
          boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.04)",
        }}
      >
        <img
          src="/favicon.svg"
          alt="bottle logo"
          width={64}
          height={64}
          style={{ marginRight: 16 }}
        />
        <div style={{ textAlign: "left" }}>
          <h1
            style={{
              margin: 0,
              fontSize: 34,
              lineHeight: 1,
              background: "linear-gradient(90deg,#0077c2,#00bcd4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            BottleCycle
          </h1>
          <p
            style={{ margin: 0, marginTop: 6, color: "#0d47a1", opacity: 0.9 }}
          >
            Collect · Reuse · Recycle
          </p>
        </div>
      </header>

      <main
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 18, color: "#333", maxWidth: 560 }}>
            Welcome to BottleCycle — a tiny experiment to track glass and
            plastic bottles and encourage recycling. Start by adding bottles to
            your list, or browse locations where they can be recycled.
          </p>

          <div style={{ marginTop: 24 }}>
            <Link
              to="/bottles"
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg,#0288D1,#26C6DA)",
                color: "white",
                padding: "10px 18px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Add some bottles
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
