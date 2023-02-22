import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getJabatans, deleteJabatan } from "../store/actionCreator";

const JabatanTable = () => {
    const dispatch = useDispatch();
    const { jabatans } = useSelector((state) => state.jabatanReducer);

    useEffect(() => {
        dispatch(getJabatans());
    }, []);

    const handleDelete = (id) => {
        dispatch(deleteJabatan(id));
    };

    return (
        <div className="overflow-x-auto px-10 flex flex-col gap-5">
            <div className="flex flex-row justify-between">
                <h1>
                    <span className="font-bold text-5xl">Jabatan</span>
                </h1>
                <Link to="/add-jabatan">
                    <button className="btn btn-info">Tambah Jabatan</button>
                </Link>
            </div>
            <div
                className="overflow-x-auto px-10 flex flex-col gap-5"
            >
                <table className="table table-zebra w-fulkaryawanl">
                    {/* head */}
                    <thead className="text-xs font-semibold tracking-wide text-black uppercase border-b bg-gray-50 text-center">
                        <tr>
                            <th></th>
                            <th>id_department</th>
                            <th>nama_jabatan</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    {jabatans.map((jabatan, index) => (
                        <tbody
                            key={index}
                            className="bg-white divide-y text-center"
                        >
                            <tr>
                                <td>{index + 1}</td>
                                <td>{jabatan.id_department}</td>
                                <td>{jabatan.nama_jabatan}</td>
                                <td>
                                    <button
                                        className="btn btn-ghost btn-xs"
                                        onClick={() =>
                                            handleDelete(jabatan.id)
                                        }
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

export default JabatanTable;
