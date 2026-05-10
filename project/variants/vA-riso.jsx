// Variante A — Risograph: due tinte sovrapposte, illustrazione piatta tipo poster yoga indie
const VARiso = () => {
  const paper = '#F2EAD8';   // cream paper
  const peach = '#F2A47A';   // riso peach
  const blue  = '#5B7E9C';   // riso blue
  const ink   = '#2A2520';

  // Riso noise SVG — fine grain
  const noise = "data:image/svg+xml;utf8," + encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
      <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
        <feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#n)' opacity='0.5'/>
    </svg>`);

  return (
    <div style={{
      width: 1080, height: 1080, position: 'relative', overflow: 'hidden',
      background: paper, color: ink,
      fontFamily: '"Inter", system-ui, sans-serif',
    }}>
      {/* Big peach sun (riso layer 1) */}
      <div style={{
        position: 'absolute', top: 130, left: '50%', transform: 'translateX(-50%)',
        width: 620, height: 620, borderRadius: '50%',
        background: peach, mixBlendMode: 'multiply',
        filter: 'contrast(0.95)',
      }} />

      {/* Hill silhouettes / horizon (riso layer 2) */}
      <svg width="1080" height="1080" viewBox="0 0 1080 1080"
           style={{ position: 'absolute', inset: 0, mixBlendMode: 'multiply' }}>
        {/* Far hills */}
        <path d="M0,640 C160,600 280,610 420,630 C560,650 720,640 880,615 C960,602 1020,608 1080,615 L1080,1080 L0,1080 Z"
              fill={blue} opacity="0.55" />
        {/* Mid hills */}
        <path d="M0,720 C140,690 320,705 480,725 C640,745 820,735 1080,705 L1080,1080 L0,1080 Z"
              fill={blue} opacity="0.75" />
        {/* Yoga figure silhouette — seated meditation */}
        <g transform="translate(540,820)" fill={ink} opacity="0.92">
          {/* head */}
          <circle cx="0" cy="-90" r="28" />
          {/* body lotus pose */}
          <path d="M-90,40 C-90,-30 -50,-65 0,-65 C50,-65 90,-30 90,40 Z" />
          {/* arms resting */}
          <ellipse cx="-65" cy="20" rx="25" ry="10" />
          <ellipse cx="65" cy="20" rx="25" ry="10" />
        </g>
        {/* Subtle horizon line */}
        <line x1="0" y1="640" x2="1080" y2="640" stroke={ink} strokeWidth="1.2" opacity="0.25" />
      </svg>

      {/* Riso grain overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("${noise}")`,
        backgroundSize: '200px 200px',
        mixBlendMode: 'multiply', opacity: 0.4, pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{
        position: 'absolute', top: 50, left: 60, right: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{
          fontSize: 14, letterSpacing: '0.32em', textTransform: 'uppercase',
          fontWeight: 700, color: ink,
        }}>
          BeMore · Life Gym
        </div>
        <div style={{
          fontSize: 14, letterSpacing: '0.32em', textTransform: 'uppercase',
          fontWeight: 700, color: ink, opacity: 0.7,
        }}>
          № 01 / Maggio
        </div>
      </div>

      {/* Title */}
      <div style={{
        position: 'absolute', top: 64, left: 0, right: 0,
        textAlign: 'center',
      }}>
        <div style={{
          marginTop: 30,
          fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
          fontSize: 78, lineHeight: 1, color: ink,
        }}>
          una mattina di
        </div>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 200, lineHeight: 0.92, letterSpacing: '-0.02em',
          color: ink, marginTop: 4,
        }}>
          Yoga
        </div>
        <div style={{
          fontSize: 22, letterSpacing: '0.5em', textTransform: 'uppercase',
          fontWeight: 700, color: ink, marginTop: 6,
        }}>
          &amp; camminata zen
        </div>
      </div>

      {/* Bottom info card */}
      <div style={{
        position: 'absolute', bottom: 50, left: 60, right: 60,
        background: paper, border: `1.5px solid ${ink}`,
        padding: '22px 28px',
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto',
        gap: 20, alignItems: 'center',
      }}>
        <Cell label="Domenica" value="10 maggio" ink={ink} />
        <Cell label="Orario" value="10—12" ink={ink} />
        <Cell label="Dove" value="Terrazza fronte mare" ink={ink} />
        <img src="assets/bemore-logo-dark.png" alt=""
             style={{ width: 56, height: 56, objectFit: 'contain', justifySelf: 'end' }} />
      </div>

      {/* Side stamps */}
      <div style={{
        position: 'absolute', top: 540, left: 36,
        transform: 'rotate(-90deg)', transformOrigin: 'left top',
        fontSize: 13, letterSpacing: '0.4em', textTransform: 'uppercase',
        fontWeight: 700, color: ink, opacity: 0.7,
      }}>
        Free · Community only
      </div>
      <div style={{
        position: 'absolute', top: 540, right: 36,
        transform: 'rotate(90deg)', transformOrigin: 'right top',
        fontSize: 13, letterSpacing: '0.4em', textTransform: 'uppercase',
        fontWeight: 700, color: ink, opacity: 0.7,
      }}>
        Iscrizioni · WhatsApp
      </div>
    </div>
  );
};

const Cell = ({ label, value, ink }) => (
  <div>
    <div style={{
      fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase',
      fontWeight: 700, opacity: 0.55, marginBottom: 4,
    }}>{label}</div>
    <div style={{
      fontFamily: '"Instrument Serif", serif', fontSize: 30, color: ink, lineHeight: 1.1,
    }}>{value}</div>
  </div>
);

window.VARiso = VARiso;
