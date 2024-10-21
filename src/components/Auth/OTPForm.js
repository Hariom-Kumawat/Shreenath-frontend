import React from "react";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../ApiHelper/RoutesLink";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { verifyOTP } from "../../store/action/userAction";

export default function OTPForm() {
    const [otp, setOtp] = React.useState("")
    // const dispatch = useDispatch();
    // const { loading, error, successMessage } = useSelector((state) => state.root)

    // const handleOtp = (e) => {
    //     e.preventDefault();
    //     dispatch(verifyOTP(otp))
    // }

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
                                        <Link
                                            to={RoutesLink?.forget_password_route}
                                            role="button"
                                            className="btn back-arrow bg-light mb-3 p-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"

                                                width="16"
                                                height="16"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 24 24"
                                                style={{ enableBackground: "new 0 0 24 24" }}

                                                className=""
                                            >
                                                <g>
                                                    <path
                                                        d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2z"
                                                        fill="#25476a"
                                                        opacity="1"
                                                        data-original="#25476a"
                                                        className=""
                                                    ></path>
                                                </g>
                                            </svg>
                                        </Link>
                                        <form action="" /*onSubmit={handleOtp}*/ className="text-center">
                                            <div className="form-group mb-3">
                                                <label for="OTP" className="form-label fs-3 fw-medium"
                                                >Enter OTP</label
                                                >
                                                <div className="otp-input justify-content-center">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="OTP"
                                                        name="OTP"
                                                        value={otp}
                                                        onChange={(e) => setOtp(e.target.value)}
                                                    />
                                                    {/* <input
                                                        type="text"
                                                        className="form-control"
                                                        id="OTP"
                                                        name="OTP"
                                                        value={otp}
                                                        onChange={(e) => setOtp(e.target.value)}
                                                    />
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="OTP"
                                                        name="OTP"
                                                        value={otp}
                                                        onChange={(e) => setOtp(e.target.value)}
                                                    />
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="OTP"
                                                        name="OTP"
                                                        value={otp}
                                                        onChange={(e) => setOtp(e.target.value)}
                                                    /> */}
                                                </div>
                                            </div>
                                            <Link
                                                to={RoutesLink?.newPassword_route}
                                                className="btn btn-primary px-5 py-2"
                                                role="button"
                                            >Get OTP</Link>
                                            {/* <button className="btn btn-primary px-5 py-2" disabled={loading}>
                                                {loading ? 'verifying...' : 'Get OTP'}
                                            </button>
                                            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                                            {error && <p style={{ color: "red" }}> {error}</p>} */}
                                            <div
                                                className="d-flex align-items-center justify-content-center mt-4"
                                            >
                                                <Link
                                                    to=""
                                                    className="btn btn-link text-decoration-none p-0 fw-medium text-primary fs-4"
                                                    role="button"
                                                >Resend OTP (After 0:59 sec)</Link>
                                            </div>
                                        </form>
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


