import React from 'react';
import { food } from '../data.js';
import Sidebar from './Sidebar';
import './table.css';
export default function Products() {

    return (
        <>
            <Sidebar />
            <div className="tableCont">
                <table>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Payment Method</th>
                    </tr>
                    {food.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>₱{val.price}</td>
                        <td>{val.payment}</td>
                        </tr>
                    )
                    })}
                </table>
            </div>
        </>
    )
}

