import React from "react";

export default function MarkAttendance({ openModal , toggleModal }) {
    return (
        <>
            <div className={openModal ? "modal fade show" : "modal fade"} style={{ display: openModal ? "block" : "none" }} id="attendanceModal" tabindex="-1" aria-labelledby="attendanceModalLabel" aria-hidden="true"
                data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header p-4 border-0">
                            <h1 className="modal-title fs-3 rajdhani-semibold" id="attendanceModalLabel">
                                Attendance
                            </h1>
                            <button type="button" className="btn-close" onClick={toggleModal} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <div className="d-flex flex-column gap-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Office</option>
                                    <option value="1">Site 1</option>
                                    <option value="2">Site 2</option>
                                    <option value="3">Site3</option>
                                </select>
                                <div
                                    className="border border-secondary-subtle border-end-0 border-start-0 d-flex align-items-center flex-column gap-3 p-4 my-2">
                                    <h3>Wed, 25th Sep 2024</h3>
                                    <p>15:50:39</p>
                                    <button className="btn btn-success px-5">Check in</button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer p-4 border-0">
                            <button type="button" className="btn btn-secondary" onClick={toggleModal} data-bs-dismiss="modal">
                                Close
                            </button>
                            {/* <!-- <button type="button" class="btn btn-primary">Save changes</button> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}