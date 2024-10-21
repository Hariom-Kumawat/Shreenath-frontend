import React from "react";
import Header from "./Header";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


export default function Layout() {
  

    return (
        <>
        {/* <Header/> */} 
        {/* if admin then show this sidebar else show user's sidebar */}
        <Header/>
          <Sidebar/>
           <Outlet/>
        </>
    )
}