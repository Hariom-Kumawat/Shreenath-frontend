import React from "react";

export default function BasicDetailsForm() {
    return (
        <>
            <div className="tab-pane fade show active" id="pills-BasicDetails" role="tabpanel"
                aria-labelledby="pills-BasicDetails-tab" tabindex="0">
                <div className="row">
                    <div className="col-12">
                        <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                            Normal Details
                        </h4>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-3">
                                    <label for="employeeImg" className="form-label label-img position-relative">
                                        <img src="../assets/img/employee.svg" alt="truck" />

                                        <button className="btn btn-outline-danger rounded-circle position-absolute top-0 end-0 py-2"
                                            type="button">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </label>
                                    <input className="form-control d-none" type="file" id="employeeImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="firstName" className="form-label">First name
                                <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="First name" id="firstName"
                                aria-describedby="emailHelp" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="MiddleName" className="form-label">Middle name
                                <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Middle name" id="MiddleName"
                                aria-describedby="emailHelp" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="LastName" className="form-label">Last name
                                <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Last name" id="LastName"
                                aria-describedby="emailHelp" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Role" className="form-label">Gender</label>
                            <select className="form-select form-control" aria-label="Default select example">
                                <option selected className="d-none">
                                    Select Gender
                                </option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Enter Email" id="email" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="officialemail" className="form-label">Official Email</label>
                            <input type="email" className="form-control" placeholder="Enter official Email"
                                id="officialemail" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="MobileNO" className="form-label">Mobile No.</label>
                            <input type="number" className="form-control" placeholder="Mobile No." id="MobileNO" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="officialMobileNO" className="form-label">official Mobile No.</label>
                            <input type="number" className="form-control" placeholder="official Mobile No."
                                id="officialMobileNO" />
                            <div class="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Datebirth" className="form-label">Date of Birth</label>
                            <input type="text" className="form-control" id="Datebirth" placeholder="**|**|****" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="FatherName" className="form-label">Father name
                                <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" placeholder="Father name" id="FatherName"
                                aria-describedby="emailHelp" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="MotherName" className="form-label">Mother name
                                <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" placeholder="Mother name" id="MotherName"
                                aria-describedby="emailHelp" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    {/* <!-- <div class="col-12 col-md-6 col-lg-4">
                        <div class="form-group mb-3">
                            <label for="EmployeeCOde" class="form-label"
                            >Employee Code
                                <span class="text-danger">*</span></label
                            >
                            <input
                                type="number"
                                class="form-control"
                                placeholder="Employee Code"
                                id="EmployeeCOde"
                                aria-describedby="emailHelp"
                            />
                            <div class="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div> --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="joinDate" className="form-label">Joining Date
                                <span className="text-danger">*</span></label>
                            <input type="date" className="form-control" placeholder="Joining Date" id="joinDate"
                                aria-describedby="emailHelp" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="Password" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Role" className="form-label">Blood Group</label>
                            <select className="form-select form-control" aria-label="Default select example">
                                <option selected className="d-none">
                                    Select Blood Group
                                </option>
                                <option value="1">A+</option>
                                <option value="2">A-</option>
                                <option value="3">B+</option>
                                <option value="4">B-</option>
                                <option value="5">O+</option>
                                <option value="6">O-</option>
                                <option value="7">AB+</option>
                                <option value="8">AB-</option>
                            </select>
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Role" className="form-label">Status</label>
                            <select className="form-select form-control" aria-label="Default select example">
                                <option selected className="d-none">
                                    Select Status
                                </option>
                                <option value="1">Curent</option>
                                <option value="2">Resigned</option>
                                <option value="3">Ex-Employee</option>
                                <option value="4">Transfer</option>
                                <option value="5">Terminated</option>
                            </select>
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Role" className="form-label">Marital Status</label>
                            <select className="form-select form-control" aria-label="Default select example">
                                <option selected className="d-none">
                                    Select Marital Status
                                </option>
                                <option value="1">Married</option>
                                <option value="2">Unmarried</option>
                            </select>
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
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