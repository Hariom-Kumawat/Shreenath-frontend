import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from '../../../icons'
import { RoutesLink } from "../../../ApiHelper/RoutesLink";
// import { useSelector } from "react-redux";
import TableFooter from "../../../components/common";
import CommonTable from "../../../components/common/CommonTable";
import CommonHeader from "../../../components/common/CommonHeader";
import CommonSearchBar from "../../../components/common/CommonSearchBar";

export default function Vendors() {
    // const barIconClicked = useSelector((state) => state.barIcon.barIconClicked)
    const [status, setStatus] = React.useState(false)

    const handleStatus = () => {
        setStatus(!status)
    }

    const tableHeaders = [
        { label: '#', value: 'id' },
        { label: 'Firm', value: 'firmName' },
        { label: 'Vendor Type', value: 'vendorType' },
        { label: 'Email', value: 'email' },
        { label: 'Contact Person', value: 'contactName' },
        { label: 'Contact Number', value: 'contactNumber' },
        { label: 'Status', value: 'status' },

    ]
    const tableData = [

    
        {
            id: '01',
            firmName: 'VISHAVAM COMPUTERS',
            vendorType: 'Service',
            email: 'admin@shreenathenergy.com',
            contactName: 'NA',
            contactNumber: '8965326589',
            status: <div className="dropdown action-drop">
                <button onClick={handleStatus} className="btn link  dropdown-toggle d-flex gap-2" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <span className="badge bg-green-25 fw-normal rounded-pill">Active</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                        fill="none">
                        <path d="M6.40039 8.19922L10.0004 11.7992L13.6004 8.19922" stroke="#a1a1a1"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <ul className={status ? "dropdown-menu show" : "dropdown-menu"}>
                    <li><Link className="dropdown-item" to="#"><span
                        className="badge bg-green-25 fw-normal rounded-pill">Active</span></Link></li>

                    <li><Link className="dropdown-item" to="#"><span
                        className="badge bg-red-25 fw-normal rounded-pill">Deactive</span></Link></li>
                </ul>
            </div>

        }
    ]

    const actions = [
        { label: "Edit", icon: "far fa-edit", link: "#addDesignationModal", modalToggle: "modal" },
        { label: "Delete", icon: "fas fa-trash-alt", link: "#deleteModal", modalToggle: "modal" },
    ];

    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content">

                    <CommonHeader tittle={'Vendor'} routesLink={RoutesLink?.add_vendor_route} linkName={'Add New Vendor'} />
                    <div className="card mb-4">
                        <div className="card-body">
                            <CommonSearchBar showIcon={true} />
                            <CommonTable tableHeaders={tableHeaders} tableData={tableData} actions={actions} />
                            <TableFooter />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}