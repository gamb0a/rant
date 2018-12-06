import { connect } from 'react-redux'
import { toggle } from '../redux/actions/Nav'
import Nav from './Nav'

const mapStateToProps = (state) => {
    return {
        'collapsed': state.Nav.collapsed
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleNav: () => {
            dispatch(toggle())
        }
    }
}

const NavContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)

export default NavContainer