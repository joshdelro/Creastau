import React from 'react';
import './Sidebar.css';

import { Link } from 'react-router-dom';


export default function SidebarEmp() {

    return (
        <>
        <div className="sidenav">
            <Link to="/ProductsEmp" className="link">Products</Link>
            <Link to="/NonFoodEmp" className="link">Non Food Items</Link>
            <Link to="/" className="link2">Logout</Link>
        </div>
        </>
    )
}

