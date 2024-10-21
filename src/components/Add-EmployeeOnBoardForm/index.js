import React from "react";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../ApiHelper/RoutesLink";
import BasicDetailsForm from "./BasicDetailsForm";
import AdvanceDetailForm from "./AdvanceDetailsForm";
import PermissionForm from "./PermissionsForm";
import AddressDetailsForm from "./AddressDetails";
import BankDetailsForm from "./BankDetails";
import PreviousWorkDetailsForm from "./PreviousWorkDetailsForm";
import DocumentsDetailsForm from "./DocumentsDetails";
import SalaryDetailsForm from "./SalaryDetails";
import FamilyDetailsForm from "./FamilyDetails";

export default function AddEmployeeOnBoardForm() {
    const [action, setAction] = React.useState('basic')

    const toggleAction = (action) => {
        setAction(action)
    }
    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content container-fluid">
                    <div className="content-head mb-5 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-start gap-4">
                            <Link to={RoutesLink?.employeeOnBoard_route} role="button" className="btn back-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                    width="24" height="24" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: "new 0 0 24 24" }}
                                    className="">
                                    <g>
                                        <path
                                            d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2z"
                                            fill="#25476a" opacity="1" data-original="#25476a" className=""></path>
                                    </g>
                                </svg>
                            </Link>
                            <h1 class="mb-0">Add Employee Onboard</h1>
                        </div>
                    </div>

                    <form action="">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="wizard-tabs">
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => toggleAction('basic')} className={action === 'basic' ? "nav-link active" : "nav-link"} id="pills-BasicDetails-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-BasicDetails" type="button" role="tab" aria-controls="pills-BasicDetails"
                                                aria-selected="true">
                                                <h6>Step 1</h6>
                                                <h5>Basic Details</h5>
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <div className="border-top-item"></div>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => setAction('permission')} className={action === 'permission' ? "nav-link active" : "nav-link"} id="pills-Permission-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-Permission" type="button" role="tab" aria-controls="pills-Permission"
                                                aria-selected="false">
                                                <h6>Step 2</h6>
                                                <h5>Permissions</h5>
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <div className="border-top-item"></div>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => toggleAction('advance')} className={action === 'advance' ? "nav-link active" : "nav-link"} id="pills-AdvanceDetail-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-AdvanceDetail" type="button" role="tab"
                                                aria-controls="pills-AdvanceDetail" aria-selected="false">
                                                <h6>Step 3</h6>
                                                <h5>Advance Detail</h5>
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <div className="border-top-item"></div>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => toggleAction('address')} className={action === 'address' ? "nav-link active" : "nav-link"} id="pills-Address-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-Address" type="button" role="tab" aria-controls="pills-Address"
                                                aria-selected="false">
                                                <h6>Step 4</h6>
                                                <h5>Address</h5>
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <div className="border-top-item"></div>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => setAction('bank')} className={action === 'bank' ? "nav-link active" : "nav-link"} id="pills-BankDetails-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-BankDetails" type="button" role="tab" aria-controls="pills-BankDetails"
                                                aria-selected="false">
                                                <h6>Step 5</h6>
                                                <h5>Bank Details</h5>
                                            </button>
                                        </li>

                                        <li className="nav-item">
                                            <div className="border-top-item"></div>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => setAction('previous')} className={action === 'previous' ? "nav-link active" : "nav-link"} id="pills-PreviousWork-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-PreviousWork" type="button" role="tab" aria-controls="pills-PreviousWork"
                                                aria-selected="false">
                                                <h6>Step 6</h6>
                                                <h5>Previous Work</h5>
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <div className="border-top-item"></div>
                                        </li>


                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => setAction('family')} className={action === 'family' ? "nav-link active" : "nav-link"} id="pills-familyDetail-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-familyDetail" type="button" role="tab" aria-controls="pills-familyDetail"
                                                aria-selected="false">
                                                <h6>Step 7</h6>
                                                <h5>family Details</h5>
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <div className="border-top-item"></div>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => setAction('document')} className={action === 'document' ? "nav-link active" : "nav-link"} id="pills-Documents-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-Documents" type="button" role="tab" aria-controls="pills-Documents"
                                                aria-selected="false">
                                                <h6>Step 8</h6>
                                                <h5>Documents</h5>
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <div className="border-top-item"></div>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => setAction('salary')} className={action === 'salary' ? "nav-link active" : "nav-link"} id="pills-salaryDetails-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-salaryDetails" type="button" role="tab"
                                                aria-controls="pills-salaryDetails" aria-selected="false">
                                                <h6>Step 9</h6>
                                                <h5>Salary Detail</h5>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="tab-content" id="pills-tabContent">
                                    {action === 'basic' && <BasicDetailsForm />}
                                    {action === 'permission' && <PermissionForm />}
                                    {action === 'advance' && <AdvanceDetailForm />}
                                    {action === 'address' && <AddressDetailsForm />}
                                    {action === 'bank' && <BankDetailsForm />}
                                    {action === 'previous' && <PreviousWorkDetailsForm />}
                                    {action === 'family' && <FamilyDetailsForm />}
                                    {action === 'document' && <DocumentsDetailsForm />}
                                    {action === 'salary' && <SalaryDetailsForm />}

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}