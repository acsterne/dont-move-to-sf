import './PixelScene.css'

const SCENE_BG = {
  // NYC
  nyc_open:    'nyc-street',
  nyc_alex_1:  'nyc-bar',
  nyc_alex_2:  'nyc-street',
  nyc_alex_3:  'nyc-rooftop',
  nyc_jake_1:  'nyc-bar',
  nyc_jake_2:  'nyc-street',
  nyc_jake_3:  'nyc-rooftop',
  nyc_close:   'nyc-street',
  decision:    'nyc-street',
  // Visit
  visit_park:    'sf-park',
  visit_hayes:   'sf-street',
  visit_hike:    'sf-hike',
  visit_offer:   'sf-hike',
  visit_friends: 'sf-street',
  // SF
  sf_apartment:    'sf-apartment',
  sf_neighborhoods:'sf-street',
  sf_dating_mia:   'sf-cafe',
  sf_dating_jake:  'sf-cafe',
  sf_bedtime:      'sf-night',
  sf_bar:          'sf-balboa-ext',
  sf_friend_visit: 'sf-hike',
  sf_moment:       'sf-office',
}

// ── NYC STREET ──────────────────────────────────────────────
function NycStreet() {
  const blds = [[22,80,3],[16,55,2],[30,100,4],[18,65,2],[40,120,5],[14,45,1],[26,88,3],[20,60,2],[36,110,4],[16,50,2],[28,75,3]]
  return (
    <div className="scene-bg nyc-street-bg">
      <div className="fog-layer nyc-fog" />
      <div className="buildings">
        {blds.map(([w,h,wins],i) => (
          <div key={i} className="building nyc-bld" style={{ width: w, height: h }}>
            {Array.from({length:wins}).map((_,wi) => <div key={wi} className="window nyc-win" />)}
          </div>
        ))}
      </div>
      <div className="ground nyc-ground" />
      <div className="sidewalk" />
    </div>
  )
}

// ── NYC BAR (West Village exterior) ─────────────────────────
const WV_BUILDINGS = [
  { w: 108, h: 115, bg: '#6A3C22', awning: '#2A6A2A', sign: 'HUDSON WINE', wins: [1,0,1,1] },
  { w: 120, h: 130, bg: '#7A4428', awning: '#8A2020', sign: 'CAFÉ LOUP',   wins: [1,1,0,1] },
  { w: 130, h: 120, bg: '#5A3018', awning: '#1A4A1A', sign: 'CORNER BISTRO', wins: [1,1,1,0] },
  { w: 115, h: 108, bg: '#6E3C24', awning: '#6A1818', sign: 'VILLAGE BAR', wins: [0,1,1,1] },
]
const WV_STARS = [[22,8],[55,14],[88,6],[130,11],[175,5],[210,15],[255,8],[300,12],[345,4],[390,10],[432,7],[462,14]]

function NycBar() {
  return (
    <div className="scene-bg nyc-bar-bg">
      <div className="wv-sky" />
      {WV_STARS.map(([x,y],i) => <div key={i} className="wv-star" style={{ left: x, top: y }} />)}
      <div className="wv-buildings">
        {WV_BUILDINGS.map((b, i) => (
          <>
            {i > 0 && <div key={`gap-${i}`} className="wv-bld-gap" />}
            <div key={i} className="wv-bld" style={{ width: b.w, height: b.h, background: b.bg }}>
              <div className="wv-upper-windows">
                {b.wins.map((lit, wi) => <div key={wi} className={lit ? 'wv-win' : 'wv-win wv-win-dark'} />)}
              </div>
              <div className="wv-cornice" />
              <div className="wv-ground">
                <div className="wv-sign"><span className="wv-sign-text">{b.sign}</span></div>
                <div className="wv-display-win" />
                <div className="wv-door" />
              </div>
              <div className="wv-awning" style={{ background: b.awning }} />
            </div>
          </>
        ))}
      </div>
      {[104, 348].map((x, i) => (
        <div key={i} className="wv-lamp" style={{ left: x }}>
          <div className="wv-lamp-post" />
          <div className="wv-lamp-arm" />
          <div className="wv-lamp-head" />
          <div className="wv-lamp-glow" />
        </div>
      ))}
      {[82, 240, 390].map((x, i) => (
        <div key={i} className="wv-tree" style={{ left: x }}>
          <div className="wv-tree-top" />
          <div className="wv-tree-trunk" />
        </div>
      ))}
      <div className="wv-road" />
      <div className="wv-sidewalk" />
      <div className="wv-curb" />
    </div>
  )
}

// ── NYC ROOFTOP ──────────────────────────────────────────────
const RT_STARS = [[18,6],[40,12],[68,4],[95,9],[130,3],[158,14],[190,7],[228,11],[262,5],[298,13],[338,3],[370,8],[408,5],[442,11]]
const RT_POSTS = [0, 96, 192, 288, 384]

function RtTable({ x, bottom, children }) {
  return (
    <div className="rt-table" style={{ left: x, bottom }}>
      <div className="rt-table-top" />
      <div className="rt-table-leg" />
      {children}
    </div>
  )
}

function RtChair({ x, bottom }) {
  return (
    <div className="rt-chair" style={{ left: x, bottom }}>
      <div className="rt-chair-back" />
      <div className="rt-chair-seat" />
      <div className="rt-chair-legs">
        <div className="rt-chair-leg" /><div className="rt-chair-leg" />
      </div>
    </div>
  )
}

function RtBottle({ x, bottom, color }) {
  return (
    <div className="rt-bottle" style={{ left: x, bottom }}>
      <div className="rt-bottle-cap" />
      <div className="rt-bottle-neck" style={{ background: color }} />
      <div className="rt-bottle-body" style={{ background: color }} />
    </div>
  )
}

function RtGlass({ x, bottom }) {
  return (
    <div className="rt-glass" style={{ left: x, bottom }}>
      <div className="rt-glass-bowl" /><div className="rt-glass-stem" /><div className="rt-glass-base" />
    </div>
  )
}

function RtSeated({ x, bottom, color }) {
  return (
    <div className="rt-seated" style={{ left: x, bottom }}>
      <div className="rt-seated-head" />
      <div className="rt-seated-body" style={{ background: color }} />
    </div>
  )
}

function RtFriend({ x, bottom, color }) {
  return (
    <div className="rt-friend" style={{ left: x, bottom }}>
      <div className="rt-friend-head" />
      <div className="rt-friend-body" style={{ background: color }} />
      <div className="rt-friend-legs">
        <div className="rt-friend-leg" /><div className="rt-friend-leg" />
      </div>
    </div>
  )
}

