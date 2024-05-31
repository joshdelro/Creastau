import React from 'react';
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
                    
                </table>
            </div>
        </>
    )
}

