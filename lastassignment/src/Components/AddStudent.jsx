import { Link } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { addStudent } from '../Container/Action'
export const AddStudent = () => {

    let count = useSelector(state => state.count);
    let dispatch = useDispatch();
    let list = [];

    const handleData = () =>{
        list.push(count+1);
        dispatch(addStudent(list));
        console.log(list);
    }
     
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
                    <input type="text" id="name" name="name" onChange={(e) => {list[0] = e.target.value}} />
                </fieldset>
                <fieldset>
                    <legend>Age</legend>
                    <input type="text" id="age" name="age" onChange={(e) => {list[1] = e.target.value}}/>
                </fieldset>
                <fieldset>
                    <legend>Course</legend>
                    <input type="text" id="course" name="course" onChange={(e) => {list[2] = e.target.value}}/>
                </fieldset>
                <fieldset>
                    <legend>Batch</legend>
                    <input type="text" id="batch" name="batch" onChange={(e) => {list[3] = e.target.value}}/>
                </fieldset>
                </div>
                <div className='bttnClass'>
                <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='canBtn'>Cancel</button></Link>
                <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='upbtn' onClick={handleData}>Add</button></Link>
                </div>
            </div>
        </div>
    )
}  

