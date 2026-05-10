// Variante C — Sumi-e contemporaneo: cerchio sole + linea orizzonte, minimale e zen
const VCZen = () => {
  const washi = '#F7F1E5';      // washi paper warm white
  const ink   = '#1A1814';
  const sun   = '#D9613B';      // hinomaru-ish ma morbido
  const sea   = '#7FA0A8';      // mare polveroso

  return (
    <div style={{
      width: 1080, height: 1080, position: 'relative', overflow: 'hidden',
      background: washi, color: ink,
      fontFamily: '"Inter", system-ui, sans-serif',
    }}>
      {/* Subtle paper texture using radial speckles */}
      <svg width="1080" height="1080" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
        <filter id="paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.4  0 0 0 0 0.32  0 0 0 0.06 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper)" />
      </svg>

      {/* Sun circle — un po' off-center, peso visivo a destra */}
      <div style={{
        position: 'absolute', top: 220, right: 180,
        width: 380, height: 380, borderRadius: '50%',
        background: sun,
        boxShadow: '0 0 0 0 rgba(0,0,0,0)',
      }} />

      {/* Horizon brushstroke — single ink line that becomes the sea */}
      <svg width="1080" height="1080" viewBox="0 0 1080 1080"
           style={{ position: 'absolute', inset: 0 }}>
        {/* Brush horizon line */}
        <path
          d="M60,640 C220,628 380,650 540,640 C700,630 860,652 1020,638"
          stroke={ink} strokeWidth="3" fill="none" strokeLinecap="round"
          opacity="0.85"
        />
        {/* Soft second sea wash */}
        <path
          d="M60,680 C260,668 460,688 660,676 C820,668 940,684 1020,678"
          stroke={sea} strokeWidth="6" fill="none" strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M120,712 C300,704 500,720 700,710 C840,704 920,718 980,712"
          stroke={sea} strokeWidth="3" fill="none" strokeLinecap="round"
          opacity="0.35"
        />
        {/* Tiny ripple specks */}
        {[
          [200, 740], [340, 754], [480, 744], [620, 758], [760, 746], [880, 752],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2" fill={sea} opacity="0.55" />
        ))}
      </svg>

      {/* Top header — vertical title strip on left */}
      <div style={{
        position: 'absolute', top: 60, left: 60,
        fontSize: 13, letterSpacing: '0.4em', textTransform: 'uppercase',
        fontWeight: 700, lineHeight: 1.8, color: ink,
      }}>
        BeMore · Life Gym<br />
        <span style={{ opacity: 0.55 }}>Wellness Sunday — 01</span>
      </div>

      {/* Vertical date stamp on right */}
      <div style={{
        position: 'absolute', top: 60, right: 60, textAlign: 'right',
        fontFamily: '"Instrument Serif", serif',
      }}>
        <div style={{ fontSize: 96, lineHeight: 0.85, color: ink }}>10</div>
        <div style={{
          fontSize: 14, letterSpacing: '0.4em', textTransform: 'uppercase',
          fontWeight: 700, marginTop: 6, fontFamily: '"Inter", sans-serif',
        }}>Maggio · Dom</div>
      </div>

      {/* Headline — pulito, sotto l'orizzonte */}
      <div style={{
        position: 'absolute', top: 800, left: 60, right: 60,
      }}>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 92, lineHeight: 1, letterSpacing: '-0.015em',
          color: ink,
        }}>
          Respira <span style={{ fontStyle: 'italic', color: sun }}>l'orizzonte.</span>
        </div>
        <div style={{
          marginTop: 14, fontSize: 19, lineHeight: 1.4,
          color: ink, opacity: 0.7, maxWidth: 720,
        }}>
          Camminata zen e yoga sulla terrazza panoramica · domenica mattina · 10:00 → 12:00
        </div>
      </div>

      {/* Footer fine */}
      <div style={{
        position: 'absolute', bottom: 40, left: 60, right: 60,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase',
        fontWeight: 700, color: ink, opacity: 0.65,
      }}>
        <span>Terrazza fronte mare</span>
        <span>Gratuito · Community</span>
        <span>Iscrizioni WhatsApp</span>
      </div>

      {/* Logo bottom-center small */}
      <img src="assets/bemore-logo-dark.png" alt=""
           style={{
             position: 'absolute', bottom: 90, left: '50%',
             transform: 'translateX(-50%)',
             width: 56, height: 56, objectFit: 'contain', opacity: 0.85,
           }} />
    </div>
  );
};

window.VCZen = VCZen;
