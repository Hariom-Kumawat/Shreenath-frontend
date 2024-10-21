import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleDropDown } from "../../../store/action/sortingAction"
import TableFooter from "../../../components/common";
import AttRegularizationRequest from "./Att-Regularization-Req";


export default function Attendance() {
    const [attendance, setAttendance] = React.useState('daily')
    const dispatch = useDispatch();
    const barIconClicked = useSelector((state) => state.barIcon.barIconClicked)
    const dropdownOpen = useSelector((state) => state.sorting.dropdownOpen)

    const toggleDailyAttendance = () => {
        setAttendance('daily')
    }

    const toggleMonthlyAttendance = () => {
        setAttendance('monthly')
    }

    const toggleARRequests = () => {
        setAttendance('arrequests')
    }

    const toggleLeave = () => {
        setAttendance('leave')
    }

    const handleDropDown = () => {
        dispatch(toggleDropDown())
    }

    return (
        <>
            <div className={barIconClicked ? "main-view-content main-wrapper-w" : "main-view-content"} id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Attendance</h1>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div class="wizard-tabs">
                                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">

                                        <button className={attendance === 'daily' ? "nav-link active" : 'nav-link'} onClick={toggleDailyAttendance} id="pills-DailyAttendance-tab" data-bs-toggle="pill" data-bs-target="#pills-DailyAttendance" type="button" role="tab" aria-controls="pills-DailyAttendance" aria-selected="true">
                                            <h5>Daily Attendance</h5>
                                        </button>
                                    </li>
                                    <li class="nav-item">
                                        <div class="border-top-item"></div>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button className={attendance === 'monthly' ? "nav-link active" : 'nav-link'} onClick={toggleMonthlyAttendance} id="pills-DailyAttendance-tab" data-bs-toggle="pill" data-bs-target="#pills-DailyAttendance" type="button" role="tab" aria-controls="pills-DailyAttendance" aria-selected="true">
                                            <h5>Monthly Attendance</h5>
                                        </button>
                                    </li>
                                    <li class="nav-item">
                                        <div class="border-top-item"></div>
                                    </li>

                                    <li class="nav-item" role="presentation">
                                        <button className={attendance === 'arrequests' ? "nav-link active" : 'nav-link'} onClick={toggleARRequests} id="pills-DailyAttendance-tab" data-bs-toggle="pill" data-bs-target="#pills-DailyAttendance" type="button" role="tab" aria-controls="pills-DailyAttendance" aria-selected="true">
                                            <h5>A.R Requests</h5>
                                        </button>

                                    </li>
                                    <li class="nav-item">
                                        <div class="border-top-item"></div>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button className={attendance === 'leave' ? "nav-link active" : 'nav-link'} onClick={toggleLeave} id="pills-DailyAttendance-tab" data-bs-toggle="pill" data-bs-target="#pills-DailyAttendance" type="button" role="tab" aria-controls="pills-DailyAttendance" aria-selected="true">
                                            <h5>Leave</h5>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="wizard-tabs">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className={attendance === 'daily' ? "nav-link avtive" : "nav-link"} onClick={toggleDailyAttendance} id="pills-DailyAttendance-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-DailyAttendance" type="button" role="tab"
                                            aria-controls="pills-DailyAttendance" aria-selected="true">
                                            <h5>Daily Attendance</h5>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <div className="border-top-item"></div>
                                    </li>
                                    <li className={attendance === 'monthly' ? "nav-link avtive" : "nav-link"} onClick={toggleMonthlyAttendance} role="presentation">
                                        <button className="nav-link" id="pills-MonthlyAttendance-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-MonthlyAttendance" type="button" role="tab"
                                            aria-controls="pills-MonthlyAttendance" aria-selected="false">
                                            <h5>Monthly Attendance</h5>
                                        </button>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="tab-content" id="pills-tabContent">
                                {attendance === 'daily' && (<div className={attendance === 'daily' ? "tab-pane fade show active" : "tab-pane fade"} id="pills-DailyAttendance" role="tabpanel"
                                    aria-labelledby="pills-DailyAttendance-tab" tabindex="0">
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
                                            {/* <!-- <button class="btn btn-primary" type="button">
                          07-09-2024
                        </button>
                        <button class="btn btn-outline-primary" type="button">
                          Break-Time Reports
                        </button> --> */}
                                            <button className="btn btn-outline-primary" type="button">
                                                Export
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
                                    <TableFooter />
                                </div>
                                )}


                                {attendance === 'monthly' && (<div className="tab-pane fade show active" id="pills-MonthlyAttendance" role="tabpanel"
                                    aria-labelledby="pills-MonthlyAttendance-tab" tabindex="0">
                                    <div className="table-head d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
                                        <div className="position-relative">
                                            <span class="search-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M16.7499 16.75L13.4874 13.4875M15.25 9.25C15.25 12.5637 12.5637 15.25 9.25 15.25C5.93629 15.25 3.25 12.5637 3.25 9.25C3.25 5.93629 5.93629 3.25 9.25 3.25C12.5637 3.25 15.25 5.93629 15.25 9.25Z"
                                                        stroke="#818898" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            <input type="text" class="form-control search-control" id="searchUsers" placeholder="Search" />
                                        </div>
                                        <div class="d-flex align-items-stretch justify-content-end gap-3">
                                            <input type="month" class="form-control" />
                                            <button class="btn btn-outline-primary" type="button">
                                                Export
                                            </button>
                                            {/* <input type="month" class="form-control">
                                                <button class="btn btn-outline-primary" type="button">
                                                    Export
                                                </button>
                                                <!-- <button class="btn btn-outline-primary" type="button">
                                                    Import
                                                </button>
                                                <button class="btn btn-outline-primary" type="button">
                                                    Template
                                                </button> --> */}
                                            <button className="btn btn-outline-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                                                    <path d="M5.55556 8.5H8.44444V7.16667H5.55556V8.5ZM0.5 0.5V1.83333H13.5V0.5H0.5ZM2.66667 5.16667H11.3333V3.83333H2.66667V5.16667Z" fill="#3085FE"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="manage-table main-table table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th class="text-start">Employee</th>
                                                    <th>Shift</th>
                                                    <th>Department</th>
                                                    <th>Emp. Status</th>
                                                    <th>Total Days</th>
                                                    <th>Present</th>
                                                    <th>Absent</th>
                                                    <th>OD</th>
                                                    <th>Leaves</th>
                                                    <th>Holidays</th>
                                                    <th>Early Checkout Count</th>
                                                    <th>Late Checkout Count</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>01</td>
                                                    <td>
                                                        <div class="user">
                                                            <span class="user-icon"> AS </span>
                                                            <div>
                                                                <h4 class="title mb-0">Aditiya Sharma</h4>
                                                                <p class="mb-0">N/A</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>General</td>
                                                    <td>N/A</td>
                                                    <td>
                                                        <span class="badge bg-green-25 fw-normal rounded-pill">Current</span>
                                                    </td>
                                                    <td>31</td>
                                                    <td>20</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>1</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>

                                                <tr class="d-none">
                                                    <td colspan="12" class="text-center fw-bold">
                                                        No Data Found
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <TableFooter />
                                </div>
                                )}

                                {attendance === 'arrequests' && <div className="tab-pane fade show active" id="pills-arrequests" role="tabpanel"
                                    aria-labelledby="pills-arrequests-tab" tabindex="0">
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
                                        </div>
                                    </div>
                                </div>
                                }
                                {attendance === 'leave' && <div className="tab-pane fade show active" id="pills-leave" role="tabpanel"
                                    aria-labelledby="pills-leave-tab" tabindex="0">
                                    <div className="content">
                                        <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                                            <h1 className="mb-0">Leave</h1>
                                        </div>
                                        <div className="card mb-4">
                                            <div className="card-body">
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
                                        </div>
                                    </div>
                                </div>
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}