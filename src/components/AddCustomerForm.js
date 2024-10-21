import React from "react";
import { Link } from "react-router-dom";
import { RoutesLink } from "../ApiHelper/RoutesLink";
// import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AddCustomerForm() {
    // const barIconClicked = useSelector((state) => state.barIcon.barIconClicked)
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate();

const handleCancelForm = () => {
    navigate(RoutesLink?.customers_route)
}

    const onSubmit = (data) => {
        console.log('form submitted', data);
        reset()
    }
    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content container-fluid">
                    <div className="content-head mb-5 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-start gap-4">
                            <Link to={RoutesLink?.customers_route} role="button" class="btn back-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                    width="24" height="24" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: "new 0 0 24 24" }}
                                    className="">
                                    <g>
                                        <path
                                            d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2z"
                                            fill="#25476a" opacity="1" data-original="#25476a" class=""></path>
                                    </g>
                                </svg>
                            </Link>
                            <h1 className="mb-0">Add New Customer</h1>
                        </div>
                    </div>

                    <form action="" onSubmit={handleSubmit(onSubmit)} >
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
                                        {/* <!-- <li class="nav-item">
                                            <div class="border-top-item"></div>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button
                                                class="nav-link"
                                                id="pills-PermissionDetail-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-PermissionDetail"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-PermissionDetail"
                                                aria-selected="false"
                                            >
                                                <h6>Step 2</h6>
                                                <h5>Permission Detail</h5>
                                            </button>
                                        </li> --> */}
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
                                                    <label for="shiftName" className="form-label">Firm Name
                                                        <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Shift Name" id="shiftName"
                                                        aria-describedby="emailHelp"
                                                        // required
                                                        {...register('firmName', { required: 'firm name is required' })} />
                                                    {errors.firmName && <div className="form-text text-danger ">
                                                        {errors.firmName.message}
                                                    </div>}
                                                </div>
                                            </div>


                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="form-group mb-3">
                                                    <label for="EndTime" className="form-label">Email</label>
                                                    <input type="email" className="form-control" id="EndTime" placeholder="Enter Email"
                                                        {...register('email', { required: 'e-mail is required' })}
                                                    />
                                                    {errors.email && <div className="form-text text-danger ">
                                                        {errors.email.message}
                                                    </div>}
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="form-group mb-3">
                                                    <label for="check-Out" className="form-label">Contact Number</label>
                                                    <input type="number" className="form-control" placeholder="Enter Contact No." id="check-Out"
                                                        {...register("contactNumber", { required: 'contact-number is required' })}
                                                    />
                                                    {errors.contactNumber && <div className="form-text text-danger ">
                                                        {errors.contactNumber.message}
                                                    </div>}
                                                </div>
                                            </div>


                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="form-group mb-3">
                                                    <label for="Address" className="form-label">Address
                                                        <span className="text-danger">*</span></label>
                                                    <textarea className="form-control" id="Address" rows="3"
                                                        {...register('address', { required: 'address is required' })}></textarea>
                                                    {errors.address && <div className="form-text text-danger ">
                                                        {errors.address.message}
                                                    </div>}
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="form-group mb-3">
                                                    <label for="Early-count" className="form-label">GST Number</label>
                                                    <input type="number" className="form-control" placeholder="Enter GST Number" id="Early-count"
                                                        {...register('gst', { required: 'GST-number is required' })} />
                                                    {errors.gst && <div className="form-text text-danger ">
                                                        {errors.gst.message}
                                                    </div>}
                                                </div>
                                            </div>

                                        </div>
                                        <div className="d-flex align-items-center justify-content-end gap-4">
                                            <button onClick={handleCancelForm} className="btn btn-secondary px-5" type="button">
                                                Cancel
                                            </button>
                                            <button className="btn btn-primary px-5" type="submit">
                                                Create
                                            </button>
                                        </div>
                                    </div>
                                    {/* <!-- <div
                                        class="tab-pane fade"
                                        id="pills-PermissionDetail"
                                        role="tabpanel"
                                        aria-labelledby="pills-PermissionDetail-tab"
                                        tabindex="0"
                                    >
                                        <div class="row">
                                            <div class="col-12">
                                                <h4
                                                    class="fs-3 rajdhani-semibold my-4 border-bottom pb-3"
                                                >
                                                    Permission Details
                                                </h4>
                                            </div>
                                            <div class="row">
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
                                                        >isActive</label
                                                        >
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <div class="form-check form-switch text-start my-3">
                                                        <input
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switch2"
                                                        />
                                                        <label
                                                            class="form-check-label form-label mb-0"
                                                            for="switch2"
                                                        >isDefault</label
                                                        >
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <div class="form-check form-switch text-start my-3">
                                                        <input
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switch3"
                                                        />
                                                        <label
                                                            class="form-check-label form-label mb-0"
                                                            for="switch3"
                                                        >isLateConfigApplied</label
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
                                                        >isEarlyCheckout</label
                                                        >
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <div class="form-check form-switch text-start my-3">
                                                        <input
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switch5"
                                                        />
                                                        <label
                                                            class="form-check-label form-label mb-0"
                                                            for="switch5"
                                                        >Lock Attendance</label
                                                        >
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <div class="form-check form-switch text-start my-3">
                                                        <input
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switch6"
                                                        />
                                                        <label
                                                            class="form-check-label form-label mb-0"
                                                            for="switch6"
                                                        >absentAfterLateCheckIn</label
                                                        >
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <div class="form-check form-switch text-start my-3">
                                                        <input
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switch7"
                                                        />
                                                        <label
                                                            class="form-check-label form-label mb-0"
                                                            for="switch7"
                                                        >absentAfterEarlyCheckOut
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <div class="form-check form-switch text-start my-3">
                                                        <input
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switch8"
                                                        />
                                                        <label
                                                            class="form-check-label form-label mb-0"
                                                            for="switch8"
                                                        >Freeze Early Checkout</label
                                                        >
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <div class="form-check form-switch text-start my-3">
                                                        <input
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switch9"
                                                        />
                                                        <label
                                                            class="form-check-label form-label mb-0"
                                                            for="switch9"
                                                        >Freeze Late CheckIn</label
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex align-items-cente justify-content-end gap-3 mt-4 mb-3"
                                        >
                                            <button class="btn btn-secondary px-5" type="button">
                                                Cancel
                                            </button>
                                            <button type="button" class="btn btn-primary px-5">
                                                Add Shit & Time Config
                                            </button>
                                        </div>
                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}