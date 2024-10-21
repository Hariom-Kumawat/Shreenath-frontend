import React from "react";
import { Link } from "react-router-dom";

export default function Pagination() {
    return (
        <>
            <div className="">
                <nav className="paggination-nav" aria-label="Page navigation example">
                    <ul className="paggination">
                        <li className="page-item">
                            <Link className="page-link" to="#" aria-label="Previous">
                                <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 20 20" fill="none">
                                    <path d="M11.8002 13.6004L8.2002 10.0004L11.8002 6.40039" stroke="#666D80"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></span>
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link active" to="#">1</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">2</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">3</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">...</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">7</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#" aria-label="Next">
                                <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 20 20" fill="none">
                                    <path d="M8.2002 13.6004L11.8002 10.0004L8.2002 6.40039" stroke="#666D80"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}