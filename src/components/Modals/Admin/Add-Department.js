import React from "react";

export default function AddDepartmentModal({ openModal, toggleOpenModal }) {
    return (
        <>
            <div className="modal-backdrop fade show"></div>
            <div className={openModal ? "modal fade show" : "modal fade show"} style={{ display: openModal ? 'block' : 'none' }} id="addDepartmentModal" tabindex="-1" aria-labelledby="addDepartmentModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content shadow-lg">
                        <div className="modal-header p-4">
                            <h1 className="modal-title fs-3 rajdhani-semibold" id="addDepartmentModalLabel">
                                Add Department
                            </h1>
                            <button type="button" onClick={toggleOpenModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <form action="">
                                <div className="card shadow-none mb-0">
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group mb-3">
                                                    <label for="department" className="form-label">Department Name
                                                        <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="department" />
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
                        <div className="modal-footer p-4">
                            <button onClick={toggleOpenModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary">
                                Add Department
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}