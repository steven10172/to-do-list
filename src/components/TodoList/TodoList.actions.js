export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    };
};

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    };
};

export function completeTodo(id) {
    return {
        type: COMPLETE_TODO,
        id
    };
};

export function completeAll() {
    return {
        type: COMPLETE_ALL
    };
};