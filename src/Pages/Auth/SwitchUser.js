import React from "react";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../ApiHelper/RoutesLink";

export default function SwitchUser() {
    return (
        <>
            <div className="login-content bg-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-8 px-0">
                            <div className="login-img-card">
                                <img src="../assets/img/solar-bg.avif" alt="login-solar" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 px-0">
                            <div className="d-flex align-items-center justify-content-center h-100">
                                {/* <!-- login card start here... --> */}
                                <div className="card login-card shadow-none">
                                    <div className="card-body">
                                        <h1 className="title">Switch User</h1>
                                        <p className="fs-5 mb-5">Select Your Role</p>
                                        <div className="row align-items-stretch justify-content-center">
                                            <div className="col-6 pe-4">
                                                <Link to={RoutesLink?.user_dashboard} className="user-role btn btn-outline-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                        width="40" height="40" x="0" y="0" viewBox="0 0 100 100"
                                                        style={{enableBackground: "new 0 0 512 512"}} className="">
                                                        <g>
                                                            <path
                                                                d="M67.281 61.75a46.618 46.618 0 0 1-9.106 18.994c-1.282 1.602-3.873.832-4.127-1.203l-1.08-8.628 2.158-4.314a1.122 1.122 0 0 0-1.003-1.623h-8.246c-.834 0-1.376.877-1.003 1.623l2.157 4.314-1.078 8.628c-.254 2.035-2.845 2.804-4.127 1.203A46.618 46.618 0 0 1 32.72 61.75c-.261-1.174-1.395-1.936-2.589-1.784C13.823 62.043 2.5 68.597 2.5 88.726a5.937 5.937 0 0 0 5.937 5.937h83.126a5.937 5.937 0 0 0 5.937-5.937c0-20.129-11.323-26.683-27.63-28.76-1.194-.152-2.327.61-2.589 1.784zM50 5.337c-11.864 0-21.48 9.617-21.48 21.48 0 19.023 9.616 32.221 21.48 32.221s21.48-13.198 21.48-32.22c0-11.864-9.616-21.481-21.48-21.481z"
                                                                fill="currentColor" opacity="1" data-original="#000000" className=""></path>
                                                        </g>
                                                    </svg>
                                                    User
                                                </Link>
                                            </div>
                                            <div className="col-6 ps-4">
                                                <Link to={RoutesLink?.dashboard_route} className="user-role btn btn-outline-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" 
                                                        width="40" height="40" x="0" y="0" viewBox="0 0 100 100"
                                                        style={{enableBackground: "new 0 0 512 512"}} className="">
                                                        <g>
                                                            <path
                                                                d="M67.281 61.75a46.618 46.618 0 0 1-9.106 18.994c-1.282 1.602-3.873.832-4.127-1.203l-1.08-8.628 2.158-4.314a1.122 1.122 0 0 0-1.003-1.623h-8.246c-.834 0-1.376.877-1.003 1.623l2.157 4.314-1.078 8.628c-.254 2.035-2.845 2.804-4.127 1.203A46.618 46.618 0 0 1 32.72 61.75c-.261-1.174-1.395-1.936-2.589-1.784C13.823 62.043 2.5 68.597 2.5 88.726a5.937 5.937 0 0 0 5.937 5.937h83.126a5.937 5.937 0 0 0 5.937-5.937c0-20.129-11.323-26.683-27.63-28.76-1.194-.152-2.327.61-2.589 1.784zM50 5.337c-11.864 0-21.48 9.617-21.48 21.48 0 19.023 9.616 32.221 21.48 32.221s21.48-13.198 21.48-32.22c0-11.864-9.616-21.481-21.48-21.481z"
                                                                fill="currentColor" opacity="1" data-original="#000000" className=""></path>
                                                        </g>
                                                    </svg>
                                                    Admin
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- login card end here... --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}