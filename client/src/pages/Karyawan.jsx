import React from "react";
import KaryawanTable from "../components/KaryawanTable";
import { Outlet } from "react-router-dom";

const Karyawan = () => {
    return (
        <div>
            <KaryawanTable />
        </div>
    );
};

export default Karyawan;