function NycRooftop() {
  return (
    <div className="scene-bg nyc-rooftop-bg">
      {RT_STARS.map(([x,y],i) => <div key={i} className="star" style={{ left: x, top: y }} />)}

      {/* Lower Manhattan cityscape */}
      <svg className="rooftop-city-svg" viewBox="0 0 480 140" preserveAspectRatio="none">
        <defs>
          <pattern id="wins" x="0" y="0" width="8" height="10" patternUnits="userSpaceOnUse">
            <rect x="1" y="1" width="2" height="3" fill="#F4D880" opacity="0.35"/>
            <rect x="5" y="4" width="2" height="3" fill="#F4D880" opacity="0.25"/>
          </pattern>
        </defs>
        {/* Far background */}
        <rect x="0"   y="95" width="30"  height="45" fill="#0E1830" opacity="0.8"/>
        <rect x="28"  y="88" width="22"  height="52" fill="#0E1830" opacity="0.8"/>
        <rect x="48"  y="100" width="18" height="40" fill="#0E1830" opacity="0.8"/>
        <rect x="64"  y="92" width="25"  height="48" fill="#0E1830" opacity="0.8"/>
        <rect x="390" y="90" width="28"  height="50" fill="#0E1830" opacity="0.8"/>
        <rect x="416" y="85" width="22"  height="55" fill="#0E1830" opacity="0.8"/>
        <rect x="436" y="96" width="24"  height="44" fill="#0E1830" opacity="0.8"/>
        <rect x="458" y="88" width="22"  height="52" fill="#0E1830" opacity="0.8"/>
        {/* Mid-ground */}
        <rect x="0"   y="80" width="35"  height="60" fill="#121C32"/>
        <rect x="33"  y="70" width="28"  height="70" fill="#141E34"/>
        <rect x="59"  y="78" width="22"  height="62" fill="#101A2E"/>
        <rect x="79"  y="65" width="32"  height="75" fill="#141E34"/>
        <rect x="109" y="74" width="20"  height="66" fill="#0E1830"/>
        <rect x="350" y="72" width="28"  height="68" fill="#141E34"/>
        <rect x="376" y="62" width="34"  height="78" fill="#121C32"/>
        <rect x="408" y="76" width="24"  height="64" fill="#0E1830"/>
        <rect x="430" y="68" width="30"  height="72" fill="#141E34"/>
        <rect x="458" y="78" width="22"  height="62" fill="#101A2E"/>
        {/* Foreground flanking */}
        <rect x="0"   y="50" width="42"  height="90" fill="#18243E"/>
        <rect x="40"  y="38" width="36"  height="102" fill="#1A2642"/>
        <rect x="74"  y="48" width="28"  height="92" fill="#161E38"/>
        <rect x="100" y="30" width="20"  height="110" fill="#1A2642"/>
        <rect x="360" y="45" width="36"  height="95" fill="#18243E"/>
        <rect x="394" y="35" width="28"  height="105" fill="#1A2642"/>
        <rect x="420" y="50" width="34"  height="90" fill="#161E38"/>
        <rect x="452" y="40" width="28"  height="100" fill="#1A2642"/>
        {/* One WTC */}
        <rect x="214" y="48" width="52" height="92" fill="#1C2A48"/>
        <rect x="218" y="36" width="44" height="14" fill="#1C2A48"/>
        <rect x="223" y="24" width="34" height="14" fill="#1C2A48"/>
        <rect x="228" y="14" width="24" height="12" fill="#1A2844"/>
        <rect x="238" y="4"  width="4"  height="12" fill="#243054"/>
        <rect x="239" y="0"  width="2"  height="6"  fill="#2E3C60"/>
        <circle cx="240" cy="2" r="3" fill="#8090C8" opacity="0.5"/>
        <rect x="214" y="48" width="52" height="92" fill="url(#wins)"/>
        <rect x="218" y="36" width="44" height="14" fill="url(#wins)"/>
        {/* WTC lit windows */}
        <rect x="218" y="55" width="2" height="3" fill="#F4E080" opacity="0.8"/>
        <rect x="226" y="62" width="2" height="3" fill="#F4E080" opacity="0.6"/>
        <rect x="234" y="50" width="2" height="3" fill="#F4E080" opacity="0.7"/>
        <rect x="242" y="68" width="2" height="3" fill="#F4E080" opacity="0.5"/>
        <rect x="252" y="58" width="2" height="3" fill="#F4E080" opacity="0.7"/>
        <rect x="258" y="72" width="2" height="3" fill="#F4E080" opacity="0.6"/>
        {/* Flanking windows */}
        <rect x="44"  y="48" width="2" height="3" fill="#F4D880" opacity="0.5"/>
        <rect x="52"  y="62" width="2" height="3" fill="#F4D880" opacity="0.4"/>
        <rect x="80"  y="40" width="2" height="3" fill="#F4D880" opacity="0.5"/>
        <rect x="104" y="36" width="2" height="3" fill="#F4D880" opacity="0.4"/>
        <rect x="366" y="52" width="2" height="3" fill="#F4D880" opacity="0.5"/>
        <rect x="400" y="44" width="2" height="3" fill="#F4D880" opacity="0.4"/>
        <rect x="430" y="58" width="2" height="3" fill="#F4D880" opacity="0.5"/>
        <rect x="456" y="48" width="2" height="3" fill="#F4D880" opacity="0.4"/>
        {/* Horizon glow */}
        <rect x="0" y="130" width="480" height="10" fill="rgba(40,60,110,0.4)"/>
      </svg>

      <div className="city-glow" />

      <svg className="string-lights-svg" viewBox="0 0 480 28" preserveAspectRatio="none">
        <path d="M0,5 Q60,20 120,8 Q180,22 240,7 Q300,22 360,8 Q420,20 480,5"
          fill="none" stroke="#2A2010" strokeWidth="1.5" />
        {[24,72,120,168,216,264,312,360,408,456].map((cx,i) => (
          <circle key={i} cx={cx} cy={i%2===0 ? 5 : 20} r="2.5" fill="#F4D050" opacity="0.9" />
        ))}
      </svg>

      <div className="rooftop-floor" />
      <div className="rooftop-rail" />
      {RT_POSTS.map((x,i) => <div key={i} className="rooftop-post" style={{ left: x }} />)}

      {/* Table 1 — center-left */}
      <RtChair   x={134} bottom={21} />
      <RtChair   x={185} bottom={21} />
      <RtTable   x={155} bottom={21} />
      <RtBottle  x={156} bottom={26} color="#2A4A1A" />
      <RtBottle  x={163} bottom={26} color="#4A1A2A" />
      <RtGlass   x={150} bottom={26} />
      <RtGlass   x={171} bottom={26} />
      <RtSeated  x={135} bottom={44} color="#3A5A7A" />
      <RtSeated  x={186} bottom={44} color="#6A3A5A" />

      {/* Table 2 — center-right */}
      <RtChair   x={274} bottom={21} />
      <RtChair   x={325} bottom={21} />
      <RtTable   x={295} bottom={21} />
      <div className="rt-bucket" style={{ left: 298, bottom: 26 }} />
      <RtGlass   x={291} bottom={26} />
      <RtGlass   x={311} bottom={26} />
      <RtSeated  x={275} bottom={44} color="#4A5A2A" />
      <RtSeated  x={326} bottom={44} color="#5A2A2A" />

      {/* Standing friends near rail */}
      <RtFriend  x={398} bottom={21} color="#2A4060" />
      <RtFriend  x={425} bottom={21} color="#5A3A20" />
    </div>
  )
}

// ── SF STREET ────────────────────────────────────────────────
function SfStreet() {
  const blds = [[20,60,2],[14,40,1],[28,85,3],[16,50,2],[24,72,2],[12,36,1],[32,95,4],[18,55,2],[22,68,3],[16,44,1],[26,78,3],[14,42,1]]
  return (
    <div className="scene-bg sf-street-bg">
      <div className="fog-layer sf-fog-top" />
      <div className="fog-layer sf-fog-bottom" />
      <div className="buildings">
        {blds.map(([w,h,wins],i) => (
          <div key={i} className="building sf-bld" style={{ width: w, height: h }}>
            {Array.from({length:wins}).map((_,wi) => <div key={wi} className="window sf-win" />)}
          </div>
        ))}
      </div>
      <div className="ground sf-ground" />
      <div className="sidewalk" />
    </div>
  )
}

