import React from "react";

export default function PreviousWorkDetailsForm() {
    return (
        <>
            <div className="tab-pane fade show active" id="pills-PreviousWork" role="tabpanel"
                aria-labelledby="pills-PreviousWork-tab" tabindex="0">
                <div className="row">
                    <div className="col-12">
                        <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                            Previous Work
                        </h4>
                    </div>

                    {/* <!-- <div class="col-12 col-md-6 col-lg-4 align-self-end">
                        <div class="form-group mb-3">
                            <button
                                class="btn btn-outline-primary px-4"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="13"
                                    viewBox="0 0 9 8"
                                    fill="none"
                                >
                                    <path
                                        d="M4.5 0.5V7.5"
                                        stroke="#3085FE"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M1 4H8"
                                        stroke="#3085FE"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Add
                            </button>
                        </div>
                    </div> --> */}

                    <div className="col-12">

                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="form-group mb-3">
                                    <label for="Company" className="form-label">Company Name
                                        <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="Company" placeholder="Enter Company Name" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="form-group mb-3">
                                    <label for="designation" className="form-label">Designation Name
                                        <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="designation"
                                        placeholder="Enter Designation Name" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 align-self-end">
                                <div className="form-check form-group mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="current" />
                                    <label className="form-check-label" for="current">
                                        Current Company
                                    </label>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="form-group mb-3">
                                    <label for="workFrom" className="form-label">From
                                        <span className="text-danger">*</span></label>
                                    <input type="date" className="form-control" id="workFrom" placeholder="Enter From" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="form-group mb-3">
                                    <label for="workTO" className="form-label">TO
                                        <span className="text-danger">*</span></label>
                                    <input type="date" className="form-control" id="workTO" placeholder="Enter TO" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="form-group mb-3">
                                    <label for="workTO" className="form-label">Duration (In Year)
                                        <span className="text-danger">*</span></label>
                                    <input type="number" className="form-control" id="workTO" placeholder="2" disabled
                                        value="2" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="card border mb-3 d-none">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex align-items-center justify-content-between my-4 border-bottom pb-3">
                                            <h4 className="fs-3 rajdhani-semibold">
                                                HCL Tech
                                            </h4>
                                            <button className="btn border-0 p-0" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"
                                                    fill="none">
                                                    <path d="M1.5 4.16602H2.77778H13" stroke="#666D80" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M4.69401 4.16688V2.88911C4.69401 2.55022 4.82863 2.22521 5.06826 1.98558C5.30789 1.74595 5.6329 1.61133 5.97179 1.61133H8.52734C8.86623 1.61133 9.19124 1.74595 9.43087 1.98558C9.6705 2.22521 9.80512 2.55022 9.80512 2.88911V4.16688M11.7218 4.16688V13.1113C11.7218 13.4502 11.5872 13.7752 11.3475 14.0149C11.1079 14.2545 10.7829 14.3891 10.444 14.3891H4.05512C3.71623 14.3891 3.39123 14.2545 3.1516 14.0149C2.91197 13.7752 2.77734 13.4502 2.77734 13.1113V4.16688H11.7218Z"
                                                        stroke="#666D80" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="form-group mb-3">
                                            <label for="designation" className="form-label">Designation Name
                                                <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="designation"
                                                placeholder="Enter Designation Name" />
                                            <div className="form-text text-danger d-none">
                                                This field is Required
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="form-group mb-3">
                                            <label for="workFrom" className="form-label">From
                                                <span className="text-danger">*</span></label>
                                            <input type="date" className="form-control" id="workFrom" placeholder="Enter From" />
                                            <div className="form-text text-danger d-none">
                                                This field is Required
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="form-group mb-3">
                                            <label for="workTO" className="form-label">TO
                                                <span className="text-danger">*</span></label>
                                            <input type="date" className="form-control" id="workTO" placeholder="Enter TO" />
                                            <div className="form-text text-danger d-none">
                                                This field is Required
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="form-group mb-3">
                                            <label for="workTO" className="form-label">Duration (In Year)
                                                <span className="text-danger">*</span></label>
                                            <input type="date" className="form-control" id="workTO"
                                                placeholder="Enter Duration (In Year)" disabled />
                                            <div className="form-text text-danger d-none">
                                                This field is Required
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 align-self-end">
                                        <div className="form-check form-group mb-3">
                                            <input className="form-check-input" type="checkbox" value="" id="current" />
                                            <label className="form-check-label" for="current">
                                                Current Company
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end gap-4">
                    <button className="btn btn-primary px-4" type="button">
                        Add More
                    </button>
                    <button className="btn btn-primary px-4" type="button">
                        Save and Continue
                    </button>
                </div>
            </div>
        </>
    )
}