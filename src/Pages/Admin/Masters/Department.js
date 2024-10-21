import React from "react";
import { Link } from "react-router-dom";
import AddDepartmentModal from "../../../components/Modals/Admin/Add-Department";

export default function Department() {
    const [openModal , setOpenModal] = React.useState(false)

    const toggleOpenModal = () => {
        setOpenModal(!openModal)
    }
    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Department</h1>
                        <div className="d-flex align-items-center gap-3">
                            <Link to="" onClick={toggleOpenModal} data-bs-toggle="modal" role="button" class="btn btn-outline-primary px-5">
                                {/* <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 10" fill="none">
                                        <path d="M4.66016 1.32031V9" stroke="#662d91" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M0.820312 5.16016H8.5" stroke="#662d91" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </span> */}
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 10" fill="none">
                                        <path d="M4.66016 1.32031V9" stroke="#3085FE" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M0.820312 5.16016H8.5" stroke="#3085FE" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span>
                                Add Department
                            </Link>
                        </div>
                    </div>
                    <div className="card">
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
                                    <button className="btn btn-outline-primary" type="button">
                                        Export
                                    </button>
                                </div>
                            </div>
                            <div className="manage-table main-table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th className="text-start">Department name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td className="text-start">O & M</td>
                                            <td>
                                                <div className="dropdown d-inline-block">
                                                    <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i class="fas fa-ellipsis-v fs-14 text-primary"></i>
                                                    </button>
                                                    <ul className="dropdown-menu shadow-lg">
                                                        <li>
                                                            <Link className="dropdown-item" href="#addDepartmentModal" data-bs-toggle="modal">
                                                                <i className="far fa-edit"></i>
                                                                Edit</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" href="#deleteModal" data-bs-toggle="modal">
                                                                <i className="fas fa-trash-alt"></i>
                                                                Delete</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td className="text-start">Accounts</td>
                                            <td>
                                                <div className="dropdown d-inline-block">
                                                    <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i className="fas fa-ellipsis-v fs-14 text-primary"></i>
                                                    </button>
                                                    <ul className="dropdown-menu shadow-lg">
                                                        <li>
                                                            <Link className="dropdown-item" to="#addDepartmentModal" data-bs-toggle="modal">
                                                                <i className="far fa-edit"></i>
                                                                Edit</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#deleteModal" data-bs-toggle="modal">
                                                                <i className="fas fa-trash-alt"></i>
                                                                Delete</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td className="text-start">Projects</td>
                                            <td>
                                                <div className="dropdown d-inline-block">
                                                    <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i className="fas fa-ellipsis-v fs-14 text-primary"></i>
                                                    </button>
                                                    <ul className="dropdown-menu shadow-lg">
                                                        <li>
                                                            <Link className="dropdown-item" href="#addDepartmentModal" data-bs-toggle="modal">
                                                                <i className="far fa-edit"></i>
                                                                Edit</Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="#deleteModal" data-bs-toggle="modal">
                                                                <i className="fas fa-trash-alt"></i>
                                                                Delete</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="d-none">
                                            <td colspan="3" className="text-center fw-bold">
                                                No Data Found
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-footer">
                                <div className="sorted">
                                    <h5>Sort by:</h5>
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            30
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M6.40039 8.19922L10.0004 11.7992L13.6004 8.19922" stroke="#36394A" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu shadow-lg">
                                            <li><Link className="dropdown-item" to="#">10</Link></li>
                                            <li>
                                                <Link className="dropdown-item" to="#">20</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="#">30</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="#">40</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="">
                                    <nav className="paggination-nav" aria-label="Page navigation example">
                                        <ul className="paggination">
                                            <li className="page-item">
                                                <Link className="page-link" to="#" aria-label="Previous">
                                                    <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 20 20" fill="none">
                                                        <path d="M11.8002 13.6004L8.2002 10.0004L11.8002 6.40039" stroke="#666D80"
                                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg></span>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link active" to="#">1</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">2</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">3</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">...</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">7</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#" aria-label="Next">
                                                    <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 20 20" fill="none">
                                                        <path d="M8.2002 13.6004L11.8002 10.0004L8.2002 6.40039" stroke="#666D80"
                                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {openModal && <AddDepartmentModal openModal={openModal} toggleOpenModal={toggleOpenModal}/> }
        </>
    )
}