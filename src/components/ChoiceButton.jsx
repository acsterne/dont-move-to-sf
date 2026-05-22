import './ChoiceButton.css'

export default function ChoiceButton({ children, onClick, variant = 'default' }) {
  return (
    <button className={`choice-btn choice-${variant}`} onClick={onClick}>
      <span className="choice-arrow">►</span>
      <span className="choice-text">{children}</span>
    </button>
  )
}
