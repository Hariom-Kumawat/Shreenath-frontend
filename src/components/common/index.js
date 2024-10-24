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

{/* <thead>
<tr>
    {tableHeaders.map((header, index) => (
        <th key={index}>{header}</th>
    ))}
</tr>
</thead>
<tbody>
{tableData.map((row, rowIndex) => (
    <tr key={rowIndex}>
        {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
        ))}
    </tr>
))}



<tr className="d-none">
    <td colspan="11" className="text-center fw-bold">
        No Data Found
    </td>
</tr>
</tbody> */}