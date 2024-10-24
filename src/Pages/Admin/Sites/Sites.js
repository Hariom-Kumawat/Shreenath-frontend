import React from "react";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../../ApiHelper/RoutesLink";
import { useSelector } from "react-redux";
import TableFooter from "../../../components/common";
import CommonTable from "../../../components/common/CommonTable";
import CommonHeader from "../../../components/common/CommonHeader";

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
    const headers = ["#", "Site", "Customers", "Location", "Status", "Action"];
    const data = [
        [
            "01",
            <Link to="/site-details/1" className="text-black">22.3 MW GAJNER(RAJ)</Link>,
            "HINDUJA RENEWABLE",
            "Gajner, Bikaner-334001",
            <span className="badge bg-green-25 fw-normal rounded-pill">Active</span>,
        ],
        [
            "01",
            <Link to="/site-details/1" className="text-black">22.3 MW GAJNER(RAJ)</Link>,
            "HINDUJA RENEWABLE",
            "Gajner, Bikaner-334001",
            <span className="badge bg-green-25 fw-normal rounded-pill">Active</span>,
        ],
        [
            "01",
            <Link to="/site-details/1" className="text-black">22.3 MW GAJNER(RAJ)</Link>,
            "HINDUJA RENEWABLE",
            "Gajner, Bikaner-334001",
            <span className="badge bg-green-25 fw-normal rounded-pill">Active</span>,
        ],
        [
            "01",
            <Link to="/site-details/1" className="text-black">22.3 MW GAJNER(RAJ)</Link>,
            "HINDUJA RENEWABLE",
            "Gajner, Bikaner-334001",
            <span className="badge bg-green-25 fw-normal rounded-pill">Active</span>,
        ],
        // Add more rows here
    ];

    const actions = [
        { label: "Edit", icon: "far fa-edit", link: "#addDesignationModal", modalToggle: "modal" },
        { label: "Delete", icon: "fas fa-trash-alt", link: "#deleteModal", modalToggle: "modal" },
    ];


    return (
        <>

            <div className={barIconClicked ? "main-view-content main-wrapper-w" : "main-view-content"} id="contentWrapper">
                <div class="content">
                    {/* <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                        <h1 className="mb-0">Sites</h1>
                        <div className="d-flex align-items-center gap-3">

                            <Link to={RoutesLink?.add_site_route} role="button" className="btn btn-outline-primary px-5">
                                <span>
                                    <i className="fas fa-plus"></i>
                                </span>
                                Add New Site
                            </Link>
                        </div>
                    </div> */}
                    <CommonHeader tittle={'Sites'}  routesLink={RoutesLink?.add_site_route} linkName={'Add New Site'} icon={'fas fa-plus'}/>
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
                                    <CommonTable tableHeaders={headers} tableData={''} actions={actions} />
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
                                    <CommonTable tableHeaders={headers} tableData={data} actions={actions} />
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