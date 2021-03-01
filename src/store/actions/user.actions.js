export function addUser() {
    return {
        type: 'ADD_USER_REQUEST'
    }
}

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

export function clearData() {
    return {
        type: 'CLEAR'
    }
}