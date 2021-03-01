const INITIAL_STATE = {
    data: [],
    contacts: [],
    addNewContact: [],
    editContact: [],
    filter: [],
    deletedContact: [],
    loading: false,
}

export default function users (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_USER_REQUEST':
            return {...state, loading: true };
        case 'ADD_USER_SUCCESS':
            return { data: action.payload.data, loading: false };
        case 'ADD_USER_FAILURE':
            return { data: action.payload.data, loading: false };

        case 'SESSION_REQUEST':
            return { ...state, loading: true };
        case 'SESSION_SUCCESS':
            localStorage.setItem('@token', action.payload.token);
            return { ...state, data: action.payload, loading: false };
        case 'SESSION_FAILURE':
            return {...state,  data: action.payload, loading: false };

        case 'GET_CONTACTS_REQUEST':
            return { ...state, loading: true }
        case 'GET_CONTACTS_SUCCESS':
            return {...state, contacts: action.payload.data, loading: false }
        case 'GET_CONTACTS_FAILURE':
            return {...state, contacts: action.payload.data, loading: false }

        case 'ADD_NEW_CONTACT_REQUEST':
            return { ...state, loading: true }
        case 'ADD_NEW_CONTACT_SUCCESS':
            return {...state, addNewContact: action.payload.data, loading: false }
        case 'ADD_NEW_CONTACT_FAILURE':
            return {...state, addNewContact: action.payload.data, loading: false }


        case 'EDIT_CONTACT_REQUEST':
            return { ...state, loading: true }
        case 'EDIT_CONTACT_SUCCESS':
            return {...state, editContact: action.payload.data.data, loading: false }
        case 'EDIT_CONTACT_FAILURE':
            return {...state, editContact: action.payload.data.data, loading: false }

        case 'SEARCH_FILTER_REQUEST':
            return { ...state, loading: true }
        case 'SEARCH_FILTER_SUCCESS':
            return {...state, filter: action.payload.data, loading: false }
        case 'SEARCH_FILTER_FAILURE':
            return {...state, loading: false }

        case 'DELETE_CONTACT_REQUEST': 
            return { ...state,  loading: false}

        case  'CLEAR':
            return {  ...state, data: [],
                contacts: [],
                addNewContact: [],
                editContact: [],
                filter: [],
                deletedContact: [],
                loading: false}

        default:
            return state;
    }
}
