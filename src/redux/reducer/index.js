import {ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from './../actionType';
const initialState = {
    contactList: [],
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
            contactList.splice(action.payload.index, 1, action.payload.data);
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
        default:
            return state;
    }
}
