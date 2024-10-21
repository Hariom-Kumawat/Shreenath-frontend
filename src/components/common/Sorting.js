import React from "react";
import { Link } from "react-router-dom";

export default function Sorting() {
    return (
        <>

            <div className="sorted">
                <h5>Sort by:</h5>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        30
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M6.40039 8.19922L10.0004 11.7992L13.6004 8.19922" stroke="#36394A" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </button>
                    <ul className="dropdown-menu shadow-lg">
                        <li><Link className="dropdown-item" to="#">10</Link></li>
                        <li>
                            <Link className="dropdown-item" to="#">20</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="#">30</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="#">40</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}