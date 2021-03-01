export function startSessionRequest(data) {

    return {
        type: 'SESSION_REQUEST',
        payload: data
    }
}

export function startSessionSuccess(token) {
    
    return {
        type: 'SESSION_SUCCESS',
        payload: token
    }
}

export function startSessionFailure(data) {
    
    return {
        type: 'SESSION_FAILURE',
        payload: data
    }
}

export function getContactsRequest() {
    return {
        type: 'GET_CONTACTS_REQUEST'
    }
}

export function getContactsSuccess(data){ 
    return {
        type: 'GET_CONTACTS_SUCCESS',
        payload: {
            data
        }
    }
}

export function getContactsFailure(data) {
    return {
        type: 'GET_CONTACTS_FAILURE',
        payload: {
            data
        }
    }
}

export function addNewContactRequest(data) {
    return {
        type: 'ADD_NEW_CONTACT_REQUEST',
        payload: {
            data
        }
    }
}

export function addNewContactSuccess(data) {
    return {
        type: 'ADD_NEW_CONTACT_SUCCESS',
        payload: {
            data
        }
    }
}

export function addNewContactFailure(data) {
    return {
        type: 'ADD_NEW_CONTACT_FAILURE',
        payload: {
            data
        }
    }
}

export function editContactRequest(id, data) {
    return {
        type: 'EDIT_CONTACT_REQUEST',
        payload: {
            data,
            id: id
        }
    }
}

export function editContactSuccess(data) {
    return {
        type: 'EDIT_CONTACT_SUCCESS',
        payload: {
            data
        }
    }
}

export function editContactFailure(data) {
    return {
        type: 'EDIT_CONTACT_FAILURE',
        payload: {
            data
        }
    }
}

export function searchFilterRequest(data) {
    return {
        type: 'SEARCH_FILTER_REQUEST',
        payload: {
            data
        }
    }
}

export function searchFilterSuccess(data) {
    return {
        type: 'SEARCH_FILTER_SUCCESS',
        payload: {
            data
        }
    }
}

export function deleteContactRequest(data) {
    return {
        type: 'DELETE_CONTACT_REQUEST',
        payload: {
            data
        }
    }
}

export function deleteContactSuccess(data) {
    return {
        type: 'DELETE_CONTACT_SUCCESS',
        payload: {
            data
        }
    }
}

export function deleteContactFailure(data) {
    return {
        type: 'DELETE_CONTACT_FAILURE',
        payload: {
            data
        }
    }
}

export function searchFilterFailure() {
    return {
        type: 'SEARCH_FILTER_FAILURE',
    }
}

export function clearData() {
    return {
        type: 'CLEAR'
    }
}
