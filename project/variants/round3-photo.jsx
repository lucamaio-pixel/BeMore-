// Round 3 — basato sulla foto vera della terrazza
// Tre direzioni completamente nuove con la foto come protagonista

// Palette estratta dalla foto: terracotta pavimento, crema ombrellone, azzurro cielo, verde piante
const PALETTE = {
  terracotta: '#B85D3C',
  terracottaDeep: '#8B3F25',
  cream: '#F4ECD8',
  creamWarm: '#EFE2C8',
  sky: '#7FB4D1',
  skyDeep: '#3D7A95',
  ink: '#1A1410',
  softInk: '#3D2E22',
  sage: '#6B7A52',
};

// =================================================================
// VARIANTE R3-A · Editorial split
// Foto in alto a tutta larghezza, blocco crema sotto con tipografia
// =================================================================
const R3Editorial = () => {
  const p = PALETTE;
  return (
    <div style={{
      width: 1080, height: 1080, position: 'relative',
      background: p.cream, color: p.ink, overflow: 'hidden',
      fontFamily: '"Inter", system-ui, sans-serif',
    }}>
      {/* Photo top — 60% */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 640,
        overflow: 'hidden',
      }}>
        <img src="assets/terrazza.png" alt="Terrazza"
             style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {/* Subtle bottom fade for the masthead */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(244,236,216,0.35) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Top masthead overlay */}
        <div style={{
          position: 'absolute', top: 40, left: 48, right: 48,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          color: p.cream,
        }}>
          <div style={{
            fontSize: 13, letterSpacing: '0.4em', textTransform: 'uppercase',
            fontWeight: 700, lineHeight: 1.4,
          }}>
            BeMore Community<br />
            <span style={{ opacity: 0.75, fontWeight: 500 }}>№ 01 — Wellness Sunday</span>
          </div>
          <div style={{
            padding: '8px 14px', border: '1.5px solid rgba(244,236,216,0.85)',
            borderRadius: 999,
            fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase',
            fontWeight: 700,
          }}>
            Domenica · 10 Maggio
          </div>
        </div>

        {/* Caption bottom-left of photo */}
        <div style={{
          position: 'absolute', bottom: 18, left: 48,
          fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
          color: p.cream, opacity: 0.85, fontWeight: 600,
        }}>
          ↳ La terrazza, ore 10:00
        </div>
      </div>

      {/* Cream block bottom */}
      <div style={{
        position: 'absolute', top: 640, left: 0, right: 0, bottom: 0,
        padding: '44px 48px 0',
      }}>
        {/* Eyebrow */}
        <div style={{
          fontSize: 13, letterSpacing: '0.4em', textTransform: 'uppercase',
          fontWeight: 700, color: p.terracotta, marginBottom: 14,
        }}>
          Camminata zen + Yoga · 10:00 → 12:00
        </div>

        {/* Big editorial headline */}
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 124, lineHeight: 0.92, letterSpacing: '-0.02em',
          color: p.ink, marginBottom: 18,
        }}>
          Una domenica<br />
          <span style={{ fontStyle: 'italic', color: p.terracotta }}>fronte mare.</span>
        </div>

        {/* Body copy + meta column */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: 40, alignItems: 'end',
          position: 'absolute', bottom: 30, left: 48, right: 48,
        }}>
          <div style={{
            fontSize: 18, lineHeight: 1.45, color: p.softInk, maxWidth: 540,
          }}>
            Apri la settimana respirando l'orizzonte.<br />
            Camminata in silenzio, yoga al sole sulla nostra terrazza.<br />
            <span style={{ opacity: 0.7, fontSize: 14, letterSpacing: '0.06em' }}>
              Porta tappetino · acqua · outfit comodo
            </span>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 18,
            paddingLeft: 24, borderLeft: `1px solid ${p.softInk}33`,
          }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase',
                fontWeight: 700, color: p.softInk, opacity: 0.6, marginBottom: 4,
              }}>
                Free · Community
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: p.ink }}>
                Iscrizioni WhatsApp →
              </div>
            </div>
            <img src="assets/bemore-logo-dark.png" alt=""
                 style={{ width: 64, height: 64, objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

// =================================================================
// VARIANTE R3-B · Polaroid / collage analogico
// =================================================================
const R3Polaroid = () => {
  const p = PALETTE;
  return (
    <div style={{
      width: 1080, height: 1080, position: 'relative',
      background: p.creamWarm, color: p.ink, overflow: 'hidden',
      fontFamily: '"Inter", system-ui, sans-serif',
    }}>
      {/* Paper grain */}
      <svg width="1080" height="1080" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }}>
        <filter id="r3paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0.4  0 0 0 0 0.32  0 0 0 0 0.22  0 0 0 0.05 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#r3paper)" />
      </svg>

      {/* Top label strip */}
      <div style={{
        position: 'absolute', top: 50, left: 56, right: 56,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingBottom: 14, borderBottom: `1.5px solid ${p.ink}`,
      }}>
        <div style={{
          fontSize: 13, letterSpacing: '0.4em', textTransform: 'uppercase',
          fontWeight: 700, color: p.ink,
        }}>
          BeMore · Life Gym
        </div>
        <div style={{
          fontSize: 13, letterSpacing: '0.4em', textTransform: 'uppercase',
          fontWeight: 700, color: p.terracotta,
        }}>
          Wellness Sunday №01
        </div>
      </div>

      {/* Polaroid photo — slightly rotated */}
      <div style={{
        position: 'absolute', top: 130, left: 110,
        transform: 'rotate(-3deg)',
        background: '#FBF7EC',
        padding: '16px 16px 56px',
        boxShadow: '0 22px 50px rgba(40,25,15,0.22), 0 6px 14px rgba(40,25,15,0.12)',
        width: 640,
      }}>
        <img src="assets/terrazza.png" alt=""
             style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block' }} />
        <div style={{
          position: 'absolute', bottom: 20, left: 28,
          fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
          fontSize: 28, color: p.softInk,
        }}>
          la terrazza · vol. 01
        </div>
        <div style={{
          position: 'absolute', bottom: 24, right: 28,
          fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
          fontWeight: 700, color: p.terracotta,
        }}>
          10·05·26
        </div>
      </div>

      {/* Tape pieces */}
      <div style={{
        position: 'absolute', top: 110, left: 320, width: 130, height: 30,
        background: 'rgba(232,180,120,0.55)', transform: 'rotate(-8deg)',
        boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
      }} />
      <div style={{
        position: 'absolute', top: 588, left: 200, width: 110, height: 28,
        background: 'rgba(127,180,209,0.55)', transform: 'rotate(6deg)',
        boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
      }} />

      {/* Floating sticker — date */}
      <div style={{
        position: 'absolute', top: 175, right: 70,
        width: 200, height: 200, borderRadius: '50%',
        background: p.terracotta, color: p.cream,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        transform: 'rotate(8deg)',
        boxShadow: '0 14px 30px rgba(139,63,37,0.35)',
        textAlign: 'center', padding: 20,
      }}>
        <div style={{
          fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase',
          fontWeight: 700, opacity: 0.85, marginBottom: 4,
        }}>Domenica</div>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 92, lineHeight: 0.9,
        }}>10</div>
        <div style={{
          fontSize: 13, letterSpacing: '0.36em', textTransform: 'uppercase',
          fontWeight: 700, marginTop: 4,
        }}>Maggio</div>
        <div style={{
          fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
          fontWeight: 600, marginTop: 10, opacity: 0.85,
          paddingTop: 8, borderTop: '1px solid rgba(244,236,216,0.4)',
        }}>10:00 → 12:00</div>
      </div>

      {/* Bottom title */}
      <div style={{
        position: 'absolute', left: 56, right: 56, bottom: 130,
      }}>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 108, lineHeight: 0.92, letterSpacing: '-0.02em',
          color: p.ink,
        }}>
          Camminata zen <span style={{ fontStyle: 'italic', color: p.terracotta }}>&amp; yoga</span><br />
          sul mare.
        </div>
      </div>

      {/* Bottom info row */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: p.ink, color: p.cream,
        padding: '22px 56px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <Pill label="Terrazza fronte mare" />
        <Dot />
        <Pill label="Free · solo community" />
        <Dot />
        <Pill label="Iscrizioni WhatsApp" />
        <img src="assets/bemore-logo-white.png" alt=""
             style={{ width: 44, height: 44, objectFit: 'contain', marginLeft: 12 }} />
      </div>
    </div>
  );
};

