import React from "react";

export default function DeleteHoliday({deleteModal , toggleDeleteModal}) {
    return (
        <>
            <div className={deleteModal ? "modal fade show" : "modal fade"} style={{display: deleteModal? 'block' : 'none'}} id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered dlt-modal">
                    <div className="modal-content shadow-lg">
                        <div className="modal-body p-5 text-center">
                            <div className="dlt-icon mb-3">
                                <span>
                                    <i className="fas fa-trash-alt text-danger"></i>
                                </span>
                            </div>
                            <h4 className="fs-2">Delete Holiday</h4>
                            <p className="fs-5 mb-5">Would you like to Delete this Holiday?</p>
                            <div className="d-flex align-items-center justify-content-center gap-3">
                                <button type="button" onClick={toggleDeleteModal} className="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}