import React from "react";

export default function AddDesignationModal({ openModal, toggleModal }) {
    return (
        <>
            <div className="modal-backdrop fade show"></div>
            <div className={openModal ? "modal fade show" : "modal fade"} style={{ display: openModal ? 'block' : 'none' }} id="addDesignationModal" tabindex="-1" aria-labelledby="addDesignationModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content shadow-lg">
                        <div className="modal-header p-4">
                            <h1 className="modal-title fs-3 rajdhani-semibold" id="addDesignationModalLabel">
                                Add Designation
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
                                                    <label for="Department" class="form-label">Department Name
                                                        <span className="text-danger">*</span></label>
                                                    <select className="form-control form-select" aria-label="Default select example">
                                                        <option className="d-none" selected>
                                                            Select Department Name
                                                        </option>
                                                        <option value="1">O & M</option>
                                                        <option value="2">Accounts</option>
                                                        <option value="3">Projects</option>
                                                    </select>
                                                    <div className="form-text text-danger d-none">
                                                        This field is Required
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-3">
                                                    <label for="Designation" className="form-label">Designation Name
                                                        <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="Designation" />
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
                            <button type="button" onClick={toggleModal} className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary">
                                Add Designation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}