// ── SF PARK (Fort Mason) ─────────────────────────────────────
function SfPark() {
  return (
    <div className="scene-bg sf-park-bg">
      <svg className="fm-svg" viewBox="0 0 480 180" preserveAspectRatio="none">
        <defs>
          <linearGradient id="fm-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7AAEC4"/>
            <stop offset="100%" stopColor="#B8D8E8"/>
          </linearGradient>
          <linearGradient id="fm-bay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5A9AB8"/>
            <stop offset="100%" stopColor="#4A88A8"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="480" height="180" fill="url(#fm-sky)"/>
        <rect x="0" y="55" width="480" height="20" fill="rgba(195,222,235,0.30)"/>
        {/* Marin Headlands */}
        <path d="M0,78 Q40,62 80,68 Q120,56 160,66 Q200,58 240,68 Q280,58 320,66 Q360,56 400,64 Q440,56 480,62 L480,90 L0,90 Z" fill="#4A7888" opacity="0.45"/>
        <path d="M0,84 Q50,70 110,76 Q170,64 230,74 Q290,65 350,74 Q410,64 480,72 L480,95 L0,95 Z" fill="#3A6878" opacity="0.50"/>
        {/* Golden Gate Bridge */}
        <path d="M0,72 Q32,58 58,64 Q84,54 108,64 Q134,58 155,72" fill="none" stroke="#B04030" strokeWidth="2" opacity="0.60"/>
        <rect x="56"  y="38" width="8"  height="34" fill="#C04838" opacity="0.65"/>
        <rect x="52"  y="38" width="16" height="4"  fill="#C04838" opacity="0.65"/>
        <rect x="52"  y="52" width="16" height="3"  fill="#C04838" opacity="0.60"/>
        <rect x="104" y="44" width="8"  height="28" fill="#A83A2A" opacity="0.40"/>
        <rect x="100" y="44" width="16" height="3"  fill="#A83A2A" opacity="0.38"/>
        <rect x="0"   y="70" width="160" height="3" fill="#A83828" opacity="0.50"/>
        <rect x="88"  y="60" width="50"  height="16" fill="rgba(185,215,228,0.50)"/>
        {/* Bay water */}
        <rect x="0" y="88" width="480" height="38" fill="url(#fm-bay)" opacity="0.80"/>
        <line x1="30"  y1="96"  x2="70"  y2="96"  stroke="rgba(255,255,255,0.22)" strokeWidth="1"/>
        <line x1="100" y1="101" x2="150" y2="101" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
        <line x1="200" y1="95"  x2="260" y2="95"  stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
        <line x1="310" y1="100" x2="370" y2="100" stroke="rgba(255,255,255,0.20)" strokeWidth="1"/>
        {/* Sailboat */}
        <rect x="240" y="91" width="2"  height="12" fill="#E8DEC8" opacity="0.7"/>
        <path d="M242,92 L254,98 L242,98 Z" fill="#E8DEC8" opacity="0.55"/>
        <rect x="236" y="102" width="12" height="2" fill="#8A7850" opacity="0.6"/>
        {/* Fort Mason Center warehouses */}
        <rect x="188" y="96"  width="72" height="36" fill="#4A6A3A"/>
        <path d="M188,96 L224,82 L260,96 Z" fill="#3A5A2A"/>
        <rect x="196" y="100" width="10" height="12" fill="#9AB8C4" opacity="0.8"/>
        <rect x="210" y="100" width="10" height="12" fill="#9AB8C4" opacity="0.75"/>
        <rect x="224" y="100" width="10" height="12" fill="#9AB8C4" opacity="0.8"/>
        <rect x="238" y="100" width="10" height="12" fill="#9AB8C4" opacity="0.7"/>
        <rect x="212" y="116" width="20" height="16" fill="#2A3A1A"/>
        <rect x="268" y="100" width="55" height="32" fill="#526B3E"/>
        <path d="M268,100 L295,88 L323,100 Z" fill="#3E5830"/>
        <rect x="276" y="104" width="8"  height="10" fill="#9AB8C4" opacity="0.75"/>
        <rect x="288" y="104" width="8"  height="10" fill="#9AB8C4" opacity="0.8"/>
        <rect x="300" y="104" width="8"  height="10" fill="#9AB8C4" opacity="0.7"/>
        <rect x="278" y="118" width="14" height="14" fill="#2A3A1A"/>
        <rect x="332" y="104" width="44" height="28" fill="#4A6038"/>
        <path d="M332,104 L354,94 L376,104 Z" fill="#3A5228"/>
        <rect x="340" y="108" width="7"  height="9"  fill="#9AB8C4" opacity="0.75"/>
        <rect x="351" y="108" width="7"  height="9"  fill="#9AB8C4" opacity="0.7"/>
        <rect x="155" y="108" width="30" height="24" fill="#4A5E38"/>
        <path d="M155,108 L170,100 L185,108 Z" fill="#3A4E28"/>
        {/* Pier */}
        <rect x="220" y="124" width="50" height="5"  fill="#7A6840" opacity="0.8"/>
        <rect x="226" y="120" width="4"  height="10" fill="#5A4E30"/>
        <rect x="248" y="120" width="4"  height="10" fill="#5A4E30"/>
        {/* Bluff edge */}
        <path d="M0,128 Q60,122 120,126 Q180,120 240,124 Q300,118 360,122 Q420,116 480,120 L480,132 L0,132 Z" fill="#3A6030" opacity="0.8"/>
      </svg>

      <div className="fm-fog-top" />
      <div className="fm-grass" />
      <div className="fm-path" />

      {/* People */}
      <div className="fm-sit" style={{ left: 110, bottom: 32, background: 'rgba(70,110,180,0.75)' }} />
      <div className="fm-person" style={{ left: 200, bottom: 30 }}>
        <div className="fm-person-head" /><div className="fm-person-body" style={{ background: '#4A7AC8' }} />
      </div>
      <div className="fm-person" style={{ left: 260, bottom: 30 }}>
        <div className="fm-person-head" /><div className="fm-person-body" style={{ background: '#7A5020' }} />
      </div>
      <div className="fm-dog" style={{ left: 273, bottom: 28 }} />
      <div className="fm-sit" style={{ left: 358, bottom: 30, background: 'rgba(160,70,110,0.75)' }} />
      <div className="fm-person" style={{ left: 415, bottom: 30 }}>
        <div className="fm-person-head" /><div className="fm-person-body" style={{ background: '#2A5A3A' }} />
      </div>
      <div className="fm-person" style={{ left: 424, bottom: 30 }}>
        <div className="fm-person-head" /><div className="fm-person-body" style={{ background: '#C05878' }} />
      </div>
    </div>
  )
}

// ── SF HIKE (Marin Headlands) ────────────────────────────────
function SfHike() {
  return (
    <div className="scene-bg sf-hike-bg">
      <svg className="hike-svg" viewBox="0 0 480 180" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hike-sky-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7AAEC4" />
            <stop offset="100%" stopColor="#A8CCDE" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="480" height="180" fill="url(#hike-sky-g)" />
        <rect x="0" y="105" width="140" height="18" fill="rgba(200,220,235,0.45)" />
        <path d="M0,148 Q80,98 160,118 Q240,90 320,112 Q400,94 480,120 L480,180 L0,180 Z"
          fill="#6A9A6A" />
        <path d="M-10,170 Q100,122 240,140 Q380,120 490,160 L490,185 L-10,185 Z"
          fill="#4A8050" />
        <path d="M100,180 Q180,156 230,143 Q270,131 310,148 Q340,162 372,180"
          fill="none" stroke="#9A7844" strokeWidth="5" opacity="0.72" />
        <rect x="0" y="116" width="75" height="14" fill="#4A8AAA" opacity="0.38" />
      </svg>
    </div>
  )
}

