import { connect } from 'react-redux'
import Side from './Side'

const mapStateToProps = (state) => {
    return {
        'collapsed': state.Nav.collapsed
    }
}

const SideContainer = connect(
    mapStateToProps
)(Side)

export default SideContainer