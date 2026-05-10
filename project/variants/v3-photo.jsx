// Morning Reset — variante base condivisa, riutilizzata dalle 3 declinazioni
// Layout pulito senza sovrapposizioni: header alto / titolo centrale / pill sotto / info-strip in basso

const MorningBase = ({
  // Layout knobs
  skyGradient,
  sun,           // {top, size, color, halo}
  accentColor,   // colore parola "Reset." e pill
  pillBg,
  pillText = '#2A1810',
  ink = '#1B2A35',
  softInk = '#2E4453',
  cream = '#FFF6E8',
  logoSrc = 'assets/bemore-logo-dark.png',
  logoBig = false,
  showRipples = true,
  rippleColor = 'rgba(255,255,255,0.25)',
  reflection = true,
  decorations = null,    // optional extra svg/jsx layered over sky
  textShadowOnTitle = false,
}) => {
  return (
    <div style={{
      width: 1080, height: 1080, position: 'relative',
      overflow: 'hidden', color: ink,
      fontFamily: '"Inter", system-ui, sans-serif',
      background: cream,
    }}>
      {/* Sky + sea */}
      <div style={{ position: 'absolute', inset: 0, background: skyGradient }}>
        {/* Sun halo */}
        {sun.halo && (
          <div style={{
            position: 'absolute', top: sun.top - 70, left: '50%', transform: 'translateX(-50%)',
            width: sun.size + 280, height: sun.size + 280, borderRadius: '50%',
            background: `radial-gradient(circle, ${sun.halo} 0%, rgba(255,238,210,0) 65%)`,
            pointerEvents: 'none',
          }} />
        )}
        {/* Sun */}
        <div style={{
          position: 'absolute', top: sun.top, left: '50%', transform: 'translateX(-50%)',
          width: sun.size, height: sun.size, borderRadius: '50%',
          background: sun.color,
          boxShadow: sun.shadow || '0 0 100px 30px rgba(255,240,210,0.55)',
        }} />
        {/* Reflection */}
        {reflection && (
          <div style={{
            position: 'absolute', top: 600, left: '50%', transform: 'translateX(-50%)',
            width: 140, height: 360,
            background: 'linear-gradient(to bottom, rgba(255,240,200,0.5), rgba(255,240,200,0))',
            filter: 'blur(10px)',
          }} />
        )}
        {/* Ripples */}
        {showRipples && [...Array(7)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute', left: 0, right: 0,
            top: 640 + i * 48, height: 1, background: rippleColor,
          }} />
        ))}
        {decorations}
      </div>

      {/* Header */}
      <div style={{
        position: 'absolute', top: 56, left: 56, right: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        zIndex: 2,
      }}>
        <img src={logoSrc} alt="BeMore"
             style={{ width: logoBig ? 110 : 84, height: logoBig ? 110 : 84, objectFit: 'contain' }} />
        <div style={{
          fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase',
          fontWeight: 600, textAlign: 'right', lineHeight: 1.6,
          color: softInk,
        }}>
          Wellness Sunday<br />
          <span style={{ opacity: 0.65 }}>Vol. 01 — Maggio</span>
        </div>
      </div>

      {/* Cosa portare top-right */}
      <div style={{
        position: 'absolute', top: 210, right: 56,
        textAlign: 'right',
        fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: softInk, opacity: 0.9, lineHeight: 1.9, zIndex: 2,
      }}>
        Porta con te<br />
        <span style={{
          fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
          textTransform: 'none', letterSpacing: 0, fontSize: 22, opacity: 1, color: ink,
        }}>
          tappetino · acqua<br />outfit comodo
        </span>
      </div>

      {/* Title block — date pill SOPRA al titolo, niente overlap */}
      <div style={{
        position: 'absolute', left: 56, right: 56, bottom: 200, zIndex: 2,
      }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 16px', marginBottom: 22,
          background: pillBg, color: pillText,
          fontSize: 16, letterSpacing: '0.28em', textTransform: 'uppercase',
          fontWeight: 700, borderRadius: 4,
        }}>
          10 Maggio · 10:00–12:00
        </div>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 168, lineHeight: 0.9, letterSpacing: '-0.02em',
          fontWeight: 400, color: ink,
          textShadow: textShadowOnTitle ? '0 2px 24px rgba(255,246,232,0.55)' : 'none',
        }}>
          Morning<br />
          <span style={{ fontStyle: 'italic', color: accentColor }}>Reset.</span>
        </div>
        <div style={{
          marginTop: 18, fontSize: 22, lineHeight: 1.4, maxWidth: 700,
          color: softInk,
        }}>
          Camminata zen + yoga in terrazza panoramica.<br />
          Apri la domenica respirando l'orizzonte.
        </div>
      </div>

      {/* Bottom info strip */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '24px 56px',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        background: 'rgba(255,246,232,0.78)',
        borderTop: '1px solid rgba(27,42,53,0.12)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 16, letterSpacing: '0.04em', color: ink, zIndex: 2,
      }}>
        <Item k="Dove" v="Terrazza fronte mare" />
        <Item k="Per chi" v="Community BeMore" />
        <Item k="Costo" v="Gratuito" />
        <Item k="Iscrizioni" v="WhatsApp" />
      </div>
    </div>
  );
};

