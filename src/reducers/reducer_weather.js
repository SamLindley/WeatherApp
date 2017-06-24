import {FETCH_WEATHER} from '../actions/index'

export default function(state = [], action){
    switch (action.type){
        case FETCH_WEATHER:
            //NEVER MANIPULATE STATE! This returns a NEW array and returns that.
            return [action.payload.data, ...state];
    }
    return state;
}