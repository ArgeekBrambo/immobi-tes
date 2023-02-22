import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getDepartments,
    getJabatans,
    getKaryawans,
} from "../store/actionCreator";
import { Link } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const { departments } = useSelector((state) => state.departmentReducer);
    const { jabatans } = useSelector((state) => state.jabatanReducer);
    const { karyawans } = useSelector((state) => state.karyawanReducer);

    useEffect(() => {
        dispatch(getDepartments());
        dispatch(getJabatans());
        dispatch(getKaryawans());
    }, []);

    return (
        <div className="flex flex-row items-center justify-center w-full h-full gap-8 pt-5">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://source.unsplash.com/1600x900/?employee"
                        alt="Karyawan"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Total Karyawan</h2>
                    <p>{karyawans.length}</p>
                    <div className="card-actions justify-end">
                        <Link to="/karyawan">
                            <button className="btn btn-primary">
                                to Karyawan
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://source.unsplash.com/1600x900/?office"
                        alt="Jabatan"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Total Jabatan</h2>
                    <p>{jabatans.length}</p>
                    <div className="card-actions justify-end">
                        <Link to="/jabatan">
                            <button className="btn btn-primary">
                                to Jabatan
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://source.unsplash.com/1600x900/?department"
                        alt="Department"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Total Department</h2>
                    <p>{departments.length}</p>
                    <div className="card-actions justify-end">
                        <Link to="/department">
                            <button className="btn btn-primary">
                                to Department
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
