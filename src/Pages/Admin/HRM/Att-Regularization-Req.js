import React from "react";
import { Link } from "react-router-dom";
import TableFooter from "../../../components/common";

export default function AttRegularizationRequest() {
    return (

        <>
          <div className="content">

                <div className="table-head mb-4 border-bottom pb-3">
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
                                {/* <!-- <th>Action</th> --> */}
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
                                <td colspan="11" className="text-center fw-bold">
                                    No Data Found
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <TableFooter />

            </div>

        </>
    )
}