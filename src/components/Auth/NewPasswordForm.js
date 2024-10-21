import React from "react";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../ApiHelper/RoutesLink";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { setNewPassword } from "../../store/action/userAction";

export default function NewPasswordForm() {
    const [password, setPassword] = React.useState('')
    // const dispatch = useDispatch();
    // const { successMessage, error, loading } = useSelector((state) => state.root)


    // const handleNewPassword = (e) => {
    //     e.preventDefault()
    //     dispatch(setNewPassword(password))
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
                                            to={RoutesLink?.verifyOTP_route}
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
                                        <h1 className="title">New Password</h1>
                                        <form action="" /*onSubmit={handleNewPassword}*/>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group mb-3">
                                                        <label for="password" className="form-label"
                                                        >New Password</label
                                                        >
                                                        <div className="position-relative icon-input">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                version="1.1"

                                                                width="16"
                                                                height="16"
                                                                x="0"
                                                                y="0"
                                                                viewBox="0 0 32 32"
                                                                style={{ enableBackground: " new 0 0 16 16" }}

                                                                className=""
                                                            >
                                                                <g>
                                                                    <g data-name="12-Lock">
                                                                        <path
                                                                            d="M23 12V8.71A6.72 6.72 0 0 0 16.29 2h-.58A6.72 6.72 0 0 0 9 8.71V12a3 3 0 0 0-3 3v9.3a5.71 5.71 0 0 0 5.7 5.7h8.6a5.71 5.71 0 0 0 5.7-5.7V15a3 3 0 0 0-3-3ZM11 8.71A4.71 4.71 0 0 1 15.71 4h.58A4.71 4.71 0 0 1 21 8.71V12H11ZM24 24.3a3.7 3.7 0 0 1-3.7 3.7h-8.6A3.7 3.7 0 0 1 8 24.3V15a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
                                                                            fill="#25476a"
                                                                            opacity="1"
                                                                            data-original="#000000"
                                                                            className=""
                                                                        ></path>
                                                                        <path
                                                                            d="M17 20.72V24a1 1 0 0 1-2 0v-3.28a2 2 0 1 1 2 0Z"
                                                                            fill="#25476a"
                                                                            opacity="1"
                                                                            data-original="#000000"
                                                                            className=""
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                className="form-control"
                                                                id="login_password"
                                                                placeholder="New Password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                            <div className="password-show">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    version="1.1"

                                                                    width="16"
                                                                    height="16"
                                                                    x="0"
                                                                    y="0"
                                                                    viewBox="0 0 511.999 511.999"
                                                                    style={{ enableBackground: "new 0 0 16 16" }}

                                                                    className="d-none"
                                                                >
                                                                    <g>
                                                                        <path
                                                                            d="M508.745 246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818 239.784 3.249 246.035a16.896 16.896 0 0 0 0 19.923c4.569 6.257 113.557 153.206 252.748 153.206s248.174-146.95 252.748-153.201a16.875 16.875 0 0 0 0-19.922zM255.997 385.406c-102.529 0-191.33-97.533-217.617-129.418 26.253-31.913 114.868-129.395 217.617-129.395 102.524 0 191.319 97.516 217.617 129.418-26.253 31.912-114.868 129.395-217.617 129.395z"
                                                                            fill="#25476a"
                                                                            opacity="1"
                                                                            data-original="#000000"
                                                                            className=""
                                                                        ></path>
                                                                        <path
                                                                            d="M255.997 154.725c-55.842 0-101.275 45.433-101.275 101.275s45.433 101.275 101.275 101.275S357.272 311.842 357.272 256s-45.433-101.275-101.275-101.275zm0 168.791c-37.23 0-67.516-30.287-67.516-67.516s30.287-67.516 67.516-67.516 67.516 30.287 67.516 67.516-30.286 67.516-67.516 67.516z"
                                                                            fill="#25476a"
                                                                            opacity="1"
                                                                            data-original="#000000"
                                                                            className=""
                                                                        ></path>
                                                                    </g>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    version="1.1"

                                                                    width="16"
                                                                    height="16"
                                                                    x="0"
                                                                    y="0"
                                                                    viewBox="0 0 128 128"
                                                                    style={{ enableBackground: " new 0 0 16 16" }}

                                                                    className=""
                                                                >
                                                                    <g>
                                                                        <path
                                                                            d="m79.891 65.078 7.27-7.27C87.69 59.787 88 61.856 88 64c0 13.234-10.766 24-24 24-2.144 0-4.213-.31-6.192-.839l7.27-7.27a15.929 15.929 0 0 0 14.813-14.813zm47.605-3.021c-.492-.885-7.47-13.112-21.11-23.474l-5.821 5.821c9.946 7.313 16.248 15.842 18.729 19.602C114.553 71.225 95.955 96 64 96c-4.792 0-9.248-.613-13.441-1.591l-6.573 6.573C50.029 102.835 56.671 104 64 104c41.873 0 62.633-36.504 63.496-38.057a3.997 3.997 0 0 0 0-3.886zm-16.668-39.229-88 88C22.047 111.609 21.023 112 20 112s-2.047-.391-2.828-1.172a3.997 3.997 0 0 1 0-5.656l11.196-11.196C10.268 83.049 1.071 66.964.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24c10.827 0 20.205 2.47 28.222 6.122l12.95-12.95c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656zM34.333 88.011 44.46 77.884C41.663 73.96 40 69.175 40 64c0-13.234 10.766-24 24-24 5.175 0 9.96 1.663 13.884 4.459l8.189-8.189C79.603 33.679 72.251 32 64 32 32.045 32 13.447 56.775 8.707 63.994c3.01 4.562 11.662 16.11 25.626 24.017zm15.934-15.935 21.809-21.809C69.697 48.862 66.958 48 64 48c-8.822 0-16 7.178-16 16 0 2.958.862 5.697 2.267 8.076z"
                                                                            fill="#25476a"
                                                                            opacity="1"
                                                                            data-original="#000000"
                                                                            className=""
                                                                        ></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group mb-3">
                                                        <label for="correctpass" className="form-label"
                                                        >Confirm Password</label
                                                        >
                                                        <div className="position-relative icon-input">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                version="1.1"

                                                                width="16"
                                                                height="16"
                                                                x="0"
                                                                y="0"
                                                                viewBox="0 0 32 32"
                                                                style={{ enableBackground: "new 0 0 16 16" }}

                                                                class=""
                                                            >
                                                                <g>
                                                                    <g data-name="12-Lock">
                                                                        <path
                                                                            d="M23 12V8.71A6.72 6.72 0 0 0 16.29 2h-.58A6.72 6.72 0 0 0 9 8.71V12a3 3 0 0 0-3 3v9.3a5.71 5.71 0 0 0 5.7 5.7h8.6a5.71 5.71 0 0 0 5.7-5.7V15a3 3 0 0 0-3-3ZM11 8.71A4.71 4.71 0 0 1 15.71 4h.58A4.71 4.71 0 0 1 21 8.71V12H11ZM24 24.3a3.7 3.7 0 0 1-3.7 3.7h-8.6A3.7 3.7 0 0 1 8 24.3V15a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
                                                                            fill="#25476a"
                                                                            opacity="1"
                                                                            data-original="#000000"
                                                                            className=""
                                                                        ></path>
                                                                        <path
                                                                            d="M17 20.72V24a1 1 0 0 1-2 0v-3.28a2 2 0 1 1 2 0Z"
                                                                            fill="#25476a"
                                                                            opacity="1"
                                                                            data-original="#000000"
                                                                            className=""
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                placeholder="Confirm Password"
                                                                className="form-control"
                                                                id="correctpass"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                            <div className="password-show">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    version="1.1"

                                                                    width="16"
                                                                    height="16"
                                                                    x="0"
                                                                    y="0"
                                                                    viewBox="0 0 511.999 511.999"
                                                                    style={{ enableBackground: " new 0 0 16 16" }}

                                                                    className="d-none"
                                                                >
                                                                    <g>
                                                                        <path
                                                                            d="M508.745 246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818 239.784 3.249 246.035a16.896 16.896 0 0 0 0 19.923c4.569 6.257 113.557 153.206 252.748 153.206s248.174-146.95 252.748-153.201a16.875 16.875 0 0 0 0-19.922zM255.997 385.406c-102.529 0-191.33-97.533-217.617-129.418 26.253-31.913 114.868-129.395 217.617-129.395 102.524 0 191.319 97.516 217.617 129.418-26.253 31.912-114.868 129.395-217.617 129.395z"
                                                                            fill="#25476a"
                                                                            opacity="1"
                                                                            data-original="#000000"
                                                                            className=""
                                                                        ></path>
                                                                        <path
                                                                            d="M255.997 154.725c-55.842 0-101.275 45.433-101.275 101.275s45.433 101.275 101.275 101.275S357.272 311.842 357.272 256s-45.433-101.275-101.275-101.275zm0 168.791c-37.23 0-67.516-30.287-67.516-67.516s30.287-67.516 67.516-67.516 67.516 30.287 67.516 67.516-30.286 67.516-67.516 67.516z"
                                                                            fill="#25476a"
                                                                            opacity="1"
                                                                            data-original="#000000"
                                                                            className=""
                                                                        ></path>
                                                                    </g>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    version="1.1"

                                                                    width="16"
                                                                    height="16"
                                                                    x="0"
                                                                    y="0"
                                                                    viewBox="0 0 128 128"
                                                                    style={{ enableBackground: "new 0 0 16 16" }}

                                                                    className=""
                                                                >
                                                                    <g>
                                                                        <path
                                                                            d="m79.891 65.078 7.27-7.27C87.69 59.787 88 61.856 88 64c0 13.234-10.766 24-24 24-2.144 0-4.213-.31-6.192-.839l7.27-7.27a15.929 15.929 0 0 0 14.813-14.813zm47.605-3.021c-.492-.885-7.47-13.112-21.11-23.474l-5.821 5.821c9.946 7.313 16.248 15.842 18.729 19.602C114.553 71.225 95.955 96 64 96c-4.792 0-9.248-.613-13.441-1.591l-6.573 6.573C50.029 102.835 56.671 104 64 104c41.873 0 62.633-36.504 63.496-38.057a3.997 3.997 0 0 0 0-3.886zm-16.668-39.229-88 88C22.047 111.609 21.023 112 20 112s-2.047-.391-2.828-1.172a3.997 3.997 0 0 1 0-5.656l11.196-11.196C10.268 83.049 1.071 66.964.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24c10.827 0 20.205 2.47 28.222 6.122l12.95-12.95c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656zM34.333 88.011 44.46 77.884C41.663 73.96 40 69.175 40 64c0-13.234 10.766-24 24-24 5.175 0 9.96 1.663 13.884 4.459l8.189-8.189C79.603 33.679 72.251 32 64 32 32.045 32 13.447 56.775 8.707 63.994c3.01 4.562 11.662 16.11 25.626 24.017zm15.934-15.935 21.809-21.809C69.697 48.862 66.958 48 64 48c-8.822 0-16 7.178-16 16 0 2.958.862 5.697 2.267 8.076z"
                                                                            fill="#25476a"
                                                                            opacity="1"
                                                                            data-original="#000000"
                                                                            className=""
                                                                        ></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-grid gap-4 btns">
                                                <Link
                                                    to={RoutesLink?.login_route}
                                                    className="btn btn-primary py-2"
                                                    role="button"
                                                >Create New Password</Link>
                                                {/* <button className="btn btn-primary py-2" disabled={loading}>
                                                    {loading ? 'setting...' : 'Create New Password'}
                                                </button>
                                                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                                                {error && <p style={{ color: 'red' }}> {error}</p>} */}
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