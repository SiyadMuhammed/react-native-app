export const LOGIN = 'LOGIN'
export const LOGGED_IN = 'LOGGED_IN'
export const LOGOUT = 'LOGOUT'

export const logout = () => {
    dispatch({ type: LOGOUT })
}

export const login = (dispatch) => {
    dispatch({ type: LOGIN })
}

const receiveUserProfile = (userProfile) => ({
    type: LOGGED_IN,
    userProfile
})