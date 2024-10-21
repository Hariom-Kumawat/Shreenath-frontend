import React from "react";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../../ApiHelper/RoutesLink";
import { useSelector } from "react-redux";
import TableFooter from "../../../components/common";

export default function Sites() {
    const [action, setAction] = React.useState('O&M')
    const [openDropDown, setOpenDropDown] = React.useState(false)
    const barIconClicked = useSelector((state) => state.barIcon.barIconClicked)

    const toggleAction = (value) => {
        setAction(value)
    }

    // const toggleDropDown = () => {
    //     setOpenDropDown(!openDropDown)
    // }
    const toggleDropDown = (id) => {
        setOpenDropDown(openDropDown === id ? null : id);
    };

    return (
        <>

            <div className={barIconClicked ? "main-view-content main-wrapper-w" : "main-view-content"} id="contentWrapper">
                <div class="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Sites</h1>
                        <div className="d-flex align-items-center gap-3">

                            <Link to={RoutesLink?.add_site_route} role="button" className="btn btn-outline-primary px-5">
                                <span>
                                    <i className="fas fa-plus"></i>
                                </span>
                                Add New Site
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        {/* changes in btn css match  */}
                        <div className="card-body">
                            <nav>
                                <div className="nav nav-tabs border-0 " id="nav-tab" role="tablist">
                                    <button className={action === 'O&M' ? "btn btn-primary active px-5 rounded-1 rounded-start-2" : " btn btn-outline-primary  px-5 rounded-1 rounded-start-2"} onClick={() => toggleAction('O&M')} id="nav-home-tab"
                                        data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                        aria-selected="true">O&M </button>
                                    <button className={action === 'Project' ? "btn btn-primary active px-5 rounded-1 rounded-start-2" : " btn btn-outline-primary px-5 rounded-1 rounded-start-2"} onClick={() => toggleAction('Project')} id="nav-profile-tab"
                                        data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab"
                                        aria-controls="nav-profile" aria-selected="false">Project</button>
                                </div>
                            </nav>
                            <div className="tab-content mt-4" id="nav-tabContent">
                                {action === 'O&M' && (<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                                    tabindex="0">
                                    <div className="table-head mb-4 border-bottom pb-3">

                                        <div className="position-relative">
                                            <span className="search-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M16.7499 16.75L13.4874 13.4875M15.25 9.25C15.25 12.5637 12.5637 15.25 9.25 15.25C5.93629 15.25 3.25 12.5637 3.25 9.25C3.25 5.93629 5.93629 3.25 9.25 3.25C12.5637 3.25 15.25 5.93629 15.25 9.25Z"
                                                        stroke="#818898" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                            <input type="text" className="form-control search-control" id="searchUsers" placeholder="Search" />
                                        </div>
                                    </div>
                                    <div className="manage-table main-table table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Site</th>
                                                    <th>Customers</th>
                                                    <th>Location</th>
                                                    <th>Status</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>01</td>
                                                    <td><Link to="current-site.html" className="text-black">22.3 MW GAJNER(RAJ)</Link></td>
                                                    <td>HINDUJA RENEWABLE</td>
                                                    <td>Gajner, Bikaner-334001</td>
                                                    <td><span className="badge bg-green-25 fw-normal rounded-pill">Active</span></td>
                                                    <td>
                                                        <div className="dropdown d-inline-block">
                                                            <button className={openDropDown === '01' ? "btn btn-white dropdown-toggle show" : "btn btn-white dropdown-toggle"}
                                                                type="button"
                                                                onClick={() => toggleDropDown('01')}
                                                                aria-expanded={openDropDown === '01'}>
                                                                <i className="fas fa-ellipsis-v fs-14 text-primary"></i>
                                                            </button>
                                                            <ul className={openDropDown === '01' ? "dropdown-menu shadow-lg show " : "dropdown-menu shadow-lg"}
                                                                style={{ position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate3d(-0.5px, 24px, 0px)" }}
                                                            >
                                                                <li>
                                                                    <Link className="dropdown-item" to="#addDesignationModal" data-bs-toggle="modal">
                                                                        <i className="far fa-edit"></i> Edit
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link className="dropdown-item" to="#deleteModal" data-bs-toggle="modal">
                                                                        <i className="fas fa-trash-alt"></i> Delete
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                             


                                                <tr className="d-none">
                                                    <td colspan="11" className="text-center fw-bold">
                                                        No Data Found
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <TableFooter />
                                </div>)}


                                {action === 'Project' && (<div className="tab-pane fade show active" style={{ display: 'block' }} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                                    tabindex="0">
                                    <div className="table-head mb-4 border-bottom pb-3">

                                        <div className="position-relative">
                                            <span className="search-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M16.7499 16.75L13.4874 13.4875M15.25 9.25C15.25 12.5637 12.5637 15.25 9.25 15.25C5.93629 15.25 3.25 12.5637 3.25 9.25C3.25 5.93629 5.93629 3.25 9.25 3.25C12.5637 3.25 15.25 5.93629 15.25 9.25Z"
                                                        stroke="#818898" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                            <input type="text" class="form-control search-control" id="searchUsers" placeholder="Search" />
                                        </div>
                                    </div>
                                    <div className="manage-table main-table table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Site</th>
                                                    <th>Customers</th>
                                                    <th>Location</th>
                                                    <th>Status</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>01</td>
                                                    <td><Link to="current-site.html" className=" text-black">22.3 MW GAJNER(RAJ)</Link></td>
                                                    <td>HINDUJA </td>
                                                    <td>Gajner, Bikaner-334001</td>
                                                    <td><span className="badge bg-green-25 fw-normal rounded-pill">Active</span></td>
                                                    <td>
                                                        <div className="dropdown d-inline-block">
                                                            <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                                {/* <svg className="svg-inline--fa fa-ellipsis-v fa-w-6 fs-14 text-primary" aria-hidden="true"
                                                                    focusable="false" data-prefix="fas" data-icon="ellipsis-v" role="img"
                                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" data-fa-i2svg="">
                                                                    <path fill="currentColor"
                                                                        d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z">
                                                                    </path>
                                                                </svg> */}
                                                                <i className="fas fa-ellipsis-v fs-14 text-primary"></i>
                                                            </button>
                                                            <ul className="dropdown-menu shadow-lg">
                                                                <li>
                                                                    <Link className="dropdown-item" to="#addDesignationModal" data-bs-toggle="modal">
                                                                        <svg className="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" focusable="false"
                                                                            data-prefix="far" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 576 512" data-fa-i2svg="">
                                                                            <path fill="currentColor"
                                                                                d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z">
                                                                            </path>
                                                                        </svg>
                                                                        {/* <!-- <i class="far fa-edit"></i> Font Awesome fontawesome.com --> */}
                                                                        Edit</Link>
                                                                </li>
                                                                <li>
                                                                    <Link className="dropdown-item" to="#deleteModal" data-bs-toggle="modal">
                                                                        <svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true"
                                                                            focusable="false" data-prefix="fas" data-icon="trash-alt" role="img"
                                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                                                            <path fill="currentColor"
                                                                                d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z">
                                                                            </path>
                                                                        </svg>
                                                                        {/* <!-- <i class="fas fa-trash-alt"></i> Font Awesome fontawesome.com --> */}
                                                                        Delete</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>



                                                <tr className="d-none">
                                                    <td colspan="11" className="text-center fw-bold">
                                                        No Data Found
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <TableFooter />
                                </div>)}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}