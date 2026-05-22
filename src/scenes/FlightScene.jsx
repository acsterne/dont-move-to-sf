import { useState, useEffect } from 'react'
import './FlightScene.css'

const PHASES = ['takeoff', 'flying', 'cityview', 'arrival']

export default function FlightScene({ onDone }) {
  const [phase, setPhase] = useState(0)
  const [planePos, setPlanePos] = useState(5)

  useEffect(() => {
    if (phase === 1) {
      const interval = setInterval(() => {
        setPlanePos(p => {
          if (p >= 85) {
            clearInterval(interval)
            setTimeout(() => setPhase(2), 600)
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
      title: 'JFK · GATE B42',
      lines: ["Your flight to SFO begins boarding.", "Sarah hugs you at security.", "She doesn't say anything."],
    },
    {
      title: 'SOMEWHERE OVER NEVADA',
      lines: ["Five hours. You watch the country pass.", "Everything you know is behind you."],
    },
    {
      title: 'SAN FRANCISCO BAY',
      lines: ["There it is.", "The Golden Gate in all of its eternal glory.", "You are truly in awe.", "You cannot believe how lucky you are."],
    },
    {
      title: '55°F · AUGUST · SFO ARRIVALS',
      lines: ["You step outside.", "A man in a Patagonia vest walks past.", "", "YEAR ONE BEGINS."],
    },
  ]

  const current = texts[phase]

  return (
    <div className="flight-scene">
      <div className="flight-map">

        {/* Phase 0 & 1: US map with animated plane */}
        {(phase === 0 || phase === 1) && (
          <svg viewBox="0 0 480 200" className="us-map-svg">
            <path
              d="M60,60 L80,45 L120,40 L160,38 L200,42 L240,40 L280,38 L320,42 L360,48 L390,55 L400,70 L395,90 L380,110 L360,125 L330,135 L300,138 L280,130 L260,135 L240,140 L220,138 L200,140 L180,138 L160,140 L140,135 L120,130 L100,120 L80,110 L65,95 L60,80 Z"
              fill="#2A4A5E"
              stroke="#3A6A8A"
              strokeWidth="2"
            />
            <line x1="160" y1="38" x2="160" y2="135" stroke="#3A6A8A" strokeWidth="0.5" strokeDasharray="3,3" />
            <line x1="240" y1="40" x2="240" y2="140" stroke="#3A6A8A" strokeWidth="0.5" strokeDasharray="3,3" />
            <line x1="320" y1="42" x2="320" y2="135" stroke="#3A6A8A" strokeWidth="0.5" strokeDasharray="3,3" />
            <circle cx="390" cy="72" r="5" fill="#E07A5F" />
            <text x="382" y="65" fill="#E07A5F" fontSize="8" fontFamily="'Press Start 2P', monospace">JFK</text>
            <circle cx="75" cy="85" r="5" fill="#5BB8E0" />
            <text x="50" y="110" fill="#5BB8E0" fontSize="8" fontFamily="'Press Start 2P', monospace">SFO</text>
            <path d="M390,72 Q240,20 75,85" fill="none" stroke="#5B8FA8" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6" />
            {phase === 1 && (
              <g transform={`translate(${385 - (planePos * 3.1)},${72 - Math.sin((planePos / 85) * Math.PI) * 52})`}>
                <rect x="-6" y="-3" width="12" height="5" fill="#F0F4F8" rx="1" />
                <polygon points="6,-3 12,0 6,2" fill="#F0F4F8" />
                <rect x="-2" y="-7" width="8" height="3" fill="#D0E4EE" />
              </g>
            )}
          </svg>
        )}

        {/* Phase 2: SF Bay + Golden Gate Bridge view */}
        {phase === 2 && (
          <div className="city-view">
            <div className="cv-sky" />
            <div className="cv-fog-top" />
            <div className="cv-water" />

            {/* SF Skyline behind bridge */}
            <div className="cv-skyline">
              {[
                { w: 14, h: 30 }, { w: 10, h: 22 }, { w: 18, h: 40 }, { w: 12, h: 28 },
                { w: 22, h: 50 }, { w: 10, h: 20 }, { w: 16, h: 36 }, { w: 14, h: 32 },
                { w: 20, h: 44 }, { w: 12, h: 26 }, { w: 16, h: 38 }, { w: 10, h: 18 },
              ].map((b, i) => (
                <div key={i} className="cv-bld" style={{ width: b.w, height: b.h }} />
              ))}
            </div>

            {/* Golden Gate Bridge */}
            <svg viewBox="0 0 480 120" className="ggb-svg">
              {/* Road deck */}
              <rect x="20" y="70" width="440" height="6" fill="#8B3A2A" />
              {/* Left tower */}
              <rect x="120" y="20" width="14" height="56" fill="#C0392B" />
              <rect x="115" y="20" width="24" height="6" fill="#C0392B" />
              <rect x="115" y="42" width="24" height="4" fill="#C0392B" />
              {/* Right tower */}
              <rect x="346" y="20" width="14" height="56" fill="#C0392B" />
              <rect x="341" y="20" width="24" height="6" fill="#C0392B" />
              <rect x="341" y="42" width="24" height="4" fill="#C0392B" />
              {/* Main cables */}
              <path d="M20,55 Q127,28 240,38 Q353,28 460,55" fill="none" stroke="#C0392B" strokeWidth="3" />
              {/* Vertical suspender cables */}
              {Array.from({ length: 18 }).map((_, i) => {
                const x = 40 + i * 23
                const mainY = i < 9
                  ? 28 + (i / 8) * 10
                  : 38 - ((i - 9) / 8) * 10
                return <line key={i} x1={x} y1={mainY} x2={x} y2="70" stroke="#C0392B" strokeWidth="1" opacity="0.7" />
              })}
              {/* Water reflection */}
              <path d="M20,76 Q127,88 240,84 Q353,88 460,76" fill="none" stroke="#C0392B" strokeWidth="1" opacity="0.25" />
            </svg>

            <div className="cv-fog-bottom" />
          </div>
        )}

        {/* Phase 3: SFO arrival — Marina / Chrissy Field / GGB in fog */}
        {phase === 3 && (
          <div className="arrival-view">
            <svg className="arrival-scene-svg" viewBox="0 0 480 260" preserveAspectRatio="none">
              <defs>
                <linearGradient id="arr-sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#7A8E9E"/>
                  <stop offset="100%" stopColor="#96AABA"/>
                </linearGradient>
                <linearGradient id="arr-bay" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#3A5060"/>
                  <stop offset="100%" stopColor="#2A3C4A"/>
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="480" height="260" fill="url(#arr-sky)"/>
              {/* Golden Gate Bridge */}
              <rect x="0"   y="118" width="340" height="5"  fill="#8A3828" opacity="0.55"/>
              <rect x="120" y="52"  width="12"  height="68" fill="#9A4030" opacity="0.52"/>
              <rect x="114" y="52"  width="24"  height="5"  fill="#9A4030" opacity="0.50"/>
              <rect x="114" y="70"  width="24"  height="3"  fill="#9A4030" opacity="0.45"/>
              <rect x="252" y="64"  width="12"  height="56" fill="#8A3828" opacity="0.38"/>
              <rect x="246" y="64"  width="24"  height="4"  fill="#8A3828" opacity="0.35"/>
              <path d="M60,100 Q120,66 186,76 Q252,66 310,100" fill="none" stroke="#8A3828" strokeWidth="2" opacity="0.35"/>
              {/* Marin Headlands */}
              <path d="M300,130 Q340,108 380,118 Q420,106 480,115 L480,180 L300,180 Z" fill="#4A6070" opacity="0.50"/>
              {/* Bay water */}
              <rect x="0" y="148" width="480" height="40" fill="url(#arr-bay)" opacity="0.75"/>
              <line x1="20"  y1="158" x2="70"  y2="158" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              <line x1="100" y1="163" x2="160" y2="163" stroke="rgba(255,255,255,0.10)" strokeWidth="1"/>
              <line x1="200" y1="157" x2="270" y2="157" stroke="rgba(255,255,255,0.10)" strokeWidth="1"/>
              <line x1="320" y1="162" x2="390" y2="162" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              {/* Chrissy Field beach */}
              <rect x="0" y="186" width="480" height="12" fill="#B0A880" opacity="0.7"/>
              <rect x="0" y="186" width="480" height="4"  fill="#A09870" opacity="0.5"/>
              {/* Marina buildings */}
              <rect x="0"   y="155" width="30"  height="34" fill="#4A5A60"/>
              <rect x="28"  y="150" width="22"  height="38" fill="#526268"/>
              <rect x="48"  y="158" width="18"  height="30" fill="#485860"/>
              <rect x="64"  y="148" width="28"  height="40" fill="#4E6068"/>
              <rect x="90"  y="155" width="20"  height="33" fill="#4A5A62"/>
              <rect x="108" y="152" width="25"  height="36" fill="#526268"/>
              <rect x="131" y="156" width="18"  height="32" fill="#485860"/>
              <rect x="147" y="150" width="22"  height="38" fill="#4A5A62"/>
              <rect x="167" y="155" width="16"  height="33" fill="#526268"/>
              <rect x="4"   y="160" width="4" height="4" fill="#7A9AA8" opacity="0.5"/>
              <rect x="12"  y="160" width="4" height="4" fill="#7A9AA8" opacity="0.4"/>
              <rect x="32"  y="156" width="4" height="4" fill="#7A9AA8" opacity="0.5"/>
              <rect x="68"  y="154" width="4" height="4" fill="#7A9AA8" opacity="0.5"/>
              <rect x="114" y="158" width="4" height="4" fill="#7A9AA8" opacity="0.5"/>
              <rect x="152" y="156" width="4" height="4" fill="#7A9AA8" opacity="0.5"/>
              <rect x="380" y="155" width="100" height="33" fill="#3A5840" opacity="0.5"/>
              <rect x="400" y="148" width="35"  height="40" fill="#3A5040" opacity="0.5"/>
              {/* Crissy Field sign */}
              <rect x="224" y="184" width="3"  height="14" fill="#6A6050"/>
              <rect x="194" y="174" width="62" height="13" fill="#4A6830" rx="1"/>
              <rect x="195" y="175" width="60" height="11" fill="#5A7840" rx="1"/>
              <text x="225" y="184" textAnchor="middle" fill="#C8F080" fontFamily="'Press Start 2P', monospace" fontSize="5" letterSpacing="0.5">CRISSY FIELD</text>
              {/* Sidewalk + road */}
              <rect x="0" y="196" width="480" height="12" fill="#5A5A58"/>
              <rect x="0" y="205" width="480" height="3"  fill="#4A4A48"/>
              <rect x="0" y="208" width="480" height="52" fill="#3A3A38"/>
              <rect x="80"  y="218" width="28" height="3" fill="#9A9888" opacity="0.4"/>
              <rect x="200" y="218" width="28" height="3" fill="#9A9888" opacity="0.4"/>
              <rect x="320" y="218" width="28" height="3" fill="#9A9888" opacity="0.4"/>
              {/* Patagonia vest guy */}
              <rect x="310" y="205" width="10" height="14" fill="#3A5A6A"/>
              <rect x="311" y="205" width="8"  height="10" fill="#4A7A8A"/>
              <rect x="311" y="198" width="8"  height="7"  fill="#E0B890"/>
              <rect x="311" y="197" width="8"  height="3"  fill="#3A2A1A"/>
              <rect x="311" y="219" width="3"  height="8"  fill="#2A3A4A"/>
              <rect x="316" y="219" width="3"  height="8"  fill="#2A3A4A"/>
            </svg>

            <div className="av-fog av-fog-1" />
            <div className="av-fog av-fog-2" />
            <div className="av-fog av-fog-3" />
            <div className="av-fog av-fog-4" />
            <div className="av-fog av-fog-5" />

            <div className="av-wind">
              {[
                { top: 8,  w: 160, left: 40,  dur: 2.4, delay: 0   },
                { top: 18, w: 200, left: 180, dur: 2.8, delay: 0.4 },
                { top: 30, w: 140, left: 80,  dur: 2.2, delay: 0.8 },
                { top: 45, w: 180, left: 260, dur: 3.0, delay: 1.2 },
                { top: 55, w: 150, left: 20,  dur: 2.6, delay: 0.6 },
                { top: 65, w: 210, left: 140, dur: 2.4, delay: 1.5 },
                { top: 78, w: 130, left: 320, dur: 2.8, delay: 0.3 },
              ].map((l, i) => (
                <div key={i} className="av-wind-line" style={{ top: `${l.top}%`, width: l.w, left: l.left, animationDuration: `${l.dur}s`, animationDelay: `${l.delay}s` }} />
              ))}
            </div>

            <div className="av-therm">
              <div className="av-therm-label">TEMP</div>
              <div className="av-therm-tube"><div className="av-mercury" /></div>
              <div className="av-therm-bulb" />
              <div className="av-therm-reading">55°F</div>
            </div>
          </div>
        )}
      </div>

      <div className="flight-text-box">
        <div className="flight-location">{current.title}</div>
        <div className="flight-body">
          {current.lines.map((line, i) => (
            <div key={i} className={line === '' ? 'flight-spacer' : 'flight-line'}>{line}</div>
          ))}
        </div>
        {phase < PHASES.length - 1 ? (
          <button
            className="flight-btn"
            onClick={() => phase !== 1 && setPhase(p => p + 1)}
            disabled={phase === 1}
          >
            {phase === 1 ? '· · ·' : 'continue ►'}
          </button>
        ) : (
          <button className="flight-btn flight-btn-land" onClick={onDone}>
            begin year one ►
          </button>
        )}
      </div>
    </div>
  )
}
