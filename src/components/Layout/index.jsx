import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import './layout.css'
import Routes from '../Routes';

import SideBar from '../SideBar/SideBar';
import TopNav from '../TopNav/TopNav';

import ThemeAction from '../../redux/actions/ThemeAction'

const Layout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');
        const themeColor = localStorage.getItem('themeColor', 'theme-mode-light');

        dispatch(ThemeAction.setMode(themeClass));
        dispatch(ThemeAction.setColor(themeColor));
    }, [dispatch]) 

    return (
        <Router>
            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <SideBar {...props}/>
                <div className="layout__content">
                    <TopNav/>
                    <div className="layout__content-main">
                        <Routes />
                    </div>
                </div>
            </div>
            )} />
        </Router>
    );
}

export default Layout;
