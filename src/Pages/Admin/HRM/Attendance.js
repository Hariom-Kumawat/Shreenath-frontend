import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleDropDown } from "../../../store/action/sortingAction"
import TableFooter from "../../../components/common";
import AttRegularizationRequest from "./Att-Regularization-Req";
import Leave from "./Leave";


export default function Attendance() {
    const [attendance, setAttendance] = React.useState('daily')
    const dispatch = useDispatch();
    const barIconClicked = useSelector((state) => state.barIcon.barIconClicked)
    const dropdownOpen = useSelector((state) => state.sorting.dropdownOpen)

    const attendanceOptions = {
        daily: "Daily Attendance",
        monthly: "Monthly Attendance",
        arrequests: "Att Regularization Req.",
        leave: "Leave"
      };

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
                    <h1 className="mb-0">{attendanceOptions[attendance]}</h1>
                        
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

                            {attendance === 'arrequests' && <AttRegularizationRequest/>}
                            {attendance === 'leave' && <Leave/>}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}