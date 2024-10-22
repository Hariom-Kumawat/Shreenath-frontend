import React from "react";
import { Link } from "react-router-dom";

export default function UserLeave() {
    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Leave</h1>
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#leaveModal">
                            Apply Leave
                        </button>
                    </div>
                    <div className="top-cards-row">
                        <div className="card dash-cards">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h1>Total Applied Leaves:</h1>
                                    <h2>20</h2>
                                </div>
                                <p>From 01/04/2024</p>
                            </div>
                        </div>
                        <div className="card dash-cards">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h1>Total Leaves Taken:</h1>
                                    <h2>20</h2>
                                </div>
                                <p>From 01/04/2024</p>
                            </div>
                        </div>
                        <div className="card dash-cards">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h1>Remaining Leaves:</h1>
                                    <h2>20</h2>
                                </div>
                                <p>From 01/04/2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="table-head d-flex align-items-center justify-content-end gap-5 mb-4 border-bottom pb-3">
                                <div className="d-flex align-items-center gap-3">
                                    <label for="d1" className="form-label white-space-nowrap">From</label>
                                    <input type="date" className="form-control" id="d1" />
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <label for="d2" className="form-label white-space-nowrap">To</label>
                                    <input type="date" className="form-control" id="d2" />
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <label for="d2" className="form-label white-space-nowrap">Leave Type</label>
                                    <select className="form-select min-w-20 pe-5" aria-label="Default select ">
                                        <option selected="">Sick Leave</option>
                                        <option value="1">Casual-Leave</option>
                                        <option value="2">Earned-Leave</option>
                                        <option value="3">Compensatory-Off</option>
                                    </select>
                                </div>
                            </div>
                            <div className="manage-table main-table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Leave Type</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Reason</th>
                                            <th>Approved by</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>Compensatory-Off</td>
                                            <td>1/12/24</td>
                                            <td>3/12/24</td>
                                            <td>My college pepar</td>
                                            <td>--</td>
                                            <td>
                                                <span className="badge bg-yellow-25 fw-normal rounded-pill">Pending</span>
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
                                                <Link className ="page-link" to="#" aria-label="Next">
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