// Variante B — Tipografica brutalist-soft: solo type, ritmo da magazine
const VBType = () => {
  const cream = '#F6EFE2';
  const apricot = '#E27B4A';
  const ink = '#0F0F0E';

  return (
    <div style={{
      width: 1080, height: 1080, position: 'relative', overflow: 'hidden',
      background: cream, color: ink,
      fontFamily: '"Inter", system-ui, sans-serif',
    }}>
      {/* Top meta row */}
      <div style={{
        position: 'absolute', top: 56, left: 56, right: 56,
        display: 'flex', justifyContent: 'space-between',
        fontSize: 13, letterSpacing: '0.32em', textTransform: 'uppercase',
        fontWeight: 700, paddingBottom: 18, borderBottom: `2px solid ${ink}`,
      }}>
        <span>Issue 01</span>
        <span>Wellness Sunday</span>
        <span>BeMore Life Gym</span>
      </div>

      {/* Date — gigante */}
      <div style={{
        position: 'absolute', top: 130, left: 50, right: 50,
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 460, lineHeight: 0.78, letterSpacing: '-0.04em',
          color: ink, fontWeight: 400,
        }}>
          10
        </div>
        <div style={{
          fontSize: 22, letterSpacing: '0.5em', textTransform: 'uppercase',
          fontWeight: 700, color: ink, marginTop: -8,
        }}>
          Maggio · Domenica
        </div>
      </div>

      {/* Mid divider with apricot bar */}
      <div style={{
        position: 'absolute', top: 600, left: 0, right: 0, height: 56,
        background: apricot,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 56px',
      }}>
        <span style={{
          fontSize: 18, letterSpacing: '0.4em', textTransform: 'uppercase',
          fontWeight: 800, color: cream,
        }}>
          ◜ 10:00 — 12:00 ◝
        </span>
        <span style={{
          fontSize: 18, letterSpacing: '0.4em', textTransform: 'uppercase',
          fontWeight: 800, color: cream,
        }}>
          Free entry
        </span>
      </div>

      {/* Headline a destra/centro */}
      <div style={{
        position: 'absolute', top: 690, left: 56, right: 56,
      }}>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 122, lineHeight: 0.95, letterSpacing: '-0.02em',
          color: ink, fontWeight: 400,
        }}>
          Camminata zen<br />
          <span style={{ fontStyle: 'italic', color: apricot }}>+ yoga</span>
          <span style={{ fontSize: 70, marginLeft: 18, opacity: 0.5 }}>—</span>
          <span style={{ fontSize: 70 }}> sul mare.</span>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{
        position: 'absolute', bottom: 56, left: 56, right: 56,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        paddingTop: 22, borderTop: `2px solid ${ink}`,
      }}>
        <div>
          <div style={{
            fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase',
            fontWeight: 700, opacity: 0.55, marginBottom: 6,
          }}>Dove</div>
          <div style={{ fontSize: 22, fontWeight: 600 }}>Terrazza fronte mare</div>
        </div>
        <div>
          <div style={{
            fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase',
            fontWeight: 700, opacity: 0.55, marginBottom: 6,
          }}>Cosa portare</div>
          <div style={{ fontSize: 22, fontWeight: 600 }}>Tappetino · Acqua</div>
        </div>
        <div>
          <div style={{
            fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase',
            fontWeight: 700, opacity: 0.55, marginBottom: 6,
          }}>Iscrizioni</div>
          <div style={{ fontSize: 22, fontWeight: 600 }}>WhatsApp →</div>
        </div>
        <img src="assets/bemore-logo-dark.png" alt=""
             style={{ width: 80, height: 80, objectFit: 'contain' }} />
      </div>
    </div>
  );
};

window.VBType = VBType;
