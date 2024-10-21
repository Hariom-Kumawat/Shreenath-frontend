import React from "react";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../ApiHelper/RoutesLink";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { forgetPassword } from "../../store/action/userAction";

export default function ForgetPasswordForm() {
    const [mobileNumber, setMobileNumber] = React.useState("")
    // const dispatch = useDispatch()
    // const { loading, successMessage, error } = useSelector((state) => state.root)

    // const handleForgetPassword = (e) => {
    //     e.preventDefault();
    //     dispatch(forgetPassword(mobileNumber))
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
                                            to={RoutesLink?.login_route}
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
                                                        class=""
                                                    ></path>
                                                </g>
                                            </svg>
                                        </Link>
                                        <h1 className="title mb-4">Forget</h1>
                                        <form action="" /*onSubmit={handleForgetPassword} */>
                                            <div className="form-group mb-3">
                                                <label for="mobile_num" className="form-label"
                                                >Mobile Number</label
                                                >
                                                <div className="position-relative icon-input">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="mobile_num"
                                                        name="mobile"
                                                        placeholder="Enter Mobile Number"
                                                        onChange={(e) => setMobileNumber(e.target.value)}
                                                    />
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"

                                                        width="16"
                                                        height="16"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 512 512"
                                                        style={{ enableBackground: "new 0 0 16 16" }}

                                                        className=""
                                                    >
                                                        <g>
                                                            <path
                                                                d="M381.333 124.87c-.089 0-.162.048-.249.05V77.366c0-26.234-21.347-47.581-47.581-47.581H178.478c-26.234 0-47.581 21.347-47.581 47.581v47.551c-.081-.002-.149-.047-.23-.047a9.805 9.805 0 0 0-9.811 9.811v29.166a9.805 9.805 0 0 0 9.811 9.811c.081 0 .148-.044.23-.047v10.173c-.081-.002-.149-.047-.23-.047a9.805 9.805 0 0 0-9.811 9.811v29.166a9.805 9.805 0 0 0 9.811 9.811c.081 0 .148-.044.23-.047v202.155c0 26.234 21.347 47.581 47.581 47.581h155.026c26.234 0 47.581-21.347 47.581-47.581V173.608c.087.002.16.05.249.05a9.805 9.805 0 0 0 9.811-9.811v-29.166a9.807 9.807 0 0 0-9.812-9.811zm-19.872 309.764c0 15.407-12.532 27.958-27.958 27.958H178.478c-15.426 0-27.958-12.552-27.958-27.958V77.366c0-15.407 12.532-27.958 27.958-27.958h22.153V62.23a8.673 8.673 0 0 0 8.672 8.672h93.382a8.673 8.673 0 0 0 8.672-8.672V49.408h22.146c15.426 0 27.958 12.552 27.958 27.958z"
                                                                fill="#25476a"
                                                                opacity="1"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <Link
                                                to={RoutesLink?.verifyOTP_route}
                                                className="btn btn-primary py-2 w-100"
                                                role="button"
                                            >Get OTP</Link>
                                            {/* <button className="btn btn-primary py-2 w-100" disabled={loading}>
                                                {loading ? 'processing...' : 'Get OTP'}
                                            </button>
                                            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                                            {error && <p style={{ color: 'red' }}>{error}</p>} */}
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