// ── SF APARTMENT ─────────────────────────────────────────────
function SfApartment() {
  return (
    <div className="scene-bg sf-apt-bg">
      <div className="apt-window">
        <div className="apt-win-fog" />
        <div className="apt-win-bld" style={{ left:4,  width:8,  height:25, top:8  }} />
        <div className="apt-win-bld" style={{ left:16, width:6,  height:18, top:14 }} />
        <div className="apt-win-bld" style={{ left:26, width:10, height:22, top:10 }} />
      </div>
      <div className="apt-shelf">
        {['#8A4A3A','#3A6A8A','#5A8A4A','#8A7A3A','#6A4A8A','#8A5A3A'].map((c,i) => (
          <div key={i} className="apt-book" style={{ background: c }} />
        ))}
      </div>
      <div className="apt-box" />
      <div className="apt-floor" />
    </div>
  )
}

// ── SF APARTMENT NIGHT ───────────────────────────────────────
function SfApartmentNight() {
  return (
    <div className="scene-bg sf-apt-night-bg">
      <svg width="480" height="180" viewBox="0 0 480 180" style={{position:'absolute',inset:0,width:'100%',height:'100%'}}>
        <defs>
          <linearGradient id="sfn-gg-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#2A1A40"/>
            <stop offset="40%"  stopColor="#8C3A18"/>
            <stop offset="70%"  stopColor="#D06820"/>
            <stop offset="100%" stopColor="#E89040"/>
          </linearGradient>
          <linearGradient id="sfn-bay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1A2A40"/>
            <stop offset="100%" stopColor="#0A1420"/>
          </linearGradient>
          <linearGradient id="sfn-pac-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#301840"/>
            <stop offset="50%"  stopColor="#803020"/>
            <stop offset="100%" stopColor="#C07030"/>
          </linearGradient>
          <radialGradient id="sfn-tv-glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%"   stopColor="#6090C8" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#1A2848" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="sfn-tv-floor" cx="50%" cy="0%" r="100%">
            <stop offset="0%"   stopColor="#3060A0" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#3060A0" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Interior walls */}
        <rect width="480" height="148" fill="#EDE8E0"/>
        <rect x="0" y="0"   width="480" height="3" fill="#D8D2C8"/>
        <rect x="0" y="143" width="480" height="5" fill="#D0C8BC"/>
        {/* Floor */}
        <rect x="0" y="148" width="480" height="32" fill="#B8864A"/>
        <rect x="0" y="148" width="480" height="2"  fill="#9A6E32"/>
        <rect x="0" y="158" width="480" height="1"  fill="#9A7030" opacity="0.5"/>
        <rect x="0" y="168" width="480" height="1"  fill="#9A7030" opacity="0.4"/>

        {/* ── LEFT WINDOW: GOLDEN GATE + BAY ── */}
        <rect x="8" y="8" width="196" height="122" rx="1" fill="#D8D2C8"/>
        <rect x="14" y="14" width="184" height="110" fill="url(#sfn-gg-sky)"/>
        <polygon points="14,84 38,68 66,74 98,58 132,66 164,60 198,66 198,124 14,124" fill="#1A280A"/>
        <rect x="14" y="84" width="184" height="40" fill="url(#sfn-bay)"/>
        <rect x="24"  y="89" width="50" height="2" fill="#D06820" opacity="0.35"/>
        <rect x="90"  y="93" width="36" height="2" fill="#C05818" opacity="0.28"/>
        <rect x="140" y="98" width="44" height="2" fill="#C05818" opacity="0.2"/>
        {/* GG Bridge */}
        <rect x="125" y="38" width="7" height="54" fill="#8B2218"/>
        <rect x="123" y="36" width="11" height="4" fill="#6A1810"/>
        <rect x="62"  y="50" width="6"  height="42" fill="#8B2218"/>
        <rect x="60"  y="48" width="10" height="4"  fill="#6A1810"/>
        <rect x="14" y="78" width="184" height="3" fill="#7A1C10" opacity="0.9"/>
        <line x1="128" y1="39" x2="198" y2="72" stroke="#6A1810" strokeWidth="1.2" opacity="0.85"/>
        <line x1="128" y1="39" x2="65"  y2="54" stroke="#6A1810" strokeWidth="1.2" opacity="0.85"/>
        <line x1="65"  y1="51" x2="14"  y2="70" stroke="#6A1810" strokeWidth="1"   opacity="0.7"/>
        <line x1="65"  y1="51" x2="128" y2="54" stroke="#6A1810" strokeWidth="1"   opacity="0.7"/>
        <line x1="150" y1="54" x2="152" y2="78" stroke="#5A1408" strokeWidth="0.7" opacity="0.6"/>
        <line x1="166" y1="60" x2="168" y2="78" stroke="#5A1408" strokeWidth="0.7" opacity="0.6"/>
        <line x1="182" y1="66" x2="184" y2="78" stroke="#5A1408" strokeWidth="0.7" opacity="0.6"/>
        <line x1="108" y1="54" x2="106" y2="78" stroke="#5A1408" strokeWidth="0.7" opacity="0.6"/>
        <line x1="92"  y1="59" x2="90"  y2="78" stroke="#5A1408" strokeWidth="0.7" opacity="0.6"/>
        <line x1="78"  y1="63" x2="76"  y2="78" stroke="#5A1408" strokeWidth="0.7" opacity="0.6"/>
        {/* Window cross bars */}
        <rect x="8"   y="66" width="196" height="5" fill="#D8D2C8"/>
        <rect x="103" y="8"  width="5"   height="122" fill="#D8D2C8"/>

        {/* ── RIGHT WINDOW: PAC HEIGHTS ── */}
        <rect x="278" y="8" width="194" height="122" rx="1" fill="#D8D2C8"/>
        <rect x="284" y="14" width="182" height="110" fill="url(#sfn-pac-sky)"/>
        {/* House 1 */}
        <rect x="284" y="55" width="38" height="69" fill="#6888A8"/>
        <rect x="284" y="48" width="38" height="9"  fill="#4A6888"/>
        <rect x="288" y="63" width="10" height="10" fill="#F0C870" opacity="0.9"/>
        <rect x="308" y="63" width="10" height="10" fill="#F0C870" opacity="0.8"/>
        <rect x="288" y="79" width="10" height="12" fill="#E8C060" opacity="0.9"/>
        <rect x="308" y="79" width="10" height="10" fill="#C09030" opacity="0.4"/>
        <rect x="288" y="96" width="10" height="10" fill="#E8C060" opacity="0.75"/>
        <rect x="296" y="107" width="14" height="17" rx="1" fill="#3A2410"/>
        <rect x="323" y="94" width="4"  height="30" fill="#3A2A10"/>
        <ellipse cx="325" cy="87" rx="11" ry="10" fill="#284818"/>
        {/* House 2 */}
        <rect x="328" y="44" width="40" height="80" fill="#C8A858"/>
        <rect x="328" y="36" width="40" height="10" fill="#A8884A"/>
        <rect x="332" y="52" width="10" height="10" fill="#F8E880" opacity="0.9"/>
        <rect x="350" y="52" width="10" height="10" fill="#F0D860" opacity="0.7"/>
        <rect x="332" y="68" width="10" height="12" fill="#F8E880" opacity="0.9"/>
        <rect x="350" y="68" width="10" height="12" fill="#F8E880" opacity="0.85"/>
        <rect x="332" y="88" width="10" height="10" fill="#C89030" opacity="0.4"/>
        <rect x="350" y="88" width="10" height="10" fill="#F0D860" opacity="0.8"/>
        <rect x="336" y="110" width="14" height="14" rx="2" fill="#4A3018"/>
        <rect x="369" y="98" width="4"  height="26" fill="#3A2A10"/>
        <ellipse cx="371" cy="91" rx="10" ry="9" fill="#284818"/>
        {/* House 3 */}
        <rect x="374" y="52" width="38" height="72" fill="#9078A8"/>
        <rect x="374" y="44" width="38" height="10" fill="#705888"/>
        <rect x="378" y="60" width="10" height="10" fill="#F8E880" opacity="0.8"/>
        <rect x="396" y="60" width="10" height="10" fill="#C09830" opacity="0.4"/>
        <rect x="378" y="76" width="10" height="12" fill="#F8E880" opacity="0.9"/>
        <rect x="396" y="76" width="10" height="12" fill="#F8E880" opacity="0.85"/>
        <rect x="378" y="96" width="10" height="10" fill="#F0D860" opacity="0.75"/>
        <rect x="396" y="96" width="10" height="10" fill="#C09030" opacity="0.35"/>
        <rect x="382" y="112" width="12" height="12" rx="1" fill="#3A2410"/>
        {/* House 4 partial */}
        <rect x="414" y="60" width="52" height="64" fill="#A07860"/>
        <rect x="414" y="52" width="52" height="10" fill="#806040"/>
        <rect x="418" y="68" width="10" height="10" fill="#F8E060" opacity="0.85"/>
        <rect x="436" y="68" width="10" height="10" fill="#F0D850" opacity="0.7"/>
        <rect x="454" y="68" width="10" height="10" fill="#C09030" opacity="0.4"/>
        <rect x="418" y="86" width="10" height="10" fill="#F8E060" opacity="0.8"/>
        <rect x="436" y="86" width="10" height="10" fill="#F0D850" opacity="0.65"/>
        <rect x="284" y="122" width="182" height="2" fill="#706858"/>
        {/* Window cross bars */}
        <rect x="278" y="66" width="194" height="5" fill="#D8D2C8"/>
        <rect x="373" y="8"  width="5"   height="122" fill="#D8D2C8"/>

        {/* ── COUCH (left foreground) ── */}
        <rect x="20" y="96"  width="108" height="28" rx="3" fill="#DDD5C2"/>
        <rect x="20" y="122" width="108" height="22" rx="0" fill="#C8BEA8"/>
        <rect x="20" y="96"  width="13"  height="46" rx="3" fill="#C0B498"/>
        <rect x="115" y="96" width="13"  height="46" rx="3" fill="#C0B498"/>
        <rect x="66" y="122" width="2"   height="22"        fill="#B0A890"/>
        <rect x="26"  y="140" width="6" height="8" fill="#8A7850"/>
        <rect x="116" y="140" width="6" height="8" fill="#8A7850"/>
        {/* Throw pillow */}
        <rect x="24" y="100" width="18" height="18" rx="2" fill="#7A8898"/>
        <rect x="26" y="102" width="14" height="14" rx="1" fill="#8898A8"/>
        {/* Phone left on cushion */}
        <rect x="68"  y="122" width="16" height="10" rx="2" fill="#141C28"/>
        <rect x="69"  y="123" width="14" height="8"  rx="1" fill="#2A4870"/>
        <rect x="71"  y="125" width="8"  height="2"  rx="1" fill="#4A70A0" opacity="0.8"/>
        <rect x="71"  y="128" width="5"  height="2"  rx="1" fill="#4A70A0" opacity="0.5"/>
        {/* Couch floor shadow */}
        <rect x="22" y="146" width="110" height="6" fill="#806030" opacity="0.2"/>

        {/* ── TV CONSOLE (right foreground) ── */}
        <rect x="310" y="112" width="150" height="36" rx="2" fill="#2A2018"/>
        <rect x="310" y="112" width="150" height="4"  rx="1" fill="#3A3020"/>
        <rect x="318" y="146" width="8" height="8" fill="#201808"/>
        <rect x="444" y="146" width="8" height="8" fill="#201808"/>
        <rect x="330" y="128" width="60" height="1" fill="#201808" opacity="0.6"/>
        <rect x="436" y="106" width="20" height="8" rx="1" fill="#1A1808"/>
        <rect x="438" y="104" width="4"  height="4" rx="1" fill="#080A04"/>
        <rect x="310" y="147" width="150" height="1" fill="#3060A0" opacity="0.4"/>
        {/* TV */}
        <rect x="318" y="56"  width="134" height="58" rx="2" fill="#141414"/>
        <rect x="322" y="60"  width="126" height="50" rx="1" fill="#0A1220"/>
        <rect x="322" y="60"  width="126" height="50"        fill="#1A3060"/>
        <rect x="328" y="64"  width="34"  height="42" fill="#243868" opacity="0.8"/>
        <rect x="366" y="68"  width="28"  height="38" fill="#1E3060" opacity="0.7"/>
        <rect x="398" y="64"  width="20"  height="42" fill="#2A4070" opacity="0.6"/>
        <rect x="422" y="72"  width="20"  height="34" fill="#1E3050" opacity="0.5"/>
        <rect x="340" y="68"  width="90"  height="36" fill="url(#sfn-tv-glow)" opacity="0.7"/>
        {/* TV glow spill */}
        <rect x="310" y="20"  width="150" height="40" fill="#3060A0" opacity="0.07"/>
        <rect x="300" y="148" width="170" height="32" fill="url(#sfn-tv-floor)"/>
        <rect x="445" y="56"  width="30"  height="58" fill="#3060A0" opacity="0.06"/>
        <rect x="288" y="56"  width="34"  height="58" fill="#3060A0" opacity="0.06"/>
        <rect x="377" y="112" width="16"  height="4"  fill="#202020"/>

        {/* Warm sunset tint from left window */}
        <rect x="0" y="0" width="210" height="148" fill="#E07020" opacity="0.05"/>
      </svg>
    </div>
  )
}

