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

export function createHomeOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top center, rgba(146, 185, 146, 0.18), transparent 42%), radial-gradient(circle at bottom right, rgba(146, 185, 146, 0.12), transparent 34%), linear-gradient(180deg, #f7fbf6 0%, #f1f7ef 100%)",
          color: "#09190d",
          padding: "52px 72px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "82px",
            top: "80px",
            width: "6px",
            height: "350px",
            borderRadius: "999px",
            background: "#78ba7b",
            opacity: 0.95,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "34px",
            bottom: "26px",
            width: "34px",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(45deg)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "3px",
              height: "34px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.75)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "34px",
              height: "3px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.75)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
            maxWidth: "1060px",
          }}
        >
          <svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58 34L75 8L92 28L109 8L126 34L119 53H65L58 34Z"
              fill="#E7CB63"
              stroke="#B49634"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <g>
              <circle cx="58" cy="78" r="24" fill="#E8A6BC" stroke="#C47D93" strokeWidth="4" />
              <circle cx="81" cy="68" r="28" fill="#E8A6BC" stroke="#C47D93" strokeWidth="4" />
              <circle cx="99" cy="68" r="28" fill="#E8A6BC" stroke="#C47D93" strokeWidth="4" />
              <circle cx="122" cy="78" r="24" fill="#E8A6BC" stroke="#C47D93" strokeWidth="4" />
              <circle cx="54" cy="103" r="22" fill="#E8A6BC" stroke="#C47D93" strokeWidth="4" />
              <circle cx="78" cy="104" r="25" fill="#E8A6BC" stroke="#C47D93" strokeWidth="4" />
              <circle cx="102" cy="104" r="25" fill="#E8A6BC" stroke="#C47D93" strokeWidth="4" />
              <circle cx="126" cy="103" r="22" fill="#E8A6BC" stroke="#C47D93" strokeWidth="4" />
              <circle cx="68" cy="126" r="20" fill="#E8A6BC" stroke="#C47D93" strokeWidth="4" />
              <circle cx="90" cy="132" r="22" fill="#E8A6BC" stroke="#C47D93" strokeWidth="4" />
              <circle cx="112" cy="126" r="20" fill="#E8A6BC" stroke="#C47D93" strokeWidth="4" />
              <path d="M90 49V133" stroke="#B86F85" strokeWidth="4" strokeLinecap="round" />
              <path d="M90 63C83 57 79 50 79 43" stroke="#B86F85" strokeWidth="4" strokeLinecap="round" />
              <path d="M90 63C97 57 101 50 101 43" stroke="#B86F85" strokeWidth="4" strokeLinecap="round" />
              <path d="M69 82C62 82 58 88 58 95" stroke="#B86F85" strokeWidth="4" strokeLinecap="round" />
              <path d="M111 82C118 82 122 88 122 95" stroke="#B86F85" strokeWidth="4" strokeLinecap="round" />
              <path d="M78 108C72 108 69 113 69 118" stroke="#B86F85" strokeWidth="4" strokeLinecap="round" />
              <path d="M102 108C108 108 111 113 111 118" stroke="#B86F85" strokeWidth="4" strokeLinecap="round" />
            </g>
          </svg>

          <div
            style={{
              fontSize: "54px",
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: "-0.055em",
              maxWidth: "1040px",
            }}
          >
            {siteConfig.heroTagline}
          </div>

          <div
            style={{
              fontSize: "28px",
              lineHeight: 1.2,
              fontWeight: 500,
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.name}
          </div>
        </div>
      </div>
    ),
    ogImageSize
  );
}
