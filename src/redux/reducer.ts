import { SubTaskProp } from "../pages/AddTask";


export type Status = "todo"| "in-progress" | "done"

export interface TaskType {
    id?: string;
    title: string;
    description: string;
    subTasks: SubTaskProp[];
    status: Status
}

export interface ReduxState {
    isLoading?: boolean;
    isAuth?: boolean;
    tasks?: TaskType[];
    isError?: boolean;
}

const initialState : ReduxState = {
    isLoading: false,
    isAuth: false,
    tasks: [],
    isError: false
}

export interface ActionType {
    type: "ADD_TASK_REQUEST" 
            | "ADD_TASK_SUCCESS" 
            | "ADD_TASK_FAILURE" 
            | "GET_TASK_REQUEST" 
            | "GET_TASK_SUCCESS" 
            | "GET_TASK_FAILURE"
            | "UPDATE_TASK_REQUEST" 
            | "UPDATE_TASK_SUCCESS" 
            | "UPDATE_TASK_FAILURE"
    payload: ReduxState
}

const Reducer =  (state = initialState, action: ActionType) => {
    switch (action.type) {
    case "ADD_TASK_REQUEST":
        return {
            ...state,
            isLoading: true,
            isError: false
        }
    case "ADD_TASK_FAILURE":
        return { 
            ...state,
            isLoading: false,
            isError: true
        }
    case "ADD_TASK_SUCCESS":
        return { 
            ...state, 
            isLoading: false,
        }
    case "GET_TASK_REQUEST": 
        return {
            ...state,
            isLoading: true,
            isError: false
        }
    case "GET_TASK_SUCCESS": 
        return {
            ...state,
            isLoading: false,
            tasks: action.payload.tasks
        }
    case "GET_TASK_FAILURE": 
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    case "UPDATE_TASK_REQUEST": 
        return {
            ...state,
            isLoading: true,
            isError: false
        }
    case "UPDATE_TASK_SUCCESS": 
        return {
            ...state,
            isLoading: false,
            // tasks: action.payload.tasks
        }
    case "UPDATE_TASK_FAILURE": 
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    default:
        return state
    }
}

export default Reducer