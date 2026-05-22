import './CharSelectScene.css'
import { CHARACTERS } from '../data/scenes'

function PixelCharPreview({ charId }) {
  const isAlex = charId === 'mia'
  return (
    <div className="char-preview-sprite">
      {isAlex ? (
        <>
          <div className="cpx hair-a" />
          <div className="cpx head-c" />
          <div className="cpx body-a" />
          <div className="cpx arm-la" />
          <div className="cpx arm-ra" />
          <div className="cpx leg-lc" />
          <div className="cpx leg-rc" />
        </>
      ) : (
        <>
          <div className="cpx hair-j" />
          <div className="cpx head-c" />
          <div className="cpx body-j" />
          <div className="cpx arm-lj" />
          <div className="cpx arm-rj" />
          <div className="cpx leg-lc" />
          <div className="cpx leg-rc" />
        </>
      )}
    </div>
  )
}

export default function CharSelectScene({ onSelect }) {
  return (
    <div className="char-select-scene">
      <div className="cs-title-block">
        <div className="cs-title">DON'T MOVE</div>
        <div className="cs-title">TO SF</div>
        <div className="cs-subtitle">a cautionary tale in pixels</div>
      </div>

      <div className="cs-prompt">CHOOSE YOUR CHARACTER</div>

      <div className="cs-chars">
        {Object.values(CHARACTERS).map(char => (
          <button key={char.id} className="cs-char-btn" onClick={() => onSelect(char.id)}>
            <PixelCharPreview charId={char.id} />
            <div className="cs-char-name">{char.name}</div>
            <div className="cs-char-bio">
              {char.bio.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </button>
        ))}
      </div>

      <div className="cs-footer">choose wisely</div>
    </div>
  )
}
