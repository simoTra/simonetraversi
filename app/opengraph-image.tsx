import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Simone Traversi | Robotics Software Engineer & Full-Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1A1A1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '8px',
            height: '100%',
            background: '#FF4400',
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: '#F4F4F4',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            marginBottom: 24,
          }}
        >
          Simone Traversi
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: '#757575',
            marginBottom: 48,
          }}
        >
          Robotics Software Engineer &amp; Full-Stack Developer
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['KUKA · ABB · FANUC', 'Flutter · Next.js · NestJS', 'Turin, Italy'].map((tag) => (
            <div
              key={tag}
              style={{
                background: '#2A2A2A',
                color: '#D1E0E8',
                padding: '8px 20px',
                fontSize: 20,
                borderRadius: 4,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            right: 80,
            fontSize: 22,
            color: '#FF4400',
          }}
        >
          simonetraversi.it
        </div>
      </div>
    ),
    { ...size }
  );
}
