import { ADD_NEW_TODO } from '../actions';

const initialState = {
    todo: []
}

export const reducer = (state = initialState, action) => { 
    switch(action.type) {
        case ADD_NEW_TODO:
            return {
                ...state,
                todo: [...state.todo, {value: action.payload, completed: false}]

            }
        default:
            return state;
    }
}