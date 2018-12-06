const defaultState = {
    collapsed: false
}

const Nav = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            return state
    }
}

export default Nav;