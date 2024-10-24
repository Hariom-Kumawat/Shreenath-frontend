import React from "react";
import TableFooter from "../../../components/common";

export default function UserMyAttendanceRegularization() {
    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Attendance Regularization</h1>
                        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#attendanceModal">
                            Apply Att. Regularization
                        </button>
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
                                                <span className="badge bg-green-25 fw-normal rounded-pill">Approved</span>
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