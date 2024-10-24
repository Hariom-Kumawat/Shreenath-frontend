import React from "react";
import { Link } from "react-router-dom";
import { RoutesLink } from "../ApiHelper/RoutesLink";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

export default function AddSiteForm() {
    // const barIconClicked = useSelector((state) => state.barIcon.barIconClicked)
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const customers = ["hariom", "khinvraj", "ravi", "ramesh"]
    const siteType = ["O&M", "Project"]

    const onSubmit = (data) => {
        console.log('form submitted', data);
        reset()
    }

    const handleCancelForm = () => {
       navigate(RoutesLink?.sites_route)
    }

    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content container-fluid">
                    <div className="content-head mb-5 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-start gap-4">
                            <Link to={RoutesLink?.sites_route} role="button" className="btn back-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: "new 0 0 24 24" }} className="">
                                    <g>
                                        <path d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2z" fill="#25476a" opacity="1" data-original="#25476a" class=""></path>
                                    </g>
                                </svg>
                            </Link>
                            <h1 class="mb-0">Add Site</h1>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="wizard-tabs">
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-BasicDetails-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-BasicDetails" type="button" role="tab" aria-controls="pills-BasicDetails"
                                                aria-selected="true">
                                                <h6>Step 1</h6>
                                                <h5>Site Details</h5>
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

                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="form-group mb-3">
                                                    <label for="firstName" className="form-label">Site Name
                                                        <span className="text-danger">*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Site Name"
                                                        {...register('siteName', { required: 'sitename is required' })}
                                                        id="firstName"
                                                        aria-describedby="emailHelp" />

                                                    {errors.siteName && <div className="form-text text-danger ">
                                                        {errors.siteName.message}
                                                    </div>}
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="form-group mb-3">
                                                    <label for="Role" className="form-label">Customer</label>
                                                    <select className="form-select form-control" aria-label="Default select example"
                                                        {...register('customer', { required: 'customer is required' })}
                                                    >
                                                        <option value='' className="">Select Customer </option>
                                                        {customers.map((custm, index) =>
                                                            <option key={index} value={custm}>{custm}</option>
                                                        )}

                                                    </select>
                                                    {errors.customer && <div className="form-text text-danger ">
                                                        {errors.customer.message}
                                                    </div>}
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="form-group mb-3">
                                                    <label for="Role" className="form-label">Site Type</label>
                                                    <select className="form-select form-control" aria-label="Default select example"
                                                        {...register('siteType', { required: 'sitetype is required' })}
                                                    >
                                                        <option value='' className="d-none">
                                                            Select Site Type
                                                        </option>
                                                        {siteType.map((sit, index) =>
                                                            <option key={index} value={sit}>{sit}</option>
                                                        )}

                                                    </select>
                                                    {errors.siteType && <div className="form-text text-danger ">
                                                        {errors.siteType.message}
                                                    </div>}
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="form-group mb-3 ">
                                                    <label for="Address" className="form-label">Site Address</label>
                                                    <textarea className="form-control " id="Address" rows="3"
                                                        {...register('address', { required: 'address is required' })}
                                                    ></textarea>

                                                    {errors.address && <div className="form-text text-danger ">
                                                        {errors.address.message}
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-end gap-4">
                                            <button onClick={handleCancelForm} className="btn btn-secondary px-4" type="button">
                                                Cancel
                                            </button>
                                            <button  className="btn btn-primary px-4" type="submit">
                                                Create
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