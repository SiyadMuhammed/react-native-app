import {
  FETCH_CHALLENGES,
  BEGIN_CHALLENGE,
  MOVE_TO_NEXT_CHALLENGE,
  ADD_NOTE,
  COMPLETE_ALL_CHALLENGE
} from '../actions/challenge-actions';

const initialState = {
  untouchedChallenges: undefined,
  activeChallenge: undefined,
  finishedChallenges: undefined
}

const challenges = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHALLENGES:
      return {
        ...state,
        untouchedChallenges: action.untouchedChallenges
      }
    case BEGIN_CHALLENGE:
      return {
        ...state,
        untouchedChallenges: action.untouchedChallenges,
        activeChallenge: action.activeChallenge
      }
    case MOVE_TO_NEXT_CHALLENGE:
      return {
        ...state,
        untouchedChallenges: action.untouchedChallenges,
        activeChallenge: action.activeChallenge,
        finishedChallenges: activeChallenge.finishedChallenges
      }
    case ADD_NOTE:
      return {
        ...state,
        activeChallenge: action.activeChallenge
      }
    case COMPLETE_ALL_CHALLENGE:
      return {
        ...state,
        untouchedChallenges: action.untouchedChallenges,
        activeChallenge: action.activeChallenge,
        finishedChallenges: activeChallenge.finishedChallenges
      }
    default:
      return state
  }
}

export default challenges

