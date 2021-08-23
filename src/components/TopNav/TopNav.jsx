import React from 'react';
import {Link} from 'react-router-dom';

import Dropdown from '../Dropdown/Dropdown';
import './topnav.css'

import notifications from '../../assets/JsonData/notification.json';
import user_menu from '../../assets/JsonData/user_menus.json';
import user_image from '../../assets/img/logo.jpg' 
import ThemeMenu from '../ThemeMenu/ThemeMenu';

const curr_user = {
    display_name: 'Ghost Fury',
    image : user_image
}

const renderNotificationItem = (item, index) => (
    <div className="noti-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) =>(
    <div className="topnav__right-user">
        <div className="topnav__right-user__img">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to='/' key={index}>
        <div className="noti-item">
            <box-icon name={item.icon.slice(6)}></box-icon>
            <span>{item.content}</span>
        </div>
    </Link>
)

const TopNav = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type='text' placeholder='Search here...' />
                <box-icon name='search-alt-2'></box-icon>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown */}
                    <Dropdown
                    // icon = 'bx bx-user'
                    customToggle = {() => renderUserToggle(curr_user)}
                    contentData={user_menu}
                    renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                    {/* dropdown */}
                </div>
                <div className="topnav__right-item">
                    {/* setting theme */}
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    );
}

export default TopNav;
