import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import Menu from "@/Components/Atoms/Menu";

export default function Sidebar(){
    return(
        <div className="left-side-menu">
            <div className="h-100" data-simplebar>
                {/* User box */}
                <div className="user-box text-center">
                    <img src="../assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme" className="rounded-circle avatar-md" />
                    <div className="dropdown">
                        <a href="javascript: void(0);" className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block" data-bs-toggle="dropdown">Geneva Kennedy</a>
                        <div className="dropdown-menu user-pro-dropdown">
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fe-user me-1" />
                                <span>My Account</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fe-settings me-1" />
                                <span>Settings</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fe-lock me-1" />
                                <span>Lock Screen</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fe-log-out me-1" />
                                <span>Logout</span>
                            </a>
                        </div>
                    </div>
                    <p className="text-muted">Admin Head</p>
                </div>
                {/*- Sidemenu */}
                <div id="sidebar-menu">
                    <ul id="side-menu">
                        <li className="menu-title">Navigation</li>
                        <Menu
                            menu={
                                {
                                    name: 'Dashboard',
                                    icon: 'mdi-view-dashboard',
                                    link: route('dashboard'),
                                }
                            }
                        />

                        <li className="menu-title mt-2">Apps</li>

                        <Menu
                            menu={
                                {
                                    name: 'Data Siswa',
                                    icon: 'mdi mdi-account-multiple',
                                    link: '/users'
                                }
                            }
                            id={'users'}
                            submenu={[
                                {
                                    name: 'Tambah Siswa',
                                    link: route('siswa.tambah'),
                                },
                                {
                                    name: 'Data Siswa',
                                    link: route('siswa.semua'),
                                }
                            ]}
                            group={'siswa'}
                        />

                        <Menu
                            menu={
                                {
                                    name: 'Riwayat Pembayaran',
                                    icon: 'mdi mdi-cash-multiple',
                                    link: '/pembayaran'
                                }
                            }
                        />

                        <Menu
                            menu={
                                {
                                    name: 'Pengaturan Tarif',
                                    icon: 'mdi mdi-cash-lock',
                                    link: '/pembayaran'
                                }
                            }
                        />
                        <Menu
                            menu={
                                {
                                    name: 'Staff',
                                    icon: 'mdi mdi-account-group',
                                    link: '/staff'
                                }
                            }
                            id={'staff'}
                            submenu={[
                                {
                                    name: 'Tambah Staff',
                                    link: route('siswa.tambah'),
                                },
                                {
                                    name: 'Data Staff',
                                    link: route('siswa.semua'),
                                }
                            ]}
                            group={'staff'}
                        />
                        <li>
                            <a href="#pengaturan" data-bs-toggle="collapse">
                                <i className="mdi mdi-24px mdi-cogs" />
                                <span> Pengaturan </span>
                                <span className="menu-arrow"></span>

                            </a>
                            <div className="collapse" id="pengaturan">
                                <ul className="nav-second-level">
                                    <li>
                                        <a href="index.html">General</a>
                                    </li>
                                    <li>
                                        <a href="dashboard-2.html">Template Laporan</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link href="/">
                                <i className="mdi mdi-24px mdi-book-alert-outline" />
                                <span> Laporan </span>
                            </Link>
                        </li>


                    </ul>
                </div>
                {/* End Sidebar */}
                <div className="clearfix" />
            </div>
            {/* Sidebar -left */}
        </div>
    )
}
