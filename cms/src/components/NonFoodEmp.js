import React from 'react';
import { nonFood } from '../data.js';
import SidebarEmp from './SidebarEmp';
import './table.css';
export default function NonFood() {

    return (
        <>
            <SidebarEmp />
            <div className="tableCont">
                <table>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Stock</th>
                
                    </tr>
                    {nonFood.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.Stock}</td>
                        
                        </tr>
                    )
                    })}
                </table>
            </div>
        </>
    )
}

