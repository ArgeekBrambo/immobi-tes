import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Department } from "./pages/Department";
import { Jabatan } from "./pages/Jabatan";
import { Karyawan } from "./pages/Karyawan";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/department" element={<Department />} ></Route>
                <Route path="/jabatan" element={<Jabatan />} ></Route>
                <Route path="/karyawan" element={<Karyawan />} ></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
