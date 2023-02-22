import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addDepartment } from '../store/actionCreator'


const AddDepartment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [newDepartment, setNewDepartment] = useState({
        nama_department: '',
    })

    const handleAddDepartment = () => {
        // console.log(newDepartment)
        dispatch(addDepartment(newDepartment))
        setNewDepartment({
            nama_department: '',
        })
        navigate('/department')
    }

    const handleCancel = () => {
        setNewDepartment({
            nama_department: '',
        })
    }

  return (
    <div className="overflow-x-auto px-10 flex flex-col gap-5">
    <div className="flex flex-row justify-center">
        <h1>
            <span className="font-bold text-2xl">Add Department</span>
        </h1>
    </div>
    <form className="flex flex-col gap-5">
        <div className="flex flex-row gap-4 justify-center">
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Department</span>
                </label>
                <input
                    type="text"
                    placeholder="Input Department"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                        setNewDepartment({
                            ...newDepartment,
                            nama_department: e.target.value,
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
                    handleAddDepartment();
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
  )
}

export default AddDepartment