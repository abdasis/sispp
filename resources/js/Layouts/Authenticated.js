import React, { useState } from 'react';
import Navbar from "@/Organisms/Navbar";
import Sidebar from "@/Organisms/Sidebar";
import Footer from "@/Organisms/Footer";
import {Link, usePage} from "@inertiajs/inertia-react";
import {toast, ToastContainer} from "react-toastify";

export default function Authenticated({ auth, header, children, breadcrumbs }) {
    const { flash } = usePage().props

   /* if (flash.message){

        if (flash.message.type == 'berhasil') {
            toast.success(flash.message.text, {
                position: toast.POSITION.TOP_RIGHT
            });
        } else if (flash.message.type == 'gagal') {
            toast.error(flash.message.text, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }*/

    return (
        <div id="wrapper">
            <ToastContainer />

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
                                            {
                                                breadcrumbs.map((breadcrumb) =>
                                                    <li className={breadcrumb.url == null ? 'breadcrumb-item active' : 'breadcrumb-item'}>
                                                        <Link href={breadcrumb.url}>{breadcrumb.label}</Link>
                                                    </li>
                                                )
                                            }
                                        </ol>
                                    </div>
                                    <h4 className="page-title">{header}</h4>
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
