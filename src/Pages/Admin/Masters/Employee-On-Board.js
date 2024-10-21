import React from "react";
import TableFooter from "../../../components/common";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../../ApiHelper/RoutesLink";

export default function EmployeeOnBoard() {
    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Employee Onboard</h1>
                        <div className="d-flex align-items-center gap-3">
                            <Link to={RoutesLink?.add_employeeOnBoard_route} role="button" className="btn btn-outline-primary px-5">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 10" fill="none">
                                        <path d="M4.66016 1.32031V9" stroke="#3085FE" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M0.820312 5.16016H8.5" stroke="#3085FE" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </span>
                                Add Employee Onboard
                            </Link>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="table-head d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
                                <div className="position-relative">
                                    <span className="search-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M16.7499 16.75L13.4874 13.4875M15.25 9.25C15.25 12.5637 12.5637 15.25 9.25 15.25C5.93629 15.25 3.25 12.5637 3.25 9.25C3.25 5.93629 5.93629 3.25 9.25 3.25C12.5637 3.25 15.25 5.93629 15.25 9.25Z"
                                                stroke="#818898" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <input type="text" className="form-control search-control" id="searchUsers" placeholder="Search" />
                                </div>
                                <div className="d-flex align-items-stretch justify-content-end gap-3">

                                    <button className="btn btn-outline-primary" type="button">
                                        Export
                                    </button>
                                    <button className="btn btn-outline-primary" data-bs-target="#filteroffcanvas" data-bs-toggle="offcanvas">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                                            <path
                                                d="M5.55556 8.5H8.44444V7.16667H5.55556V8.5ZM0.5 0.5V1.83333H13.5V0.5H0.5ZM2.66667 5.16667H11.3333V3.83333H2.66667V5.16667Z"
                                                fill="#3085FE"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="manage-table main-table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Emp. Name</th>
                                            <th>Father's Name</th>
                                            <th>Phone no</th>
                                            <th>Email</th>
                                            <th>Emp. Dept.</th>
                                            <th>Role</th>
                                            <th>Shift</th>
                                            <th>Site</th>
                                            <th>Joining Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>
                                                <div className="user">
                                                    <span className="user-icon"> AS </span>
                                                    <div>
                                                        <h4 className="title mb-0">Aditiya Sharma</h4>
                                                        <p className="mb-0">N/A</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>SRI RAM SANJAY RAGHU</td>
                                            <td>9880683100</td>
                                            <td>aditiya@gmail.com</td>
                                            <td>N/A</td>
                                            <td>SUPERVISOR</td>
                                            <td>General</td>
                                            <td>22.3 MW GAJNER(RAJ)</td>
                                            <td>16/08/2024</td>
                                            <td>
                                                <span className="badge bg-green-25 fw-normal rounded-pill">Current</span>
                                            </td>

                                            <td>
                                                <div className="dropdown d-inline-block">
                                                    <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i className="fas fa-ellipsis-v fs-14 text-primary"></i>
                                                    </button>
                                                    <ul className="dropdown-menu shadow-lg">
                                                        <li>
                                                            <Link className="dropdown-item" to="#">
                                                                <i className="fas fa-exclamation"></i>
                                                                Info</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#" data-bs-toggle="modal">
                                                                <i className="fas fa-download"></i>
                                                                Download</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    

                                        <tr className="d-none">
                                            <td colspan="13" className="text-center fw-bold">
                                                No Data Found
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        <TableFooter/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}