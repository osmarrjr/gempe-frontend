import { takeLatest, put, call, all } from 'redux-saga/effects';
import Swal from 'sweetalert2';
import api from '../../services/api';

import {
    startSessionSuccess,
    startSessionFailure,
    getContactsSuccess,
    getContactsFailure,
    addNewContactSuccess,
    addNewContactFailure,
    editContactSuccess,
    editContactFailure,
    searchFilterSuccess,
    searchFilterFailure,
} from '../actions/user.actions';

function* startSession({ payload }) {
    try {
        let { data }  = yield call (api.post, '/session', payload);

         yield put(startSessionSuccess(
            data
        ));

    } catch (error) {
        yield put(startSessionFailure(
            error.response.data.message
        )); 
    }
}

function* contactsRequest({ payload }) {
    try {
        let { data } = yield call (api.get, '/people', payload);
        yield put(getContactsSuccess(
            data
        ));

    } catch (error) {
        yield put(getContactsFailure(
            error.response.data.message
        ));
    }
}

function* addNewUser({ payload }) {
    try {
        const response = yield call (api.post, '/people', payload.data);

        yield put(addNewContactSuccess(
            response
        ));

    } catch (error) {
        yield put(addNewContactFailure(
            error.response.data.message
        ));
    }
}

function* editContact({ payload }){
    try{
        let {data} = payload;

        const response = yield call (api.put,`/people/${payload.id}`,{
            data
        })
        yield put(editContactSuccess(
            response
        ));

    }catch(error){

        yield put(editContactFailure(
            error.response.data.message
        ));
    }
}

function* searchByFilter({ payload }) {
    try {
        const response = yield call (api.get, `people-filter?q=${payload.data}` )

        yield put(searchFilterSuccess(
            response
        ));

    } catch (error) {
        Swal.fire('Atenção', 'Nenhum usuário encontrado', 'info');
        yield put(searchFilterFailure(
            error.response.data.message
        ));
    }
}

function* deleteUser({ payload }) {
    try {
        const response = yield call(api.delete, `/people/${payload.data}`);
        
        if(response.data.message) {
            Swal.fire('Atenção', response.data.message, 'success');
        } else if (response.data.error) {
            Swal.fire('Atenção', response.data.error, 'info');
        }

    } catch (error) {
        Swal.fire('Atenção', 'Erro ao deletar um usuário.', 'info');
    }
}   

export default function* rootSaga () { 
    yield all([
        takeLatest("SESSION_REQUEST", startSession),
        takeLatest("GET_CONTACTS_REQUEST", contactsRequest),
        takeLatest("ADD_NEW_CONTACT_REQUEST", addNewUser),
        takeLatest("EDIT_CONTACT_REQUEST", editContact),
        takeLatest("SEARCH_FILTER_REQUEST", searchByFilter),
        takeLatest("DELETE_CONTACT_REQUEST", deleteUser)
    ]);
}