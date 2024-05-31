import React from 'react';
import { branches } from '../data.js';
import Sidebar from './Sidebar';
import './table.css';
export default function Branches() {

    return (
        <>
            <Sidebar />
            <div className="tableCont">
                <table>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Employees</th>
                    </tr>
                    {branches.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.location}</td>
                        <td>{val.Employees}</td>
                        </tr>
                    )
                    })}
                </table>
            </div>
        </>
    )
}

