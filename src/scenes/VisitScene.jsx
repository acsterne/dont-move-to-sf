import PixelScene from '../components/PixelScene'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { VISIT_SCENES } from '../data/scenes'
import './VisitScene.css'

// Index 0 is the flashback transition card
export default function VisitScene({ character, sceneIndex, onAdvance }) {
  if (sceneIndex === 0) {
    return (
      <div className="flashback-screen">
        <div className="flashback-inner">
          <div className="flashback-rule" />
          <div className="flashback-label">THE VISIT</div>
          <div className="flashback-rule" />
          <div className="flashback-text">
            A work friend invites you to San Francisco for a long weekend. You have always been a little curious. You book it.
          </div>
          <button className="flashback-btn" onClick={onAdvance}>continue ►</button>
        </div>
      </div>
    )
  }

  const scene = VISIT_SCENES[sceneIndex - 1]
  if (!scene) {
    onAdvance()
    return null
  }

  if (scene.isFriendSplit) {
    return (
      <>
        <PixelScene city="sf" character={character} sceneId={scene.id} />
        <DialogueBox location={scene.location} text="">
          <div className="friend-messages">
            <div className="friend-msg east">
              <div className="friend-label">EAST COAST FRIEND</div>
              <div className="friend-text">{scene.eastCoast}</div>
            </div>
            <div className="friend-msg west">
              <div className="friend-label">WEST COAST FRIEND</div>
              <div className="friend-text">{scene.westCoast}</div>
            </div>
          </div>
          <ChoiceButton onClick={onAdvance}>continue ►</ChoiceButton>
        </DialogueBox>
      </>
    )
  }

  return (
    <>
      <PixelScene city="sf" character={character} walking sceneId={scene.id} />
      <DialogueBox location={scene.location} text={scene.text}>
        <ChoiceButton onClick={onAdvance}>continue ►</ChoiceButton>
      </DialogueBox>
    </>
  )
}
