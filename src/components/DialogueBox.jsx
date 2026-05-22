import './DialogueBox.css'

export default function DialogueBox({ location, text, children, variant = 'default' }) {
  return (
    <div className={`dialogue-box dialogue-${variant}`}>
      {location && <div className="dialogue-location">▸ {location}</div>}
      <p className="dialogue-text">{text}</p>
      {children && <div className="dialogue-actions">{children}</div>}
    </div>
  )
}
