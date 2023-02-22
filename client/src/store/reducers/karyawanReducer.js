import {
    GET_KARYAWAN,
    GET_KARYAWANS,
    IS_EDIT
} from "../actionType";


const initialState = {
    karyawans: [],
    karyawan: {},
    isEdit: false
}

export const karyawanReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_KARYAWANS:
            return {
                ...state,
                karyawans: action.payload
            }
        case GET_KARYAWAN:
            // console.log(action.payload);
            return {
                ...state,
                karyawan: action.payload
            }

        case IS_EDIT:
            return {
                ...state,
                isEdit: action.payload
            }

        default:
            return state;
    }
}