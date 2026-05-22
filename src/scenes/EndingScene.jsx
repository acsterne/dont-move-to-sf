import './EndingScene.css'

function getArchetype(stats) {
  const { fitness, fun, sanity } = stats
  const max = Math.max(fitness, fun, sanity)
  if (max === 0) return 'neutral'
  if (fitness >= fun && fitness >= sanity) return 'hiker'
  if (sanity >= fun) return 'nerd'
  return 'marina'
}

const ARCHETYPES = {
  hiker: {
    label: 'THE HIKER',
    color: '#81B29A',
    lines: [
      "You own trekking poles you did not own a year ago.",
      "You have a saved Strava route called 'my usual.'",
      "You said 'the outdoors really grounds me' last week",
      "and meant it.",
      "You are out of touch and very well-rested.",
    ],
  },
  nerd: {
    label: 'THE TECH ADJACENT',
    color: '#9BB8D4',
    lines: [
      "You know what MCP servers are.",
      "You have been to a demo day.",
      "You once stayed in to build something instead of going out",
      "and called it a good night.",
      "You are coding LLM games at midnight instead of going to bed.",
    ],
  },
  marina: {
    label: 'THE MARINA PERSON',
    color: '#E07A5F',
    lines: [
      "You are overly agreeable about everything.",
      "You have opinions about nothing.",
      "You mention your 'network' in casual conversation.",
      "You are very nice and completely without texture.",
      "There is no there there and you have stopped noticing.",
    ],
  },
  neutral: {
    label: 'THE HOLDOUT',
    color: '#B8D4E4',
    lines: [
      "You resisted everything.",
      "Remarkable, really.",
      "You still went home.",
    ],
  },
}

const STAT_DISPLAY = [
  { key: 'fitness', label: 'FITNESS', color: '#81B29A' },
  { key: 'fun',     label: 'FUN',     color: '#E07A5F' },
  { key: 'sanity',  label: 'SANITY',  color: '#9BB8D4' },
]

const MAX = 6

function StatRow({ label, value, color }) {
  return (
    <div className="ending-stat-row">
      <span className="esr-label" style={{ color }}>{label}</span>
      <div className="esr-pips">
        {Array.from({ length: MAX }).map((_, i) => (
          <div key={i} className="esr-pip" style={{ background: i < value ? color : undefined }} />
        ))}
      </div>
    </div>
  )
}

export default function EndingScene({ stats, monthsElapsed, onFlight }) {
  const months = Math.max(monthsElapsed, 6)
  const archetype = getArchetype(stats)
  const arch = ARCHETYPES[archetype]

  return (
    <div className="ending-scene">
      <div className="ending-inner">
        <div className="ending-title">GAME OVER</div>

        <div className="ending-survived">
          You lasted <span className="ending-months">{months} months.</span>
        </div>

        <div className="ending-arch-label" style={{ color: arch.color }}>
          YOU BECAME: {arch.label}
        </div>

        <div className="ending-arch-lines">
          {arch.lines.map((line, i) => (
            <div key={i} className="ending-arch-line">{line}</div>
          ))}
        </div>

        <div className="ending-stat-block">
          {STAT_DISPLAY.map(s => (
            <StatRow key={s.key} label={s.label} value={stats[s.key]} color={s.color} />
          ))}
        </div>

        <div className="ending-verdict">Your friends are not surprised.</div>

        <button className="ending-btn" onClick={onFlight}>
          ► book flight home
        </button>

        <div className="ending-postscript">
          see you at the west village bar.
          <br />it's still there.
        </div>
      </div>
    </div>
  )
}
