import React from "react";

export default function UserReimbursement() {
    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Reimbursement</h1>
                        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#attendanceModal">
                            Apply Reimbursement
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
                                            <th>Reimb. No.</th>
                                            <th>Applyed Date</th>
                                            <th>Bill Date</th>
                                            <th>Bill Amt.</th>
                                            <th>Approved Amt.</th>
                                            <th>Discription</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>2176</td>
                                            <td>25/09/2024</td>
                                            <td>25/09/2024</td>
                                            <td>₹2854</td>
                                            <td>₹2854</td>
                                            <td>Work Related Items</td>
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
                         
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}