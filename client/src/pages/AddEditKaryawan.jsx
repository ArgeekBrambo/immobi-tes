import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    getDepartments,
    getJabatanByDepartment,
    addKaryawan,
    editKaryawan,
    getKaryawan,
} from "../store/actionCreator";
import { IS_EDIT, GET_KARYAWAN } from "../store/actionType";

const AddEditKaryawan = () => {
    const dispatch = useDispatch();
    const { departments } = useSelector((state) => state.departmentReducer);
    const { jabatansByDepartment } = useSelector(
        (state) => state.jabatanReducer
    );
    const { isEdit } = useSelector((state) => state.karyawanReducer);
    const { karyawan } = useSelector((state) => state.karyawanReducer);

    const navigate = useNavigate();
    const { id } = useParams();

    const [newKaryawan, setNewKaryawan] = useState({
        name: "",
        id_jabatan: "",
        age: "",
        gender: "",
        tanggal_lahir: "",
        alamat: "",
        table_jabatan: {
            id_department: "",
        },
    });

    const [department, setDepartment] = useState("");

    const handleAddKaryawan = () => {
        dispatch(addKaryawan(newKaryawan));
        navigate("/karyawan");
    };

    const updateKaryawan = () => {
        dispatch(editKaryawan(id, newKaryawan));
        navigate("/karyawan");
    };

    const handleCancel = () => {
        // console.log("cancel");
        setNewKaryawan({
            name: "",
            id_jabatan: 0,
            age: "",
            gender: "",
            tanggal_lahir: "",
            alamat: "",
            table_jabatan: {
                id_department: "",
            },
        });
        dispatch({
            type: IS_EDIT,
            payload: false,
        });
        dispatch({
            type: GET_KARYAWAN,
            payload: {},
        });
    };

    useEffect(() => {
        dispatch(getDepartments());
        dispatch(getKaryawan(id));
    }, []);

    useEffect(() => {
        if (karyawan.id) {
          setNewKaryawan({
            name: karyawan.name,
            id_jabatan: karyawan.id_jabatan,
            age: karyawan.age,
            gender: karyawan.gender,
            tanggal_lahir: karyawan.tanggal_lahir,
            alamat: karyawan.alamat,
            table_jabatan: karyawan.table_jabatan,
          });
      
          if (karyawan.table_jabatan?.id_department) {
            setDepartment(karyawan.table_jabatan?.id_department);
          }
        }
      }, [karyawan]);

    useEffect(() => {
        // console.log(department, "masuk");
        dispatch(getJabatanByDepartment(department));
    }, [department]);

    return (
        <div className="overflow-x-auto px-10 flex flex-col gap-5">
            <div className="flex flex-row justify-center">
                <h1>
                    <span className="font-bold text-2xl">
                        Add/Edit Karyawan
                    </span>
                </h1>
            </div>
            <form className="flex flex-col gap-5">
                <div className="flex flex-row">
                    <div className="flex flex-col w-1/2 gap-4">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Input your name"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => {
                                    setNewKaryawan({
                                        ...newKaryawan,
                                        name: e.target.value,
                                    });
                                }}
                                defaultValue={isEdit ? newKaryawan.name : ""}
                                required
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Department</span>
                            </label>
                            <select
                                className="select select-bordered"
                                onChange={(e) => setDepartment(e.target.value)}
                                // defaultValue={console.log(karyawan)
                            >
                                <option value="0" disabled selected>Select Department</option>
                                {departments.map((department) => (
                                    <option
                                        value={department.id}
                                        key={department.id}
                                        selected={
                                            department.id == newKaryawan.table_jabatan?.id_department ? 'selected' : ''
                                        }
                                    >
                                        {department.nama_department}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Jabatan</span>
                            </label>
                            <select
                                className="select select-bordered"
                                onChange={(e) =>
                                    setNewKaryawan({
                                        ...newKaryawan,
                                        id_jabatan: e.target.value,
                                    })
                                }
                                onInput={(e) => (
                                    setNewKaryawan({
                                        ...newKaryawan,
                                        id_jabatan: e.target.value,
                                    })
                                )}
                                required
                            >
                                <option value="0">Select Jabatan</option>
                                {jabatansByDepartment.map((jabatan, index) => (
                                    <option key={index} value={jabatan.id}
                                        selected={
                                            jabatan.id == newKaryawan.id_jabatan ? 'selected' : ''
                                        }
                                        
                                    >
                                        {jabatan.nama_jabatan}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) =>
                                    setNewKaryawan({
                                        ...newKaryawan,
                                        age: e.target.value,
                                    })
                                }
                                defaultValue={isEdit ? newKaryawan.age : 0}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 gap-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <div className="form-control flex flex-col">
                                <label className="label cursor-pointer w-14">
                                    <span className="label-text">L</span>
                                    <input
                                        type="radio"
                                        name="radio-10"
                                        value={"L"}
                                        className="radio checked:bg-red-500"
                                        onChange={(e) => {
                                            // console.log(e.target.value);
                                            setNewKaryawan({
                                                ...newKaryawan,
                                                gender: e.target.value,
                                            });
                                        }}
                                        checked={newKaryawan.gender == "L"}
                                    />
                                </label>
                                <label className="label cursor-pointer w-14">
                                    <span className="label-text">P</span>
                                    <input
                                        type="radio"
                                        name="radio-10"
                                        value={"P"}
                                        className="radio checked:bg-blue-500"
                                        onChange={(e) => {
                                            // console.log(e.target.value);
                                            setNewKaryawan({
                                                ...newKaryawan,
                                                gender: e.target.value,
                                            });
                                        }}
                                        checked={newKaryawan.gender == "P"}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Tanggal Lahir
                                </span>
                            </label>
                            <input
                                type="date"
                                defaultValue={
                                    isEdit
                                        ? newKaryawan.tanggal_lahir
                                        : new Date().toISOString().slice(0, 10)
                                }
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) =>
                                    setNewKaryawan({
                                        ...newKaryawan,
                                        tanggal_lahir: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Alamat</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered h-24"
                                placeholder="alamat"
                                onChange={(e) => {
                                    setNewKaryawan({
                                        ...newKaryawan,
                                        alamat: e.target.value,
                                    });
                                }}
                                required
                                defaultValue={isEdit ? newKaryawan.alamat : ""}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="modal-action">
                    {isEdit ? (
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => {
                                updateKaryawan();
                            }}
                        >
                            Update
                        </button>
                    ) : (
                        <button
                            className="btn btn-active btn-primary"
                            type="button"
                            onClick={() => {
                                handleAddKaryawan();
                            }}
                        >
                            Add
                        </button>
                    )}
                    <Link to="/karyawan">
                        <button
                            className="btn btn-active"
                            onClick={() => {
                                handleCancel();
                            }}
                        >
                            Cancel
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default AddEditKaryawan;
