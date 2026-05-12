import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Engineers Door — Technology Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0f2c",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,194,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(0,194,255,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, position: "relative" }}>
          {/* Logo */}
          <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: -2 }}>
            <span style={{ color: "#ffffff" }}>Engineers</span>
            <span style={{ color: "#00c2ff" }}>Door</span>
          </div>

          {/* Divider */}
          <div style={{ width: 80, height: 2, background: "#00c2ff", borderRadius: 2 }} />

          {/* Tagline */}
          <div style={{ color: "#94a3b8", fontSize: 24, textAlign: "center", maxWidth: 600 }}>
            End-to-end software development, IT consulting,
            and technology solutions.
          </div>

          {/* URL */}
          <div style={{ color: "#00c2ff", fontSize: 18, marginTop: 8, letterSpacing: 2 }}>
            www.engineersdoor.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