const Pill = ({ label }) => (
  <span style={{
    fontSize: 13, letterSpacing: '0.28em', textTransform: 'uppercase',
    fontWeight: 600,
  }}>{label}</span>
);
const Dot = () => (
  <span style={{
    width: 4, height: 4, borderRadius: '50%',
    background: 'rgba(244,236,216,0.4)',
  }} />
);

// =================================================================
// VARIANTE R3-C · Magazine cover
// Foto full-bleed, masthead, titolone, coverlines
// =================================================================
const R3MagCover = () => {
  const p = PALETTE;
  return (
    <div style={{
      width: 1080, height: 1080, position: 'relative',
      overflow: 'hidden', color: p.cream, background: p.ink,
      fontFamily: '"Inter", system-ui, sans-serif',
    }}>
      {/* Full-bleed photo */}
      <img src="assets/terrazza.png" alt=""
           style={{
             position: 'absolute', inset: 0,
             width: '100%', height: '100%', objectFit: 'cover',
           }} />
      {/* Editorial gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(20,12,8,0.55) 0%, rgba(20,12,8,0.05) 30%, rgba(20,12,8,0) 55%, rgba(20,12,8,0.55) 100%)',
      }} />

      {/* Masthead */}
      <div style={{
        position: 'absolute', top: 50, left: 50, right: 50,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        paddingBottom: 18, borderBottom: '1.5px solid rgba(244,236,216,0.85)',
      }}>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 72, lineHeight: 0.85, letterSpacing: '-0.02em',
        }}>
          BeMore<span style={{ fontStyle: 'italic', color: p.creamWarm }}>.</span>
        </div>
        <div style={{
          textAlign: 'right',
          fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase',
          fontWeight: 700, lineHeight: 1.7, opacity: 0.92,
        }}>
          № 01 · Maggio '26<br />
          Wellness Sunday Issue
        </div>
      </div>

      {/* Darker overlay band behind title for readability */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: 340, height: 360,
        background: 'linear-gradient(180deg, rgba(20,12,8,0) 0%, rgba(20,12,8,0.45) 30%, rgba(20,12,8,0.55) 70%, rgba(20,12,8,0) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Cover headline */}
      <div style={{
        position: 'absolute', left: 50, right: 50, top: 380,
      }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 14px', marginBottom: 22,
          background: p.cream, color: p.terracottaDeep,
          fontSize: 13, letterSpacing: '0.32em', textTransform: 'uppercase',
          fontWeight: 800,
        }}>
          La copertina di maggio
        </div>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 168, lineHeight: 0.88, letterSpacing: '-0.025em',
          textShadow: '0 4px 30px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.6)',
        }}>
          Respira<br />
          <span style={{ fontStyle: 'italic', color: '#FFD9A8' }}>l'orizzonte.</span>
        </div>
      </div>

      {/* Coverlines — left rail */}
      <div style={{
        position: 'absolute', left: 50, bottom: 200,
        maxWidth: 480,
        fontSize: 17, lineHeight: 1.5, color: p.cream,
      }}>
        <div style={{
          fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase',
          fontWeight: 700, marginBottom: 10, color: '#FFD9A8',
        }}>In questo numero</div>
        <div style={{ borderTop: '1px solid rgba(244,236,216,0.45)', paddingTop: 8 }}>
          <strong>p. 02 —</strong> Camminata zen, in silenzio, dalle 10:00.
        </div>
        <div style={{ borderTop: '1px solid rgba(244,236,216,0.25)', paddingTop: 8, marginTop: 8 }}>
          <strong>p. 04 —</strong> Yoga sul tetto, fino a mezzogiorno.
        </div>
        <div style={{ borderTop: '1px solid rgba(244,236,216,0.25)', paddingTop: 8, marginTop: 8 }}>
          <strong>p. 06 —</strong> Cosa portare: tappetino, acqua, outfit comodo.
        </div>
      </div>

      {/* Date stamp right */}
      <div style={{
        position: 'absolute', right: 50, bottom: 180, textAlign: 'right',
      }}>
        <div style={{
          fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase',
          fontWeight: 700, opacity: 0.75, marginBottom: 4,
        }}>Domenica</div>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 132, lineHeight: 0.85, letterSpacing: '-0.03em',
        }}>10</div>
        <div style={{
          fontSize: 13, letterSpacing: '0.4em', textTransform: 'uppercase',
          fontWeight: 700, marginTop: -4,
        }}>Maggio · 10–12</div>
      </div>

      {/* Footer barcode-ish */}
      <div style={{
        position: 'absolute', bottom: 50, left: 50, right: 50,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: 18, borderTop: '1px solid rgba(244,236,216,0.45)',
        fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase',
        fontWeight: 700, opacity: 0.95,
      }}>
        <span>Terrazza fronte mare</span>
        <span>Free for community</span>
        <span>Iscrizioni · WhatsApp</span>
        <img src="assets/bemore-logo-white.png" alt=""
             style={{ width: 40, height: 40, objectFit: 'contain' }} />
      </div>
    </div>
  );
};

window.R3Editorial = R3Editorial;
window.R3Polaroid = R3Polaroid;
window.R3MagCover = R3MagCover;
