import {
    GET_JABATAN,
    GET_JABATANS
} from "../actionType";

const initialState = {
    jabatans: [],
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
        default:
            return state;
    }
}