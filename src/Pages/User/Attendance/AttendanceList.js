import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AttendanceList() {
    const barIconClicked = useSelector((state) => state.barIcon.barIconClicked)
    return (
        <>
            <div className={ barIconClicked ? "main-view-content main-wrapper-w" : "main-view-content"} id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Attendance List</h1>
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
                                                fill="#662d91"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="manage-table main-table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th className="text-start">Employee</th>
                                            <th>Shift</th>
                                            <th>Department</th>
                                            <th>Work Type</th>
                                            <th>Location</th>
                                            <th>Status</th>
                                            <th>Check In</th>
                                            <th>Check Out</th>
                                            <th>Overtime</th>
                                            <th>Total Duration</th>
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
                                            <td>General</td>
                                            <td>N/A</td>
                                            <td>Office</td>
                                            <td>Bikaner, Rajasthan</td>
                                            <td>
                                                <span className="badge bg-green-25 fw-normal rounded-pill">Check In</span>
                                            </td>
                                            <td>08:09 AM</td>
                                            <td>06:10 PM</td>
                                            <td>3 Min 20 Sec</td>

                                            <td>07 Hrs 55 Min</td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>
                                                <div className="user">
                                                    <span className="user-icon"> AS </span>
                                                    <div>
                                                        <h4 className="title mb-0">Aditiya Sharma</h4>
                                                        <p className="mb-0">N/A</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>General</td>
                                            <td>N/A</td>
                                            <td>Office</td>
                                            <td>Bikaner, Rajasthan</td>
                                            <td>
                                                <span className="badge bg-green-25 fw-normal rounded-pill">Check In</span>
                                            </td>
                                            <td>08:09 AM</td>
                                            <td>06:10 PM</td>
                                            <td>3 Min 20 Sec</td>

                                            <td>07 Hrs 55 Min</td>
                                        </tr>
                                        <tr className="d-none">
                                            <td colspan="11" className="text-center fw-bold">
                                                No Data Found
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-footer">
                                <div className="sorted">
                                    <h5>Sort by:</h5>
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            30
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M6.40039 8.19922L10.0004 11.7992L13.6004 8.19922" stroke="#36394A" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu shadow-lg">
                                            <li><Link className="dropdown-item" to="#">10</Link></li>
                                            <li>
                                                <Link className="dropdown-item" to="#">20</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="#">30</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="#">40</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="">
                                    <nav className="paggination-nav" aria-label="Page navigation example">
                                        <ul className="paggination">
                                            <li className="page-item">
                                                <Link className="page-link" to="#" aria-label="Previous">
                                                    <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 20 20" fill="none">
                                                        <path d="M11.8002 13.6004L8.2002 10.0004L11.8002 6.40039" stroke="#666D80"
                                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg></span>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link active" to="#">1</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">2</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">3</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">...</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">7</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#" aria-label="Next">
                                                    <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 20 20" fill="none">
                                                        <path d="M8.2002 13.6004L11.8002 10.0004L8.2002 6.40039" stroke="#666D80"
                                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}