const Item = ({ k, v }) => (
  <div>
    <div style={{
      fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
      opacity: 0.55, marginBottom: 4,
    }}>{k}</div>
    <div style={{ fontSize: 18, fontWeight: 500 }}>{v}</div>
  </div>
);

// === Variante 3.1 — Mattina chiara originale rifinita ===
const V3Light = () => (
  <MorningBase
    skyGradient={`linear-gradient(180deg,
      #FFF4E2 0%, #FCE7CC 14%, #F8D6B8 26%, #F2C2A8 38%,
      #DDB7AE 47%, #B7C8C9 53%, #92BCC5 60%, #79AFBF 72%,
      #5E9EB4 88%, #4D90A8 100%)`}
    sun={{
      top: 200, size: 240,
      color: 'radial-gradient(circle, #FFFBF1 0%, #FFEDD0 55%, #FBD9B0 100%)',
      halo: 'rgba(255,238,210,0.55)',
      shadow: '0 0 100px 30px rgba(255,240,210,0.7), 0 0 200px 60px rgba(255,225,185,0.35)',
    }}
    accentColor="#C45A3D"
    pillBg="#F4B58A"
    textShadowOnTitle
  />
);

// === Variante 3.2 — Pastello quasi monocromo, cielo lattiginoso ===
const V3Pastel = () => (
  <MorningBase
    skyGradient={`linear-gradient(180deg,
      #FBF1E6 0%, #F6E4D2 18%, #EFD4C3 32%, #E5C5BC 44%,
      #CFC1C2 52%, #B7C5CC 60%, #9CC0CB 74%, #87B6C4 88%, #74A8B8 100%)`}
    sun={{
      top: 230, size: 200,
      color: 'radial-gradient(circle, #FFFCF4 0%, #FFEEDB 60%, #F6D6B8 100%)',
      halo: 'rgba(255,235,210,0.4)',
      shadow: '0 0 80px 24px rgba(255,235,210,0.5), 0 0 160px 50px rgba(255,220,190,0.22)',
    }}
    accentColor="#A85738"
    pillBg="#EBC2A2"
    softInk="#3B4F5A"
  />
);

// === Variante 3.3 — Albicocca caldo, sole più presente ===
const V3Warm = () => {
  // birds silhouette — vita, non kitsch
  const birds = (
    <svg viewBox="0 0 1080 1080" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <g stroke="#2E3A3F" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.55">
        <path d="M170,330 q14,-12 28,0 q14,-12 28,0" />
        <path d="M250,290 q10,-8 20,0 q10,-8 20,0" />
        <path d="M820,360 q12,-10 24,0 q12,-10 24,0" />
      </g>
    </svg>
  );
  return (
    <MorningBase
      skyGradient={`linear-gradient(180deg,
        #FFE6C2 0%, #FFD4A2 14%, #FBBE89 28%, #F1A77B 42%,
        #C99A8A 50%, #8FAFB6 60%, #6FA1B0 74%, #5293A8 88%, #3F86A0 100%)`}
      sun={{
        top: 220, size: 280,
        color: 'radial-gradient(circle, #FFF6DD 0%, #FFD9A8 55%, #F0A977 100%)',
        halo: 'rgba(255,200,140,0.55)',
        shadow: '0 0 110px 36px rgba(255,200,140,0.7), 0 0 220px 70px rgba(245,170,110,0.3)',
      }}
      accentColor="#7A2E1E"
      pillBg="#E48455"
      pillText="#2A1208"
      decorations={birds}
    />
  );
};

window.V3Light = V3Light;
window.V3Pastel = V3Pastel;
window.V3Warm = V3Warm;
window.V3Photo = V3Light; // backwards-compat per il file principale
