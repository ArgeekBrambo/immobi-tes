import React from 'react'
import { createBrowserRouter, redirect } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Karyawan from '../pages/Karyawan'
import Jabatan from '../pages/Jabatan'
import Department from '../pages/Department'

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/karyawan', element: <Karyawan /> },
            { path: '/jabatan', element: <Jabatan /> },
            { path: '/department', element: <Department /> },
            { path: '*', element: redirect('/404') },
        ],
    }
])

export default router