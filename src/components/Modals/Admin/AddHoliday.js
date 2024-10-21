import React from "react";

export default function AddHolidayModal({ openModal, toggleModal }) {
    return (
        <>
            <div className={openModal ? "modal fade show " : "modal fade"}
                style={{ display: openModal ? 'block' : 'none' }}
                aria-modal='true'
                role="dialog"
                id="addHolidayModal" tabindex="-1" aria-labelledby="addHolidayModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content shadow-lg">
                        <div className="modal-header p-4">
                            <h1 className="modal-title fs-3 rajdhani-semibold" id="addHolidayModalLabel">
                                Add Holiday
                            </h1>
                            <button type="button" onClick={toggleModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <form action="">
                                <div className="card shadow-none mb-0">
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group mb-3">
                                                    <label for="holiday" className="form-label">Holiday Name
                                                        <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="holiday" />
                                                    <div className="form-text text-danger d-none">
                                                        This field is Required
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-3">
                                                    <label for="holidayDate" className="form-label">Holiday Date
                                                        <span className="text-danger">*</span></label>
                                                    <input type="date" className="form-control" id="holidayDate" />
                                                    <div className="form-text text-danger d-none">
                                                        This field is Required
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-3">
                                                    <label for="desc" className="form-label">Description <span className="text-danger">*</span></label>
                                                    <textarea name="" className="form-control" rows="3" id="desc"
                                                        placeholder="Enter Description here..."></textarea>
                                                    <div className="form-text text-danger d-none">
                                                        This field is Required
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer p-4">
                            <button type="button" onClick={toggleModal} className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary">Add Holiday</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}