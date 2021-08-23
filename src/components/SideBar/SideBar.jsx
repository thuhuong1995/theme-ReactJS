import React from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css';

import logo from '../../assets/img/banner.png';
import sidebar_items from '../../assets/JsonData/sidebar_routes.json';

const SidebarItem = props =>{
    const active = props.active ? 'active' : '' ;
   const nameIcon = props.icon.slice(6);

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <box-icon name={nameIcon} ></box-icon>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

const SideBar = props => {
   
const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname);

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="logo company" />
            </div>
            {
                sidebar_items.map((item, index)=> (
                 <Link to={item.route} key={index}>
                    <SidebarItem 
                     title = {item.display_name}
                     icon= {item.icon}
                     active = {index === activeItem}
                    >
                    </SidebarItem> 
                 </Link>
                ))
            }
        </div>
    );
}

export default SideBar;
