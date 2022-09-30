import React, { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
export const Students = () => {
    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    // const [course, setCourse] = useState('');
    // const [batch, setBatch] = useState('');
    const [list, setList] = useState([]);
    // const location = useLocation();
    // const urlParam = new URLSearchParams(location.search);
    // const fname = urlParam.get('fname');
    // const age = urlParam.get('age');
    // const course = urlParam.get('course');
    // const batch = urlParam.get('batch');
    const params = useParams();
    const fname = params.fname;
    const age = params.age;
    const course = params.course;
    const batch = params.batch;

    // const handleChange = (event) => {
    //     setName(event.target.value);
    // }

    // const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(fname, age, course, batch);
        const data = { fname, age, course, batch };
        if (fname && age && course && batch) {
            setList((ls) => [...ls, data])
            // setName('');
            // setAge('');
            // setCourse('');
            // setBatch('');
        }
    // }
    console.log(list);
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
            <div className='head'>
                <h1>Students Details</h1>
                <button className='btn'><Link to='/AddStudent' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }}>Add new Student</Link></button>
            </div>
                {/*<div className='inputField'>
                    <fieldset>
                        <legend>Name</legend>
                        <input type="text" name="name" style={{backgroundColor:'white'}}value={name} onChange={handleChange} />
                    </fieldset>
                    <fieldset>
                        <legend>Age</legend>
                        <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend>Course</legend>
                        <input type="text" name="course" value={course} onChange={(e) => setCourse(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend>Batch</legend>
                        <input type="text" name="batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
                    </fieldset>
                </div>
                <div className='bttnClass'>
                    <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='canBtn'>Cancel</button></Link>
                    <Link to={{pathname:'/Students',search:`name=${name}&age=${age}&course=${course}&batch=${batch}`}} style={{ textDecoration: 'none' }} className="menuColor"><button className='upbtn'>Add</button></Link>
                </div>
                <button onClick={handleSubmit} >Submit</button>*/}
            </div> 
                {
                    <div>
                        <div className='showData' style={{ marginTop: '440px', width: '320%' }}>
                            <table className='tableData' style={{ marginRight: '20%' }}>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Course</th>
                                    <th>Batch</th>
                                    <th>Change</th>
                                </tr>
                                {list.map((a) => 
                                    <tr>
                                        <td>{a.fname}</td>
                                        <td>{a.age}</td>
                                        <td>{a.course}</td>
                                        <td>{a.batch}</td>
                                        <td><Link to='/Edit' style={{ textDecoration: 'none' }}>Edit</Link></td>
                                    </tr>)}
                                    {/* <tr>
                                        <td>Happy</td>
                                        <td>22</td>
                                        <td>java</td>
                                        <td>June</td>
                                        <td><Link to='/Edit' style={{ textDecoration: 'none' }}>Edit</Link></td>
                                    </tr> */}
                            </table>

                            {/* <button className=''>Back</button> */}
                        </div>
                    </div>
                }
            </div>
            )    
}