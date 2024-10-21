import React from "react";

export default function BankDetailsForm() {
    return (
        <>
            <div className="tab-pane fade show active" id="pills-BankDetails" role="tabpanel"
                aria-labelledby="pills-BankDetails-tab" tabindex="0">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                                    Bank Details 1
                                </h4>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="AccHolder" className="form-label">Account Holder Name</label>
                                    <input type="number" className="form-control" id="AccHolder"
                                        placeholder="Enter Account Holder Name" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="AccNum" className="form-label">Account Number</label>
                                    <input type="number" className="form-control" id="AccNum"
                                        placeholder="Enter Account Number" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="IFSC" className="form-label">IFSC/RTGS Code</label>
                                    <input type="number" className="form-control" id="IFSC" placeholder="Enter IFSC/RTGS Code" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="bankName" className="form-label">Bank Name</label>
                                    <input type="number" className="form-control" id="bankName" placeholder="Enter Bank Name" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group mb-3">
                                    <label for="branchAddress" className="form-label">Branch Address
                                        <span className="text-danger">*</span></label>
                                    <textarea className="form-control" id="branchAddress" placeholder="Enter Branch Address"
                                        rows="3"></textarea>
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
                                <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                                    Bank Details 2
                                </h4>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="AccHolder" className="form-label">Account Holder Name</label>
                                    <input type="number" className="form-control" id="AccHolder"
                                        placeholder="Enter Account Holder Name" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="AccNum" className="form-label">Account Number</label>
                                    <input type="number" className="form-control" id="AccNum"
                                        placeholder="Enter Account Number" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="IFSC" className="form-label">IFSC/RTGS Code</label>
                                    <input type="number" className="form-control" id="IFSC" placeholder="Enter IFSC/RTGS Code" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="bankName" className="form-label">Bank Name</label>
                                    <input type="number" className="form-control" id="bankName" placeholder="Enter Bank Name" />
                                    <div className="form-text text-danger d-none">
                                        This field is Required
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group mb-3">
                                    <label for="branchAddress" className="form-label">Branch Address
                                        <span className="text-danger">*</span></label>
                                    <textarea className="form-control" id="branchAddress" placeholder="Enter Branch Address"
                                        rows="3"></textarea>
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