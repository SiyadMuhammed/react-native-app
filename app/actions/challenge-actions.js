export const FETCH_CHALLENGES = 'FETCH_CHALLENGES'
export const BEGIN_CHALLENGE = 'BEGIN_CHALLENGE'
export const ADD_NOTE = 'ADD_NOTE'
export const MOVE_TO_NEXT_CHALLENGE = 'MOVE_TO_NEXT_CHALLENGE'
export const COMPLETE_ALL_CHALLENGE = 'COMPLETE_ALL_CHALLENGE'

const fetchChallengesAction = (challenges) => ({
    type: FETCH_CHALLENGES,
    untouchedChallenges: challenges
})

const beginChallengeAction = (activeChallenge, challenges) => ({
    type: BEGIN_CHALLENGE,
    activeChallenge,
    untouchedChallenges: challenges
})

const addNoteAction = (activeChallenge) => ({
    type: ADD_NOTE,
    activeChallenge
})

const moveToNextChallengeAction = (activeChallenge, untouchedChallenges, finishedChallenges) => ({
    type: MOVE_TO_NEXT_CHALLENGE,
    activeChallenge,
    untouchedChallenges,
    finishedChallenges
})

const completeAllChallengesAction = (activeChallenge, untouchedChallenges, finishedChallenges) => ({
    type: COMPLETE_ALL_CHALLENGE,
    activeChallenge,
    untouchedChallenges,
    finishedChallenges
})

export const addNoteToActiveChallenge = (state, note) => {
    const activeChallenge = { ...state.activeChallenge, ...{ note }};
    dispatch(addNoteAction(activeChallenge));
}

export const proceedWithChallenge = (state) => {
    if (state.untouchedChallenges === undefined && state.untouchedChallenges.length === 0) {
        completeChallenge()
    }

    if(state.activeChallenge) {
        beginChallenge(state)
    } else {
        nextChallenge(state)
    }
}

function beginChallenge(state) {
    const activeChallenge = state.untouchedChallenges[0];
    const challenges = state.untouchedChallenges.shift();
    dispatchEvent(beginChallengeAction(activeChallenge, challenges));
}

function nextChallenge(state) {
    const finishedChallenges = state.finishedChallenges.push(state.activeChallenge);
    const activeChallenge = state.untouchedChallenges[0];
    const challenges = state.untouchedChallenges.shift();
    dispatchEvent(moveToNextChallengeAction(activeChallenge, challenges, finishedChallenges));
}

function completeChallenge(state) {
    const finishedChallenges = state.finishedChallenges.push(state.activeChallenge);
    const activeChallenge = undefined
    dispatchEvent(completeAllChallengesAction(activeChallenge, store.challenges, finishedChallenges));
}