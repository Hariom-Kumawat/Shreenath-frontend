import React from "react";
import { Link } from "react-router-dom";

export default function UserLeaveRequest() {
    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Leave Requests</h1>
                    </div>

                    <div className="card mb-4">
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
                                        Leave Export
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
                                            <th>Emp. Code</th>
                                            <th>Emp. Name</th>
                                            <th>Emp. Dept.</th>
                                            <th>Next Approver</th>
                                            <th>Site</th>
                                            <th>Created On</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Days</th>
                                            <th>Status</th>
                                            <th>Leave Type</th>
                                            <th>Leave Reason</th>
                                            <th>HalfDay Leave</th>
                                            <th>Shift Half</th>
                                            <th>Previous actionBy</th>
                                            {/* <!-- <th>Action</th> --> */}
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
                                            <td>SRI RAM (S009),SANJAY RAGHU</td>
                                            <td>S.NATH O&amp;M PRIVATE LIMITED</td>
                                            <td>16/08/2024</td>
                                            <td>16/08/2024</td>
                                            <td>04/09/2024</td>
                                            <td>20</td>
                                            <td>
                                                <div className="dropdown action-drop">
                                                    <button className="btn link  dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <span className="badge bg-yellow-25 fw-normal rounded-pill">Pending</span>
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
                                            <td>Compensatory-Off</td>
                                            <td>My college pepar</td>
                                            <td>NO</td>
                                            <td>-</td>
                                            <td>RAHUL DAGADUB RATHOD</td>
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
                                            <td colspan="18" className="text-center fw-bold">
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
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
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
                                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
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
                                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
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