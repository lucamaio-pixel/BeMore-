// Variante 1 — Editoriale crema con titolo serif italico grande
const V1Editorial = () => {
  const cream = '#F4E9D8';
  const ink = '#1F1A14';
  const apricot = 'oklch(0.72 0.13 55)';
  const sea = 'oklch(0.42 0.08 230)';

  return (
    <div style={{
      width: 1080, height: 1080, position: 'relative',
      background: cream, color: ink,
      fontFamily: '"Inter", system-ui, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Sun arc top right */}
      <div style={{
        position: 'absolute', top: -260, right: -200, width: 720, height: 720,
        borderRadius: '50%',
        background: `radial-gradient(circle at 30% 70%, ${apricot} 0%, ${apricot} 45%, transparent 70%)`,
        opacity: 0.55,
      }} />

      {/* Top bar */}
      <div style={{
        position: 'absolute', top: 56, left: 56, right: 56,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase',
        fontWeight: 500,
      }}>
        <span>BeMore Life Gym</span>
        <span style={{ color: sea }}>Wellness Sunday — Vol. 01</span>
      </div>

      {/* Hairline */}
      <div style={{
        position: 'absolute', top: 100, left: 56, right: 56,
        height: 1, background: ink, opacity: 0.25,
      }} />

      {/* Main title */}
      <div style={{
        position: 'absolute', top: 180, left: 56, right: 56,
      }}>
        <div style={{
          fontFamily: '"Instrument Serif", "Times New Roman", serif',
          fontSize: 220, lineHeight: 0.88, letterSpacing: '-0.02em',
          fontWeight: 400,
        }}>
          Respira
        </div>
        <div style={{
          fontFamily: '"Instrument Serif", "Times New Roman", serif',
          fontStyle: 'italic',
          fontSize: 220, lineHeight: 0.88, letterSpacing: '-0.02em',
          fontWeight: 400,
          color: sea,
          marginTop: 8,
        }}>
          il mare.
        </div>
        <div style={{
          marginTop: 36, fontSize: 26, lineHeight: 1.45, maxWidth: 720,
          color: 'rgba(31,26,20,0.78)',
        }}>
          Una mattina di camminata zen e yoga sulla terrazza panoramica,
          con il sole che si alza dall'orizzonte. Niente cronometri, solo respiro.
        </div>
      </div>

      {/* Bottom info grid */}
      <div style={{
        position: 'absolute', bottom: 56, left: 56, right: 56,
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto',
        gap: 32, alignItems: 'end',
      }}>
        <InfoBlock label="Quando" value="Domenica" sub="10 maggio" ink={ink} />
        <InfoBlock label="Orario" value="10:00" sub="— 12:00" ink={ink} />
        <InfoBlock label="Dove" value="Terrazza" sub="fronte mare" ink={ink} />
        <img src="assets/bemore-logo-dark.png" alt="BeMore"
             style={{ width: 110, height: 110, objectFit: 'contain', justifySelf: 'end' }} />
      </div>

      {/* Tag */}
      <div style={{
        position: 'absolute', top: 980, left: 56,
        fontSize: 16, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: apricot, fontWeight: 600,
      }}>
        Gratuito · Solo community · Iscrizione WhatsApp
      </div>
    </div>
  );
};

const InfoBlock = ({ label, value, sub, ink }) => (
  <div>
    <div style={{
      fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase',
      color: 'rgba(31,26,20,0.55)', marginBottom: 10, fontWeight: 600,
    }}>{label}</div>
    <div style={{
      fontFamily: '"Instrument Serif", serif', fontSize: 56, lineHeight: 1,
      color: ink,
    }}>{value}</div>
    <div style={{ fontSize: 18, marginTop: 4, color: 'rgba(31,26,20,0.7)' }}>{sub}</div>
  </div>
);

window.V1Editorial = V1Editorial;
