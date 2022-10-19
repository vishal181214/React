import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { editStudent } from '../Container/Action'

const Edit = () => {

    let Stud = useSelector(state => state.Students);
    console.log(Stud);
    let dispatch = useDispatch();
    let location = useLocation();
    const params = new URLSearchParams(location.search);
    let index = params.get('n') - 1;
    let Fname="",Age="",Course="",Batch="";
    
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
                    <input type="text" name="name" defaultValue={Stud[index][0]} onChange={(e) => { Fname = e.target.value}} />
                </fieldset>
                <fieldset>
                    <legend>Age</legend>
                    <input type="text" name="age" defaultValue={Stud[index][1]} onChange={(e) => { Age = e.target.value}}/>
                </fieldset>
                <fieldset>
                    <legend>Course</legend>
                    <input type="text" name="course"  defaultValue={Stud[index][2]} onChange={(e) => { Course = e.target.value}}/>
                </fieldset>
                <fieldset>
                    <legend>Batch</legend>
                    <input type="text" name="batch"  defaultValue={Stud[index][3]} onChange={(e) => { Batch = e.target.value}}/>
                </fieldset>
                </div>
                <div className='bttnClass'>
                <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='canBtn'>Cancel</button></Link>
                <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='upbtn' onClick={()=>{dispatch(editStudent(Fname,Age,Course,Batch,index))}}>Update</button></Link>
                </div>
            </div>
        </div>
    )
} 


export default Edit;

