import React, { useState } from "react";
import { Link } from "react-router-dom";

const CommonTable = ({ tableHeaders, tableData, actions , onAction }) => {
  const [openDropDown, setOpenDropDown] = useState(null);

  const toggleDropDown = (id) => {
    setOpenDropDown(openDropDown === id ? null : id);
  };
 //   console.log("Table Headers: ", tableHeaders);
 // console.log("Table Data: ", tableData);
 // console.log("Actions: ", actions);


  return (
    <div className="manage-table main-table table-responsive" style={{ maxHeight: '155px', overflowY: 'auto' }}>
      <table className="table">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index} 
              style={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 1 }}>
                {header.label}</th> // Updated to access label property from headers
              
            ))}
            <th style={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 1 }}>
              Action</th> {/* Keep this static for action buttons */}
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {tableHeaders.map((header, cellIndex) => (
                
                // <td key={cellIndex}>{row[header.value]}</td> // Access data using keys from headers

                <td key={cellIndex}>
                {row[header.value] === 'index' ? (
                    row.index // Use index if header value is 'index'
                ) : (
                    row[header.value] // For other fields
                )}
               </td>
              //  change for 01 and json id 
                  // <td key={cellIndex}>
                  //   {row[header.value] !== null ? row[header.value] : 'N/A'}
                  //   </td> // Display 'N/A' for null values
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
                      {/* {actions.map((action, actionIndex) => (
                        <li key={actionIndex}>
                          <Link
                            className="dropdown-item"
                            to={action.link}
                            data-bs-toggle={action.modalToggle}
                          >
                            <i className={action.icon}></i> {action.label}
                          </Link>
                        </li>
                      ))} */}  
                      {/* without delete functionality */}

{/* {actions.map((action, actionIndex) => (
                        <li key={actionIndex}>
                          <Link
                            className="dropdown-item"
                            onClick={() => action.onClick ? action.onClick(row._id) : null}
                            data-bs-toggle={action.modalToggle}
                          >
                            <i className={action.icon}></i> {action.label}
                          </Link>
                        </li>
                      ))} */}

{actions.map((action, actionIndex) => (
                                                <li key={actionIndex}>
                                                    <Link
                                                        className="dropdown-item"
                                                        to={action.link}
                                                        data-bs-toggle={action.modalToggle}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            if (action.label === "Delete") {
                                                                onAction("delete", row._id); // Call onAction for delete
                                                            }
                                                        }}
                                                    >
                                                        <i className={action.icon}></i> {action.label}
                                                    </Link>
                                                </li>
                                            ))}
                      {/* with delete functionality */}
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
  );
};

export default CommonTable;



















// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Ensure you import Link if you're using it for navigation

// const CommonTable = ({ tableHeaders, tableData, actions }) => {
//   const [openDropDown, setOpenDropDown] = useState(null);

//   const toggleDropDown = (id) => {
//     setOpenDropDown(openDropDown === id ? null : id);
//   };

//   return (
//     <>
      
//       <div className="manage-table main-table table-responsive">
//         <table className="table">
//           <thead>
//             <tr>
//               {tableHeaders.map((header, index) => (
//                 <th key={index}>{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.length > 0 ? (
//               tableData.map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {row.map((cell, cellIndex) => (
//                     <td key={cellIndex}>{cell}</td>
//                   ))}
//                   <td>
//                     <div className="dropdown d-inline-block">
//                       <button
//                         className={
//                           openDropDown === rowIndex
//                             ? "btn btn-white dropdown-toggle show"
//                             : "btn btn-white dropdown-toggle"
//                         }
//                         type="button"
//                         onClick={() => toggleDropDown(rowIndex)}
//                         aria-expanded={openDropDown === rowIndex}
//                       >
//                         <i className="fas fa-ellipsis-v fs-14 text-primary"></i>
//                       </button>
//                       <ul
//                         className={
//                           openDropDown === rowIndex
//                             ? "dropdown-menu shadow-lg show"
//                             : "dropdown-menu shadow-lg"
//                         }
//                         style={{
//                           position: "absolute",
//                           inset: "0px 0px auto auto",
//                           margin: "0px",
//                           transform: "translate3d(-0.5px, 24px, 0px)",
//                         }}
//                       >
//                         {actions.map((action, actionIndex) => (
//                           <li key={actionIndex}>
//                             <Link
//                               className="dropdown-item"
//                               to={action.link}
//                               data-bs-toggle={action.modalToggle}
//                             >
//                               <i className={action.icon}></i> {action.label}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={tableHeaders.length + 1} className="text-center fw-bold">
//                   No Data Found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default CommonTable;

// {/* <thead>
// <tr>
//     {tableHeaders.map((header, index) => (
//         <th key={index}>{header}</th>
//     ))}
// </tr>
// </thead>
// <tbody>
// {tableData.map((row, rowIndex) => (
//     <tr key={rowIndex}>
//         {row.map((cell, cellIndex) => (
//             <td key={cellIndex}>{cell}</td>
//         ))}
//     </tr>
// ))}



// <tr className="d-none">
//     <td colspan="11" className="text-center fw-bold">
//         No Data Found
//     </td>
// </tr>
// </tbody> */}
