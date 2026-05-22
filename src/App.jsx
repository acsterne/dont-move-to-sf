import { useReducer, useState } from 'react'
import { reducer, initialState, ACTS } from './game/reducer'
import { CHARACTERS, SF_SCENES } from './data/scenes'
import GameCanvas from './components/GameCanvas'
import StatsBar from './components/StatsBar'
import TimelineBar from './components/TimelineBar'
import CharSelectScene from './scenes/CharSelectScene'
import NycScene from './scenes/NycScene'
import VisitScene from './scenes/VisitScene'
import DecisionScene from './scenes/DecisionScene'
import FlightScene from './scenes/FlightScene'
import SfScene from './scenes/SfScene'
import EndingScene from './scenes/EndingScene'
import ReturnFlightScene from './scenes/ReturnFlightScene'
import './App.css'

function sfScenesFor(charId) {
  return SF_SCENES.filter(s => !s.characterFilter || s.characterFilter === charId)
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [nycScene, setNycScene] = useState(0)

  const char = state.character ? CHARACTERS[state.character] : null
  const sfScenes = char ? sfScenesFor(char.id) : []

  // NYC scene count depends on character: 1 shared + 3 char + 1 closing = 5
  const NYC_TOTAL = 5

  function topBar() {
    if (!char) return null
    if (state.act === ACTS.CHAR_SELECT || state.act === ACTS.FLIGHT || state.act === ACTS.ENDING) return null

    if (state.act === ACTS.SF) {
      return (
        <>
          <span style={{ fontSize: '8px', whiteSpace: 'nowrap' }}>{char.name}</span>
          <TimelineBar sceneIndex={state.sceneIndex} totalScenes={sfScenes.length} />
          <StatsBar stats={state.stats} />
        </>
      )
    }

    // Show stats during NYC/VISIT/DECISION so NYC choices visibly affect them
    return (
      <>
        <span style={{ fontSize: '8px', whiteSpace: 'nowrap' }}>{char.name}</span>
        <StatsBar stats={state.stats} />
      </>
    )
  }

  const barContent = topBar()

  return (
    <GameCanvas topBar={barContent}>
      {state.act === ACTS.CHAR_SELECT && (
        <CharSelectScene
          onSelect={id => {
            dispatch({ type: 'SELECT_CHARACTER', character: id })
            setNycScene(0)
          }}
        />
      )}

      {state.act === ACTS.NYC && (
        <NycScene
          character={char}
          sceneIndex={nycScene}
          total={NYC_TOTAL}
          onAdvance={() => {
            if (nycScene >= NYC_TOTAL - 1) {
              dispatch({ type: 'NEXT_ACT', act: ACTS.VISIT })
            } else {
              setNycScene(n => n + 1)
            }
          }}
          onChoice={choice => {
            if (choice?.stats && Object.values(choice.stats).some(v => v > 0)) {
              dispatch({ type: 'MAKE_CHOICE', choice, act: ACTS.NYC })
            }
            if (nycScene >= NYC_TOTAL - 1) {
              dispatch({ type: 'NEXT_ACT', act: ACTS.VISIT })
            } else {
              setNycScene(n => n + 1)
            }
          }}
        />
      )}

      {state.act === ACTS.VISIT && (
        <VisitScene
          character={char}
          sceneIndex={state.sceneIndex}
          onAdvance={() => {
            // 0=flashback card, 1-5=VISIT_SCENES[0-4], done at 5
            if (state.sceneIndex >= 5) {
              dispatch({ type: 'NEXT_ACT', act: ACTS.DECISION })
            } else {
              dispatch({ type: 'ADVANCE' })
            }
          }}
        />
      )}

      {state.act === ACTS.DECISION && (
        <DecisionScene
          character={char}
          onChoice={choice => {
            dispatch({ type: 'MAKE_CHOICE', choice, act: ACTS.DECISION })
            dispatch({ type: 'NEXT_ACT', act: ACTS.FLIGHT })
          }}
        />
      )}

      {state.act === ACTS.FLIGHT && (
        <FlightScene onDone={() => dispatch({ type: 'NEXT_ACT', act: ACTS.SF })} />
      )}

      {state.act === ACTS.SF && (
        <SfScene
          character={char}
          sceneIndex={state.sceneIndex}
          onStat={choice => {
            if (choice) dispatch({ type: 'MAKE_CHOICE', choice, act: ACTS.SF })
          }}
          onAdvance={() => dispatch({ type: 'ADVANCE' })}
          onEnding={() => dispatch({ type: 'NEXT_ACT', act: ACTS.ENDING })}
        />
      )}

      {state.act === ACTS.ENDING && (
        <EndingScene
          character={char}
          stats={state.stats}
          monthsElapsed={state.monthsElapsed}
          onFlight={() => dispatch({ type: 'NEXT_ACT', act: ACTS.RETURN_FLIGHT })}
        />
      )}

      {state.act === ACTS.RETURN_FLIGHT && (
        <ReturnFlightScene
          onRestart={() => {
            dispatch({ type: 'RESTART' })
            setNycScene(0)
          }}
        />
      )}
    </GameCanvas>
  )
}
