import React from "react";
import { Link } from "react-router-dom";
import AddDepartmentModal from "../../../components/Modals/Admin/Add-Department";
import CommonComponent from "../../../components/common/CommonComponent";
import {RoutesLink} from '../../../ApiHelper/RoutesLink'


export default function Department() {
    const [openModal, setOpenModal] = React.useState(false)

    const toggleOpenModal = () => {
        setOpenModal(!openModal)
    }
    
    const headers = ["#", 'Department Name' ,  "Action"];
    const data = [
        [
            "01",
            'O&M'
        ],
        [
            "02",
            'Accounts'
        ],
        [
            '03',
            'Projects'
        ],  
    ]

    const actions = [
        { label: "Edit", icon: "far fa-edit", link: "#addDesignationModal", modalToggle: "modal" },
        { label: "Delete", icon: "fas fa-trash-alt", link: "#deleteModal", modalToggle: "modal" },
    ];

    return (
        <>           
            <CommonComponent tittle={'Department'} routesLink={RoutesLink?.add_customer_route}  linkName={'Add Department'} icon={'fas fa-plus'}
                tableHeaders={headers} tableData={data} actions={actions}
            />
        </>
    )
}

// test commonComponent in department component and paste department content in temp.txt file component 

