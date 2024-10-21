import React from "react";

export default function AdvanceDetailForm() {
    return (
        <>
            <div className="tab-pane fade show active" id="pills-AdvanceDetail" role="tabpanel"
                aria-labelledby="pills-AdvanceDetail-tab" tabindex="0">
                <div className="row">
                    <div className="col-12">
                        <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                            Advance Details
                        </h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="UANno" className="form-label">UAN no. <span class="text-danger">*</span></label>
                            <input type="number" className="form-control" placeholder="UAN no." id="UANno"
                                aria-describedby="emailHelp" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="aadharNum" className="form-label">Aadhar Number
                                <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Aadhar Number" id="aadharNum"
                                aria-describedby="emailHelp" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="ESICNum" className="form-label">ESIC Number</label>
                            <input type="number" className="form-control" placeholder="Enter ESIC Number" id="ESICNum" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="InsuranceNum" className="form-label">Insurance Number</label>
                            <input type="number" className="form-control" placeholder="Enter Insurance Number"
                                id="InsuranceNum" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="PFnum" className="form-label">PF Number</label>
                            <input type="number" className="form-control" placeholder="PF Number" id="PFnum" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="panNum" className="form-label">PAN Number</label>
                            <input type="number" className="form-control" placeholder="PAN Number" id="panNum" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group mb-3">
                            <label for="Drive" className="form-label">Driving License No.</label>
                            <input type="text" className="form-control" id="Drive" placeholder="Driving License No." />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- <div class="row">
                    <div class="col-12">
                        <h4
                            class="fs-3 rajdhani-semibold my-4 border-bottom pb-3"
                        >
                            Weekly off(s)
                        </h4>
                        <table class="table time-table">
                            <thead>
                                <tr>
                                    <th class="text-start">#</th>
                                    <th class="text-start">Weeks</th>
                                    <th class="text-start">
                                        (September,2024- September,2024)
                                    </th>
                                    <th>
                                        <div
                                            class="d-flex align-items-center justify-content-end gap-3"
                                        >
                                            <button
                                                class="btn btn-primary px-4"
                                                type="button"
                                            >
                                                Reset
                                            </button>
                                            <button
                                                class="btn btn-outline-primary px-4"
                                                type="button"
                                            >
                                                Default Reset
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div
                                            class="d-flex align-items-center justify-content-start gap-3"
                                        >
                                            <button
                                                class="btn btn-info btn-time bg-info-subtle p-3"
                                                type="button"
                                            >
                                                Mon
                                            </button>
                                            <button
                                                class="btn btn-info btn-time bg-info-subtle p-3"
                                                type="button"
                                            >
                                                Tue
                                            </button>
                                            <button
                                                class="btn btn-info btn-time bg-info-subtle p-3"
                                                type="button"
                                            >
                                                Wed
                                            </button>
                                            <button
                                                class="btn btn-info btn-time bg-info-subtle p-3"
                                                type="button"
                                            >
                                                Thu
                                            </button>
                                            <button
                                                class="btn btn-info btn-time bg-info-subtle p-3"
                                                type="button"
                                            >
                                                Fri
                                            </button>
                                            <button
                                                class="btn btn-info btn-time bg-info-subtle p-3"
                                                type="button"
                                            >
                                                Sat
                                            </button>
                                            <button
                                                class="btn btn-info btn-time bg-info-subtle p-3"
                                                type="button"
                                            >
                                                Sun
                                            </button>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Week 1</td>
                                    <td>
                                        <div
                                            class="d-flex align-items-center justify-content-start gap-3"
                                        >
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            ></button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            ></button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            ></button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            ></button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            ></button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            ></button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                1
                                            </button>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Week 2</td>
                                    <td>
                                        <div
                                            class="d-flex align-items-center justify-content-start gap-3"
                                        >
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                2
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                3
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                4
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                5
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                6
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                7
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                8
                                            </button>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Week 3</td>
                                    <td>
                                        <div
                                            class="d-flex align-items-center justify-content-start gap-3"
                                        >
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                9
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                10
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                11
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                12
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                13
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                14
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                15
                                            </button>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Week 4</td>
                                    <td>
                                        <div
                                            class="d-flex align-items-center justify-content-start gap-3"
                                        >
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                16
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                17
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                18
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                19
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                20
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                21
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                22
                                            </button>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Week 5</td>
                                    <td>
                                        <div
                                            class="d-flex align-items-center justify-content-start gap-3"
                                        >
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                23
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                24
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                24
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                25
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                26
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                27
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                28
                                            </button>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Week 6</td>
                                    <td>
                                        <div
                                            class="d-flex align-items-center justify-content-start gap-3"
                                        >
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                29
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            >
                                                30
                                            </button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            ></button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            ></button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            ></button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            ></button>
                                            <button
                                                class="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                type="button"
                                            ></button>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> --> */}
                <div className="d-flex align-items-center justify-content-end">
                    <button className="btn btn-primary px-4" type="button">
                        Save and Continue
                    </button>
                </div>
            </div>
        </>
    )
}