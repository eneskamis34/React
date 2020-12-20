import { FETCH_USER } from '../actions/types';

// action returned with type and payload. This is going to be sent to combineReducers.
export default function foo(state = null, action) {
    //console.log(action);
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false; // if its empty, set false. ('' => false, !'' => true)
        default:
            return state;
    }
}