import { ImageResponse } from "next/og";
import { contactInfo, siteConfig } from "@/lib/data";

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
  badge = contactInfo.addressShort,
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
          background:
            "linear-gradient(135deg, #f8f7f1 0%, #edf5ee 52%, #d7e8da 100%)",
          color: "#18231d",
          padding: "56px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "32px",
            borderRadius: "36px",
            border: "1px solid rgba(24, 35, 29, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background: "rgba(125, 168, 140, 0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-140px",
            left: "-70px",
            width: "320px",
            height: "320px",
            borderRadius: "999px",
            background: "rgba(82, 121, 111, 0.12)",
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
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                maxWidth: "830px",
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
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: 68,
                    lineHeight: 1.05,
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    maxWidth: "900px",
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: 28,
                    lineHeight: 1.35,
                    color: "#3a4a40",
                    maxWidth: "830px",
                  }}
                >
                  {description}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "220px",
                padding: "16px 22px",
                borderRadius: "999px",
                background: "rgba(255, 255, 255, 0.75)",
                border: "1px solid rgba(24, 35, 29, 0.08)",
                fontSize: 20,
                fontWeight: 600,
                color: "#23402b",
              }}
            >
              Online & In-Person
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
                  fontSize: 34,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                }}
              >
                {siteConfig.name}
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: "#486055",
                }}
              >
                Compassionate therapy for anxiety, overthinking, stress, and
                emotional well-being.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 22px",
                borderRadius: "999px",
                background: "#183126",
                color: "#f7fbf8",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {badge}
            </div>
          </div>
        </div>
      </div>
    ),
    ogImageSize
  );
}
