import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/Atoms/ApplicationLogo";
import Avatar from "react-avatar";

export default function Navbar(auth) {
    return (
        <div className="navbar-custom">
            <div className="container-fluid">
                <ul className="list-unstyled topnav-menu float-end mb-0">
                    <li className="d-none d-lg-block">
                        <form className="app-search">
                            <div className="app-search-box dropdown">
                                <div className="input-group">
                                    <input type="search" className="form-control" placeholder="Search..."
                                           id="top-search"/>
                                    <button className="btn input-group-text" type="submit">
                                        <i className="fe-search"/>
                                    </button>
                                </div>
                                <div className="dropdown-menu dropdown-lg" id="search-dropdown">
                                    {/* item*/}
                                    <div className="dropdown-header noti-title">
                                        <h5 className="text-overflow mb-2">Found 22 results</h5>
                                    </div>
                                    {/* item*/}
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="fe-home me-1"/>
                                        <span>Analytics Report</span>
                                    </a>
                                    {/* item*/}
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="fe-aperture me-1"/>
                                        <span>How can I help you?</span>
                                    </a>
                                    {/* item*/}
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="fe-settings me-1"/>
                                        <span>User profile settings</span>
                                    </a>
                                    {/* item*/}
                                    <div className="dropdown-header noti-title">
                                        <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                                    </div>
                                    <div className="notification-list">
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="d-flex align-items-start">
                                                <img className="d-flex me-2 rounded-circle"
                                                     src="../assets/images/users/user-2.jpg"
                                                     alt="Generic placeholder image" height={32}/>
                                                <div className="w-100">
                                                    <h5 className="m-0 font-14">Erwin E. Brown</h5>
                                                    <span className="font-12 mb-0">UI Designer</span>
                                                </div>
                                            </div>
                                        </a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="d-flex align-items-start">
                                                <img className="d-flex me-2 rounded-circle"
                                                     src="../assets/images/users/user-5.jpg"
                                                     alt="Generic placeholder image" height={32}/>
                                                <div className="w-100">
                                                    <h5 className="m-0 font-14">Jacob Deo</h5>
                                                    <span className="font-12 mb-0">Developer</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </li>
                    <li className="dropdown d-inline-block d-lg-none">
                        <a className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                           data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="fe-search noti-icon"/>
                        </a>
                        <div className="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                            <form className="p-3">
                                <input type="text" className="form-control" placeholder="Search ..."
                                       aria-label="Recipient's username"/>
                            </form>
                        </div>
                    </li>
                    <li className="dropdown d-none d-lg-inline-block">
                        <a className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                           data-toggle="fullscreen" href="#">
                            <i className="fe-maximize noti-icon"/>
                        </a>
                    </li>
                    <li className="dropdown notification-list topbar-dropdown">
                        <Link className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
                           data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <Avatar name={auth.auth.user.name}  size={40} round="50%" textSizeRatio={2.50}/>
                            <span className="pro-user-name ms-1">
                              {auth.auth.user.name} <i className="mdi mdi-chevron-down"/>
                            </span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end profile-dropdown">
                            {/* item*/}
                            <div className="dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fe-user"/>
                                <span>My Account</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fe-settings"/>
                                <span>Settings</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fe-lock"/>
                                <span>Lock Screen</span>
                            </a>
                            <div className="dropdown-divider"/>
                            {/* item*/}
                            <Link href={route('logout')} className="dropdown-item notify-item">
                                <i className="fe-log-out"/>
                                <span>Logout</span>
                            </Link>
                        </div>
                    </li>
{/*
                    <li className="dropdown notification-list">
                        <a href="javascript:void(0);" className="nav-link right-bar-toggle waves-effect waves-light">
                            <i className="fe-settings noti-icon"/>
                        </a>
                    </li>
*/}
                </ul>
                {/* LOGO */}
                <div className="logo-box">
                    <Link href={route('dashboard')} className="logo logo-dark text-center">
          <span className="logo-sm">
              <ApplicationLogo/>
              {/* <span class="logo-lg-text-light">UBold</span> */}
          </span>
                        <span className="logo-lg">
              <ApplicationLogo/>
                            {/* <span class="logo-lg-text-light">U</span> */}
          </span>
                    </Link>
                    <Link href={route('dashboard')} className="logo logo-light text-center">
          <span className="logo-sm">
              <ApplicationLogo/>
          </span>
                        <span className="logo-lg">
              <ApplicationLogo/>
          </span>
                    </Link>
                </div>
                <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                    <li>
                        <button className="button-menu-mobile waves-effect waves-light">
                            <i className="fe-menu"/>
                        </button>
                    </li>
                    <li>
                        {/* Mobile menu toggle (Horizontal Layout)*/}
                        <a className="navbar-toggle nav-link" data-bs-toggle="collapse"
                           data-bs-target="#topnav-menu-content">
                            <div className="lines">
                                <span/>
                                <span/>
                                <span/>
                            </div>
                        </a>
                        {/* End mobile menu toggle*/}
                    </li>
                </ul>
                <div className="clearfix"/>
            </div>
        </div>
    )
}
