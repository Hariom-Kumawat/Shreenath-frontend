import React from "react";

export default function DocumentsDetailsForm() {
    return (
        <>
            <div className="tab-pane fade show active" id="pills-Documents" role="tabpanel" aria-labelledby="pills-Documents-tab"
                tabindex="0">
                <div className="row">
                    <div className="col-12">
                        <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                            Documents
                        </h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Role" className="form-label">Select Documents</label>
                            <select className="form-select form-control" aria-label="Default select example">
                                <option selected className="d-none">
                                    Select Documents
                                </option>
                                <option value="1">Pan Card</option>
                                <option value="2">Aadhar Card</option>
                                <option value="3">Mark Sheet 10th</option>
                                <option value="4">Mark Sheet 12th</option>
                                <option value="5">Character Certificate</option>
                                <option value="6">Experience Letter</option>
                                <option value="7">Pay Slip</option>
                                <option value="8">Pass Book</option>
                                <option value="9">Cancelled Cheque</option>
                            </select>
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 align-self-end">
                        <div className="form-group mb-3">
                            <button className="btn btn-outline-primary px-4" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 9 8"
                                    fill="none">
                                    <path d="M4.5 0.5V7.5" stroke="#3085FE" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 4H8" stroke="#3085FE" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                        <h4 className="mb-3">Pan Card</h4>
                        <div className="img-uploader">
                            <input type="file" className="form-control d-none" id="PanCard" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                            <label for="PanCard" className="form-label rounded-4">
                                <span className="placeholder-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                        width="80" height="80" x="0" y="0"
                                        viewBox="0 0 512 512" style={{enableBackground:" new 0 0 512 512"}} 
                                        className="">
                                        <g>
                                            <path fill-rule="evenodd"
                                                d="M452.432 370.6a8 8 0 0 1-11.323 11.309L420.8 361.6v64.281a8 8 0 0 1-16 0V361.6l-20.31 20.306a8 8 0 0 1-11.308-11.306l33.959-33.968a8.013 8.013 0 0 1 11.323 0zm42.951 23.509a83.18 83.18 0 0 0-72.56-92.6 85.261 85.261 0 0 0-10.19-.623 83.187 83.187 0 1 0 82.75 93.219zm-432.451 32.9h260.431a99.16 99.16 0 0 1 111.481-139.582v-63.048l-52.683-52.693-109.288 78.782 32.581 22.839a8 8 0 1 1-9.181 13.1l-164.2-115.1L16 269.467v110.6a46.987 46.987 0 0 0 46.928 46.937zm0-382.23h324.98a46.981 46.981 0 0 1 46.932 46.931v110.038l-46.182-46.178a8.008 8.008 0 0 0-10.342-.84L259 240.75l-122.79-86.081a8.009 8.009 0 0 0-9.761.448L16 248.52V91.71a46.98 46.98 0 0 1 46.932-46.932zm427.941 278.14a98.523 98.523 0 0 0-40.031-30.4V91.71a63 63 0 0 0-62.93-62.931H62.932A63 63 0 0 0 0 91.71v288.361a63.011 63.011 0 0 0 62.931 62.94h270.1c.552.75 1.123 1.5 1.7 2.236a99.177 99.177 0 1 0 156.142-122.328zM252.242 101.627a36.672 36.672 0 1 1-36.671 36.673 36.722 36.722 0 0 1 36.671-36.671zm0 89.341a52.67 52.67 0 1 1 52.669-52.67 52.731 52.731 0 0 1-52.669 52.67z"
                                                fill="#818898" opacity="1" data-original="#818898" class=""></path>
                                        </g>
                                    </svg>
                                </span>
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