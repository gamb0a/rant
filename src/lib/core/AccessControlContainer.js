import { connect } from 'react-redux'
import AccessControl from './AccessControl'

const mapStateToProps = (state, ownProps) => {
    return {
        'authenticated': state.Auth.authenticated,
        'children': ownProps.children
    }
}

const SideContainer = connect(
    mapStateToProps
)(AccessControl)

export default SideContainer