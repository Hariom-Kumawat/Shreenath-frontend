import React from "react";
import TableFooter from "../../../components/common";
import { Link } from "react-router-dom";

export default function UserReimbursementRequest() {
    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Reimbursement Requests</h1>
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
                                            <th>Reimb. No.</th>
                                            <th>Created Date</th>
                                            <th>Bill Date</th>
                                            <th>Bill Amt.</th>
                                            <th>Approved Amt.</th>
                                            <th>Discription</th>
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
                                            <td>2176</td>

                                            <td>25/09/2024</td>
                                            <td>25/09/2024</td>
                                            <td>₹2854</td>
                                            <td>₹2854</td>
                                            <td>Work Related Items</td>
                                            <td>

                                                <div className="dropdown action-drop">
                                                    <button className="btn link  dropdown-toggle d-flex gap-2" type="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <span className="badge bg-green-25 fw-normal rounded-pill">Approved</span>
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
                                            <td>
                                                <div className="dropdown d-inline-block">
                                                    <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                         <i className="fas fa-ellipsis-v fs-14 text-primary"></i> 
                                                    </button>
                                                    <ul className="dropdown-menu shadow-lg">
                                                        <li>
                                                            <a href="#filesModal" className="dropdown-item" data-bs-toggle="modal">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                                     width="16" height="16" x="0" y="0"
                                                                    viewBox="0 0 24 24" style={{enableBackground: "new 0 0 512 512"}}
                                                                    className="">
                                                                    <g>
                                                                        <path
                                                                            d="M8.341 22.896c-1.778 0-3.451-.693-4.709-1.951s-1.951-2.931-1.951-4.709c0-1.753.711-3.471 1.951-4.71l9.048-9.048c.887-.886 2.064-1.374 3.316-1.374s2.43.488 3.317 1.374c.886.886 1.373 2.063 1.373 3.317s-.487 2.432-1.373 3.317l-9.059 9.048c-1.02 1.019-2.827 1.021-3.847 0-.506-.505-.797-1.207-.797-1.923s.29-1.417.797-1.924l8.361-8.351a.751.751 0 0 1 1.061 1.061l-8.36 8.35c-.228.227-.357.542-.357.863s.13.635.357.862c.455.455 1.271.456 1.726 0l9.059-9.048c.603-.601.934-1.402.934-2.256s-.332-1.654-.934-2.256c-1.207-1.205-3.306-1.205-4.513 0l-9.049 9.048a5.197 5.197 0 0 0-1.512 3.65c0 1.378.537 2.674 1.512 3.649s2.271 1.512 3.648 1.512a5.197 5.197 0 0 0 3.65-1.512l9.048-9.048a.75.75 0 1 1 1.061 1.061l-9.048 9.048a6.708 6.708 0 0 1-4.711 1.951z"
                                                                            fill="#000000" opacity="1" data-original="#000000"></path>
                                                                    </g>
                                                                </svg>
                                                                Att. Files
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#deleteModal" data-bs-toggle="modal">
                                                                <svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true" focusable="false"
                                                                    data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 448 512" data-fa-i2svg="">
                                                                    <path fill="currentColor"
                                                                        d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z">
                                                                    </path>
                                                                </svg>
                                                                Delete</a>
                                                        </li>
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