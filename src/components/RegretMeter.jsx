import './RegretMeter.css'

export default function RegretMeter({ score }) {
  return (
    <div className="regret-meter">
      <span className="meter-label">REGRET</span>
      <div className="pips">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`pip ${i <= score ? 'pip-on' : 'pip-off'}`} />
        ))}
      </div>
    </div>
  )
}
