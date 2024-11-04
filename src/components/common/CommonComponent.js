// import React from "react";
// import TableFooter from ".";
// import CommonTable from "./CommonTable";
// import CommonHeader from "./CommonHeader";

// export default function CommonComponent({tittle , routesLink , linkName ,icon ,tableHeaders, tableData, actions}) {
//     return (
//         <>
//             <div className="main-view-content" id="contentWrapper">
//                 <div className="content">
//                  <CommonHeader tittle={tittle} routesLink={routesLink} linkName={linkName} icon={icon} />
//                     <div className="card">
//                         <div className="card-body">
//                             <div className="table-head d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
//                                 <div className="position-relative">
//                                     <span className="search-icon">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                                             <path
//                                                 d="M16.7499 16.75L13.4874 13.4875M15.25 9.25C15.25 12.5637 12.5637 15.25 9.25 15.25C5.93629 15.25 3.25 12.5637 3.25 9.25C3.25 5.93629 5.93629 3.25 9.25 3.25C12.5637 3.25 15.25 5.93629 15.25 9.25Z"
//                                                 stroke="#818898" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                                         </svg>
//                                     </span>
//                                     <input type="text" className="form-control search-control" id="searchUsers" placeholder="Search" />
//                                 </div>
//                                 <div className="d-flex align-items-stretch justify-content-end gap-3">
//                                     <button className="btn btn-outline-primary" type="button">
//                                         Export
//                                     </button>
//                                 </div>
//                             </div>
//                          <CommonTable tableHeaders={tableHeaders} tableData={tableData} actions={actions}/>
//                         <TableFooter/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// } // delete this file