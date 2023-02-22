import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDepartments } from "../store/actionCreator";
import { deleteDepartment } from "../store/actionCreator";


const DepartmentTable = () => {
    const { departments } = useSelector((state) => state.departmentReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDepartments());
    }, []);

    const handleDelete = (id) => {
        dispatch(deleteDepartment(id));
    }

    return (
        <div className="overflow-x-auto px-10 flex flex-col gap-5">
            <div className="flex flex-row justify-between">
                <h1>
                    <span className="font-bold text-5xl">Department</span>
                </h1>
                <Link to="/add-department">
                    <button className="btn btn-info">Tambah Department</button>
                </Link>
            </div>
            <div className="overflow-x-auto px-10 flex flex-col gap-5">
                <table className="table table-zebra w-fulkaryawanl">
                    {/* head */}
                    <thead className="text-xs font-semibold tracking-wide text-black uppercase border-b bg-gray-50 text-center">
                        <tr>
                            <th></th>
                            <th>nama department</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    {departments.map((department, index) => (
                        <tbody
                            key={index}
                            className="bg-white divide-y text-center"
                        >
                            <tr>
                                <td>{index + 1}</td>
                                <td>{department.nama_department}</td>
                                <td>
                                    <button
                                        className="btn btn-ghost btn-xs"
                                        onClick={() => handleDelete(department.id)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default DepartmentTable;
