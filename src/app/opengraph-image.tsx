import { ImageResponse } from "next/og";
import { business } from "@/lib/constants";

export const alt = `${business.name} — Pool Cleaning in Pompano Beach, FL`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #071f2c 0%, #0b3347 55%, #106681 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 34,
            fontWeight: 800,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 52,
              height: 52,
              borderRadius: 26,
              background: "white",
              alignItems: "center",
              justifyContent: "center",
              color: "#0b3347",
              fontSize: 28,
            }}
          >
            +
          </div>
          POOLS<span style={{ color: "#ffb020" }}>of</span>Pompano
        </div>
        <div style={{ display: "flex", fontSize: 58, fontWeight: 800, marginTop: 40, maxWidth: 900, lineHeight: 1.15 }}>
          {business.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 24, color: "#c7e6ef", maxWidth: 820 }}>
          Weekly cleaning, green pool recovery, equipment repair & storm cleanup
          for Pompano Beach & Broward County.
        </div>
      </div>
    ),
    { ...size }
  );
}
