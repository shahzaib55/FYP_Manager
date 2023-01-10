import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import MainRout from "../Routes/mainRoute";
import Breadcrumb from "../components/breadcrumbs";

import "../App.css";
export default function Dashboard() {

  return (
    <>
      
      <div className="flex h-screen bg-gray-100 ">
        <sidebar className="h-screen  w-[18%] sidebar_bg stick">
          <Sidebar />
        </sidebar>
        <div className="flex flex-col h-full w-[82%] items-center">
          <header className="h-[9%] w-full bg-white border-b border-b-gray-50">
            <Header />
          </header>
          <main className="w-full h-[91%] bg-gray-100">
            {/* <Breadcrumb /> */}
            <MainRout />
          </main>
        </div>
      </div>

    </>
  );
}
