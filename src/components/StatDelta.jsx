import './StatDelta.css'

const STAT_CONFIG = {
  fitness: { label: 'FITNESS', color: '#81B29A' },
  fun:     { label: 'FUN',     color: '#E07A5F' },
  sanity:  { label: 'SANITY',  color: '#9BB8D4' },
}

function getItems(stats) {
  if (!stats) return []
  return Object.entries(stats)
    .filter(([, v]) => v !== 0)
    .map(([key, v]) => {
      const cfg = STAT_CONFIG[key]
      if (!cfg) return null
      return { ...cfg, key, display: `${v > 0 ? '+' : ''}${v} ${cfg.label}` }
    })
    .filter(Boolean)
}

// Inline version inside dialogue box
export default function StatDelta({ stats }) {
  const items = getItems(stats)
  if (items.length === 0) return null
  return (
    <div className="stat-delta">
      {items.map(item => (
        <span key={item.key} className="stat-delta-item" style={{ color: item.color }}>
          {item.display}
        </span>
      ))}
    </div>
  )
}

// Floating animated version — renders over the pixel scene
export function FloatingDelta({ stats, key: animKey }) {
  const items = getItems(stats)
  if (items.length === 0) return null
  return (
    <div className="floating-delta" key={animKey}>
      {items.map(item => (
        <span key={item.key} className="floating-delta-item" style={{ color: item.color }}>
          {item.display}
        </span>
      ))}
    </div>
  )
}
