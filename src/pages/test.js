import React from 'react'
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import '../App.css'
function Test() {
  return (
    <>
    <div className="flex h-screen bg-gray-100">
        <sidebar className="h-screen  w-[18%] sidebar_bg">{<Sidebar/>}</sidebar>
        <div className="flex flex-col h-full w-[82%] items-center ">
        <header className="h-[3rem] w-full bg-white border-b">{<Header/>}</header>
        </div>
    </div>
    </>
  )
}

export default Test