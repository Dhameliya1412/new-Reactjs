import React, { useState } from 'react'
import Data from "./TableEffect";

export default function Table() {
    const [data] = useState(Data)
    console.log(Data, "Task4")
    return (
        <table className="table-fixed bg-black" style={{ width: "100%", fontWeight: "600" }}>
            <thead>
                <tr style={{ backgroundColor: "darkblue", color: "white", height: "40px" }}>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {data.map((cvalue) => {
                    return (<>
                        <tr style={{ backgroundColor: "lightblue", height: "40px", textAlign: "center" }}>
                            <td>{cvalue.id}</td>
                            <td>{cvalue.name}</td>
                            <td>{cvalue.email}</td>
                            <td>{cvalue.city}</td>
                            <td>{cvalue.phone}</td>
                        </tr>
                    </>)
                })}
            </tbody>
        </table>
    )
}

