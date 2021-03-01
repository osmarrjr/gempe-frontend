import { takeLatest, put, call, all } from 'redux-saga/effects';

import api from '../../services/api';

import {
    startSessionSuccess,
    startSessionFailure
} from '../actions/user.actions';

function* addUser() {
    
    try {
        const response = yield call (api.post('/people', {
            name: "alguem12313123",
            email: "alguem321213123312@gmail.com",
            phone: "1232131231223121213s3"
        }))
        .then(teste => console.log(teste))
        .catch(err => console.log(err))

        yield put(startSessionSuccess(
            response
        ));

    } catch (err) {
        yield put(startSessionFailure(

        ));
    }
}

function* startSession({ payload }) {
    try {
        let { data }  = yield call (api.post, '/session', payload);

         yield put(startSessionSuccess(
            data
        ));

    } catch (error) {
        console.log(error.response.data.message);
        yield put(startSessionFailure(
            error.response.data.message
            )); 
    }
}

export default function* rootSaga () { 
    yield all([
        takeLatest("ADD_USER_REQUEST", addUser),
        takeLatest("SESSION_REQUEST", startSession),
    ]);
}