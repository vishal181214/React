import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export const Edit = () => {
    return (
        <div className='main-nav'>
            <div className='menu-link'>
                <ul>
                    <li><Link to='/' style={{ textDecoration: 'none' }} className="menuColor">Home</Link></li>
                    <li><Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor">Students</Link></li>
                    <li><Link to='/Contact' style={{ textDecoration: 'none' }} className="menuColor">Contact Us</Link></li>
                </ul>
            </div>
            <div className='contentDiv'>
                <div className='inputField'>
                <fieldset>
                    <legend>Name</legend>
                    <input type="text" name="name"  />
                </fieldset>
                <fieldset>
                    <legend>Age</legend>
                    <input type="text" name="age" />
                </fieldset>
                <fieldset>
                    <legend>Course</legend>
                    <input type="text" name="course"  />
                </fieldset>
                <fieldset>
                    <legend>Batch</legend>
                    <input type="text" name="batch"  />
                </fieldset>
                </div>
                <div className='bttnClass'>
                <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='canBtn'>Cancel</button></Link>
                <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='upbtn'>Update</button></Link>
                </div>
            </div>
        </div>
    )
}  

