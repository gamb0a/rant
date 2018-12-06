const defaultState = {
    error: null,
    logging: false,
    authenticated: false,
    user: null
}

const Auth = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN_FETCH_START':
            return {
                ...state,
                logging: true
            }
        case 'LOGIN_FECTH_SUCCESS':
            return {
                ...state,
                authenticated: true,
                user: action.payload.user
            }
        case 'LOGIN_FETCH_ERROR':
            return {
                ...state,
                logging: false,
                error: action.error
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                authenticated: false
            }
        default:
            return state
    }
}

export default Auth;