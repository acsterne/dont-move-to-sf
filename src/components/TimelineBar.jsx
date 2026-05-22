import './TimelineBar.css'

const SF_SCENE_COUNT = 9 // total filterable SF scenes

export default function TimelineBar({ sceneIndex, totalScenes = SF_SCENE_COUNT }) {
  const month = Math.min(sceneIndex + 1, totalScenes)
  const pct = Math.round((sceneIndex / totalScenes) * 100)

  return (
    <div className="timeline-bar">
      <span className="tl-label">MONTH {month}</span>
      <div className="tl-track">
        <div className="tl-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
