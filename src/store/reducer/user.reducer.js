const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
}

export default function users (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_USER_REQUEST':
            return {...state, loading: true };
        case 'ADD_USER_SUCCESS':
            return { data: action.payload.data, loading: false, error: false };
        case 'ADD_USER_FAILURE':
            return { data: action.payload.data, loading: false, error: true };

        case 'SESSION_REQUEST':
            return { ...state, loading: true };
        case 'SESSION_SUCCESS':
            return { ...state, data: action.payload, loading: false, error: false };
        case 'SESSION_FAILURE':
            return {...state, data: action.payload, loading: false, error: true };

        case  'CLEAR':
            return {  ...state, data: [], loading: false}

        default:
            return state;
    }
}