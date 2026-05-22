import { useState } from 'react'
import PixelScene from '../components/PixelScene'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { DECISION_SCENE } from '../data/scenes'
import './DecisionScene.css'

export default function DecisionScene({ character, onChoice }) {
  const [phase, setPhase] = useState('offer') // offer → choice → friends
  const [chosen, setChosen] = useState(null)

  function handleChoice(choice) {
    setChosen(choice)
    setPhase('friends')
  }

  function handleDone() {
    onChoice({ text: chosen.text, outcome: chosen.outcome, regret: 0 })
  }

  return (
    <>
      <PixelScene city="nyc" character={character} sceneId="decision" />
      {phase === 'offer' && (
        <DialogueBox location={DECISION_SCENE.location} text={DECISION_SCENE.text} variant="nyc">
          <div className="offer-card">
            <div className="offer-row"><span className="offer-key">TITLE</span><span className="offer-val">Senior {character?.id === 'jake' ? 'Product' : 'Content'} Lead</span></div>
            <div className="offer-row"><span className="offer-key">SALARY</span><span className="offer-val">+40%</span></div>
            <div className="offer-row"><span className="offer-key">EQUITY</span><span className="offer-val">0.1% · 4yr vest</span></div>
            <div className="offer-row"><span className="offer-key">CULTURE</span><span className="offer-val">"Flexible"</span></div>
          </div>
          {DECISION_SCENE.choices.map((c, i) => (
            <ChoiceButton key={i} variant="nyc" onClick={() => handleChoice(c)}>
              {c.text}
            </ChoiceButton>
          ))}
        </DialogueBox>
      )}
      {phase === 'friends' && (
        <DialogueBox location="YOUR PHONE · THAT NIGHT" text={chosen.outcome} variant="nyc">
          <div className="friend-messages-decision">
            <div className="fdm east">
              <div className="fdm-label">EAST COAST FRIEND</div>
              <div className="fdm-text">{DECISION_SCENE.friendsAfter.eastCoast}</div>
            </div>
            <div className="fdm west">
              <div className="fdm-label">WEST COAST FRIEND</div>
              <div className="fdm-text">{DECISION_SCENE.friendsAfter.westCoast}</div>
            </div>
          </div>
          <ChoiceButton onClick={handleDone}>book the flight ►</ChoiceButton>
        </DialogueBox>
      )}
    </>
  )
}
