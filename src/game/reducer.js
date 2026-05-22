export const ACTS = {
  CHAR_SELECT: 'CHAR_SELECT',
  NYC: 'NYC',
  VISIT: 'VISIT',
  DECISION: 'DECISION',
  FLIGHT: 'FLIGHT',
  SF: 'SF',
  ENDING: 'ENDING',
  RETURN_FLIGHT: 'RETURN_FLIGHT',
}

export const initialState = {
  act: ACTS.CHAR_SELECT,
  character: null,
  sceneIndex: 0,
  choices: [],
  // all stats start at 2; NYC fills (+2), SF drains (-1), floor=0, cap=6
  stats: { fitness: 2, fun: 2, sanity: 2 },
  monthsElapsed: 12,
  decisionReason: null,
}

function computeMonths(stats) {
  return 12 + Math.max(0, stats.fitness - 2) + Math.max(0, stats.fun - 2) + Math.max(0, stats.sanity - 2)
}

export function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_CHARACTER':
      return { ...state, character: action.character, act: ACTS.NYC, sceneIndex: 0 }

    case 'ADVANCE':
      return { ...state, sceneIndex: state.sceneIndex + 1 }

    case 'MAKE_CHOICE': {
      const { choice, act } = action
      const d = choice.stats || {}
      const newStats = {
        fitness: Math.max(0, Math.min(6, state.stats.fitness + (d.fitness || 0))),
        fun:     Math.max(0, Math.min(6, state.stats.fun     + (d.fun     || 0))),
        sanity:  Math.max(0, Math.min(6, state.stats.sanity  + (d.sanity  || 0))),
      }
      const newState = {
        ...state,
        choices: [...state.choices, choice.text],
        stats: newStats,
        monthsElapsed: computeMonths(newStats),
      }
      if (act === ACTS.DECISION) newState.decisionReason = choice.outcome
      return newState
    }

    case 'NEXT_ACT':
      return { ...state, act: action.act, sceneIndex: 0 }

    case 'RESTART':
      return { ...initialState }

    default:
      return state
  }
}
