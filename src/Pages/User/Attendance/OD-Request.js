import React from "react";
import { Link } from "react-router-dom";
import TableFooter from "../../../components/common";

export default function UserOutDoorRequests() {
    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Outdoor Duty Request</h1>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="table-head d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
                                <div className="position-relative">
                                    <span className="search-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M16.7499 16.75L13.4874 13.4875M15.25 9.25C15.25 12.5637 12.5637 15.25 9.25 15.25C5.93629 15.25 3.25 12.5637 3.25 9.25C3.25 5.93629 5.93629 3.25 9.25 3.25C12.5637 3.25 15.25 5.93629 15.25 9.25Z"
                                                stroke="#818898" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                    <input type="text" className="form-control search-control" id="searchUsers" placeholder="Search" />
                                </div>
                                <div className="d-flex align-items-stretch justify-content-end gap-3">
                                    <button className="btn btn-outline-primary" type="button">
                                        Export
                                    </button>
                                    <button className="btn btn-outline-primary">
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
                                            <th>Emp. Code</th>
                                            <th>Emp. Name</th>
                                            <th>Emp. Dept.</th>
                                            <th>Site</th>
                                            <th>Visited On</th>
                                            <th>Check In</th>
                                            <th>Check Out</th>
                                            <th>M.O.C.</th>
                                            <th>Location</th>
                                            <th>Reason</th>
                                            <th>Status</th>
                                            
                                                                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>EM-001</td>
                                            <td>
                                                <div className="user">
                                                    <span className="user-icon"> AS </span>
                                                    <div>
                                                        <h4 className="title mb-0">Aditiya Sharma</h4>
                                                        <p className="mb-0">N/A</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>N/A</td>
                                            <td>TATA POWER SOLAR LTD</td>
                                            <td>16/08/2024</td>
                                            <td>10:00</td>
                                            <td>06:00</td>
                                            <td>Visit</td>
                                            <td>Bikaner</td>
                                            <td>Meeting</td>
                                            <td>
                                                <div className="dropdown action-drop">
                                                    <button className="btn link  dropdown-toggle d-flex gap-2" type="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <span className="badge bg-yellow-25 fw-normal rounded-pill">Pending</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                                            fill="none">
                                                            <path d="M6.40039 8.19922L10.0004 11.7992L13.6004 8.19922" stroke="#a1a1a1"
                                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to="#"> <span
                                                            className="badge bg-yellow-25 fw-normal rounded-pill">Pending</span></Link></li>
                                                        <li><Link className="dropdown-item" to="#"><span
                                                            className="badge bg-green-25 fw-normal rounded-pill">Approve</span></Link></li>
                                                        <li><Link className="dropdown-item" to="#"><span
                                                            className="badge bg-red-25 fw-normal rounded-pill">Reject</span></Link></li>
                                                    </ul>
                                                </div>

                                            </td>

                                
                                        </tr>
                                        <tr className="d-none">
                                            <td colspan="18" className="text-center fw-bold">
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