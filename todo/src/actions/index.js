

export const ADD_NEW_TODO = 'ADD_NEW_TODO';



export const addNewTodo = element => {
    return {
        type: ADD_NEW_TODO,
        payload: element
    }

}