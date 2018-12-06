
import {put, call, takeLatest} from 'redux-saga/effects';
import {loginStart, loginSuccess, loginError} from '../redux/actions/Auth'

function * doLogin(action) {
    try {
        yield put(loginStart());
        const data = yield call(() => {
            console.log(action.payload)
            return new Promise(resolve => setTimeout(() => resolve(true), 2000))
        });
        yield put(loginSuccess(data));
    } catch (error) {
        yield put(loginError(error));
    }
}

function* loginSaga() {
    yield takeLatest("LOGIN_FETCH_REQUEST", doLogin);
}

export default loginSaga;
