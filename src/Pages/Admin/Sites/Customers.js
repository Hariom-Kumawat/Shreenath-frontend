import React from "react";
import { Link } from "react-router-dom";
import TableFooter from "../../../components/common";
import { RoutesLink } from "../../../ApiHelper/RoutesLink";
import { useSelector } from "react-redux";

export default function Customers() {
    const [openDropDown, setOpenDropDown] = React.useState(false)
    const barIconClicked = useSelector((state) => state.barIcon.barIconClicked)

    const toggleDropDown = () => {
        setOpenDropDown(!openDropDown)
    }

    return (
        <>
            <div className={barIconClicked ? "main-view-content main-wrapper-w" : "main-view-content"} id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Customer</h1>
                        <Link to={RoutesLink?.add_customer_route} className="btn btn-primary">Add New Customer</Link>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="table-head d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
                                <div className="position-relative">
                                    <span className="search-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M16.7499 16.75L13.4874 13.4875M15.25 9.25C15.25 12.5637 12.5637 15.25 9.25 15.25C5.93629 15.25 3.25 12.5637 3.25 9.25C3.25 5.93629 5.93629 3.25 9.25 3.25C12.5637 3.25 15.25 5.93629 15.25 9.25Z"
                                                stroke="#818898" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <input type="text" className="form-control search-control" id="searchUsers" placeholder="Search" />
                                </div>
                                <div className="d-flex align-items-stretch justify-content-end gap-3">



                                    <button className="btn btn-outline-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                                            <path d="M5.55556 8.5H8.44444V7.16667H5.55556V8.5ZM0.5 0.5V1.83333H13.5V0.5H0.5ZM2.66667 5.16667H11.3333V3.83333H2.66667V5.16667Z" fill="#3085FE"></path>
                                        </svg>
                                    </button>

                                </div>
                            </div>
                            <div className="manage-table main-table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Firm</th>
                                            <th>Email</th>
                                            <th>Contact Number</th>
                                            <th>Address</th>
                                            <th>GSTIN</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>TATA POWER</td>
                                            <td>DEEPAK.KABADI@TATAPOWER.COM</td>
                                            <td>7208769125</td>
                                            <td>BHAINSARA,POKHARAN, JAISALMER (RAJASTHAN)</td>
                                            <td>27AAJCC0362R1Z7</td>
                                            <td>
                                                <div className="dropdown d-inline-block">
                                                    <button className={openDropDown ? "btn btn-white dropdown-toggle show " : "btn btn-white dropdown-toggle "} type="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        {/* <svg className="svg-inline--fa fa-ellipsis-v fa-w-6 fs-14 text-primary" aria-hidden="true"
                                                            focusable="false" data-prefix="fas" data-icon="ellipsis-v" role="img"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" data-fa-i2svg="">
                                                            <path fill="currentColor"
                                                                d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z">
                                                            </path>
                                                        </svg> */}
                                                        <i onClick={toggleDropDown} className="fas fa-ellipsis-v fs-14 text-primary"></i>
                                                    </button>
                                                    <ul className={openDropDown ? "dropdown-menu shadow-lg show" : "dropdown-menu shadow-lg"} style={{ position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate3d(-12.5px, 24px, 0px)" }}>
                                                        <li>
                                                            <Link className="dropdown-item" to="#addDepartmentModal" data-bs-toggle="modal">
                                                                {/* <svg className="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" focusable="false"
                                                                    data-prefix="far" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 576 512" data-fa-i2svg="">
                                                                    <path fill="currentColor"
                                                                        d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z">
                                                                    </path>
                                                                </svg> */}
                                                                <i className="far fa-edit"></i>
                                                                Edit</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#deleteModal" data-bs-toggle="modal">
                                                                {/* <svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true" focusable="false"
                                                                    data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 448 512" data-fa-i2svg="">
                                                                    <path fill="currentColor"
                                                                        d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z">
                                                                    </path>
                                                                </svg> */}
                                                                <i class="fas fa-trash-alt"></i>
                                                                Delete</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>



                                        <tr className="d-none">
                                            <td colspan="18" className="text-center fw-bold">
                                                No Data Found
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <TableFooter />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}