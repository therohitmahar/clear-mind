import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const ogImageContentType = "image/png";

interface OgImageOptions {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
}

export function createOgImage({
  eyebrow,
  title,
  description,
  badge,
}: OgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #f8f7f1 0%, #eef4ef 100%)",
          color: "#18231d",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "32px",
            borderRadius: "32px",
            border: "1px solid rgba(24, 35, 29, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "72px",
            right: "72px",
            width: "160px",
            height: "160px",
            borderRadius: "36px",
            background: "rgba(64, 104, 63, 0.08)",
            border: "1px solid rgba(64, 104, 63, 0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "110px",
            right: "148px",
            width: "10px",
            height: "180px",
            borderRadius: "999px",
            background: "#40683f",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              maxWidth: "820px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#40683f",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#40683f",
                }}
              />
              {eyebrow}
            </div>

            <div
              style={{
                fontSize: 62,
                lineHeight: 1.08,
                fontWeight: 700,
                letterSpacing: "-0.045em",
                maxWidth: "860px",
              }}
            >
              {title}
            </div>

            <div
              style={{
                fontSize: 26,
                lineHeight: 1.45,
                color: "#46564b",
                maxWidth: "780px",
              }}
            >
              {description}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                }}
              >
                {siteConfig.name}
              </div>
              <div
                style={{
                  fontSize: 22,
                  color: "#486055",
                }}
              >
                {siteConfig.tagline}
              </div>
            </div>

            {badge ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 20px",
                  borderRadius: "999px",
                  border: "1px solid rgba(64, 104, 63, 0.12)",
                  background: "rgba(255, 255, 255, 0.75)",
                  color: "#23402b",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                {badge}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    ),
    ogImageSize
  );
}
