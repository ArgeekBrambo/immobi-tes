import {
    GET_DEPARTMENTS,
    GET_DEPARTMENT,
    GET_JABATANS,
    GET_JABATAN,
    GET_KARYAWANS,
    GET_KARYAWAN,
    GET_JABATAN_BY_DEPARTMENT,
    IS_EDIT
} from "./actionType";
import axios from "axios";
const server = "http://localhost:3000";

export const getKaryawans = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`${server}/karyawan`);
            dispatch({
                type: GET_KARYAWANS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getDepartments = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`${server}/department`);
            dispatch({
                type: GET_DEPARTMENTS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getJabatans = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`${server}/jabatan`);
            dispatch({
                type: GET_JABATANS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getJabatanByDepartment = (departmentId) => {
    // console.log('====================================');
    // console.log(departmentId);
    // console.log('====================================');
    return async dispatch => {
        try {
            const { data } = await axios.get(`${server}/jabatan/department/${departmentId}`);
            dispatch({
                type: GET_JABATAN_BY_DEPARTMENT,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const addKaryawan = (karyawan) => {
    return async dispatch => {
        try {
            const { data } = await axios.post(`${server}/karyawan`, karyawan);
            dispatch(getKaryawans());
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteKaryawan = (karyawanId) => {
    return async dispatch => {
        try {
            const { data } = await axios.delete(`${server}/karyawan/${karyawanId}`);
            dispatch(getKaryawans());
        } catch (error) {
            console.log(error);
        }
    }
}

export const getKaryawan = (karyawanId) => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`${server}/karyawan/${karyawanId}`);
            dispatch({
                type: GET_KARYAWAN,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const editKaryawan = (karyawanId, karyawan) => {
    return async dispatch => {
        try {
            const { data } = await axios.put(`${server}/karyawan/${karyawanId}`, karyawan);
            dispatch(getKaryawans());
        } catch (error) {
            console.log(error);
        }
    }
}

export const addJabatan = (jabatan) => {
    return async dispatch => {
        try {
            const { data } = await axios.post(`${server}/jabatan`, jabatan);
            dispatch(getJabatans());
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteJabatan = (jabatanId) => {
    return async dispatch => {
        try {
            const { data } = await axios.delete(`${server}/jabatan/${jabatanId}`);
            dispatch(getJabatans());
        } catch (error) {
            console.log(error);
        }
    }
}

export const addDepartment = (department) => {
    return async dispatch => {
        try {
            const { data } = await axios.post(`${server}/department`, department);
            dispatch(getDepartments());
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteDepartment = (departmentId) => {
    return async dispatch => {
        try {
            const { data } = await axios.delete(`${server}/department/${departmentId}`);
            dispatch(getDepartments());
        } catch (error) {
            console.log(error);
        }
    }
}