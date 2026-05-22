import { useState, useEffect } from 'react'
import PixelScene from '../components/PixelScene'
import DialogueBox from '../components/DialogueBox'
import ChoiceButton from '../components/ChoiceButton'
import { FloatingDelta } from '../components/StatDelta'
import { SF_SCENES } from '../data/scenes'
import './SfScene.css'

function sfScenesFor(charId) {
  return SF_SCENES.filter(s => !s.characterFilter || s.characterFilter === charId)
}

export default function SfScene({ character, sceneIndex, onStat, onAdvance, onEnding }) {
  const [phase, setPhase] = useState('choosing') // choosing | outcome | after
  const [pendingChoice, setPendingChoice] = useState(null)

  const scenes = sfScenesFor(character?.id)
  const scene = scenes[sceneIndex]

  // Reset phase when scene changes
  useEffect(() => {
    setPhase('choosing')
    setPendingChoice(null)
  }, [sceneIndex])

  // Auto-advance from outcome → after or next scene (after animation plays)
  useEffect(() => {
    if (phase !== 'outcome') return
    const t = setTimeout(() => {
      if (scene?.afterText) {
        setPhase('after')
      } else if (pendingChoice?.isEnding) {
        onEnding()
      } else {
        onAdvance()
      }
    }, 1800)
    return () => clearTimeout(t)
  }, [phase])

  if (!scene) {
    onEnding()
    return null
  }

  function handleChoice(choice) {
    onStat(choice) // dispatch stats immediately, but do NOT advance yet
    setPendingChoice(choice)
    setPhase('outcome')
  }

  function handleAfterDone() {
    if (pendingChoice?.isEnding) {
      onEnding()
    } else {
      onAdvance()
    }
  }

  const displayText =
    phase === 'after'
      ? scene.afterText
      : phase === 'outcome'
      ? pendingChoice?.outcome
      : scene.text

  return (
    <>
      <div style={{ position: 'relative' }}>
        <PixelScene city="sf" character={character} walking={phase === 'choosing'} sceneId={scene?.id} />
        {phase === 'outcome' && <FloatingDelta stats={pendingChoice?.stats} key={sceneIndex} />}
      </div>
      <DialogueBox location={scene.location} text={displayText}>
        {phase === 'choosing' && !scene.choices && (
          <ChoiceButton onClick={() => onAdvance()}>continue ►</ChoiceButton>
        )}
        {phase === 'choosing' && scene.choices && scene.choices.map((c, i) => (
          <ChoiceButton key={i} onClick={() => handleChoice(c)}>
            {c.text}
          </ChoiceButton>
        ))}
        {phase === 'outcome' && (
          <div className="sf-auto-hint">· · ·</div>
        )}
        {phase === 'after' && (
          <ChoiceButton onClick={handleAfterDone}>continue ►</ChoiceButton>
        )}
      </DialogueBox>
    </>
  )
}
