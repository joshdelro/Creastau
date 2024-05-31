import React from 'react';
import './Sidebar.css';

import { Link } from 'react-router-dom';

var dropdown = document.getElementsByClassName("dropdown-btn");
export default function Sidebar() {
    var i;

    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        } else {
        dropdownContent.style.display = "block";
        }
    });
    }

    return (
        <>
        <div className="sidenav">
            <Link to="/Products" className="link">Products</Link>
            <Link to="/NonFood" className="link">Non Food Items</Link>
            <Link to="/Products" className="link">Promos</Link>
            <Link to="/Branches" className="link">Branches</Link>
            <Link to="/Branches" className="link">Branches</Link>          
            
            <button className="dropdown-btn">Create Report</button>
            <Link to="/" className="link2">Logout</Link>
        </div>

       
        </>
    )
}

