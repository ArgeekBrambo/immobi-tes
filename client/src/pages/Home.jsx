import React from "react";

const Home = () => {
    return (
        <div
            className="flex flex-row items-center justify-center w-full h-full gap-8 pt-5"
        >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://source.unsplash.com/1600x900/?staff"
                        alt="Karyawan"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Karyawan</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
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
                    <h2 className="card-title">Jabatan</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
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
                    <h2 className="card-title">Department</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
