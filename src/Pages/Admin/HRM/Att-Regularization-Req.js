import React from "react";
import { Link } from "react-router-dom";
import TableFooter from "../../../components/common";

export default function AttRegularizationRequest() {
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
                                            {/* <!-- <td>
                                                <div class="d-flex align-items-center gap-3">
                                                    <button class="btn btn-success">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            version="1.1"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            width="12"
                                                            height="12"
                                                            x="0"
                                                            y="0"
                                                            viewBox="0 0 22.88 22.88"
                                                            style="enable-background: new 0 0 512 512"
                                                            xml:space="preserve"
                                                            class=""
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M.324 1.909a1.14 1.14 0 0 1 0-1.587 1.14 1.14 0 0 1 1.587 0l9.523 9.539L20.973.322a1.12 1.12 0 0 1 1.571 0 1.112 1.112 0 0 1 0 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 0 1-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"

                                                                    fill="white"
                                                                    data-original="#1e201d"
                                                                    class=""
                                                                ></path>
                                                            </g>
                                                        </svg>
                                                    </button>
                                                    <button class="btn btn-danger">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            version="1.1"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            width="12"
                                                            height="12"
                                                            x="0"
                                                            y="0"
                                                            viewBox="0 0 288.941 288.941"
                                                            style="enable-background: new 0 0 512 512"
                                                            xml:space="preserve"
                                                            class=""
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M285.377 46.368c-4.74-4.704-12.439-4.704-17.179 0L96.309 217.114 20.734 142.61c-4.74-4.704-12.439-4.704-17.179 0s-4.74 12.319 0 17.011l84.2 82.997c4.692 4.644 12.499 4.644 17.191 0l180.43-179.239a11.93 11.93 0 0 0 .001-17.011c-4.74-4.704 4.752 4.692 0 0z"
                                                                    fill="white"
                                                                    opacity="1"
                                                                    data-original="#000000"
                                                                    class=""
                                                                ></path>
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td> --> */}
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