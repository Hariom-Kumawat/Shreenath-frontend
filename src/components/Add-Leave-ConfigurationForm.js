import React from "react";
import { Link } from "react-router-dom";
import { RoutesLink } from "../ApiHelper/RoutesLink";
import { useNavigate } from "react-router-dom";

export default function AddLeaveConfigForm() {
    const navigate = useNavigate();

    const handleCancelForm = () => {
        navigate(RoutesLink?.leave_configuration_route)
    }
    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content container-fluid">
                    <div className="content-head mb-5 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-start gap-4">
                            <Link to={RoutesLink?.leave_configuration_route} role="button" className="btn back-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                    width="24" height="24" x="0" y="0" viewBox="0 0 24 24" style={{enableBackground:" new 0 0 24 24"}}
                                    className="">
                                    <g>
                                        <path
                                            d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2z"
                                            fill="#25476a" opacity="1" data-original="#25476a" class=""></path>
                                    </g>
                                </svg>
                            </Link>
                            <h1 className="mb-0">Add Leave Configuration</h1>
                        </div>
                    </div>

                    <form action="">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="wizard-tabs">
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-BasicDetails-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-BasicDetails" type="button" role="tab" aria-controls="pills-BasicDetails"
                                                aria-selected="true">
                                                <h6>Step 1</h6>
                                                <h5>Basic Details</h5>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-BasicDetails" role="tabpanel"
                                        aria-labelledby="pills-BasicDetails-tab" tabindex="0">
                                        <div className="row">
                                            <div className="col-12">
                                                <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                                                    Normal Details
                                                </h4>
                                            </div>
                                            {/* <!-- <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group mb-3">
                                                    <label for="name" class="form-label"
                                                    >Name <span class="text-danger">*</span></label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Enter Name"
                                                        id="name"
                                                        aria-describedby="emailHelp"
                                                    />
                                                    <div class="form-text text-danger d-none">
                                                        This field is Required
                                                    </div>
                                                </div>
                                            </div> --> */}

                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="form-group mb-3">
                                                    <label for="Employee" className="form-label">Leave Type</label>
                                                    <select class="form-select form-control" aria-label="Default select example">
                                                        <option selected className="d-none">
                                                            Select Employee Type
                                                        </option>
                                                        <option value="1">Sick Leave</option>
                                                        <option value="2">Casual Leave</option>
                                                        <option value="3">Earned Leave</option>
                                                    </select>
                                                    <div className="form-text text-danger d-none">
                                                        This field is Required
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="form-group mb-3">
                                                    <label for="applicableFrom" className="form-label">Applicable From
                                                    </label>
                                                    <input type="date" className="form-control" placeholder="Enter applicableFrom" id="applicableFrom"
                                                        aria-describedby="emailHelp" />
                                                    <div className="form-text text-danger d-none">
                                                        This field is Required
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group mb-3">
                                                    <label for="Employee" class="form-label"
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
                                                        <option value="2">Trainess</option>
                                                        <option value="3">Contract</option>
                                                    </select>
                                                    <div class="form-text text-danger d-none">
                                                        This field is Required
                                                    </div>
                                                </div>
                                            </div> --> */}
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="form-group mb-3">
                                                    <label for="Permonth" className="form-label">Total Leave Per Month</label>
                                                    <input type="number" className="form-control" placeholder="Enter Total Leave Per Month"
                                                        id="Permonth" />
                                                    <div className="form-text text-danger d-none">
                                                        This field is Required
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="form-group mb-3">
                                                    <label for="Peryear" className="form-label">Total Leave Per year</label>
                                                    <input type="number" className="form-control" placeholder="Enter Total Leave Per year"
                                                        id="Peryear" disabled />
                                                    <div className="form-text text-danger d-none">
                                                        This field is Required
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4"></div>
                                            {/* <!-- <div class="col-12 col-lg-6">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h4
                                                            class="fs-3 rajdhani-semibold my-4 border-bottom pb-3"
                                                        >
                                                            Leave Data
                                                        </h4>
                                                    </div>

                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group mb-4">
                                                            <div class="form-check">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="radio"
                                                                    name="Trucks"
                                                                    id="Monthwise"
                                                                />
                                                                <label
                                                                    class="form-check-label"
                                                                    for="Monthwise"
                                                                >
                                                                    Monthwise
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group mb-4">
                                                            <div class="form-check">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="checkbox"
                                                                    name="Trucks"
                                                                    id="isMonthStartCredit"
                                                                />
                                                                <label
                                                                    class="form-check-label"
                                                                    for="isMonthStartCredit"
                                                                >
                                                                    isMonthStartCredit
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group mb-3">
                                                            <label for="creditDate" class="form-label"
                                                            >Leave Credit On Date</label
                                                            >
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                placeholder="Enter Leave Credit On Date"
                                                                id="creditDate"
                                                            />
                                                            <div class="form-text text-danger d-none">
                                                                This field is Required
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group mb-4">
                                                            <div class="form-check">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="checkbox"
                                                                    name="Trucks"
                                                                    id="Joining"
                                                                />
                                                                <label class="form-check-label" for="Joining">
                                                                    Earn Leave If Joining Date After Leave
                                                                    Credit Date
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-lg-6">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h4
                                                            class="fs-3 rajdhani-semibold my-4 border-bottom pb-3"
                                                        >
                                                            Yearly earning
                                                        </h4>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group mb-4">
                                                            <div class="form-check">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="checkbox"
                                                                    name="Trucks"
                                                                    id="Yearwise"
                                                                />
                                                                <label
                                                                    class="form-check-label"
                                                                    for="Yearwise"
                                                                >
                                                                    Yearwise
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group mb-3">
                                                            <label for="Leaves" class="form-label"
                                                            >Leaves</label
                                                            >
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                placeholder="Enter Leaves"
                                                                id="Leaves"
                                                            />
                                                            <div class="form-text text-danger d-none">
                                                                This field is Required
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group mb-3">
                                                            <label for="Employee" class="form-label"
                                                            >Leaves earn on month</label
                                                            >
                                                            <select
                                                                class="form-select form-control"
                                                                aria-label="Default select example"
                                                            >
                                                                <option selected class="d-none">
                                                                    Select Leaves earn on month
                                                                </option>
                                                                <option value="1">Jan</option>
                                                                <option value="2">Feb</option>
                                                                <option value="3">Mar</option>
                                                            </select>
                                                            <div class="form-text text-danger d-none">
                                                                This field is Required
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group mb-3">
                                                            <label for="Employee" class="form-label">
                                                                Leaves earn on date</label
                                                            >
                                                            <select
                                                                class="form-select form-control"
                                                                aria-label="Default select example"
                                                            >
                                                                <option selected class="d-none">
                                                                    Select Leaves earn on date
                                                                </option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </select>
                                                            <div class="form-text text-danger d-none">
                                                                This field is Required
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> --> */}
                                            <div className="col-12 ">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                                                            Yearly carry forward
                                                        </h4>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group mb-4">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="Trucks" id="Yearwise" />
                                                                <label className="form-check-label" for="Yearwise">
                                                                    Yes
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- <div class="col-12 col-md-6">
                                                        <div class="form-group mb-3">
                                                            <label for="Leaves" class="form-label"
                                                            >Total carry forward leaves</label
                                                            >
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                placeholder="Enter Total carry forward leaves"
                                                                id="Leaves"
                                                            />
                                                            <div class="form-text text-danger d-none">
                                                                This field is Required
                                                            </div>
                                                        </div>
                                                    </div> -->
                                                    <!-- <div class="col-12 col-md-6">
                                                        <div class="form-group mb-3">
                                                            <label for="Employee" class="form-label"
                                                            >Carry forward on month</label
                                                            >
                                                            <select
                                                                class="form-select form-control"
                                                                aria-label="Default select example"
                                                            >
                                                                <option selected class="d-none">
                                                                    Select Carry forward on month
                                                                </option>
                                                                <option value="1">Jan</option>
                                                                <option value="2">Feb</option>
                                                                <option value="3">Mar</option>
                                                            </select>
                                                            <div class="form-text text-danger d-none">
                                                                This field is Required
                                                            </div>
                                                        </div>
                                                    </div> --> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={handleCancelForm} className="d-flex align-items-cente justify-content-end gap-3 mt-4 mb-3">
                                            <button className="btn btn-secondary px-5" type="button">
                                                Cancel
                                            </button>
                                            <button type="button" className="btn btn-primary px-5">
                                                Add Leave Configuration
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}