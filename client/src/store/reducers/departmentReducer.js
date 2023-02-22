import { GET_DEPARTMENTS, GET_DEPARTMENT } from "../actionType";

const initialState = {
    departments: [],
    department: {}
}

export const departmentReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DEPARTMENTS:
            // console.log(action.payload, "ini di reducer");
            return {
                ...state,
                departments: action.payload
            }
        case GET_DEPARTMENT:
            return {
                ...state,
                department: action.payload
            }
        default:
            return state;
    }
}