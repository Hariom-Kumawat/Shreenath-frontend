import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../../ApiHelper/RoutesLink";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleBarIcon } from '../../../store/action/toggleBarIcon'

export default function Header() {
    // const dispatch = useDispatch()
    // const barIconClicked = useSelector((state) => state.barIcon.barIconClicked)
    const [dropDown, setDropDown] = React.useState(false)
    const dropdownRef = useRef(null);

    const toggleDropDown = () => {
        setDropDown(prev => !prev);  // Toggle dropdown state
    };

    // const handleToggle = () => {
    //     dispatch(toggleBarIcon())
    // }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropDown(false);  // Close dropdown
            }
        };

        // Attach the event listener to the document
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <>
            {/* change in navbar collapse */}
            <header className="header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* <!-- <a class="navbar-brand p-0" id="brand" href="javascript:void(0);">
                            <img
                                class="main-logo"
                                src="../assets/img/Shreenath-logo.svg"
                                alt="main-logo"
                            />
                            <img
                                src="../assets/img/Shreenath-logo-icon.svg"
                                alt="main-logo-icon"
                                class="logo-icon"
                            />
                        </a> --> */}
                        <div className="collapse navbar-collapse justify-content-between align-items-stretch ">
                            {/* <button className="btn btn-toggle border-0" id="toggleButton" type="button">
                                <i className="fas fa-bars"></i>
                            </button> */}

                            <div className="header-nav d-flex align-items-stretch justify-content-end w-100">
                                <ul className="d-flex align-items-center gap-3 list-unstyled mb-0">
                                    <li>
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="far fa-bell"></i>
                                            </button>
                                            <ul className="dropdown-menu shadow notification-dropdown">

                                                <li>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="user">
                                                            <span className="user-icon"> AS </span>
                                                            <div>
                                                                <h4 className="title mb-0">Aditiya Sharma</h4>
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-close fs-6">

                                                        </button>
                                                    </div>
                                                    <Link to="#">
                                                        <p>New Message Here...</p>
                                                    </Link>
                                                    <span className="time">1hr ago</span>
                                                </li>

                                                <li>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="user">
                                                            <span className="user-icon"> AS </span>
                                                            <div>
                                                                <h4 className="title mb-0">Aditiya Sharma</h4>
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-close fs-6">

                                                        </button>
                                                    </div>
                                                    <Link to="#">
                                                        <p>New Message Here...</p>
                                                    </Link>
                                                    <span className="time">1hr ago</span>
                                                </li>

                                                <li className="mt-3 pt-3">
                                                    <Link to="#" className="fs-4 text-center d-block btn btn-dark"> View All</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown" ref={dropdownRef}>
                                            <button className={dropDown ? "btn dropdown-toggle show" : "btn dropdown-toggle"} onClick={toggleDropDown} type="button" data-bs-toggle="dropdown" aria-expanded={dropDown ? 'true' : "false"}>
                                                <i className="far fa-user"></i>
                                            </button>
                                            <ul className={dropDown ? "dropdown-menu shadow show"  : "dropdown-menu shadow"}>
                                                <li>
                                                    <Link className="dropdown-item" to="employee-detail.html">
                                                        <i className="far fa-user"></i>
                                                        Profile</Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="#">
                                                        <i className="fas fa-cog"></i>
                                                        Setting</Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to={RoutesLink?.login_route}>
                                                        <i className="fas fa-door-open"></i>
                                                        Logout</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}