// ── SF CAFE ──────────────────────────────────────────────────
function SfCafe() {
  return (
    <div className="scene-bg sf-cafe-bg">
      <svg width="480" height="180" viewBox="0 0 480 180" style={{position:'absolute',inset:0}}>
        <defs>
          <linearGradient id="sf-cafe-photo-derek" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6A9AB8"/>
            <stop offset="100%" stopColor="#3A6A88"/>
          </linearGradient>
          <linearGradient id="sf-cafe-photo-ryan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C89858"/>
            <stop offset="100%" stopColor="#906828"/>
          </linearGradient>
          <linearGradient id="sf-cafe-hand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0B08A"/>
            <stop offset="100%" stopColor="#C8906A"/>
          </linearGradient>
        </defs>

        {/* Cafe background */}
        <rect width="480" height="180" fill="#0D0806"/>
        <line x1="72"  y1="0" x2="72"  y2="18" stroke="#2A1808" strokeWidth="1.5"/>
        <ellipse cx="72"  cy="22" rx="7" ry="4" fill="#C89028" opacity="0.22"/>
        <line x1="408" y1="0" x2="408" y2="18" stroke="#2A1808" strokeWidth="1.5"/>
        <ellipse cx="408" cy="22" rx="7" ry="4" fill="#C89028" opacity="0.20"/>
        <rect x="0"   y="150" width="128" height="30" fill="#1C0E06" opacity="0.8"/>
        <rect x="352" y="155" width="128" height="25" fill="#1C0E06" opacity="0.8"/>

        {/* Hand */}
        <rect x="126" y="157" width="228" height="28" rx="8" fill="url(#sf-cafe-hand)"/>
        <rect x="118" y="140" width="14"  height="28" rx="5" fill="#DCA878"/>
        <rect x="150" y="163" width="12"  height="22" rx="4" fill="#C8906A"/>
        <rect x="168" y="165" width="12"  height="20" rx="4" fill="#C8906A"/>
        <rect x="186" y="165" width="12"  height="20" rx="4" fill="#C8906A"/>
        <rect x="204" y="164" width="11"  height="21" rx="4" fill="#C8906A"/>

        {/* Phone body */}
        <rect x="132" y="4"  width="216" height="168" rx="10" fill="#141414"/>
        <rect x="129" y="54" width="3"   height="20"  rx="1"  fill="#0A0A0A"/>
        <rect x="129" y="78" width="3"   height="14"  rx="1"  fill="#0A0A0A"/>
        <rect x="348" y="64" width="3"   height="26"  rx="1"  fill="#0A0A0A"/>

        {/* Phone screen */}
        <rect x="136" y="9"  width="208" height="159" rx="6" fill="#F8F0E8"/>
        <rect x="216" y="9"  width="28"  height="8"   rx="3" fill="#141414"/>
        <text x="140" y="16" fill="#B0A090" fontFamily="'Press Start 2P',monospace" fontSize="3">9:41</text>

        {/* ── DEREK card ── */}
        <rect x="136" y="17" width="70" height="77" fill="url(#sf-cafe-photo-derek)"/>
        <rect x="153" y="60" width="20" height="34" fill="#243848"/>
        <rect x="155" y="60" width="16" height="20" fill="#3A7A6A"/>
        <rect x="162" y="60" width="2"  height="12" fill="#2A5A4A"/>
        <rect x="155" y="39" width="16" height="19" fill="#E8C090"/>
        <rect x="154" y="34" width="18" height="7"  fill="#2A1808"/>
        <rect x="154" y="39" width="4"  height="9"  fill="#2A1808"/>
        <rect x="168" y="39" width="4"  height="9"  fill="#2A1808"/>
        <rect x="157" y="44" width="3"  height="2"  fill="#2A1808"/>
        <rect x="165" y="44" width="3"  height="2"  fill="#2A1808"/>
        <rect x="162" y="50" width="2"  height="2"  fill="#C8A070" opacity="0.6"/>
        <rect x="159" y="53" width="8"  height="1"  fill="#C09080" opacity="0.5"/>
        <text x="213" y="29"  fill="#1A1A1A" fontFamily="'Press Start 2P',monospace" fontSize="5.5" fontWeight="bold">DEREK, 28</text>
        <text x="213" y="40"  fill="#7A7060" fontFamily="'Press Start 2P',monospace" fontSize="3.5">PM · SERIES B</text>
        <rect x="213" y="44" width="118" height="1" fill="#DDD0C0"/>
        <text x="213" y="54"  fill="#B8A898" fontFamily="'Press Start 2P',monospace" fontSize="3">I go crazy for...</text>
        <text x="213" y="66"  fill="#2A2020" fontFamily="'Press Start 2P',monospace" fontSize="4.5">my Notion</text>
        <text x="213" y="78"  fill="#2A2020" fontFamily="'Press Start 2P',monospace" fontSize="4.5">setup</text>
        <circle cx="334" cy="84" r="9" fill="#FFF" stroke="#DDD0C0" strokeWidth="1.5"/>
        <text x="330" y="88"  fill="#E05090" fontFamily="'Press Start 2P',monospace" fontSize="7">♥</text>

        {/* Divider */}
        <rect x="136" y="94" width="208" height="1.5" fill="#DDD0C0"/>

        {/* ── RYAN card ── */}
        <rect x="136" y="95"  width="70" height="73" fill="url(#sf-cafe-photo-ryan)"/>
        <rect x="153" y="136" width="20" height="32" fill="#2A385A"/>
        <rect x="173" y="138" width="10" height="13" fill="#F5EDD5"/>
        <rect x="173" y="136" width="10" height="4"  fill="#C8A050"/>
        <rect x="175" y="150" width="6"  height="2"  fill="#C8A050" opacity="0.8"/>
        <rect x="155" y="115" width="16" height="19" fill="#E8C090"/>
        <rect x="154" y="110" width="18" height="7"  fill="#6A3818"/>
        <rect x="154" y="115" width="4"  height="9"  fill="#6A3818"/>
        <rect x="168" y="115" width="4"  height="9"  fill="#6A3818"/>
        <rect x="157" y="120" width="3"  height="2"  fill="#2A1808"/>
        <rect x="165" y="120" width="3"  height="2"  fill="#2A1808"/>
        <rect x="162" y="126" width="2"  height="2"  fill="#C8A070" opacity="0.6"/>
        <rect x="159" y="129" width="8"  height="1"  fill="#C09080" opacity="0.5"/>
        <text x="213" y="107" fill="#1A1A1A" fontFamily="'Press Start 2P',monospace" fontSize="5.5" fontWeight="bold">RYAN, 30</text>
        <text x="213" y="118" fill="#7A7060" fontFamily="'Press Start 2P',monospace" fontSize="3.5">ML · OPENAI</text>
        <rect x="213" y="122" width="118" height="1" fill="#DDD0C0"/>
        <text x="213" y="132" fill="#B8A898" fontFamily="'Press Start 2P',monospace" fontSize="3">My Sunday:</text>
        <text x="213" y="144" fill="#2A2020" fontFamily="'Press Start 2P',monospace" fontSize="4.5">optimizing my</text>
        <text x="213" y="156" fill="#2A2020" fontFamily="'Press Start 2P',monospace" fontSize="4.5">sleep stack</text>
        <circle cx="334" cy="160" r="9" fill="#FFF" stroke="#DDD0C0" strokeWidth="1.5"/>
        <text x="330" y="164" fill="#E05090" fontFamily="'Press Start 2P',monospace" fontSize="7">♥</text>
      </svg>
    </div>
  )
}

