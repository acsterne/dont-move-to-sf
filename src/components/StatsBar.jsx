import './StatsBar.css'

const MAX = 6

export default function StatsBar({ stats }) {
  return (
    <div className="stats-bar">
      <StatPips label="FIT" value={stats.fitness} color="#81B29A" />
      <StatPips label="FUN" value={stats.fun}     color="#E07A5F" />
      <StatPips label="SAN" value={stats.sanity}  color="#9BB8D4" />
    </div>
  )
}

function StatPips({ label, value, color }) {
  return (
    <div className="stat-row">
      <span className="stat-label">{label}</span>
      <div className="stat-pips">
        {Array.from({ length: MAX }).map((_, i) => (
          <div
            key={i}
            className="stat-pip"
            style={{ background: i < value ? color : undefined }}
          />
        ))}
      </div>
    </div>
  )
}
