import { useState, useEffect } from 'react'
import './ReturnFlightScene.css'

const PHASES = ['flying', 'arrival']

export default function ReturnFlightScene({ onRestart }) {
  const [phase, setPhase] = useState(0)
  const [planePos, setPlanePos] = useState(0)

  useEffect(() => {
    if (phase === 0) {
      const interval = setInterval(() => {
        setPlanePos(p => {
          if (p >= 85) {
            clearInterval(interval)
            setTimeout(() => setPhase(1), 600)
            return 85
          }
          return p + 1.5
        })
      }, 40)
      return () => clearInterval(interval)
    }
  }, [phase])

  const texts = [
    {
      title: 'SOMEWHERE OVER NEVADA',
      lines: ['Five hours. The country passes below.', 'Everything you know is in front of you.'],
    },
    {
      title: 'JFK · 6:47AM',
      lines: ['Suddenly everything feels right.', '', 'THE END.'],
    },
  ]

  const current = texts[phase]

  return (
    <div className="rf-scene">
      <div className="rf-map">
        {phase === 0 && (
          <svg viewBox="0 0 480 200" className="rf-us-svg">
            <path
              d="M60,60 L80,45 L120,40 L160,38 L200,42 L240,40 L280,38 L320,42 L360,48 L390,55 L400,70 L395,90 L380,110 L360,125 L330,135 L300,138 L280,130 L260,135 L240,140 L220,138 L200,140 L180,138 L160,140 L140,135 L120,130 L100,120 L80,110 L65,95 L60,80 Z"
              fill="#2A4A5E" stroke="#3A6A8A" strokeWidth="2"
            />
            <line x1="160" y1="38" x2="160" y2="135" stroke="#3A6A8A" strokeWidth="0.5" strokeDasharray="3,3" />
            <line x1="240" y1="40" x2="240" y2="140" stroke="#3A6A8A" strokeWidth="0.5" strokeDasharray="3,3" />
            <line x1="320" y1="42" x2="320" y2="135" stroke="#3A6A8A" strokeWidth="0.5" strokeDasharray="3,3" />
            <circle cx="390" cy="72" r="5" fill="#E07A5F" />
            <text x="382" y="65" fill="#E07A5F" fontSize="8" fontFamily="'Press Start 2P', monospace">JFK</text>
            <circle cx="75" cy="85" r="5" fill="#5BB8E0" />
            <text x="50" y="110" fill="#5BB8E0" fontSize="8" fontFamily="'Press Start 2P', monospace">SFO</text>
            <path d="M75,85 Q240,20 390,72" fill="none" stroke="#5B8FA8" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6" />
            <g transform={`translate(${75 + (planePos * 3.7)},${85 - Math.sin((planePos / 85) * Math.PI) * 52})`}>
              <rect x="-6" y="-3" width="12" height="5" fill="#F0F4F8" rx="1" />
              <polygon points="6,-3 12,0 6,2" fill="#F0F4F8" />
              <rect x="-2" y="-7" width="8" height="3" fill="#D0E4EE" />
            </g>
          </svg>
        )}

        {phase === 1 && <NycSunrise />}
      </div>

      <div className="rf-text-box">
        <div className="rf-location">{current.title}</div>
        <div className="rf-body">
          {current.lines.map((line, i) => (
            <div key={i} className={line === '' ? 'rf-spacer' : 'rf-line'}>{line}</div>
          ))}
        </div>
        {phase < PHASES.length - 1 ? (
          <button
            className="rf-btn"
            onClick={() => phase !== 0 && setPhase(p => p + 1)}
            disabled={phase === 0}
          >
            {phase === 0 ? '· · ·' : 'continue ►'}
          </button>
        ) : (
          <button className="rf-btn rf-btn-restart" onClick={onRestart}>
            ► play again
          </button>
        )}
      </div>
    </div>
  )
}

