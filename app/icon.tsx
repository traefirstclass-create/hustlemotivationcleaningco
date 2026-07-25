import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "linear-gradient(135deg, #16314f 0%, #0b1728 100%)",
        }}
      >
        <span
          style={{
            fontSize: 30,
            fontWeight: 700,
            background: "linear-gradient(100deg, #f3d27f 0%, #ecbd54 45%, #c5872b 100%)",
            backgroundClip: "text",
            color: "transparent",
            fontFamily: "Georgia, serif",
          }}
        >
          H&M
        </span>
      </div>
    ),
    { ...size }
  );
}
