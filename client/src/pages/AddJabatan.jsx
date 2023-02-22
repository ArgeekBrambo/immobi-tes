import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDepartments } from "../store/actionCreator";
import { addJabatan } from "../store/actionCreator";

const AddJabatan = () => {
    const dispatch = useDispatch();
    const { departments } = useSelector((state) => state.departmentReducer);
    const [newJabatan, setNewJabatan] = useState({
        id_department: 0,
        nama_jabatan: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getDepartments());
    }, []);

    const handleAddJabatan = () => {
        // console.log(newJabatan);
        dispatch(addJabatan(newJabatan));
        navigate("/jabatan");
    }

    const handleCancel = () => {
        setNewJabatan({
            id_department: 0,
            nama_jabatan: "",
        });
    }

    return (
        <div className="overflow-x-auto px-10 flex flex-col gap-5">
            <div className="flex flex-row justify-center">
                <h1>
                    <span className="font-bold text-2xl">Add Jabatan</span>
                </h1>
            </div>
            <form className="flex flex-col gap-5">
                <div className="flex flex-row gap-4 justify-center">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Department</span>
                        </label>
                        <select
                            className="select select-bordered"
                            onChange={(e) =>(
                                setNewJabatan({
                                    ...newJabatan,
                                    id_department: e.target.value,
                                })
                            )}
                            // defaultValue={console.log(karyawan)}
                            // defaultValue={ karyawan ? karyawan.table_jabatan.id_department : 0 }
                        >
                            <option value="0">Select Department</option>
                            {departments.map((department) => (
                                <option
                                    value={department.id}
                                    key={department.id}
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
                        <input
                            type="text"
                            placeholder="Input Jabatan"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => {
                                setNewJabatan({
                                    ...newJabatan,
                                    nama_jabatan: e.target.value,
                                });
                            }}
                            required
                        />
                    </div>
                </div>
                <div className="modal-action justify-center">
                    <button
                        className="btn btn-active btn-primary"
                        onClick={() => {
                            handleAddJabatan();
                        }}
                    >
                        Add
                    </button>
                    <Link to="/jabatan">
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

export default AddJabatan;
