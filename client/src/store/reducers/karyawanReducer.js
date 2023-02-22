import {
    GET_KARYAWAN,
    GET_KARYAWANS,
} from "../actionType";


const initialState = {
    karyawans: [],
    karyawan: {}
}

export const karyawanReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_KARYAWANS:
            return {
                ...state,
                karyawans: action.payload
            }
        case GET_KARYAWAN:
            return {
                ...state,
                karyawan: action.payload
            }
        default:
            return state;
    }
}