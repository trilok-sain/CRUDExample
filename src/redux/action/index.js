import {ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT} from './../actionType';

export const addContactAction = (data) => {
    console.log("add Contact Action");
    return ({
        type: ADD_CONTACT,
        payload: {data}
    })
}

export const deleteContactAction = (index) => ({
    type: DELETE_CONTACT,
    payload: {index}
})

export const updateContactAction = (data, index) => ({
    type: UPDATE_CONTACT,
    payload: {data , index}
})