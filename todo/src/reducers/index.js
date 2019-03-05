import { ADD_NEW_TODO, DELETE_TODO, TOGGLE_TODO} from '../actions';

const initialState = {
    todo: []
}

export const reducer = (state = initialState, action) => { 
    switch(action.type) {
        case ADD_NEW_TODO:
            return {
                ...state,
                todo: [...state.todo, {value: action.payload, completed: false, id: Date.now()}]

            }

        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter(item => item.completed !== true)
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todo: state.todo.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    }
                    return item;
                })
            }
        default:
            return state;
    }
}