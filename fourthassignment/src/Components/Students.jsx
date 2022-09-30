import { Link } from 'react-router-dom'
import React, { useState } from 'react'

export const Students = () => {
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
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Course</th>
                                <th>Batch</th>
                                <th>Change</th>
                            </tr>
                            <tr>
                                <td>Jhon</td>
                                <td>22</td>
                                <td>Java</td>
                                <td>May</td>
                                <td><Link to='/Edit' style={{ textDecoration: 'none' }}>Edit</Link></td>
                            </tr>
                            <tr>
                                <td>Jhon</td>
                                <td>22</td>
                                <td>Java</td>
                                <td>May</td>
                                <td><Link to='/Edit' style={{ textDecoration: 'none' }}>Edit</Link></td>
                            </tr>
                            <tr>
                                <td>Jhon</td>
                                <td>22</td>
                                <td>Java</td>
                                <td>May</td>
                                <td><Link to='/Edit' style={{ textDecoration: 'none' }}>Edit</Link></td>
                            </tr>
                            <tr>
                                <td>Jhon</td>
                                <td>22</td>
                                <td>Java</td>
                                <td>May</td>
                                <td><Link to='/Edit' style={{ textDecoration: 'none' }}>Edit</Link></td>
                            </tr>
                            <tr>
                                <td>Jhon</td>
                                <td>22</td>
                                <td>Java</td>
                                <td>May</td>
                                <td><Link to='/Edit' style={{ textDecoration: 'none' }}>Edit</Link></td>
                            </tr>
                            <tr>
                                <td>Jhon</td>
                                <td>22</td>
                                <td>Java</td>
                                <td>May</td>
                                <td><Link to='/Edit' style={{ textDecoration: 'none' }}>Edit</Link></td>
                            </tr>
                            <tr>
                                <td>Jhon</td>
                                <td>22</td>
                                <td>Java</td>
                                <td>May</td>
                                <td><Link to='/Edit' style={{ textDecoration: 'none' }}>Edit</Link></td>
                            </tr>
                            <tr>
                                <td>Jhon</td>
                                <td>22</td>
                                <td>Java</td>
                                <td>May</td>
                                <td><Link to='/Edit' style={{ textDecoration: 'none' }}>Edit</Link></td>
                            </tr>
                            <tr>
                                <td>Jhon</td>
                                <td>22</td>
                                <td>Java</td>
                                <td>May</td>
                                <td><Link to='/Edit' style={{ textDecoration: 'none' }}>Edit</Link></td>
                            </tr>
                            <tr>
                                <td>Jhon</td>
                                <td>22</td>
                                <td>Java</td>
                                <td>May</td>
                                <td><Link to='/Edit' style={{ textDecoration: 'none' }}>Edit</Link></td>
                            </tr>
                        </table>
                    </div>
         </div>   
    </div>)
}

