import React from "react";
import TableFooter from "../../../components/common";
import { Link } from "react-router-dom";

export default function UserAttendanceRegularizationRequest() {
    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">A.R. Requests</h1>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="table-head mb-4 border-bottom pb-3">
                                <div>
                                    <input type="text" className="form-control" placeholder="search" />
                                </div>
                            </div>
                            <div className="manage-table main-table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Request Id</th>
                                            <th>Created On</th>
                                            <th>Date</th>
                                            <th>Check In</th>
                                            <th>Check Out</th>
                                            <th>Attendance</th>
                                            <th>Reason</th>
                                            <th>Status</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>John</td>
                                            <td>2176</td>
                                            <td>25/09/2024</td>
                                            <td>24/09/2024</td>
                                            <td>10:30</td>
                                            <td>19:30</td>
                                            <td>
                                                <span className="badge bg-green-25 fw-normal rounded-pill">Present</span>
                                            </td>
                                            <td>Outdoor Duty</td>
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
                                                        <li><Link className="dropdown-item"  to="#"> <span
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
                                            <td colspan="11" className="text-center fw-bold">
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