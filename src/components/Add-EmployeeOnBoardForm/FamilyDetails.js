import React from "react";

export default function FamilyDetailsForm() {
    return (
        <>

            <div className="tab-pane fade show active" id="pills-familyDetail" role="tabpanel"
                aria-labelledby="pills-familyDetail-tab" tabindex="0">
                <div className="row">
                    <div className="col-12">
                        <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                            Family Details
                        </h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Role" className="form-label">Relation Type</label>
                            <select className="form-select form-control" aria-label="Default select example">
                                <option selected className="d-none">
                                    Select Relation Type
                                </option>
                                <option value="1">Father</option>
                                <option value="2">Mother</option>
                            </select>
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="Name" placeholder="Enter Name" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Number" className="form-label">Phone No.</label>
                            <input type="number" className="form-control" id="Number" placeholder="Enter Number" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Datebirth" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" id="Datebirth" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 align-self-end">
                        <div className="form-check form-group mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="nominee" />
                            <label className="form-check-label" for="nominee">
                                Nominee
                            </label>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <button className="btn btn-primary px-4" type="button">
                        Save and Continue
                    </button>
                </div>
            </div>
        </>
    )
}