import React from "react";

export default function SalaryDetailsForm() {
    return (
        <>
            <div className="tab-pane fade show active" id="pills-salaryDetails" role="tabpanel"
                aria-labelledby="pills-salaryDetails-tab" tabindex="0">
                <div className="row">
                    <div className="col-12">
                        <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                            Salary Details
                        </h4>
                    </div>
                    <div className="col-12 col-lg-6">
                        <ul className="row list-unstyled">
                            <li className="col-12 col-lg-6">
                                <p>Name:</p>
                            </li>
                            <li className="col-12 col-lg-6">
                                <p>Aaditya Sharma</p>
                            </li>
                            <li className="col-12 col-lg-6">
                                <p>Department:</p>
                            </li>
                            <li className="col-12 col-lg-6">
                                <p>N/A</p>
                            </li>
                            <li className="col-12 col-lg-6">
                                <p>CTC (Monthly):</p>
                            </li>
                            <li className="col-12 col-lg-6">
                                <p>INR ₹22,948/-</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-6">
                        <ul className="row list-unstyled">
                            <li className="col-12 col-lg-6">
                                <p>Designation:</p>
                            </li>
                            <li className="col-12 col-lg-6">
                                <p>N/A</p>
                            </li>
                            <li className="col-12 col-lg-6">
                                <p>Code:</p>
                            </li>
                            <li className="col-12 col-lg-6">
                                <p>S003</p>
                            </li>
                            <li className="col-12 col-lg-6">
                                <p>Calculated CTC:</p>
                            </li>
                            <li className="col-12 col-lg-6">
                                <p>INR ₹22,948/-</p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12">
                        <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                            Salary Structure
                        </h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="form-group mb-3">
                            <label for="Applicable" className="form-label">Applicable From
                                <span className="text-danger">*</span></label>
                            <input type="date" className="form-control" id="Applicable" aria-describedby="emailHelp" />
                            <div className="form-text text-danger d-none">
                                This field is Required
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-9 align-self-end">
                        <div className="form-group mb-3 text-end">
                            <button className="btn btn-outline-primary px-4 py-3" type="button" data-bs-target="#detailsModal"
                                data-bs-toggle="modal">
                                Add More
                            </button>
                        </div>
                    </div>

                    <div className="col-12 mb-5">
                        <table className="table">
                            <thead>
                                <th className="text-start">Earning</th>
                                <th>Type</th>
                                <th>Max Cap</th>
                                <th>Monthly</th>
                                <th>Annually</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-start">
                                        <p className="mb-0">BASIC SALARY</p>
                                    </td>

                                    <td>
                                        <div className="form-group mb-0">
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected className="d-none">
                                                    Select Type
                                                </option>
                                                <option value="1">Value</option>
                                                <option value="2">Percentage</option>
                                            </select>
                                            <div className="form-text text-danger d-none">
                                                This field is Required
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-start">
                                        <input type="text" className="form-control" aria-describedby="emailHelp"
                                            placeholder="Max Amount" />
                                    </td>
                                    <td>
                                        <p>₹ 15,000 /-</p>
                                    </td>
                                    <td>
                                        <p>₹ 1,80,000 /-</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        <p className="mb-0">HRA</p>
                                    </td>
                                    <td>
                                        <div className="form-group mb-0">
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected className="d-none">
                                                    Select Type
                                                </option>
                                                <option value="1">Value</option>
                                                <option value="2">Percentage</option>
                                            </select>
                                            <div className="form-text text-danger d-none">
                                                This field is Required
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-start">
                                        <input type="text" className="form-control" aria-describedby="emailHelp"
                                            placeholder="Max Amount" />
                                    </td>
                                    <td>
                                        <p>₹ 6,000 /-</p>
                                    </td>
                                    <td>
                                        <p>₹ 1,80,000 /-</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        <p className="mb-0">Other</p>
                                    </td>
                                    <td>
                                        <div className="form-group mb-0">
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected className="d-none">
                                                    Select Type
                                                </option>
                                                <option value="1">Value</option>
                                                <option value="2">Percentage</option>
                                            </select>
                                            <div className="form-text text-danger d-none">
                                                This field is Required
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-start">
                                        <input type="text" className="form-control" aria-describedby="emailHelp"
                                            placeholder="Max Amount" />
                                    </td>
                                    <td>
                                        <p>₹ 6,000 /-</p>
                                    </td>
                                    <td>
                                        <p>₹ 1,80,000 /-</p>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <th>Total</th>
                                <th colspan="1"></th>
                                <th>
                                    <p className="fw-bold mb-0">₹21,000/-</p>
                                </th>
                                <th>
                                    <p className="fw-bold mb-0">₹1,80,000/-</p>
                                </th>
                            </tfoot>
                        </table>
                    </div>

                    <div className="col-12 mb-5">
                        <table className="table">
                            <thead>
                                <th className="text-start">Deduction</th>
                                <th>Type</th>
                                <th>Max Cap</th>
                                <th>References</th>
                                <th>Value</th>
                                <th>Annually</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-start">
                                        <p className="mb-0">PF</p>
                                    </td>
                                    <td>
                                        <div className="form-group mb-0">
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected className="d-none">
                                                    Select Type
                                                </option>
                                                <option value="1">Value</option>
                                                <option value="2">Percentage</option>
                                            </select>
                                            <div className="form-text text-danger d-none">
                                                This field is Required
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-start">
                                        <input type="text" className="form-control" placeholder="Max Amount" />
                                    </td>
                                    <td>
                                        <div className="form-group d-flex align-items-center justify-content-center gap-2 mb-0">
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected className="d-none">
                                                    Select here
                                                </option>
                                                <option value="1">Basic salary</option>
                                                <option value="2">HRA</option>
                                            </select>
                                            <input type="number" className="form-control" placeholder="Enter Percentage"
                                                id="netSalary" aria-describedby="emailHelp" />
                                            <div className="form-text text-danger d-none">
                                                This field is Required
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>₹ 1,560 /-</p>
                                    </td>
                                    <td>
                                        <p>₹ 18,720 /-</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        <p className="mb-0">ESIC</p>
                                    </td>
                                    <td>
                                        <div className="form-group mb-0">
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected className="d-none">
                                                    Select Type
                                                </option>
                                                <option value="1">Value</option>
                                                <option value="2">Percentage</option>
                                            </select>
                                            <div className="form-text text-danger d-none">
                                                This field is Required
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-start">
                                        <input type="text" className="form-control" placeholder="Max Amount" />
                                    </td>
                                    <td>
                                        <div className="form-group d-flex align-items-center justify-content-center gap-2 mb-0">
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected className="d-none">
                                                    Select here
                                                </option>
                                                <option value="1">Basic salary</option>
                                                <option value="2">HRA</option>
                                            </select>
                                            <input type="number" className="form-control" placeholder="Enter Percentage"
                                                id="netSalary" aria-describedby="emailHelp" />
                                            <div className="form-text text-danger d-none">
                                                This field is Required
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>₹ 155 /-</p>
                                    </td>
                                    <td>
                                        <p>₹ 1,864 /-</p>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <th>Total</th>
                                <th colspan="2"></th>
                                <th>
                                    <p className="fw-bold mb-0">₹1,715.36/-</p>
                                </th>
                                <th>
                                    <p className="fw-bold mb-0">₹20,584.00/-</p>
                                </th>
                            </tfoot>
                        </table>
                    </div>

                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <th></th>
                                <th>A-B(Monthly)</th>
                                <th></th>
                                <th>A-B(Annually)</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Net Pay(Monthly)</td>
                                    <td>
                                        <p className="fw-bold">₹19,000/-</p>
                                    </td>
                                    <td>Net Pay(Annually)</td>
                                    <td>
                                        <p className="fw-bold">₹2,28,000/-</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="d-flex align-items-cente justify-content-end gap-3 mt-4 mb-3">
                    <button className="btn btn-secondary px-5" type="button">
                        Cancel
                    </button>
                    <button type="button" className="btn btn-primary px-5">
                        Add Employee Onboard
                    </button>
                </div>
            </div>
        </>
    )
}