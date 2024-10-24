import React from "react";
import { Link } from "react-router-dom";

export default function CommonHeader({tittle , routesLink , linkName , icon}) {
    return (
        <>
            <div className="content-head mb-5 d-flex align-items-start justify-content-between">
                <h1 className="mb-0">{tittle}</h1>
                <div className="d-flex align-items-center gap-3">

                    <Link to={routesLink} role="button" className={icon ? "btn btn-outline-primary px-5" : "btn btn-primary"}>
                    
                       <span>
                            <i className={icon}></i>
                        </span> 
                        {linkName}
                    </Link>
                </div>
            </div>
        </>
    )
}