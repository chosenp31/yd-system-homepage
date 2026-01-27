import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'YDシステム';
  const category = searchParams.get('category') || '';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f0f23 100%)',
          position: 'relative',
        }}
      >
        {/* グロー効果 */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79, 124, 255, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '30%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          }}
        />

        {/* カテゴリバッジ */}
        {category && (
          <div
            style={{
              display: 'flex',
              padding: '8px 24px',
              borderRadius: '999px',
              background: 'rgba(79, 124, 255, 0.2)',
              border: '1px solid rgba(79, 124, 255, 0.4)',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                color: '#8bb4ff',
                fontSize: '24px',
                fontWeight: 500,
              }}
            >
              {category}
            </span>
          </div>
        )}

        {/* タイトル */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 60px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: title.length > 30 ? '48px' : '56px',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #ffffff 0%, #8bb4ff 50%, #a78bfa 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1.3,
              margin: 0,
              maxWidth: '1000px',
            }}
          >
            {title}
          </h1>
        </div>

        {/* ロゴ・サイト名 */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #4f7cff 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: 'white', fontSize: '20px', fontWeight: 700 }}>
              YD
            </span>
          </div>
          <span
            style={{
              color: '#888899',
              fontSize: '24px',
              fontWeight: 500,
            }}
          >
            YDシステム
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
