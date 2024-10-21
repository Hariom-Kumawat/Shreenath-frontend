import React from "react";

export default function AddressDetailsForm() {
    return (
        <>
            <div className="tab-pane fade active show" id="pills-Address" role="tabpanel" aria-labelledby="pills-Address-tab"
                tabindex="0">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                                    Present Address
                                </h4>
                            </div>
                            <div className="col-12">
                                <div className="form-group mb-3">
                                    <label for="Address" className="form-label">Address
                                        <span className="text-danger">*</span></label>
                                    <textarea className="form-control" id="Address" rows="3"></textarea>
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <div class="col-12 col-md-6">
                                <div class="form-group mb-3">
                                    <label for="Role" class="form-label"
                                    >Country</label
                                    >
                                    <select
                                        class="form-select form-control"
                                        aria-label="Default select example"
                                    >
                                        <option selected class="d-none">
                                            Select Country
                                        </option>
                                        <option value="1">India</option>
                                        <option value="2">America</option>
                                    </select>
                                    <div class="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div> --> */}
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="Role" className="form-label">State</label>
                                    <select className="form-select form-control" aria-label="Default select example">
                                        <option selected className="d-none">
                                            Select State
                                        </option>
                                        <option value="1">Delhi</option>
                                        <option value="2">Rajasthan</option>
                                    </select>
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="Role" className="form-label">City</label>
                                    <select className="form-select form-control" aria-label="Default select example">
                                        <option selected className="d-none">
                                            Select City
                                        </option>
                                        <option value="1">Bikaner</option>
                                        <option value="2">Jaipur</option>
                                    </select>
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="Pincode" className="form-label">Pin Code</label>
                                    <input type="number" className="form-control" id="Pincode" placeholder="Enter Pin Code" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <div className="my-4 border-bottom pb-3 d-flex align-items-center justify-content-between">
                                    <h4 className="fs-3 rajdhani-semibold">
                                        Permanent Address
                                    </h4>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="presentAdd" />
                                        <label className="form-check-label" for="presentAdd">
                                            Same as present address
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group mb-3">
                                    <label for="Address" className="form-label">Address
                                        <span className="text-danger">*</span></label>
                                    <textarea className="form-control" id="Address" rows="3"></textarea>
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <div class="col-12 col-md-6">
                                <div class="form-group mb-3">
                                    <label for="Role" class="form-label"
                                    >Country</label
                                    >
                                    <select
                                        class="form-select form-control"
                                        aria-label="Default select example"
                                    >
                                        <option selected class="d-none">
                                            Select Country
                                        </option>
                                        <option value="1">India</option>
                                        <option value="2">America</option>
                                    </select>
                                    <div class="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div> --> */}
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="Role" className="form-label">State</label>
                                    <select className="form-select form-control" aria-label="Default select example">
                                        <option selected className="d-none">
                                            Select State
                                        </option>
                                        <option value="1">Delhi</option>
                                        <option value="2">Rajasthan</option>
                                    </select>
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="Role" className="form-label">City</label>
                                    <select className="form-select form-control" aria-label="Default select example">
                                        <option selected className="d-none">
                                            Select City
                                        </option>
                                        <option value="1">Bikaner</option>
                                        <option value="2">Jaipur</option>
                                    </select>
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="Pincode" className="form-label">Pin Code</label>
                                    <input type="number" className="form-control" id="Pincode" placeholder="Enter Pin Code" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
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