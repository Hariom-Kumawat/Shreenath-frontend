import React from "react";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../ApiHelper/RoutesLink";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginUser } from "../../store/action/userAction";

export default function LoginForm() {
    const [mobileNumber, setMobileNumber] = React.useState('');
    const [password, setPassword] = React.useState('')
    const [isRemember , setIsRemember] = React.useState(false)
    const dispatch = useDispatch()
    const { loading, error } = useSelector((state) => state.user)

    const handlelogin = (e) => {
        e.preventDefault()
        dispatch(loginUser(mobileNumber, password))
    }
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
                                        <h1 className="title">Login</h1>
                                        <p className="fs-5 mb-5">Access to our Dashboard</p>
                                        <form onSubmit={handlelogin}>
                                            <div className="form-group mb-3">
                                                <label for="mobile_num" className="form-label"
                                                >Mobile Number</label>
                                                <div className="position-relative icon-input">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="mobile_num"
                                                        name="mobile"
                                                        placeholder="Enter Mobile Number"
                                                        value={mobileNumber}
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
                                                        style={{ enableBackground: " new 0 0 16 16" }}

                                                        className=""
                                                    >
                                                        <g>
                                                            <path
                                                                d="M381.333 124.87c-.089 0-.162.048-.249.05V77.366c0-26.234-21.347-47.581-47.581-47.581H178.478c-26.234 0-47.581 21.347-47.581 47.581v47.551c-.081-.002-.149-.047-.23-.047a9.805 9.805 0 0 0-9.811 9.811v29.166a9.805 9.805 0 0 0 9.811 9.811c.081 0 .148-.044.23-.047v10.173c-.081-.002-.149-.047-.23-.047a9.805 9.805 0 0 0-9.811 9.811v29.166a9.805 9.805 0 0 0 9.811 9.811c.081 0 .148-.044.23-.047v202.155c0 26.234 21.347 47.581 47.581 47.581h155.026c26.234 0 47.581-21.347 47.581-47.581V173.608c.087.002.16.05.249.05a9.805 9.805 0 0 0 9.811-9.811v-29.166a9.807 9.807 0 0 0-9.812-9.811zm-19.872 309.764c0 15.407-12.532 27.958-27.958 27.958H178.478c-15.426 0-27.958-12.552-27.958-27.958V77.366c0-15.407 12.532-27.958 27.958-27.958h22.153V62.23a8.673 8.673 0 0 0 8.672 8.672h93.382a8.673 8.673 0 0 0 8.672-8.672V49.408h22.146c15.426 0 27.958 12.552 27.958 27.958z"
                                                                fill="#662d91"
                                                                opacity="1"
                                                                data-original="#000000"
                                                                class=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label for="login_password" className="form-label"
                                                >Password</label
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

                                                        className=""
                                                    >
                                                        <g>
                                                            <g data-name="12-Lock">
                                                                <path
                                                                    d="M23 12V8.71A6.72 6.72 0 0 0 16.29 2h-.58A6.72 6.72 0 0 0 9 8.71V12a3 3 0 0 0-3 3v9.3a5.71 5.71 0 0 0 5.7 5.7h8.6a5.71 5.71 0 0 0 5.7-5.7V15a3 3 0 0 0-3-3ZM11 8.71A4.71 4.71 0 0 1 15.71 4h.58A4.71 4.71 0 0 1 21 8.71V12H11ZM24 24.3a3.7 3.7 0 0 1-3.7 3.7h-8.6A3.7 3.7 0 0 1 8 24.3V15a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
                                                                    fill="#662d91"
                                                                    opacity="1"
                                                                    data-original="#000000"
                                                                    class=""
                                                                ></path>
                                                                <path
                                                                    d="M17 20.72V24a1 1 0 0 1-2 0v-3.28a2 2 0 1 1 2 0Z"
                                                                    fill="#662d91"
                                                                    opacity="1"
                                                                    data-original="#000000"
                                                                    class=""
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    {/* <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 32 32"
                                                    >
                                                        <g fill="#662d91">
                                                            <path d="M23 12V8.71A6.72 6.72 0 0 0 16.29 2h-.58A6.72 6.72 0 0 0 9 8.71V12a3 3 0 0 0-3 3v9.3a5.71 5.71 0 0 0 5.7 5.7h8.6a5.71 5.71 0 0 0 5.7-5.7V15a3 3 0 0 0-3-3ZM11 8.71A4.71 4.71 0 0 1 15.71 4h.58A4.71 4.71 0 0 1 21 8.71V12H11ZM24 24.3a3.7 3.7 0 0 1-3.7 3.7h-8.6A3.7 3.7 0 0 1 8 24.3V15a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" />
                                                            <path d="M17 20.72V24a1 1 0 0 1-2 0v-3.28a2 2 0 1 1 2 0Z" />
                                                        </g>
                                                    </svg> */}

                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                        id="login_password"
                                                        placeholder="Enter Password"
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
                                                                    fill="#662d91"
                                                                    opacity="1"
                                                                    data-original="#000000"
                                                                    className=""
                                                                ></path>
                                                                <path
                                                                    d="M255.997 154.725c-55.842 0-101.275 45.433-101.275 101.275s45.433 101.275 101.275 101.275S357.272 311.842 357.272 256s-45.433-101.275-101.275-101.275zm0 168.791c-37.23 0-67.516-30.287-67.516-67.516s30.287-67.516 67.516-67.516 67.516 30.287 67.516 67.516-30.286 67.516-67.516 67.516z"
                                                                    fill="#662d91"
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
                                                                    fill="#662d91"
                                                                    opacity="1"
                                                                    data-original="#000000"
                                                                    className=""
                                                                ></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="d-flex align-items-center justify-content-between mb-5"
                                            >
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="rememberMe"
                                                    />
                                                    <label className="form-check-label fs-14" for="rememberMe">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <Link
                                                    to={RoutesLink?.forget_password_route}
                                                    className="btn btn-link text-decoration-none fs-14 p-0 text-primary"
                                                    role="button"
                                                >Forget Password ?</Link>
                                            </div>

                                            <div className="d-grid gap-4 btns">
                                                <Link
                                                    // aria-disabled={loading}

                                                    to={RoutesLink?.dashboard_route}
                                                    className="btn btn-primary py-2"
                                                    role="button"
                                                >
                                                    Login
                                                    {/* {loading ? 'Logging...' : 'Login'} */}
                                                </Link>
                                             

                                                {/* // done with btn but make perfect with link  */}

                                                {/* <button
                                                    className="btn btn-primary py-2"
                                                    disabled={loading}>
                                                    {loading ? 'Logging...' : 'Login'}
                                                </button>
                                                {error && <p style={{ color: 'red' }}>{error}</p>} */}
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