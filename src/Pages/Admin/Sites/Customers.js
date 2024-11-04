import { React, useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import TableFooter from "../../../components/common";
import { RoutesLink } from "../../../ApiHelper/RoutesLink";

import CommonHeader from "../../../components/common/CommonHeader";
import CommonTable from "../../../components/common/CommonTable";
import CommonSearchBar from "../../../components/common/CommonSearchBar";
import { callApi } from "../../../ApiHelper/apiHelper";

export default function Customers() {
    // const [openDropDown, setOpenDropDown] = useState(false)

    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    // const toggleDropDown = () => {
    //     setOpenDropDown(!openDropDown)
    // }
    const tableHeaders = [
        { label: '#', value: 'index' },
        // {label:'#' , value:'id'},
        { label: 'Firm', value: 'name' },
        { label: 'Email', value: 'email' },
        { label: 'ContactNumber', value: 'phone' },
        { label: 'Address', value: 'address' },
        { label: 'GSTIN', value: 'gstNumber' },

    ]

    const actions = [
        { label: "Edit", icon: "far fa-edit", link: "#addDesignationModal", modalToggle: "modal" },
        { label: "Delete", icon: "fas fa-trash-alt", link: "#deleteModal", modalToggle: "modal" },
    ];

    useEffect(() => {
        const fetchCustomers = async () => {
            setLoading(true)
            try {
                const response = await callApi("https://7f074tk1-4200.inc1.devtunnels.ms/S0001/api/v1/site/get-customer"); // Replace with your API URL
                console.log("Fetched customers:", response.data); // Log the correct data
                setCustomers(response.data); // Set tableData to response.data
            } catch (error) {
                console.error("Error fetching customers:", error);
            } finally {
                setLoading(false)
            }
        };

        fetchCustomers();
    }, []); 
    console.log(customers);

    const handleAction = async (actionType, id) => {
        if (actionType === "delete") {
            try {
                const response = await callApi(`https://7f074tk1-4200.inc1.devtunnels.ms/S0001/api/v1/site/delete-customer/${id}`, "DELETE");
                if (response.success) {
                    setCustomers(customers.filter(customer => customer._id !== id)); // Update state to remove the deleted customer
                } else {
                    console.error("Failed to delete customer");
                }
            } catch (error) {
                console.error("Error deleting customer:", error);
            }
        }
    };

    const formattedCustomers = customers.map((customer, index) => ({
        ...customer,
        index: String(index + 1).padStart(2, '0'), // Format index with leading zeros
    }));

    const filteredCustomers = formattedCustomers.filter((customer) =>
        customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.phone.includes(searchQuery) ||
        customer.address.toLowerCase().includes(searchQuery.toLocaleLowerCase())
        
    );


    return (
        <>
            <div className="main-view-content" id="contentWrapper">
                <div className="content">
                    <CommonHeader tittle={'Customer'} routesLink={RoutesLink?.add_customer_route} linkName={'Add New Customer'} />
                    <div className="card mb-4">
                        <div className="card-body">
                            <CommonSearchBar showIcon={true} onSearch={setSearchQuery} />
                            {loading ? (
                                <div className="text-center">Loading...</div> // Loading indicator
                            ) : error ? (
                                <div className="text-center text-danger">{error}</div> // Error message
                            ) : (
                                <CommonTable tableHeaders={tableHeaders}
                                    tableData={filteredCustomers}
                                    //   tableData={customers} 
                                    actions={actions}
                                    onAction={handleAction}
                                />
                            )}
                            {/* <CommonTable tableHeaders={tableHeaders} tableData={customers} actions={actions} /> */}
                            <TableFooter />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}