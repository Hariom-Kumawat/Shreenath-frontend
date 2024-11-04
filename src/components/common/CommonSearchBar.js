import React from "react";

export default function CommonSearchBar({ showExport = false, showIcon = false , onSearch }) {
    return (
        <>
            <div className="table-head d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
                <div className="position-relative">
                    <span className="search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M16.7499 16.75L13.4874 13.4875M15.25 9.25C15.25 12.5637 12.5637 15.25 9.25 15.25C5.93629 15.25 3.25 12.5637 3.25 9.25C3.25 5.93629 5.93629 3.25 9.25 3.25C12.5637 3.25 15.25 5.93629 15.25 9.25Z"
                                stroke="#818898" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <input type="text" className="form-control search-control" id="searchUsers" placeholder="Search"
                    onChange={(e) => onSearch(e.target.value)}
                    />
                </div>
                <div className="d-flex align-items-stretch justify-content-end gap-3">

                    {showExport && <button className="btn btn-outline-primary" type="button">
                        Export
                    </button>
                    }

                    {showIcon && <button className="btn btn-outline-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                            <path d="M5.55556 8.5H8.44444V7.16667H5.55556V8.5ZM0.5 0.5V1.83333H13.5V0.5H0.5ZM2.66667 5.16667H11.3333V3.83333H2.66667V5.16667Z" fill="#3085FE"></path>
                        </svg>
                    </button>
                    }
                </div>
            </div>
        </>
    )
}