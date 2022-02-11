import React, { useState } from 'react';
import Navbar from "@/Organisms/Navbar";
import Sidebar from "@/Organisms/Sidebar";
import Footer from "@/Organisms/Footer";

export default function Authenticated({ auth, header, children, breadcrumb }) {
    return (
        <div id="wrapper">
            {/* Topbar Start */}
            <Navbar auth={auth}/>
            {/* end Topbar */}
            {/* ========== Left Sidebar Start ========== */}
            <Sidebar/>
            {/* Left Sidebar End */}
            {/* ============================================================== */}
            {/* Start Page Content here */}
            {/* ============================================================== */}
            <div className="content-page">
                <div className="content">
                    {/* Start Content*/}
                    <div className="container-fluid">
                        {/* start page title */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item">
                                                <a href="javascript: void(0);">Dahboard</a>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <a href="javascript: void(0);">Siswa</a>
                                            </li>
                                            <li className="breadcrumb-item active">Semua Siswa</li>
                                        </ol>
                                    </div>
                                    <h4 className="page-title">Dashboard</h4>
                                </div>
                            </div>
                        </div>
                        {/* end page title */}
                        {children}
                    </div>
                    {/* container */}
                </div>
                {/* content */}
                {/* Footer Start */}
                <Footer />
                {/* end Footer */}
            </div>
            {/* ============================================================== */}
            {/* End Page content */}
            {/* ============================================================== */}
        </div>
    );
}
