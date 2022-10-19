import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { add } from '../Container/Info'
import Navbar from './Navbar'
const Students = () => {
    const [student] = useContext(add);
    return (
    <div className='main-nav'>
        <div className='menu-link'>
            <Navbar />
        </div>
        <div className='contentDiv'>
            <div className='head'>
                <h1 className='dat'>Students Details</h1>
                <button className='btn'><Link to='/AddStudent' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }}>Add new Student</Link></button>
            </div>
            <div>
                <table className='tableData' style={{ borderRadius: "30px", borderSpacing: "0px" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>Batch</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.map((stud) =>
                                (<tr key={stud.id} className='dat'>
                                    <td>{stud.name}</td>
                                    <td>{stud.age}</td>
                                    <td>{stud.course}</td>
                                    <td>{stud.batch}</td>
                                    <td><Link to={`/Edit/${stud.id}`} style={{ textDecoration: 'none'}} className='dat'>Edit</Link></td>
                                </tr>)
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}

export default Students;

