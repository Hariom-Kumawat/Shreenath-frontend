import React from "react";
import Sidebar from "./Sidebar";
import Header from "../Admin/Header";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
    return (
        <>
             <Header />
              <Sidebar />
            <Outlet />
        </>
    )
}