// ── SF OFFICE ─────────────────────────────────────────────────
function SfOffice() {
  return (
    <div className="scene-bg sf-office-bg">
      <svg width="480" height="180" viewBox="0 0 480 180" style={{position:'absolute',inset:0,width:'100%',height:'100%'}}>
        <defs>
          <linearGradient id="sfo-fog" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A8B8C8"/>
            <stop offset="100%" stopColor="#C8D4DC"/>
          </linearGradient>
        </defs>

        {/* Ceiling */}
        <rect width="480" height="18" fill="#D8D8D4"/>
        {[40,160,280,400].map((x,i) => (
          <g key={i}>
            <rect x={x} y="4" width="80" height="8" rx="1" fill="#F0F0EC"/>
            <rect x={x} y="4" width="80" height="10" fill="#FFFFF8" opacity="0.3"/>
          </g>
        ))}

        {/* Back wall */}
        <rect x="0" y="18" width="480" height="100" fill="#E4E4E0"/>

        {/* Window — foggy gray SF Tuesday */}
        <rect x="340" y="22" width="126" height="76" rx="1" fill="#C8C8C4"/>
        <rect x="344" y="26" width="118" height="68" fill="url(#sfo-fog)"/>
        <rect x="348" y="52" width="20" height="42" fill="#B0B8C0" opacity="0.5"/>
        <rect x="372" y="46" width="16" height="48" fill="#A8B0B8" opacity="0.45"/>
        <rect x="392" y="56" width="24" height="38" fill="#B0B8C0" opacity="0.4"/>
        <rect x="420" y="50" width="16" height="44" fill="#A8B0B8" opacity="0.45"/>
        <rect x="440" y="60" width="22" height="34" fill="#B0B8C0" opacity="0.35"/>
        <rect x="344" y="60" width="118" height="34" fill="#C8D4DC" opacity="0.55"/>
        <rect x="340" y="22" width="126" height="4"  fill="#C0C0BC"/>
        <rect x="340" y="94" width="126" height="4"  fill="#C0C0BC"/>
        <rect x="401" y="22" width="4"   height="76" fill="#C0C0BC"/>
        <rect x="340" y="22" width="4"   height="76" fill="#C0C0BC"/>
        <rect x="462" y="22" width="4"   height="76" fill="#C0C0BC"/>

        {/* Whiteboard */}
        <rect x="14" y="24" width="116" height="66" rx="1" fill="#F8F8F8"/>
        <rect x="14" y="24" width="116" height="66" rx="1" fill="none" stroke="#C0C0BC" strokeWidth="2"/>
        <rect x="14" y="88" width="116" height="4"  fill="#D8D8D4"/>
        <line x1="26" y1="42" x2="76"  y2="42" stroke="#6090C0" strokeWidth="2" opacity="0.7"/>
        <line x1="76" y1="42" x2="76"  y2="58" stroke="#6090C0" strokeWidth="2" opacity="0.7"/>
        <line x1="76" y1="58" x2="118" y2="58" stroke="#6090C0" strokeWidth="2" opacity="0.7"/>
        <rect x="24"  y="34" width="26" height="12" rx="1" fill="#A0C0E0" opacity="0.6"/>
        <rect x="62"  y="50" width="22" height="12" rx="1" fill="#C0A0D0" opacity="0.55"/>
        <rect x="90"  y="50" width="26" height="12" rx="1" fill="#A0D0A0" opacity="0.55"/>
        <line x1="26" y1="72" x2="72"  y2="72" stroke="#888" strokeWidth="1" opacity="0.4"/>
        <line x1="26" y1="76" x2="58"  y2="76" stroke="#888" strokeWidth="1" opacity="0.4"/>
        <line x1="26" y1="80" x2="80"  y2="80" stroke="#888" strokeWidth="1" opacity="0.4"/>

        {/* Background coworkers */}
        {[24, 122, 220].map((x,i) => (
          <g key={i}>
            <rect x={x}    y="88"  width="92" height="6"  rx="1" fill="#D0C8B8"/>
            <rect x={x+18} y="64"  width="56" height="26" rx="1" fill="#141414"/>
            <rect x={x+20} y="66"  width="52" height="22" fill="#1A2440"/>
            <rect x={x+40} y="92"  width="10" height="4"  fill="#888"/>
            <rect x={x+30} y="56"  width="12" height="10" rx="1" fill="#E0B888" opacity="0.9"/>
            <rect x={x+28} y="92"  width="16" height="14" rx="1" fill="#3A6A8A" opacity="0.55"/>
          </g>
        ))}

        {/* Floor */}
        <rect x="0" y="118" width="480" height="62" fill="#C8C4BC"/>
        <rect x="0" y="118" width="480" height="2"  fill="#B8B4AC"/>
        <rect x="160" y="120" width="1" height="60" fill="#B8B4AC" opacity="0.4"/>
        <rect x="320" y="120" width="1" height="60" fill="#B8B4AC" opacity="0.4"/>
        <rect x="0"   y="150" width="480" height="1" fill="#B8B4AC" opacity="0.35"/>

        {/* Foreground desk */}
        <rect x="110" y="106" width="260" height="10" rx="1" fill="#C8C0A8"/>
        <rect x="110" y="104" width="260" height="4"  rx="1" fill="#D8D0B8"/>

        {/* Left monitor — Slack, 14 unread */}
        <rect x="130" y="68"  width="76" height="40" rx="1" fill="#141414"/>
        <rect x="132" y="70"  width="72" height="36" fill="#0E1E38"/>
        <rect x="132" y="70"  width="18" height="36" fill="#3B1D6E" opacity="0.9"/>
        <rect x="134" y="74"  width="14" height="2"  fill="#9B7DC8" opacity="0.7"/>
        <rect x="134" y="78"  width="14" height="2"  fill="#9B7DC8" opacity="0.6"/>
        <rect x="134" y="82"  width="14" height="2"  fill="#FF6B6B" opacity="0.8"/>
        <rect x="134" y="86"  width="14" height="2"  fill="#9B7DC8" opacity="0.5"/>
        <rect x="134" y="90"  width="14" height="2"  fill="#9B7DC8" opacity="0.5"/>
        <rect x="152" y="72"  width="50" height="2"  fill="#7090A8" opacity="0.6"/>
        <rect x="152" y="76"  width="44" height="2"  fill="#7090A8" opacity="0.5"/>
        <rect x="152" y="80"  width="48" height="2"  fill="#7090A8" opacity="0.5"/>
        <rect x="152" y="84"  width="38" height="2"  fill="#7090A8" opacity="0.45"/>
        <rect x="152" y="88"  width="50" height="2"  fill="#7090A8" opacity="0.4"/>
        <rect x="152" y="92"  width="42" height="2"  fill="#7090A8" opacity="0.4"/>
        <circle cx="196" cy="74" r="4" fill="#E03030"/>
        <text x="193" y="77" fill="white" fontFamily="'Press Start 2P',monospace" fontSize="4">14</text>
        <rect x="162" y="108" width="10" height="4"  fill="#888"/>
        <rect x="156" y="111" width="22" height="2"  fill="#888"/>

        {/* Right monitor — StreetEasy */}
        <rect x="218" y="66"  width="84" height="42" rx="1" fill="#141414"/>
        <rect x="220" y="68"  width="80" height="38" fill="#F5F0E8"/>
        <rect x="220" y="68"  width="80" height="6"  fill="#E03A2A"/>
        <text x="224" y="73" fill="white" fontFamily="'Press Start 2P',monospace" fontSize="3.5">StreetEasy</text>
        <rect x="220" y="74"  width="48" height="24" fill="#C4956A"/>
        <rect x="220" y="74"  width="48" height="8"  fill="#B8804A"/>
        <rect x="222" y="76"  width="8"  height="3"  fill="#A87040" opacity="0.6"/>
        <rect x="232" y="76"  width="8"  height="3"  fill="#A87040" opacity="0.5"/>
        <rect x="242" y="76"  width="8"  height="3"  fill="#A87040" opacity="0.6"/>
        <rect x="252" y="76"  width="8"  height="3"  fill="#A87040" opacity="0.5"/>
        <rect x="222" y="81"  width="8"  height="3"  fill="#A87040" opacity="0.5"/>
        <rect x="232" y="81"  width="8"  height="3"  fill="#A87040" opacity="0.4"/>
        <rect x="242" y="81"  width="8"  height="3"  fill="#A87040" opacity="0.5"/>
        <rect x="232" y="84"  width="14" height="12" fill="#A0B8D0" opacity="0.8"/>
        <rect x="238" y="84"  width="2"  height="12" fill="#C0D0E0" opacity="0.5"/>
        <rect x="232" y="90"  width="14" height="1"  fill="#C0D0E0" opacity="0.5"/>
        <rect x="272" y="76"  width="26" height="3"  fill="#222" opacity="0.7"/>
        <rect x="272" y="81"  width="20" height="2"  fill="#555" opacity="0.6"/>
        <rect x="272" y="85"  width="24" height="2"  fill="#555" opacity="0.5"/>
        <rect x="272" y="89"  width="18" height="2"  fill="#E03A2A" opacity="0.7"/>
        <rect x="220" y="100" width="22" height="4"  fill="#B89060" opacity="0.7"/>
        <rect x="244" y="100" width="22" height="4"  fill="#8090A8" opacity="0.7"/>
        <rect x="268" y="100" width="22" height="4"  fill="#A0887A" opacity="0.7"/>
        <rect x="254" y="108" width="10" height="4"  fill="#888"/>
        <rect x="248" y="111" width="22" height="2"  fill="#888"/>

        {/* Keyboard */}
        <rect x="148" y="113" width="90" height="6"  rx="1" fill="#D0CCC4"/>
        <rect x="150" y="114" width="86" height="4"  rx="1" fill="#C8C4BC"/>

        {/* Coffee with steam */}
        <rect x="316" y="98"  width="12" height="14" rx="1" fill="#E8E0D8"/>
        <rect x="316" y="98"  width="12" height="5"  rx="1" fill="#5A2808" opacity="0.8"/>
        <rect x="326" y="101" width="5"  height="5"  rx="2" fill="none" stroke="#C8C0B8" strokeWidth="1.5"/>
        <line x1="320" y1="96" x2="319" y2="92" stroke="#C8C8C4" strokeWidth="1" opacity="0.4"/>
        <line x1="323" y1="96" x2="323" y2="91" stroke="#C8C8C4" strokeWidth="1" opacity="0.35"/>

        {/* Plant */}
        <rect x="448" y="98"  width="22" height="20" rx="1" fill="#7A5A30"/>
        <ellipse cx="459" cy="92" rx="20" ry="14" fill="#2A5A18"/>
        <ellipse cx="446" cy="96" rx="12" ry="10" fill="#3A6A20"/>
        <ellipse cx="472" cy="94" rx="11" ry="9"  fill="#2A5818"/>
        <ellipse cx="459" cy="84" rx="9"  ry="8"  fill="#3A7020"/>
        <ellipse cx="452" cy="88" rx="7"  ry="6"  fill="#4A7828"/>

        {/* Chair back */}
        <rect x="218" y="116" width="24" height="18" rx="1" fill="#2A2A28" opacity="0.5"/>
      </svg>
    </div>
  )
}

