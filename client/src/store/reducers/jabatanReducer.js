import {
    GET_JABATAN,
    GET_JABATANS,
    GET_JABATAN_BY_DEPARTMENT
} from "../actionType";

const initialState = {
    jabatans: [],
    jabatansByDepartment: [],
    jabatan: {}
}

export const jabatanReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_JABATANS:
            return {
                ...state,
                jabatans: action.payload
            }
        case GET_JABATAN:
            return {
                ...state,
                jabatan: action.payload
            }
        case GET_JABATAN_BY_DEPARTMENT:
            return {
                ...state,
                jabatansByDepartment: action.payload
            }
        default:
            return state;
    }
}