function NycSunrise() {
  const buildings = [
    { x: 0,   y: 138, w: 12, h: 27 },
    { x: 13,  y: 128, w: 16, h: 37 },
    { x: 30,  y: 118, w: 10, h: 47 },
    { x: 41,  y: 125, w: 18, h: 40 },
    { x: 60,  y: 112, w: 12, h: 53 },
    { x: 73,  y: 120, w: 14, h: 45 },
    { x: 88,  y: 128, w: 10, h: 37 },
    // ESB cluster
    { x: 99,  y: 95,  w: 16, h: 70 },
    { x: 103, y: 78,  w: 8,  h: 17 },
    { x: 106, y: 62,  w: 2,  h: 16 },
    { x: 116, y: 118, w: 18, h: 47 },
    { x: 135, y: 110, w: 14, h: 55 },
    { x: 150, y: 120, w: 10, h: 45 },
    { x: 161, y: 108, w: 20, h: 57 },
    { x: 182, y: 118, w: 12, h: 47 },
    { x: 195, y: 112, w: 16, h: 53 },
    { x: 212, y: 122, w: 14, h: 43 },
    { x: 227, y: 115, w: 18, h: 50 },
    { x: 246, y: 125, w: 10, h: 40 },
    { x: 257, y: 118, w: 16, h: 47 },
    { x: 274, y: 112, w: 12, h: 53 },
    { x: 287, y: 120, w: 18, h: 45 },
    { x: 306, y: 128, w: 10, h: 37 },
    { x: 317, y: 122, w: 14, h: 43 },
    { x: 332, y: 130, w: 12, h: 35 },
    { x: 345, y: 125, w: 16, h: 40 },
    { x: 362, y: 132, w: 10, h: 33 },
    { x: 373, y: 128, w: 14, h: 37 },
    { x: 388, y: 135, w: 12, h: 30 },
    { x: 401, y: 130, w: 18, h: 35 },
    { x: 420, y: 138, w: 10, h: 27 },
    { x: 431, y: 133, w: 14, h: 32 },
    { x: 446, y: 140, w: 12, h: 25 },
    { x: 459, y: 135, w: 21, h: 30 },
  ]

  return (
    <svg viewBox="0 0 480 200" className="nyc-sunrise-svg" style={{ animation: 'bridge-fade 0.8s ease-out' }}>
      <defs>
        <linearGradient id="sr-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A7A9B" />
          <stop offset="45%" stopColor="#E8956D" />
          <stop offset="75%" stopColor="#F5C47A" />
          <stop offset="100%" stopColor="#F8D98A" />
        </linearGradient>
        <linearGradient id="sr-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8784A" />
          <stop offset="100%" stopColor="#8B4020" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="480" height="165" fill="url(#sr-sky)" />

      {/* Sun glow */}
      <circle cx="340" cy="148" r="32" fill="#F5C47A" opacity="0.2" />
      <circle cx="340" cy="148" r="20" fill="#F5C47A" opacity="0.35" />
      <circle cx="340" cy="148" r="11" fill="#FFE080" opacity="0.85" />

      <rect x="0" y="165" width="480" height="35" fill="url(#sr-water)" />
      <rect x="0" y="165" width="480" height="2" fill="#F5C47A" opacity="0.4" />

      {buildings.map((b, i) => (
        <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill="#1A2A38" />
      ))}

      {/* Window lights */}
      <rect x="101" y="100" width="2" height="2" fill="#F5C47A" opacity="0.7" />
      <rect x="101" y="107" width="2" height="2" fill="#F5C47A" opacity="0.5" />
      <rect x="108" y="98"  width="2" height="2" fill="#F5C47A" opacity="0.6" />
      <rect x="32"  y="128" width="2" height="2" fill="#F5C47A" opacity="0.5" />
      <rect x="163" y="120" width="2" height="2" fill="#F5C47A" opacity="0.5" />
      <rect x="230" y="125" width="2" height="2" fill="#F5C47A" opacity="0.6" />
      <rect x="276" y="120" width="2" height="2" fill="#F5C47A" opacity="0.5" />

      {/* Statue of Liberty — large foreground landmark, right side */}
      {/* Island base */}
      <rect x="378" y="160" width="82" height="8"  fill="#3A4A30" rx="3" />
      {/* Star-shaped fort (simplified) */}
      <rect x="384" y="154" width="70" height="8"  fill="#243222" />
      {/* Pedestal base */}
      <rect x="392" y="136" width="52" height="20" fill="#2A3A28" />
      {/* Pedestal middle */}
      <rect x="400" y="110" width="36" height="28" fill="#3A4A38" />
      {/* Pedestal top ledge */}
      <rect x="396" y="107" width="44" height="5"  fill="#2A3A28" />
      {/* Statue body/robes */}
      <rect x="408" y="72"  width="20" height="37" fill="#4A6A48" />
      {/* Robes/skirt flare */}
      <rect x="404" y="96"  width="28" height="14" fill="#4A6A48" />
      {/* Head */}
      <rect x="410" y="57"  width="16" height="17" fill="#5A7A58" />
      {/* Crown spikes */}
      <rect x="408" y="47"  width="5"  height="13" fill="#5A7A58" />
      <rect x="415" y="42"  width="6"  height="18" fill="#5A7A58" />
      <rect x="423" y="47"  width="5"  height="13" fill="#5A7A58" />
      {/* Raised arm holding torch */}
      <rect x="426" y="60"  width="6"  height="22" fill="#4A6A48" />
      <rect x="427" y="53"  width="6"  height="9"  fill="#F5C47A" opacity="0.9" />
      {/* Torch flame glow */}
      <circle cx="430" cy="50" r="9"  fill="#F5C47A" opacity="0.25" />
      <circle cx="430" cy="50" r="5"  fill="#FFE080" opacity="0.55" />
    </svg>
  )
}
