import React from "react";



export default function UserHolidays() {


    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Holidays</h1>
                     
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <table className="table time-table">
                                        <thead>
                                            <tr>
                                                <th className="text-start">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <button className="btn btn-link p-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                                width="16" height="16" x="0" y="0"
                                                                viewBox="0 0 24 24" style={{ enableBackground: " new 0 0 512 512" }}
                                                                className="">
                                                                <g>
                                                                    <path
                                                                        d="M17.9 3.5 9.2 12l8.7 8.6c.6.6.6 1.5 0 2-.6.6-1.5.6-2 0L6.1 13c-.6-.6-.6-1.5 0-2.1l9.8-9.5c.6-.6 1.5-.5 2 0 .6.6.6 1.5 0 2.1z"
                                                                        fill="#666d80" opacity="1" data-original="#000000"></path>
                                                                </g>
                                                            </svg>
                                                        </button>
                                                        (September,2024- September,2024)
                                                        <button className="btn btn-link p-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                                width="16" height="16" x="0" y="0"
                                                                viewBox="0 0 24 24" style={{ enableBackground: "new 0 0 512 512" }}
                                                                className="">
                                                                <g>
                                                                    <path
                                                                        d="m6.102 20.518 8.719-8.484-8.696-8.557a1.445 1.445 0 0 1-.016-2.043l.002-.003a1.445 1.445 0 0 1 2.043-.017l9.75 9.595c.577.568.575 1.5-.006 2.065L8.119 22.59a1.445 1.445 0 0 1-2.043-.028l-.002-.002a1.444 1.444 0 0 1 .028-2.042z"
                                                                        fill="#666d80" opacity="1" data-original="#000000" className=""></path>
                                                                </g>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        {/* custom change in bg color  */}
                                                        {/* <button className="btn btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Mon
                                                        </button> */}
                                                        <button className="btn btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Mon
                                                        </button>
                                                        <button className="btn  btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Tue
                                                        </button>
                                                        <button className="btn  btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Wed
                                                        </button>
                                                        <button className="btn  btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Thu
                                                        </button>
                                                        <button className="btn  btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Fri
                                                        </button>
                                                        <button className="btn  btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Sat
                                                        </button>
                                                        <button className="btn  btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Sun
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button className="btn  btn-time bg-danger-subtle p-3 text-danger" type="button">
                                                            1
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            2
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            3
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            4
                                                        </button>
                                                        <button className="btn  btn-time bg-success-subtle text-success p-3" type="button">
                                                            5
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            6
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            7
                                                        </button>
                                                        <button className="btn  btn-time bg-danger-subtle p-3 text-danger" type="button">
                                                            8
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            9
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            10
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            11
                                                        </button>
                                                        <button className="btn  btn-time bg-success-subtle text-success p-3" type="button">
                                                            12
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            13
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            14
                                                        </button>
                                                        <button className="btn  btn-time bg-danger-subtle p-3 text-danger" type="button">
                                                            15
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            16
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            17
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            18
                                                        </button>
                                                        <button className="btn  btn-time bg-success-subtle text-success p-3" type="button">
                                                            19
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            20
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            21
                                                        </button>
                                                        <button className="btn  btn-time bg-danger-subtle p-3 text-danger" type="button">
                                                            22
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            23
                                                        </button>
                                                        <button className="btn  btn-time bg-success-subtle text-success p-3" type="button">
                                                            24
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            24
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            25
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            26
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            27
                                                        </button>
                                                        <button className="btn  btn-time bg-danger-subtle p-3 text-danger" type="button">
                                                            28
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            29
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            30
                                                        </button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn btn-thirdary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <table className="table">
                                        <thead>
                                            <th className="text-start">Date of Holidays</th>
                                            <th>Description</th>
                                            <th className="text-end">Action</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-start">05|09|2024</td>
                                                <td>Holidays</td>
                                                <td className="text-end">
                                                    <div className="d-flex align-items-center justify-content-end gap-3">
                                                        <button  className="btn  border-0 text-danger bg-danger-subtle py-2" type="button"
                                                            data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                            <i className="fas fa-trash-alt"></i>
                                                        </button>
                                                        <button className="btn  border-0 text-success bg-success-subtle py-2" type="button"
                                                            data-bs-toggle="modal" data-bs-target="#addHolidayModal">
                                                            <i className="fas fa-edit"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}