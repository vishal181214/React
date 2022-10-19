import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

export const Students = () => {
    let stud  = useSelector(state => state.Students);

    return (<div className='main-nav'>
        <div className='menu-link'>
            <ul>
                <li><Link to='/' style={{ textDecoration: 'none' }} className="menuColor">Home</Link></li>
                <li><Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor">Students</Link></li>
                <li><Link to='/Contact' style={{ textDecoration: 'none' }} className="menuColor">Contact Us</Link></li>
            </ul>
        </div>
        <div className='contentDiv'>
            <div className='head'>
                <h1>Students Details</h1>
                <button className='btn'><Link to='/AddStudent' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }}>Add new Student</Link></button>
            </div>
                    <div>
                        <table className='tableData' style={{borderRadius: "30px",borderSpacing: "0px"}}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Course</th>
                                <th>Batch</th>
                                <th>Change</th>
                            </tr>
                            <tr className='dat'>
                                <td>Jhon</td>
                                <td>22</td>
                                <td>Java</td>
                                <td>May</td>
                                <td><Link to='/Edit' style={{ textDecoration: 'none' }} className='dat'>Edit</Link></td>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                   stud.map((item) => (
                                    <tr className='dat'>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                        <td><Link to={{pathname:`/Edit`, search:`?n=${item[4]}`}} style={{ textDecoration: 'none'}} className='dat'>Edit</Link></td>
                                    </tr>
                                   )) 
                                }
                            </tbody>
                        </table>
                    </div>
         </div>   
    </div>)
}

