import React from "react";
import TableFooter from "../../../components/common";
import { Link } from "react-router-dom";
import AddDesignationModal from "../../../components/Modals/Admin/Add-Designation";

export default function Designation() {
    const [openModal , setOpenModal] = React.useState(false)

    const toggleModal = () => {
        setOpenModal(!openModal)
    }
    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content">
                    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Designation</h1>
                        <div className="d-flex align-items-center gap-3">
                            <Link to="" onClick={toggleModal} data-bs-toggle="modal" role="button" class="btn btn-outline-primary px-5">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 10" fill="none">
                                        <path d="M4.66016 1.32031V9" stroke="#3085FE" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M0.820312 5.16016H8.5" stroke="#3085FE" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </span>
                                Add Designation
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
                                            <th className="text-start">Designation name</th>
                                            <th>Department</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td className="text-start">Web Developer</td>
                                            <td>O & M</td>
                                            <td>
                                                <div className="dropdown d-inline-block">
                                                    <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i className="fas fa-ellipsis-v fs-14 text-primary"></i>
                                                    </button>
                                                    <ul className="dropdown-menu shadow-lg">
                                                        <li>
                                                            <a className="dropdown-item" href="#addDesignationModal" data-bs-toggle="modal">
                                                                <i className="far fa-edit"></i>
                                                                Edit</a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#deleteModal" data-bs-toggle="modal">
                                                                <i className="fas fa-trash-alt"></i>
                                                                Delete</a>
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
                     
                     <TableFooter/>
                        </div>
                    </div>
                </div>
            </div>
            {openModal && <AddDesignationModal openModal={openModal} toggleModal={toggleModal}/> }
        </>
    )
}