// ── SF BALBOA EXTERIOR ────────────────────────────────────────
function SfBalbaoExt() {
  // Small background patrons along patio rail
  const bgPatrons = [40, 110, 185, 260, 340, 415]
  // Large foreground patrons — close to camera
  const fgPatrons = [
    { x: 18,  drink: 'martini', skin: '#E8A870', shirt: '#2A3A5A' },
    { x: 100, drink: 'beer',    skin: '#F0C090', shirt: '#3A2A4A' },
    { x: 198, drink: 'martini', skin: '#C88050', shirt: '#1A3A2A' },
    { x: 308, drink: 'beer',    skin: '#F4C8A0', shirt: '#3A1A20' },
    { x: 400, drink: 'martini', skin: '#D0A060', shirt: '#2A2A3A' },
  ]
  return (
    <div className="scene-bg sf-balboa-ext-bg">
      <div className="balboa-ext-sky" />
      <div className="balboa-ext-facade">
        <div className="balboa-ext-sign">
          <div className="balboa-ext-sign-text">BALBOA CAFE</div>
          <div className="balboa-ext-sign-sub">BAR &amp; GRILL</div>
        </div>
        <div className="balboa-ext-coca" />
        <div className="balboa-ext-awning">
          {Array.from({length:12}).map((_,i) => (
            <div key={i} className="balboa-ext-bulb" style={{ left: `${4 + i * 8.5}%` }} />
          ))}
        </div>
        <div className="balboa-ext-windows">
          {[0,1,2,3,4,5].map(i => (
            <div key={i} className="balboa-ext-window" />
          ))}
        </div>
      </div>
      <div className="balboa-ext-patio">
        <div className="balboa-ext-barrier" />
        {[80, 230, 370].map((x,i) => (
          <div key={i} className="balboa-ext-umbrella" style={{ left: x }} />
        ))}
        {bgPatrons.map((x,i) => (
          <div key={i} className="balboa-ext-patron-wrap" style={{ left: x }}>
            <div className="balboa-ext-person">
              <div className="balboa-ext-patron-head" />
              <div className="balboa-ext-patron-body" />
            </div>
          </div>
        ))}
      </div>
      <div className="nyc-bar-ext-sidewalk" />
      <div className="nyc-bar-ext-road" />
      {/* Large foreground patrons — close to camera */}
      {fgPatrons.map(({ x, drink, skin, shirt }, i) => (
        <div key={i} className="bf-fg-row" style={{ left: x }}>
          <div className="bf-fg-patron">
            <div className="bf-fg-head" style={{ background: skin }} />
            <div className="bf-fg-body" style={{ background: shirt }} />
          </div>
          <div className={`bf-fg-drink bf-fg-drink-${drink}`} />
        </div>
      ))}
    </div>
  )
}

