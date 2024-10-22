import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TableFooter from "../../../components/common";

export default function Leave() {
    
    return (
        <>
            
                <div className="content">
                 
                            <div className="table-head d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
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
                                <div className="d-flex align-items-stretch justify-content-end gap-3">
                                    <button className="btn btn-outline-primary" type="button">
                                        Leave Export
                                    </button>
                                    <button className="btn btn-outline-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                                            <path d="M5.55556 8.5H8.44444V7.16667H5.55556V8.5ZM0.5 0.5V1.83333H13.5V0.5H0.5ZM2.66667 5.16667H11.3333V3.83333H2.66667V5.16667Z" fill="#3085FE"></path>
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
                                            {/* <th>HalfDay Leave</th>
                                            <th>Shift Half</th>
                                            <th>Previous actionBy</th>
                                            <th>Info</th> */}
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
                                            <td>S.NATH O&M PRIVATE LIMITED</td>
                                            <td>16/08/2024</td>
                                            <td>16/08/2024</td>
                                            <td>04/09/2024</td>
                                            <td>20</td>
                                            <td>
                                                <span className="badge bg-yellow-25 fw-normal rounded-pill">Pending</span>
                                            </td>
                                            <td>Compensatory-Off</td>
                                            <td>My college pepar</td>
                                            {/* <td>NO</td>
                                            <td>-</td>
                                            <td>RAHUL DAGADUB RATHOD</td>
                                            <td>
                                                <button className="btn" type="button" data-bs-toggle="modal" data-bs-target="#leaveInfoModal">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                             width="18" height="18" x="0" y="0"
                                                            viewBox="0 0 24 24" style={{enableBackground:" new 0 0 512 512"}}
                                                            className="">
                                                            <g>
                                                                <g fill="#000">
                                                                    <path d="M12.75 11a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0z" fill="#000000"
                                                                        opacity="1" data-original="#000000" class=""></path>
                                                                    <path fill-rule="evenodd"
                                                                        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0z"
                                                                        clip-rule="evenodd" fill="#000000" opacity="1" data-original="#000000" class="">
                                                                    </path>
                                                                    <path d="M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="#000000" opacity="1"
                                                                        data-original="#000000" class=""></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </td> */}
                                        </tr>
                                        <tr className="d-none">
                                            <td colspan="18" class="text-center fw-bold">
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