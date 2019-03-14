

export const ADD_NEW_TODO = 'ADD_NEW_TODO';

export const addNewTodo = element => {
    return {
        type: ADD_NEW_TODO,
        payload: element
    }

}


export const DELETE_TODO = 'DELETE_TODO';

export const deleteTodo = element => {
    return {
        type: DELETE_TODO,
        payload: element
    }
}


export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}