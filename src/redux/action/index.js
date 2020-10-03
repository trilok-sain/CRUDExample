
import {
ADD_CONTACT,
DELETE_CONTACT, 
UPDATE_CONTACT,
REQUEST_CONTACT_LIST,
SUCCESS_CONTACT_LIST,
ERROR_CONTACT_LIST
} from './../actionType';

export const addContactAction = (data) => {
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



export const  getDataContactAction = (data) => {
    return function(dispatch){
        dispatch({type: REQUEST_CONTACT_LIST});
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log("response", response);
            return response.json();
        }).then((res)=> {
            dispatch({type: SUCCESS_CONTACT_LIST, payload: res});
        }).catch((err)=>{
            dispatch({type: ERROR_CONTACT_LIST, payload: err})
        })
    }
}