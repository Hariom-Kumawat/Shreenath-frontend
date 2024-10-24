import React from "react";
import { Link } from "react-router-dom";
import MarkAttendance from '../../../components/Modals/User/MarkAttendance';

import { useSelector } from "react-redux";
import TableFooter from "../../../components/common";

export default function UserAttendance() {
    const [openModal, setOpenModal] = React.useState(false);
    const [attendance , setAttendance] = React.useState('attendance')
    const barIconClicked = useSelector((state) => state.barIcon.barIconClicked)

    const toggleModal = () => {
        setOpenModal(!openModal)
    }

    const toggleAttendance = (action) => {
        setAttendance(action)
    }

    return (
        <>
            <div className={barIconClicked ? "main-view-content main-wrapper-w" : "main-view-content"} id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Attendance</h1>
                        <button className="btn btn-primary" type="button" onClick={toggleModal} data-bs-toggle="modal" data-bs-target="#attendanceModal">
                            Mark My Attendance
                        </button>
                    </div>
                    <div className="top-cards-row">
                        <div className="card dash-cards">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h1>Present:</h1>
                                    <h2>20</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card dash-cards">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h1>Absent:</h1>
                                    <h2>2</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card dash-cards">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h1>Leaves:</h1>
                                    <h2>10</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card dash-cards">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h1>Holiday:</h1>
                                    <h2>1</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card dash-cards">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h1>Half-Day:</h1>
                                    <h2>0</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <nav>
                                <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
                                    <button onClick={() => toggleAttendance('attendance')} className={attendance === 'attendance' ? "btn btn-outline-primary active px-5 rounded-0 rounded-start-2" :"btn btn-outline-primary px-5 rounded-0 rounded-start-2"} id="nav-home-tab"
                                        data-bs-toggle="tab" data-bs-target="#tab-one" type="button" role="tab" aria-controls="nav-home"
                                        aria-selected="true">
                                        Attendance
                                    </button>
                                    <button onClick={() => toggleAttendance('odattendance')} className={attendance === 'odattendance' ? "btn btn-outline-primary active px-5 rounded-0 rounded-start-2" :"btn btn-outline-primary px-5 rounded-0 rounded-start-2"} id="nav-profile-tab"
                                        data-bs-toggle="tab" data-bs-target="#tab-two" type="button" role="tab" aria-controls="nav-profile"
                                        aria-selected="false">
                                        OD Attendance
                                    </button>
                                </div>
                            </nav>

                            <div className="tab-content mt-4" id="nav-tabContent">
                            {attendance === 'attendance' &&     <div className={attendance === 'attendance' ? "tab-pane fade show active" :"tab-pane fade show "} id="tab-one" role="tabpanel" aria-labelledby="nav-home-tab"
                                    tabindex="0">
                                    <div className="table-head mb-4 border-bottom pb-3">
                                        <div>
                                            <input type="month" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="manage-table main-table table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Date</th>
                                                    <th>Shift</th>
                                                    <th>Check In</th>
                                                    <th>Check Out</th>
                                                    <th>Working Hours</th>
                                                    <th>Work Type</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>01</td>
                                                    <td>25/09/2024 (Wednesday)</td>
                                                    <td>10:30-19:30</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>Office</td>
                                                    <td>
                                                        <span className="badge bg-red-25 fw-normal rounded-pill">Absent</span>
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
                                </div> }
                             {attendance === 'odattendance' &&    <div className={attendance === 'odattendance' ? "tab-pane fade show active" :"tab-pane fade show "} id="tab-two" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                    <div className="table-head mb-4 border-bottom pb-3">
                                        <div>
                                            <input type="month" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="manage-table main-table table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>M.O.C.</th>
                                                    <th>Client</th>
                                                    <th>Location</th>
                                                    <th>Date</th>
                                                    <th>Check In</th>
                                                    <th>Check Out</th>
                                                    <th>Reason</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>01</td>
                                                    <td>Visit</td>
                                                    <td>TATA POWER SOLAR LTD</td>
                                                    <td>Bikaner</td>
                                                    <td>25/09/2024 (Wednesday)</td>
                                                    <td>10:30</td>
                                                    <td>-</td>
                                                    <td>Metting</td>
                                                    <td>
                                                        <span className="badge bg-green-25 fw-normal rounded-pill">Present</span>
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
                                </div> }
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            {openModal && (<div className="modal-backdrop fade show"></div>)}
            {openModal && (<MarkAttendance openModal={openModal} toggleModal={toggleModal} />)}
        </>
    )
}