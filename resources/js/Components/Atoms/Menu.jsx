import React from "react";
import {Link} from "@inertiajs/inertia-react";

export default function Menu(props) {
    let submenu = null;
    if (props.submenu == null)
    {
        submenu = false;
    }else{
        submenu = true
    }
    return(
        <>
            {submenu == false ?
                <li className={window.location.href == props.menu.link ? 'menuitem-active' : ''}>
                    <Link href={props.menu.link}>
                        <i className={props.menu.icon + ' mdi mdi-24px'} />
                        <span> {props.menu.name} </span>
                    </Link>
                </li>
                :
                <li className={route().current(props.group+'.*') == true ? 'menuitem-active' : 'menuitem-nonactive'}>
                    <Link href={'#'+props.id} data-bs-toggle="collapse">
                        <i className={ props.menu.icon + ' mdi mdi-24px '} />
                        <span> {props.menu.name} </span>
                        <span className="menu-arrow"></span>
                    </Link>
                    <div className={route().current(props.group+'.*') == true ? 'collapse show' : 'collapse'} id={props.id}>
                        <ul className="nav-second-level">
                            {props.submenu.map((menu, index) => (
                                <li key={index} className={window.location.href == menu.link ? 'menuitem-active' : ''}>
                                    <Link href={menu.link}>
                                        <span> {menu.name} </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            }
        </>
    )
}
