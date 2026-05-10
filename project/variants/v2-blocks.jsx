// Variante 2 — Sole & mare a blocchi geometrici, più pop e diretto
const V2Blocks = () => {
  const sand = '#EFE3CE';
  const apricot = '#E89A6B';
  const sea = '#264F66';
  const cream = '#F8EFDD';
  const ink = '#1B1A18';

  return (
    <div style={{
      width: 1080, height: 1080, position: 'relative',
      background: sand, color: ink, overflow: 'hidden',
      fontFamily: '"Inter", system-ui, sans-serif',
    }}>
      {/* Geometric sun + sea composition top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 540,
        background: cream, overflow: 'hidden',
      }}>
        {/* Sea band */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 200,
          background: sea,
        }} />
        {/* Sea ripple lines */}
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{
            position: 'absolute', bottom: 200 - i * 28 - 14,
            left: 0, right: 0, height: 1.5,
            background: sea, opacity: 0.18 - i * 0.03,
          }} />
        ))}
        {/* Sun */}
        <div style={{
          position: 'absolute', top: 110, left: '50%', transform: 'translateX(-50%)',
          width: 320, height: 320, borderRadius: '50%',
          background: apricot,
          boxShadow: `0 0 0 24px rgba(232,154,107,0.18), 0 0 0 60px rgba(232,154,107,0.08)`,
        }} />
        {/* Sun reflection on sea */}
        <div style={{
          position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
          width: 80, height: 200,
          background: `linear-gradient(to bottom, rgba(232,154,107,0.85), rgba(232,154,107,0))`,
        }} />
        {/* Logo top-left badge */}
        <div style={{
          position: 'absolute', top: 40, left: 40,
          background: 'rgba(255,255,255,0.0)',
          display: 'flex', alignItems: 'center', gap: 12,
          fontSize: 16, letterSpacing: '0.2em', textTransform: 'uppercase',
          fontWeight: 600, color: ink,
        }}>
          <img src="assets/bemore-logo-dark.png" alt=""
               style={{ width: 44, height: 44, objectFit: 'contain' }} />
          BeMore · Community
        </div>
        {/* Date badge top-right */}
        <div style={{
          position: 'absolute', top: 40, right: 40,
          padding: '10px 18px', borderRadius: 999,
          border: `1.5px solid ${ink}`,
          fontSize: 14, letterSpacing: '0.2em', textTransform: 'uppercase',
          fontWeight: 600,
        }}>
          Dom · 10 Maggio
        </div>
      </div>

      {/* Title block */}
      <div style={{
        position: 'absolute', top: 580, left: 60, right: 60,
      }}>
        <div style={{
          fontSize: 22, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: sea, fontWeight: 700, marginBottom: 18,
        }}>
          Sunday Reset
        </div>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 132, lineHeight: 0.92, letterSpacing: '-0.015em',
          color: ink,
        }}>
          Camminata zen<br />
          <span style={{ fontStyle: 'italic', color: apricot }}>&amp; yoga</span> sul mare.
        </div>
      </div>

      {/* Bottom info */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: ink, color: cream, padding: '32px 60px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <Pill icon="◷" label="10:00 → 12:00" />
        <Divider />
        <Pill label="Terrazza panoramica" />
        <Divider />
        <Pill label="Free · WhatsApp" />
      </div>
    </div>
  );
};

const Pill = ({ icon, label }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 10,
    fontSize: 19, letterSpacing: '0.04em', fontWeight: 500,
  }}>
    {icon && <span style={{ fontSize: 22, opacity: 0.85 }}>{icon}</span>}
    {label}
  </div>
);
const Divider = () => (
  <div style={{ width: 1, height: 24, background: 'rgba(248,239,221,0.3)' }} />
);

window.V2Blocks = V2Blocks;
