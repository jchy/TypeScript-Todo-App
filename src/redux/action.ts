import { Dispatch } from "redux";
import { ActionType, TaskType } from "./reducer";


export const todoAddRequest = () : ActionType => ({
    type: "ADD_TASK_REQUEST",
    payload: {}
})

export const todoAddSuccess = () : ActionType => ({
    type: "ADD_TASK_SUCCESS",
    payload: {}
})

export const todoAddFailure = () : ActionType => ({
    type: "ADD_TASK_FAILURE",
    payload: {}
})


export const addTodo = (payload: TaskType) => (dispatch: Dispatch<ActionType>) => {
    dispatch(todoAddRequest());
    return fetch("http://localhost:5000/tasks", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(json => {
            dispatch(todoAddSuccess());
        })
        .catch(error => {
            dispatch(todoAddFailure());
        })
}

export const getTasksRequest = () : ActionType => ({
    type: "GET_TASK_REQUEST",
    payload: {}
})

export const getTasksSuccess = (tasks: TaskType[] ) : ActionType => ({
    type: "GET_TASK_SUCCESS",
    payload: {
        tasks: tasks
    }
})

export const getTasksFailure = () : ActionType => ({
    type: "GET_TASK_FAILURE",
    payload: {}
})


export const getTodos = () => (dispatch: Dispatch<ActionType>) => {
    dispatch(getTasksRequest());
    return fetch("http://localhost:5000/tasks")
        .then(response => response.json())
        .then((res: TaskType[]) => {
            dispatch(getTasksSuccess(res));
            return res
        })
        .catch(error => {
            dispatch(getTasksFailure());
        })
}

export const updateTaskRequest = () : ActionType => ({
    type: "UPDATE_TASK_REQUEST",
    payload: {}
})

export const updateTaskSuccess = (tasks: TaskType[] ) : ActionType => ({
    type: "UPDATE_TASK_SUCCESS",
    payload: {
        tasks: tasks
    }
})

export const updateTaskFailure = () : ActionType => ({
    type: "UPDATE_TASK_FAILURE",
    payload: {}
})


export const updateTodo = ({id, task}: { id: string, task: TaskType}) => (dispatch: Dispatch<ActionType>  ) : Promise<void> => {
    dispatch(updateTaskRequest());
    return fetch("http://localhost:5000/tasks/"+id,{
        method: "PATCH",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then((res: TaskType[]) => {
            dispatch(updateTaskSuccess(res));

        })
        .catch(error => {
            dispatch(updateTaskFailure());
        })
}