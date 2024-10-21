import React from "react";

export default function PermissionForm() {
    return (
        <>
            <div className="tab-pane fade show active " id="pills-Permission" role="tabpanel"
                aria-labelledby="pills-Permission-tab" tabindex="0">
                <div className="row">
                    <div className="col-12">
                        <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                            Permission
                        </h4>
                    </div>
                    {/* <!-- <div class="col-12 col-md-6 col-lg-4">
                        <div class="form-group mb-3">
                            <label for="Role" class="form-label"
                            >Employee Type</label
                            >
                            <select
                                class="form-select form-control"
                                aria-label="Default select example"
                            >
                                <option selected class="d-none">
                                    Select Employee Type
                                </option>
                                <option value="1">Supervisor (Monthly)</option>
                                <option value="2">Office Staff (Monthly)</option>
                            </select>
                            <div class="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="form-group mb-3">
                            <label for="Role" class="form-label"
                            >Employment Type</label
                            >
                            <select
                                class="form-select form-control"
                                aria-label="Default select example"
                            >
                                <option selected class="d-none">
                                    Select Employment Type
                                </option>
                                <option value="1">Permanent</option>
                                <option value="2">Trainees</option>
                                <option value="3">Contract</option>
                            </select>
                            <div class="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div> --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Role" className="form-label">Designation</label>
                            <select className="form-select form-control" aria-label="Default select example">
                                <option selected className="d-none">
                                    Select Designation
                                </option>
                                <option value="1">Supervisor</option>
                                <option value="2">HR</option>
                                <option value="3">Manager</option>
                            </select>
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Role" className="form-label">Department</label>
                            <select class="form-select form-control" aria-label="Default select example">
                                {/* <!-- <option selected class="d-none">
                                    Select Department
                                </option> --> */}
                                <option value="1" selected>O&M</option>
                                <option value="2">HR</option>
                                <option value="3">Accounts</option>
                            </select>
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    {/* <!-- <div class="col-12 col-md-6 col-lg-4">
                        <div class="form-group mb-3">
                            <label for="Role" class="form-label"
                            >Sub Department</label
                            >
                            <select
                                class="form-select form-control"
                                aria-label="Default select example"
                            >
                                <option selected class="d-none">
                                    Select Sub Department
                                </option>
                                <option value="1">O&M</option>
                                <option value="2">HR</option>
                                <option value="3">Accounts</option>
                            </select>
                            <div class="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div> --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Role" className="form-label">Role</label>
                            <select className="form-select form-control" aria-label="Default select example">
                                <option selected className="d-none">
                                    Select Role
                                </option>
                                {/* <!-- <option value="1">Admin</option>
                                <option value="2">Manager</option> --> */}
                                <option value="3">Zonal Head</option>
                                <option value="4" selected>Plant Head</option>
                                <option value="4">Sr. Engineer</option>
                                <option value="5">Engineer</option>
                                <option value="6">Sr. Technician</option>
                                <option value="7">Technician</option>
                            </select>
                            <div class="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    {/* <!-- <div class="col-12 col-md-6 col-lg-4">
                        <div class="form-group mb-3">
                            <label for="Role" class="form-label">Grade</label>
                            <select
                                class="form-select form-control"
                                aria-label="Default select example"
                            >
                                <option selected class="d-none">
                                    Select Grade
                                </option>
                                <option value="1">Admin</option>
                                <option value="2">Manager</option>
                            </select>
                            <div class="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="form-group mb-3">
                            <label for="Role" class="form-label"
                            >Highest Qualification</label
                            >
                            <select
                                class="form-select form-control"
                                aria-label="Default select example"
                            >
                                <option selected class="d-none">
                                    Select Qualification
                                </option>
                                <option value="1">B.A</option>
                                <option value="2">BSC</option>
                            </select>
                            <div class="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="form-group mb-3">
                            <label for="Role" class="form-label">Skills</label>
                            <select
                                class="form-select form-control"
                                aria-label="Default select example"
                            >
                                <option selected class="d-none">
                                    Select Skills
                                </option>
                                <option value="1">N/A</option>
                                <option value="2">Other</option>
                            </select>
                            <div class="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div> --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Role" className="form-label">Shift</label>
                            <select className="form-select form-control" aria-label="Default select example">
                                <option selected className="d-none">
                                    Select Shift
                                </option>
                                <option value="1">C</option>
                                <option value="2">B</option>
                                <option value="3">A</option>
                            </select>
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Role" className="form-label">Site</label>
                            <select className="form-select form-control" aria-label="Default select example">
                                {/* <!-- <option selected class="d-none">
                                    Select Site
                                </option> --> */}
                                <option value="1 selected">88 MW OMKARESHWER +1...</option>
                                <option value="2">160 MW BHAINSARA</option>
                                <option value="3">55 MW RAWRA</option>
                            </select>
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    {/* <!-- <div class="col-12 col-md-6 col-lg-4">
                        <div class="form-group mb-3">
                            <label for="shiftTime" class="form-label"
                            >Shift Start Time</label
                            >
                            <input
                                type="date"
                                class="form-control"
                                id="shiftTime"
                            />
                            <div class="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div> --> */}
                    {/* <!-- <div class="col-12 col-md-6 col-lg-4">
                        <div class="form-group mb-3">
                            <label for="cardId" class="form-label"
                            >Card ID.</label
                            >
                            <input
                                type="number"
                                class="form-control"
                                placeholder="Enter Card ID"
                                id="cardId"
                            />
                            <div class="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div> --> */}
                    {/* <!-- <div class="col-12">
                        <div class="card my-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="d-flex align-items-center gap-3">
                                            <h4 class="fs-3 rajdhani-semibold mb-0">
                                                Flexi Hours:
                                            </h4>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="flexiHour"
                                                    id="flexiHour1"
                                                    checked
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="flexiHour1"
                                                >
                                                    Yes
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="flexiHour"
                                                    id="flexiHour2"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="flexiHour2"
                                                >
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> --> */}
                </div>
                {/* <!-- <div class="row">
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="form-check form-switch text-start my-3">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="switch1"
                            />
                            <label
                                class="form-check-label form-label mb-0"
                                for="switch1"
                            >Allowed OD</label
                            >
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="form-check form-switch text-start my-3">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="switch4"
                            />
                            <label
                                class="form-check-label form-label mb-0"
                                for="switch4"
                            >Rotational weekOff Allowed</label
                            >
                        </div>
                    </div>
                </div> --> */}
                {/* <!-- <div class="row mt-4">
                    <div class="col-12 col-md-6 col-lg-4 align-self-end">
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
                    </div>
                </div> --> */}
                <div className="d-flex align-items-center justify-content-end gap-4">
                    <button class="btn btn-primary px-4" type="button">
                        Save and Continue
                    </button>
                    <button className="btn btn-outline-primary px-4" type="button">
                        Create Employee
                    </button>

                </div>
            </div>
        </>
    )
}