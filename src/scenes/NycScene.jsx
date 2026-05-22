import { useState, useEffect } from 'react'
import PixelScene from '../components/PixelScene'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { FloatingDelta } from '../components/StatDelta'
import { NYC_SCENES, NYC_SCENES_MIA, NYC_SCENES_JAKE, NYC_CLOSING_SCENE } from '../data/scenes'

function buildScenes(charId) {
  const charScenes = charId === 'mia' ? NYC_SCENES_MIA : NYC_SCENES_JAKE
  return [...NYC_SCENES, ...charScenes, NYC_CLOSING_SCENE]
}

export default function NycScene({ character, sceneIndex, onAdvance, onChoice }) {
  const [outcome, setOutcome] = useState(null)
  const [pendingChoice, setPendingChoice] = useState(null)

  const scenes = buildScenes(character?.id)
  const scene = scenes[sceneIndex]

  // Auto-advance 1.5s after showing NYC outcome
  useEffect(() => {
    if (!outcome) return
    const t = setTimeout(() => {
      const c = pendingChoice
      setOutcome(null)
      setPendingChoice(null)
      onChoice(c)
    }, 1500)
    return () => clearTimeout(t)
  }, [outcome])

  if (!scene) {
    onAdvance()
    return null
  }

  function handleChoice(c) {
    if (c.outcome) {
      setPendingChoice(c)
      setOutcome(c.outcome)
    } else {
      onChoice(c)
    }
  }

  return (
    <>
      <div style={{ position: 'relative' }}>
        <PixelScene city="nyc" character={character} walking={!scene.choices && !outcome} sceneId={scene.id} />
        {outcome && <FloatingDelta stats={pendingChoice?.stats} key={outcome} />}
      </div>
      <DialogueBox location={scene.location} text={outcome || scene.text} variant="nyc">
        {outcome ? null : scene.choices ? (
          scene.choices.map((c, i) => (
            <ChoiceButton key={i} variant="nyc" onClick={() => handleChoice(c)}>
              {c.text}
            </ChoiceButton>
          ))
        ) : (
          <ChoiceButton variant="nyc" onClick={onAdvance}>
            continue ►
          </ChoiceButton>
        )}
      </DialogueBox>
    </>
  )
}
