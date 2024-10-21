import React from "react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../../ApiHelper/RoutesLink";
import { useSelector } from "react-redux";

export default function Sidebar() {
    const [attendance, setAttendance] = React.useState(false)
    const [leave, setLeave] = React.useState(false)
    const [regularization, setRegularization] = React.useState(false)
    const [reimbursement, setReimbursement] = React.useState(false)
    const [isActive, setIsActive] = React.useState('')
    // const navigate = useNavigate()

    const barIconClicked = useSelector((state) => state.barIcon.barIconClicked)



    const toggleIsActive = (link) => {
        setIsActive(link)
    }

    const toggleAttendance = () => {
        setAttendance(!attendance)
    }

    // useEffect(() => {
    //     setAttendance(false)
    // }, [navigate])

    const toggleLeave = () => {
        setLeave(!leave)
    }

    // useEffect(() => {
    //     setLeave(false)
    // }, [navigate])

    const toggleRegularization = () => {
        setRegularization(!regularization)
    }

    // useEffect(() => {
    //     setRegularization(false)
    // }, [navigate])

    const toggleReimbursement = () => {
        setReimbursement(!reimbursement)
    }

    // useEffect(() => {
    //     setReimbursement(false)
    // }, [navigate])



    return (
        <>
            {/*  change in every var of drop link */}
            <div className="main-content-wrapper">
                <aside className={barIconClicked ? "sidebar-wrapper side-wrapper-w" : "sidebar-wrapper"} id="sideWrapper">
                    <div className="sidebar-content">
                    <Link className="navbar-brand " id="brand" to="">
                        <img class="main-logo" src="../assets/img/Shreenath-logo.svg" alt="main-logo" />

                    </Link>
                        <div className="sidebar-inner">
                            <nav className="aside-nav">
                                <ul className="sidebar-vertical">
                                    <li>
                                        <span className="menu-title"> Menu </span>
                                    </li>
                                    <li>
                                        <Link to={RoutesLink?.user_dashboard}
                                            onClick={() => toggleIsActive('dashboard')}
                                            className={isActive === 'dashboard' ? 'drop-link active' : 'drop-link'}
                                            role="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                width="18" height="18" x="0" y="0" viewBox="0 0 463.937 463.937"
                                                className="svg-custom">
                                                <g>
                                                    <path
                                                        d="m460.414 216.518-85.6-73.1c.1-.5.2-1 .3-1.6v-95.6c-.1-5.7-4.6-10.3-10.3-10.5h-47.8c-5.5 0-10 4.9-10 10.5v39.6l-68.5-58.4c-3.7-3.2-9.2-3.2-13 0l-221.9 189c-4.3 3.5-4.8 9.8-1.3 14.1s9.8 4.8 14.1 1.3l.2-.2 215.4-183.4 77.1 65.7 46.1 39.2 92.3 78.6c4.2 3.6 10.5 3.1 14.1-1.1 3.5-4.2 3-10.5-1.2-14.1zm-105.4-90-28-23.6v-47.1h28v70.7z"
                                                        fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                                    <path
                                                        d="m416.314 236.718-28.1-24-149.7-127.9c-3.7-3.2-9.2-3.2-13 0l-149.7 127.9-28.1 24c-4.2 3.6-4.7 9.9-1.1 14.1 3.5 4.2 9.7 4.7 13.8 1.2l.1-.1 12.5-10.8v187.5c.1 5.6 4.7 10.2 10.3 10.3h297.3c5.6-.1 10.2-4.6 10.3-10.3v-187.5l12.5 10.8c1.8 1.5 4 2.4 6.4 2.4 2.9 0 5.7-1.3 7.6-3.5 3.7-4.3 3.1-10.6-1.1-14.1zm-144.3 182.1h-80v-108h80v108zm20 0v-117.7c0-5.5-4.1-10.3-9.6-10.3h-100.8c-5.5 0-9.6 4.8-9.6 10.3v117.7h-79v-194.8l139-118.4 139 118.4v194.8h-79z"
                                                        fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                                </g>
                                            </svg>
                                            <span className="custom-style"> Dashboard </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="drop-link btn-menu" role="button" onClick={toggleAttendance}>
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                width="18" height="18" x="0" y="0" viewBox="0 0 66 66" style={{ enableBackground: "new 0 0 512 512" }}
                                                class="">
                                                <g>
                                                    <path
                                                        d="M62.5.7h-59c-1.6 0-3 1.3-3 3v51.6c0 1.6 1.3 3 3 3h6.7v6c0 .6.4 1 1 1s1-.4 1-1V56h13.7v8.3c0 .6.4 1 1 1s1-.4 1-1v-6h34.6c1.6 0 3-1.3 3-3V3.7c0-1.6-1.3-3-3-3zM12.2 54v-1.8c0-.4-.2-.7-.5-.9l-3.9-2.2V44l2.4-1.4V45c0 .6.4 1 1 1s1-.4 1-1V26.5c0-.4.4-1 1-1 .5 0 1 .4 1 1V39.4c0 .6.4 1 1 1 .3 0 .5-.1.7-.3s.3-.4.3-.7v-4.5c0-.5.4-1 1-1 .5 0 1 .4 1 1v4.5c0 .6.4 1 1 1s1-.4 1-1v-4.5c0-.5.4-1 1-1 .5 0 1 .4 1 1v4.5c0 .6.4 1 1 1s1-.4 1-1v-4.5c0-.5.4-1 1-1 .5 0 1 .4 1 1V54zM7.6 7.7h11.2v4H7.6zm0 6h11.2v14.6h-2.6v-1.8c0-1.7-1.4-3-3-3-1.7 0-3 1.5-3 3v1.8H7.6zm55.9 41.6c0 .5-.4 1-1 1H27.9V34.9c0-1.6-1.3-3-3-3-.8 0-1.4.3-2 .8-.5-.5-1.2-.8-2-.8s-1.4.3-2 .8c-.5-.5-1.2-.8-2-.8-.3 0-.7.1-1 .2v-1.8h3.6c.6 0 1-.4 1-1V6.7c0-.6-.4-1-1-1H6.6c-.4 0-.8.3-.9.6-.1.2-.1.3-.1.4v22.5c0 .6.4 1 1 1h3.6v9.9l-3.9 2.4c-.3.2-.5.5-.5.9v6.2c0 .4.2.7.5.9l3.9 2.2v3.6H3.5c-.5 0-1-.4-1-1V3.7c0-.5.4-1 1-1h59c.5 0 1 .4 1 1z"
                                                        fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                                    <path
                                                        d="M59.5 5.7H30.7c-.6 0-1 .4-1 1v14.2c0 .6.4 1 1 1h28.8c.6 0 1-.4 1-1V6.7c0-.5-.4-1-1-1zm-1 14.2H31.7V7.7h26.8zM38.3 28.3h-5.4c-.6 0-1 .4-1 1s.4 1 1 1h5.4c.6 0 1-.4 1-1s-.5-1-1-1zM57.3 28.3h-5.4c-.6 0-1 .4-1 1s.4 1 1 1h5.4c.6 0 1-.4 1-1s-.4-1-1-1zM47.8 28.3h-5.4c-.6 0-1 .4-1 1s.4 1 1 1h5.4c.6 0 1-.4 1-1s-.4-1-1-1zM38.3 38.7h-5.4c-.6 0-1 .4-1 1s.4 1 1 1h5.4c.6 0 1-.4 1-1 0-.5-.5-1-1-1zM57.3 38.7h-5.4c-.6 0-1 .4-1 1s.4 1 1 1h5.4c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM47.8 38.7h-5.4c-.6 0-1 .4-1 1s.4 1 1 1h5.4c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM38.3 49.2h-5.4c-.6 0-1 .4-1 1s.4 1 1 1h5.4c.6 0 1-.4 1-1 0-.5-.5-1-1-1zM57.3 49.2h-5.4c-.6 0-1 .4-1 1s.4 1 1 1h5.4c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM47.8 49.2h-5.4c-.6 0-1 .4-1 1s.4 1 1 1h5.4c.6 0 1-.4 1-1 0-.5-.4-1-1-1z"
                                                        fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                                    <path
                                                        d="M34.1 17.2h4.8c.6 0 1-.4 1-1v-4.8c0-.6-.4-1-1-1h-4.8c-.6 0-1 .4-1 1v4.8c0 .5.4 1 1 1zm1-4.8h2.8v2.8h-2.8zM42.7 17.2h4.8c.6 0 1-.4 1-1v-4.8c0-.6-.4-1-1-1h-4.8c-.6 0-1 .4-1 1v4.8c0 .5.5 1 1 1zm1-4.8h2.8v2.8h-2.8zM51.4 17.2h4.8c.6 0 1-.4 1-1v-4.8c0-.6-.4-1-1-1h-4.8c-.6 0-1 .4-1 1v4.8c0 .5.4 1 1 1zm1-4.8h2.8v2.8h-2.8z"
                                                        fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                                </g>
                                            </svg>
                                            <span>Attendance</span>
                                            <svg className={attendance ? "chevron ms-auto dropdown rotate" : "chevron ms-auto dropdown"} xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path d="M6.4001 8.20005L10.0001 11.8L13.6001 8.20005" stroke="#818898" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </Link>
                                        <ul className="sub-menu inner" style={{ display: attendance ? "block" : 'none' }}>
                                            <li>
                                                <Link to={RoutesLink?.user_attendance}
                                                    onClick={() => toggleIsActive('user-attendance')}
                                                    className={isActive === 'user-attendance' ? "drop-link inner active" : "drop-link inner "} role="button">
                                                    <span>My Attendance</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={RoutesLink?.user_attendance_list}
                                                    onClick={() => toggleIsActive('attendance-list')}
                                                    className={isActive === 'attendance-list' ? "drop-link inner active " : "drop-link inner "}
                                                    role="button">
                                                    <span>Attendance List</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link className="drop-link btn-menu" onClick={toggleLeave} role="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                width="18" height="18" x="0" y="0" viewBox="0 0 32 32" style={{ enableBackground: "new 0 0 512 512" }}
                                                className="">
                                                <g>
                                                    <path
                                                        d="M30.5 31h-15a.5.5 0 0 1 0-1H30V2H15a.5.5 0 0 1 0-1h15.5a.5.5 0 0 1 .5.5v29a.5.5 0 0 1-.5.5zM3.785 31a.5.5 0 0 1-.484-.63l2.748-10.188a.5.5 0 1 1 .966.259L4.267 30.63a.499.499 0 0 1-.482.37zM11 7C9.346 7 8 5.654 8 4s1.346-3 3-3 3 1.346 3 3-1.345 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.896-2-2-2zM9.046 20.171 5.432 30.336a.5.5 0 0 0 .942.336l3.443-9.683z"
                                                        fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                                    <path
                                                        d="M13.568 31.004a.5.5 0 0 1-.49-.403l-1.211-6.153a2.5 2.5 0 0 0-.632-1.223l-3.699-3.928a3.51 3.51 0 0 1-.945-2.64l.36-5.23-2.169.677-.821 3.204c-.169.767-.969 1.294-1.782 1.125a1.505 1.505 0 0 1-1.144-1.79l1.003-3.981a1.5 1.5 0 0 1 .855-1.032l4.505-2.004c.229-.102.481-.145.73-.121l4.44.402a3.5 3.5 0 0 1 2.538 1.458l1.921 2.703 3.035-.362c.38-.064.776.037 1.099.276.322.237.533.586.594.982.061.395-.036.79-.273 1.113s-.587.534-.983.595l-3.75.692a1.487 1.487 0 0 1-1.351-.432l-1.107-1.145a.5.5 0 1 1 .719-.695l1.107 1.145a.495.495 0 0 0 .449.145l3.767-.695c.148-.023.265-.094.344-.201s.111-.239.091-.37a.505.505 0 0 0-.198-.329.51.51 0 0 0-.371-.091l-3.346.4a.486.486 0 0 1-.467-.206l-2.093-2.945a2.493 2.493 0 0 0-1.812-1.042l-4.442-.402a.501.501 0 0 0-.235.039l-4.507 2.004a.498.498 0 0 0-.286.349l-1.003 3.979a.5.5 0 0 0 .384.583.515.515 0 0 0 .596-.38l.895-3.49a.502.502 0 0 1 .335-.354l3.133-.978a.505.505 0 0 1 .459.085c.129.103.2.262.189.427l-.41 5.96a2.506 2.506 0 0 0 .674 1.886l3.7 3.928c.45.478.756 1.07.885 1.713l1.211 6.155a.5.5 0 0 1-.491.597z"
                                                        fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                                    <path
                                                        d="M15.583 31.004a.5.5 0 0 1-.498-.465l-.504-7.125a2.5 2.5 0 0 0-.289-1.002l-2.232-4.177a.5.5 0 0 1-.058-.268l.471-7.224a.488.488 0 0 1 .532-.467.5.5 0 0 1 .466.531l-.462 7.082 2.165 4.051c.233.437.37.908.404 1.402l.504 7.125a.5.5 0 0 1-.463.534c-.012.003-.024.003-.036.003zM26.5 6h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1z"
                                                        fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                                    <path
                                                        d="M24.5 8a.5.5 0 0 1-.354-.853L25.793 5.5l-1.646-1.646a.5.5 0 0 1 .707-.707l2 2a.5.5 0 0 1 0 .707l-2 2A.502.502 0 0 1 24.5 8zM26.5 17c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 26.5 15z"
                                                        fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                                </g>
                                            </svg>
                                            <span>Leave</span>
                                            <svg className={leave ? "chevron ms-auto dropdown rotate" : "chevron ms-auto dropdown"} xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path d="M6.4001 8.20005L10.0001 11.8L13.6001 8.20005" stroke="#818898" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </Link>
                                        <ul className="sub-menu inner" style={{ display: leave ? "block" : 'none' }}>
                                            <li>
                                                <Link to={RoutesLink?.user_leave}
                                                    onClick={() => toggleIsActive('user-leave')}
                                                    className={isActive === 'user-leave' ? "drop-link inner active" : "drop-link inner"}
                                                    role="button">
                                                    <span>My Leaves</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={RoutesLink?.user_leave_request}
                                                    onClick={() => toggleIsActive('leave-requests')}
                                                    className={isActive === 'leave-requests' ? "drop-link inner active" : "drop-link inner"}
                                                    role="button">
                                                    <span>Leave Requests</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="outdoorDuty.html"
                                            onClick={() => toggleIsActive('outdoor')}
                                            className={isActive === 'outdoor' ? "drop-link active" : 'drop-link'}
                                            role="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                width="18" height="18" x="0" y="0" viewBox="0 0 512 512"
                                                style={{ enableBackground: "new 0 0 512 512" }} className="">
                                                <g>
                                                    <path
                                                        d="M421.054 414.843a7.5 7.5 0 0 0-7.5 7.5v70.514a4.146 4.146 0 0 1-4.141 4.141h-40.317V349.301a7.5 7.5 0 0 0-15 0v147.698h-81.185l23.543-25.9c2.572-2.83 3.785-6.861 3.244-10.787a5.982 5.982 0 0 0-.035-.228L277.24 327.617l6.041-9.094c3.34 2.372 5.913 4.656 10.738 4.656 4.908 0 9.497-2.747 11.755-7.269v-.001l23.65-47.4 53.876 20.865c1.949.836 30.252 13.582 30.252 47.238v50.73a7.5 7.5 0 0 0 15 0v-50.73c0-44.344-37.969-60.463-39.585-61.128a3.546 3.546 0 0 0-.143-.057l-89.668-34.726v-21.03c14.242-11.076 24.117-27.495 26.596-46.227 7.101-.5 13.69-3.152 19.071-7.779a31.786 31.786 0 0 0 11.059-24.126 31.791 31.791 0 0 0-7.737-20.803V92.953C348.144 41.699 306.446 0 255.192 0c-51.254 0-92.952 41.699-92.952 92.953v28.511c-5.009 5.677-7.733 12.665-7.733 20.074 0 9.291 4.03 18.085 11.059 24.129 5.377 4.625 11.962 7.274 19.061 7.775 2.499 19.083 12.662 36.114 28.117 47.339v19.92l-89.571 34.725a8.255 8.255 0 0 0-.141.056c-1.617.665-39.585 16.784-39.585 61.128v156.245c0 10.555 8.587 19.142 19.142 19.142h71.457a7.5 7.5 0 0 0 0-15h-16.137V349.301a7.5 7.5 0 0 0-15 0v147.698H102.59a4.146 4.146 0 0 1-4.141-4.141V336.611c0-33.769 28.493-46.486 30.243-47.234l53.834-20.87 23.652 47.402a13.133 13.133 0 0 0 11.756 7.27c4.801 0 7.349-2.249 10.738-4.656l6.041 9.094-22.421 132.468c-.013.075-.024.15-.035.226-.542 3.924.671 7.957 3.244 10.789l23.543 25.9h-29.995a7.5 7.5 0 0 0 0 15h200.365c10.555 0 19.142-8.588 19.142-19.142v-70.514a7.503 7.503 0 0 0-7.502-7.501zM315.375 263.069l-22.049 44.19c-.548-.389-12.233-8.691-26.517-18.834l27.235-33.617 21.331 8.261zm-44.332 46.764-5.718 8.607h-18.703l-5.718-8.607 15.07-10.703 15.069 10.703zm-43.3-66.712v-14.036c9.112 3.673 18.85 5.376 28.36 5.376 9.833 0 19.476-2.096 28.052-5.846v14.567l-28.181 34.785-28.231-34.846zm113.138-101.582a16.804 16.804 0 0 1-5.839 12.753c-2.453 2.11-5.416 3.459-8.661 3.987v-33.477c8.62 1.4 14.5 8.55 14.5 16.737zm-156.874 16.74c-8.718-1.415-14.5-8.623-14.5-16.741 0-8.018 6.647-14.544 14.5-16.359v33.1zm.403-48.383c-2.389.274-5.127.921-7.168 1.615V92.953c0-42.983 34.968-77.952 77.951-77.952 42.983 0 77.951 34.969 77.951 77.952v18.043a33.343 33.343 0 0 0-6.762-1.307c0-7.237.063-5.841-23.612-31.294-4.354-4.678-11.556-5.658-17.037-2.077-26.13 17.069-58.005 25.644-87.415 23.532-6.451-.483-12.327 3.766-13.908 10.046zm14.598 54.288V114.927c32.375 1.896 66.318-7.722 93.739-25.283 10.858 11.658 16.738 17.773 18.634 20.099v54.44c0 30.447-24.826 55.276-55.277 55.276-34.194.001-57.096-26.525-57.096-55.275zm19.615 143.075-22.049-44.19 21.293-8.247 27.241 33.625c-13.853 9.837-25.228 17.919-26.485 18.812zm8.605 154.443 21.709-128.263h14.071l21.709 128.263-28.744 31.623-28.745-31.623z"
                                                        fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                                </g>
                                            </svg>
                                            <span>Outdoor Duty (OD)</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="drop-link btn-menu" onClick={toggleRegularization} role="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                width="18" height="18" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: " new 0 0 512 512" }}
                                                className="">
                                                <g>
                                                    <path d="m32.859 44.867-1.982.266c.081.613.123 1.241.123 1.867h2c0-.714-.047-1.432-.141-2.133z"
                                                        fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                                    <path
                                                        d="M60 7h-1V4c0-1.654-1.346-3-3-3h-2c-1.654 0-3 1.346-3 3v3H23V4c0-1.654-1.346-3-3-3h-2c-1.654 0-3 1.346-3 3v3h-1c-1.654 0-3 1.346-3 3v22.178C5.144 34.557 1 40.3 1 47c0 8.822 7.178 16 16 16 6.619 0 12.423-4.099 14.821-10H60c1.654 0 3-1.346 3-3V10c0-1.654-1.346-3-3-3zm-7-3c0-.551.449-1 1-1h2c.551 0 1 .449 1 1v8c0 .551-.449 1-1 1h-2c-.551 0-1-.449-1-1zM17 4c0-.551.449-1 1-1h2c.551 0 1 .449 1 1v8c0 .551-.449 1-1 1h-2c-.551 0-1-.449-1-1zm13.876 44.868C29.955 55.784 23.99 61 17 61 9.28 61 3 54.72 3 47s6.28-14 14-14c6.279 0 11.829 4.222 13.497 10.266l1.928-.531C30.518 35.825 24.175 31 17 31c-1.383 0-2.719.195-4 .527V10c0-.551.449-1 1-1h1v3c0 1.654 1.346 3 3 3h2c1.654 0 3-1.346 3-3V9h28v3c0 1.654 1.346 3 3 3h2c1.654 0 3-1.346 3-3V9h1c.551 0 1 .449 1 1v9H19v2h42v19.879l-3.186-4.46a1.002 1.002 0 0 0-.687-.411 1.029 1.029 0 0 0-.768.224l-3.36 2.8V35h6v-2h-7a1 1 0 0 0-1 1v6.698L38.638 51h-6.157c.158-.611.293-1.23.378-1.868zm25.936-10.41 3.662 5.126L43.787 51h-2.025zM60 51H48.713L61 45.539V50c0 .552-.449 1-1 1z"
                                                        fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                                    <path
                                                        d="M15 19h2v2h-2zM23 30v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zm-2-1h-4v-4h4zM34 31a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm-5-6h4v4h-4zM40 31h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4zM52 31h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4zM33 41h2v-7a1 1 0 0 0-1-1h-6v2h5zM40 41h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4zM24.707 38.293a.999.999 0 0 0-1.414 0L13 48.586l-3.293-3.293a.999.999 0 0 0-1.414 0l-3 3a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l14-14a.999.999 0 0 0 0-1.414zM13 54.586 7.414 49 9 47.414l3.293 3.293a.999.999 0 0 0 1.414 0L24 40.414 25.586 42z"
                                                        fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                                </g>
                                            </svg>
                                            <span>Att. Regularization</span>
                                            <svg className={regularization ? "chevron ms-auto dropdown rotate" : "chevron ms-auto dropdown"} xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path d="M6.4001 8.20005L10.0001 11.8L13.6001 8.20005" stroke="#818898" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </Link>
                                        <ul className="sub-menu inner" style={{ display: regularization ? "block" : 'none' }}>
                                            <li>
                                                <Link to="attendance-regularization.html"
                                                    onClick={() => toggleIsActive('regularization')}
                                                    className={isActive === 'regularization' ? "drop-link inner active" : "drop-link inner"}
                                                    role="button">
                                                    <span>My A.R.</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="attendance-regularization-requests.html"
                                                    onClick={() => toggleIsActive('regularization-req')}
                                                    className={isActive === 'regularization-req' ? "drop-link inner active" : "drop-link inner"}
                                                    role="button">
                                                    <span>A.R. Requests</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link className="drop-link btn-menu" onClick={toggleReimbursement} role="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                width="18" height="18" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: " new 0 0 512 512" }}
                                                className="">
                                                <g>
                                                    <path
                                                        d="M56.716 44.31c0-.513-.098-1.016-.289-1.485a3.974 3.974 0 0 0-4.675-2.393c-.045.012-.09.026-.133.044L38.376 45.93c-.015-.106-.02-.213-.047-.318a3.148 3.148 0 0 0-3.445-2.366c-.045.006-.09.015-.134.026l-13.84 3.706-4.929-.824V43a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4.981a1 1 0 0 0 1-1v-2h6.788l6.175 2.325c.556.21 1.14.315 1.729.315.786 0 1.579-.188 2.325-.568l21.51-13.177a3.974 3.974 0 0 0 2.208-3.585zM13.981 60H11V44h2.981zM53.54 46.147 32.022 59.328c-.734.372-1.6.417-2.373.126l-6.346-2.39a.988.988 0 0 0-.352-.064h-6.97v-8.819l4.812.805c.14.023.286.017.424-.021l13.975-3.742a1.153 1.153 0 0 1 1.058 1.763c-.165.267-.423.45-.727.519a.986.986 0 0 0-.128.038l-6.813 2.52.693 1.875 6.756-2.498a3.099 3.099 0 0 0 1.666-1.067l14.612-6.018c.94-.205 1.901.3 2.26 1.211.097.24.146.49.146.744.001.77-.42 1.458-1.175 1.837zM32 26c-.551 0-1-.448-1-1h-2c0 1.302.839 2.402 2 2.816V29h2v-1.184A2.996 2.996 0 0 0 35 25c0-1.654-1.346-3-3-3a1.001 1.001 0 0 1 0-2c.551 0 1 .448 1 1h2a2.996 2.996 0 0 0-2-2.816V17h-2v1.184A2.996 2.996 0 0 0 29 21c0 1.654 1.346 3 3 3a1.001 1.001 0 0 1 0 2z"
                                                        fill="#000000" opacity="1" data-original="#000000" class=""></path>
                                                    <path
                                                        d="M19 13a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1zm25 18H20V15h24z"
                                                        fill="#000000" opacity="1" data-original="#000000" class=""></path>
                                                    <path
                                                        d="M8.006 34.891c-.042.389.145.766.479.967l5 3a1.007 1.007 0 0 0 .92.056 1 1 0 0 0 .576-.718l1-5a.998.998 0 0 0-1.297-1.144l-2.193.731A20.825 20.825 0 0 1 11 25c0-11.579 9.42-21 21-21s21 9.421 21 21c0 4.501-1.403 8.792-4.056 12.408l1.612 1.184A22.824 22.824 0 0 0 55 25C55 12.317 44.682 2 32 2S9 12.317 9 25c0 2.916.535 5.741 1.589 8.417l-1.906.635a.998.998 0 0 0-.677.839zm5.676-.398-.384 1.919-1.919-1.151z"
                                                        fill="#000000" opacity="1" data-original="#000000" class=""></path>
                                                </g>
                                            </svg>
                                            <span>Reimbursement</span>
                                            <svg className={reimbursement ? "chevron ms-auto dropdown rotate" : "chevron ms-auto dropdown"} xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path d="M6.4001 8.20005L10.0001 11.8L13.6001 8.20005" stroke="#818898" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </Link>
                                        <ul className="sub-menu inner" style={{ display: reimbursement ? "block" : 'none' }}>
                                            <li>
                                                <Link to="reimbursement.html"
                                                    onClick={() => toggleIsActive('reimbursement')}
                                                    className={isActive === 'reimbursement' ? "drop-link inner active" : "drop-link inner"}
                                                    role="button">
                                                    <span>My Reimbursement</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="reimbursement-requests.html"
                                                    onClick={() => toggleIsActive('reimbursement-req')}
                                                    className={isActive === 'reimbursement-req' ? "drop-link inner active" : "drop-link inner"}
                                                    role="button">
                                                    <span>Reimbursement Req.</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="holidays.html"
                                            onClick={() => toggleIsActive('user-holidays')}
                                            className={isActive === 'user-holidays' ? "drop-link active" : "drop-link"} role="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                width="18" height="18" x="0" y="0" viewBox="0 0 60 60" style={{ enableBackground: " new 0 0 512 512" }}
                                                className="">
                                                <g>
                                                    <path
                                                        d="M55 4h-2V3a3 3 0 0 0-6 0v1h-4V3a3 3 0 0 0-6 0v1h-4V3a3 3 0 0 0-6 0v1h-4V3a3 3 0 0 0-6 0v1h-4V3a3 3 0 0 0-6 0v1H5a5.006 5.006 0 0 0-5 5v38a5.006 5.006 0 0 0 5 5h2.01a13.871 13.871 0 0 0-1.91 5.8 2.029 2.029 0 0 0 .52 1.547A2 2 0 0 0 7.1 60H53a2 2 0 0 0 1.477-.651 2.03 2.03 0 0 0 .52-1.548 13.881 13.881 0 0 0-1.91-5.8H55a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5Zm-6-1a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0ZM39 3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0ZM29 3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0ZM19 3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0ZM9 3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0ZM5 6h2v1a3 3 0 0 0 6 0V6h4v1a3 3 0 0 0 6 0V6h4v1a3 3 0 0 0 6 0V6h4v1a3 3 0 0 0 6 0V6h4v1a3 3 0 0 0 6 0V6h2a3 3 0 0 1 3 3v3H2V9a3 3 0 0 1 3-3Zm2.1 52-.005-.018c.68-7.493 8.781-13.524 19.115-14.743l1.117 2.573a1 1 0 0 0 .918.6.987.987 0 0 0 .4-.083 1 1 0 0 0 .518-1.315l-.849-1.956c.575-.03 1.151-.059 1.737-.059a30.559 30.559 0 0 1 12.33 2.505L41.48 47h-8.9a2 2 0 0 0-1.664.891l-1.7 2.554a1 1 0 1 0 1.664 1.11L32.581 49h8.93l1.7 2.555a1 1 0 1 0 1.664-1.11l-1.649-2.473.949-1.582C49.2 49.119 52.569 53.269 53 58ZM55 50h-3.312a21.742 21.742 0 0 0-6.494-5.3l.709-1.182a1 1 0 0 0-1.715-1.03L43.4 43.8A32.307 32.307 0 0 0 30.046 41c-.874 0-1.737.035-2.589.1L24 33.129a10.824 10.824 0 0 1 3.6-.633.962.962 0 0 0 .878-.432 7.518 7.518 0 0 1 6.36-2.764 1.008 1.008 0 0 0 1.018-.5 1 1 0 0 0-.1-1.128c-3.787-4.6-10.645-5.979-16.679-3.358s-9.7 8.576-8.932 14.482a1 1 0 0 0 .757.843 1.046 1.046 0 0 0 .235.027 1 1 0 0 0 .824-.434 7.522 7.522 0 0 1 6.365-2.764 1.01 1.01 0 0 0 .913-.345 10.927 10.927 0 0 1 2.921-2.2l3.211 7.393C18.159 42.309 12 45.546 8.4 50H5a3 3 0 0 1-3-3V14h56v33a3 3 0 0 1-3 3ZM18.878 33.727c-1.039-3.15-.675-5.758 1.033-7.493 2.414-.061 4.584 1.451 6.18 4.36a14.313 14.313 0 0 0-7.213 3.133Zm9.029-3.972a11.084 11.084 0 0 0-4.32-4.633 12.065 12.065 0 0 1 9.071 2.3 9.608 9.608 0 0 0-4.751 2.331ZM17.026 34.48a9.62 9.62 0 0 0-4.945 1.881 12.059 12.059 0 0 1 4.5-8.194 11.081 11.081 0 0 0 .445 6.313Z"
                                                        fill="#000000" opacity="1" data-original="#000000" class=""></path>
                                                    <path
                                                        d="M50.046 24H48.9a3.915 3.915 0 0 0-.425-1.019l.809-.809a1 1 0 1 0-1.414-1.414l-.809.809a3.915 3.915 0 0 0-1.019-.425V20a1 1 0 1 0-2 0v1.142a3.915 3.915 0 0 0-1.019.425l-.809-.809a1 1 0 0 0-1.414 1.414l.809.809A3.915 3.915 0 0 0 41.188 24h-1.142a1 1 0 1 0 0 2h1.142a3.915 3.915 0 0 0 .425 1.019l-.809.809a1 1 0 1 0 1.414 1.414l.809-.809a3.915 3.915 0 0 0 1.019.425V30a1 1 0 0 0 2 0v-1.142a3.915 3.915 0 0 0 1.019-.425l.809.809a1 1 0 1 0 1.414-1.414l-.809-.809A3.915 3.915 0 0 0 48.9 26h1.142a1 1 0 0 0 0-2Zm-5 3a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"
                                                        fill="#000000" opacity="1" data-original="#000000" class=""></path>
                                                </g>
                                            </svg>
                                            <span>Holidays</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="pay-slip.html"
                                            onClick={() => toggleIsActive('user-pay-slip')}
                                            className={isActive === 'user-pay-slip' ? "drop-link active" : "drop-link"}
                                            role="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                width="18" height="18" x="0" y="0" viewBox="0 0 48 48" style={{ enableBackground: " new 0 0 512 512" }}
                                            >
                                                <g>
                                                    <path
                                                        d="M41.179 11.116h-38.4A2.782 2.782 0 0 0 0 13.895v24.252a2.782 2.782 0 0 0 2.779 2.78h38.4a2.782 2.782 0 0 0 2.779-2.78V13.895a2.782 2.782 0 0 0-2.78-2.78zm1.263 27.031c0 .697-.566 1.264-1.263 1.264h-38.4a1.264 1.264 0 0 1-1.263-1.264V13.895c0-.697.566-1.263 1.263-1.263h38.4c.697 0 1.263.566 1.263 1.263v24.252zM48 9.853v24.252c0 .998-.518 1.896-1.387 2.403a.757.757 0 1 1-.764-1.309c.398-.232.635-.64.635-1.094V9.853c0-.697-.566-1.264-1.263-1.264h-38.4c-.453 0-.861.238-1.093.635a.759.759 0 0 1-1.31-.764 2.758 2.758 0 0 1 2.403-1.386h38.4A2.782 2.782 0 0 1 48 9.853zM4.8 23.747h9.095c.418 0 .758-.34.758-.757v-7.074a.758.758 0 0 0-.758-.758H4.8a.758.758 0 0 0-.758.758v7.074c0 .418.34.757.758.757zm5.305-1.515V20.21h3.032v2.02zm3.032-3.537h-3.032v-2.021h3.032zm-7.58-2.021H8.59v5.558H5.558zm33.6-1.516H25.012a.758.758 0 0 0-.758.758v4.042c0 .418.34.758.758.758h14.147c.418 0 .758-.34.758-.758v-4.042a.758.758 0 0 0-.758-.758zM38.4 19.2H25.768v-2.526H38.4zM4.042 29.053c0-.419.34-.758.758-.758h4.042a.758.758 0 0 1 0 1.516H4.8a.758.758 0 0 1-.758-.758zm13.642 0c0 .418-.34.758-.758.758h-4.042a.758.758 0 0 1 0-1.516h4.042c.419 0 .758.34.758.758zm8.084 0c0 .418-.34.758-.758.758h-4.042a.758.758 0 0 1 0-1.516h4.042c.419 0 .758.34.758.758zm8.085 0c0 .418-.34.758-.758.758h-4.042a.758.758 0 0 1 0-1.516h4.042c.418 0 .758.34.758.758zm-16.169 5.052c0 .419-.34.758-.758.758H4.8a.758.758 0 0 1 0-1.516h12.126c.419 0 .758.34.758.758z"
                                                        fill="#000000" opacity="1" data-original="#000000"></path>
                                                </g>
                                            </svg>
                                            <span>Pay slip</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={RoutesLink?.switch_user}
                                            onClick={() => toggleIsActive('switch-user')}
                                            className={isActive === 'switch-user' ? "drop-link active" : "drop-link"}
                                            role="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                width="18" height="18" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: "new 0 0 512 512" }}
                                                className="">
                                                <g>
                                                    <g fill="#000" fill-rule="evenodd" clip-rule="evenodd">
                                                        <path
                                                            d="M6.5 2.75c-.821 0-1.5.675-1.5 1.523 0 .848.679 1.522 1.5 1.522S8 5.121 8 4.273 7.321 2.75 6.5 2.75zm-3 1.523c0-1.663 1.336-3.023 3-3.023s3 1.36 3 3.023-1.336 3.022-3 3.022-3-1.36-3-3.022zm5.354 5.424c-1.436-.778-3.272-.778-4.708 0-.1.053-.202.107-.306.16-.35.181-.707.366-.958.589a.956.956 0 0 0-.102.103.866.866 0 0 0 .067.064c.478.414.924.637 1.448.637h4.41c.524 0 .97-.223 1.448-.637a.88.88 0 0 0 .067-.064.96.96 0 0 0-.102-.103c-.25-.223-.608-.408-.958-.589a18.27 18.27 0 0 1-.306-.16zm1.406.799-.003.008c.001-.006.003-.008.003-.008zm-7.52 0 .004.008-.004-.008zm.692-2.118c1.881-1.019 4.255-1.019 6.136 0l.183.094c.35.18.953.487 1.364.853.252.224.567.581.626 1.072.066.55-.211 1.008-.606 1.35-.627.543-1.41 1.003-2.43 1.003h-4.41c-1.02 0-1.803-.46-2.43-1.003-.395-.342-.672-.8-.605-1.35.058-.49.373-.848.625-1.072.411-.366 1.014-.674 1.364-.853a9.69 9.69 0 0 0 .183-.094zM4 14.25a.75.75 0 0 1 .75.75 5.247 5.247 0 0 0 3.956 5.09l-.234-.469a.75.75 0 1 1 1.342-.67l.857 1.714A.75.75 0 0 1 10 21.75 6.746 6.746 0 0 1 3.25 15a.75.75 0 0 1 .75-.75zM13.362 2.606A.75.75 0 0 1 14 2.25 6.746 6.746 0 0 1 20.75 9a.75.75 0 1 1-1.5 0 5.247 5.247 0 0 0-3.956-5.09l.234.469a.75.75 0 0 1-1.342.67l-.857-1.714a.75.75 0 0 1 .033-.73zM17.5 12.75c-.821 0-1.5.675-1.5 1.523s.679 1.523 1.5 1.523 1.5-.675 1.5-1.523-.679-1.523-1.5-1.523zm-3 1.523c0-1.663 1.336-3.023 3-3.023s3 1.36 3 3.023-1.336 3.023-3 3.023-3-1.361-3-3.023zm5.354 5.424c-1.436-.778-3.272-.778-4.708 0l-.306.16c-.35.181-.707.366-.958.589a.96.96 0 0 0-.102.103.881.881 0 0 0 .067.064c.478.414.924.637 1.448.637h4.41c.524 0 .97-.223 1.448-.637a.9.9 0 0 0 .067-.064.96.96 0 0 0-.102-.103c-.25-.223-.608-.408-.958-.589a17.952 17.952 0 0 1-.306-.16zm1.406.799-.004.008.004-.008zm-7.52 0 .004.008a.036.036 0 0 1-.004-.008zm.692-2.118c1.881-1.019 4.255-1.019 6.136 0l.183.094c.35.18.953.487 1.364.853.252.224.567.581.626 1.072.066.55-.211 1.008-.606 1.35-.627.543-1.41 1.003-2.43 1.003h-4.41c-1.02 0-1.803-.46-2.43-1.003-.395-.342-.672-.8-.606-1.35.06-.49.374-.848.626-1.072.411-.366 1.014-.674 1.364-.853.073-.037.136-.069.183-.095z"
                                                            fill="#000000" opacity="1" data-original="#000000" class=""></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span>Switch User</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}