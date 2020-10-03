import {
ADD_CONTACT, 
UPDATE_CONTACT, 
DELETE_CONTACT,
REQUEST_CONTACT_LIST,
SUCCESS_CONTACT_LIST,
ERROR_CONTACT_LIST
 } from './../actionType';
 
const initialState = {
    contactList: [],
    loading: false, 
    error: null
}

export default function CRUDExample(state = initialState, action){
    let {contactList} = state;
    switch (action.type) {
        case ADD_CONTACT:
            contactList.push(action.payload.data);
            contactList = [...contactList]
            return {
                ...state, contactList
            };
        case UPDATE_CONTACT:
            let value = contactList[action.payload.index];
            value = {...value, phone: action.payload.data.contact, name: action.payload.data.name}
            contactList.splice(action.payload.index, 1, value);
            contactList = [...contactList];
            return{
                ...state, contactList
            }
        case DELETE_CONTACT:
            contactList.splice(action.payload.index, 1); 
            contactList = [...contactList];
            return{
                ...state, contactList
            }
        case REQUEST_CONTACT_LIST:
            return {
                ...state, 
                loading: true,
                error: null
            }
        case SUCCESS_CONTACT_LIST:
            console.log(action);
            return{
                ...state, 
                loading: false,
                contactList: action.payload,
                error: null
            }
        case ERROR_CONTACT_LIST:
            return{ 
                ...state, 
                loading: false,
                error : action.payload
            }
        default:
            return state;
    }
}