// ── SF BALBOA INTERIOR ────────────────────────────────────────
function SfBalbaoInt() {
  const top = ['#8A4A0A','#C07830','#5A2A08','#A06020','#C05030','#6A3A10','#B07840']
  const mid = ['#6A3808','#D08040','#8A5018','#C06830','#7A4410','#A07030']
  return (
    <div className="scene-bg sf-balboa-int-bg">
      <div className="bar-back-wall balboa-int-wall" />
      <div className="bar-shelf bar-shelf-top">
        {top.map((c,i) => <div key={i} className="bottle" style={{ background: c }} />)}
      </div>
      <div className="bar-shelf bar-shelf-mid">
        {mid.map((c,i) => <div key={i} className="bottle" style={{ background: c }} />)}
      </div>
      {/* Warm pendant lights */}
      {[55, 140, 230, 320, 410].map((x,i) => (
        <div key={i} className="balboa-int-pendant" style={{ left: x }} />
      ))}
      {/* Patrons on barstools */}
      {[70,165,258,348,425].map((x,i) => (
        <div key={i} className="patron-wrap" style={{ left: x }}>
          <div className="patron-head" />
          <div className="patron-body balboa-int-patron" />
          <div className="stool-seat" />
          <div className="stool-leg" />
        </div>
      ))}
      <div className="bar-counter balboa-int-counter" />
      <div className="bar-floor balboa-int-floor" />
    </div>
  )
}

// ── BACKGROUND SWITCHER ──────────────────────────────────────
function Background({ type }) {
  switch (type) {
    case 'nyc-street':  return <NycStreet />
    case 'nyc-bar':     return <NycBar />
    case 'nyc-rooftop': return <NycRooftop />
    case 'sf-street':   return <SfStreet />
    case 'sf-park':     return <SfPark />
    case 'sf-hike':     return <SfHike />
    case 'sf-apartment':return <SfApartment />
    case 'sf-night':    return <SfApartmentNight />
    case 'sf-office':   return <SfOffice />
    case 'sf-cafe':        return <SfCafe />
    case 'sf-balboa-ext':  return <SfBalbaoExt />
    case 'sf-balboa-int':  return <SfBalbaoInt />
    default:               return <SfStreet />
  }
}

// ── CHARACTER ────────────────────────────────────────────────
function PixelChar({ character, walking }) {
  const isMia = character?.id === 'mia'
  return (
    <div className={`pixel-char ${walking ? 'walking' : ''}`}>
      {isMia ? (
        <>
          <div className="px hair-alex" />
          <div className="px hair-side-l" />
          <div className="px hair-side-r" />
          <div className="px head" />
          <div className="px body-alex" />
          <div className="px arm-l-alex" />
          <div className="px arm-r-alex" />
        </>
      ) : (
        <>
          <div className="px hair-jake" />
          <div className="px head" />
          <div className="px body-jake" />
          <div className="px arm-l-jake" />
          <div className="px arm-r-jake" />
          <div className="px leg-l" />
          <div className="px leg-r" />
        </>
      )}
    </div>
  )
}

export default function PixelScene({ city = 'nyc', character, walking, sceneId }) {
  const bgType = sceneId
    ? (SCENE_BG[sceneId] ?? (city === 'nyc' ? 'nyc-street' : 'sf-street'))
    : (city === 'nyc' ? 'nyc-street' : 'sf-street')
  return (
    <div className="pixel-scene">
      <Background type={bgType} />
      <div className="char-position">
        <PixelChar character={character} walking={walking} />
      </div>
    </div>
  )
}
