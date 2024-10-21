import React from "react";
import Sorting from "./Sorting";
import Pagination from "./Pagination";

export default function TableFooter() {
    return (
        <>
            <div className="table-footer">
                <Sorting />

                <Pagination />
            </div>
        </>
    )
}