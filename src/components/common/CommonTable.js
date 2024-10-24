import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure you import Link if you're using it for navigation

const CommonTable = ({ tableHeaders, tableData, actions }) => {
  const [openDropDown, setOpenDropDown] = useState(null);

  const toggleDropDown = (id) => {
    setOpenDropDown(openDropDown === id ? null : id);
  };

  return (
    <>
      
      <div className="manage-table main-table table-responsive">
        <table className="table">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                  <td>
                    <div className="dropdown d-inline-block">
                      <button
                        className={
                          openDropDown === rowIndex
                            ? "btn btn-white dropdown-toggle show"
                            : "btn btn-white dropdown-toggle"
                        }
                        type="button"
                        onClick={() => toggleDropDown(rowIndex)}
                        aria-expanded={openDropDown === rowIndex}
                      >
                        <i className="fas fa-ellipsis-v fs-14 text-primary"></i>
                      </button>
                      <ul
                        className={
                          openDropDown === rowIndex
                            ? "dropdown-menu shadow-lg show"
                            : "dropdown-menu shadow-lg"
                        }
                        style={{
                          position: "absolute",
                          inset: "0px 0px auto auto",
                          margin: "0px",
                          transform: "translate3d(-0.5px, 24px, 0px)",
                        }}
                      >
                        {actions.map((action, actionIndex) => (
                          <li key={actionIndex}>
                            <Link
                              className="dropdown-item"
                              to={action.link}
                              data-bs-toggle={action.modalToggle}
                            >
                              <i className={action.icon}></i> {action.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={tableHeaders.length + 1} className="text-center fw-bold">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CommonTable;

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
