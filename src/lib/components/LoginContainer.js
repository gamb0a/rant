import { connect } from 'react-redux'
import { loginRequest } from '../redux/actions/Auth'
import LoginComponent from './LoginComponent'
import { Form } from 'antd';

const mapStateToProps = (state, ownProps) => {
    return {
        'loading': state.Auth.logging,
        'form': ownProps.form
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (user, pass) => {
            dispatch(loginRequest(user, pass))
        }
    }
}

export default Form.create({})(connect(mapStateToProps, mapDispatchToProps)(LoginComponent))