
export const loginRequest = (user, password) => ({
    type: 'LOGIN_FETCH_REQUEST',
    payload: {
        user, password
    }
})

export const loginStart = () => ({
    type: 'LOGIN_FETCH_START'
})

export const loginSuccess = (user) => ({
    type: 'LOGIN_FECTH_SUCCESS',
    payload: { user }
})

export const loginError = (error) => ({
    type: 'LOGIN_FETCH_ERROR',
    error
})

export const logout = () => ({
    type: 'LOGOUT'
})