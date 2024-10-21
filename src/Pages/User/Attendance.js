import React from "react";
import { Link } from "react-router-dom";
import MarkAttendance from "../../components/Modals/User/MarkAttendance";
import { useSelector } from "react-redux";

export default function UserAttendance() {
    const [openModal, setOpenModal] = React.useState(false);
    const barIconClicked = useSelector((state) => state.barIcon.barIconClicked)

    const toggleModal = () => {
        setOpenModal(!openModal)
    }
    return (
        <> 
            <div className={ barIconClicked ? "main-view-content main-wrapper-w" : "main-view-content"} id="contentWrapper">
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
            {openModal && (<div className="modal-backdrop fade show"></div>)}
            {openModal && (<MarkAttendance openModal={openModal} toggleModal={toggleModal} />)}
        </>
    )
}