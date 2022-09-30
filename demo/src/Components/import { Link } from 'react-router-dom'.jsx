import { Link } from 'react-router-dom'
import React, { useState } from 'react'

export const Students = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [batch, setBatch] = useState('');
    const [list, setList] = useState('');

    const handleSubmit = (e) => {
        const data = {name,age,course,batch };
        if (name && age && course && batch) 
        {
            setList((ls) => [...ls, data]);
            setName('');
            setAge('');
            setCourse('');
            setBatch('');
        }
    }
    console.log(list);
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

            {<>
                { list.map((item) =>
                    <>
                        <table className='tableData'>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Course</th>
                                <th>Batch</th>
                                <th>Change</th>
                            </tr>
                            <tr>
                                <td>{name}</td>
                                <td>{age}</td>
                                <td>{course}</td>
                                <td>{batch}</td>
                                <td><Link to='/Edit' style={{ textDecoration: 'none' }}>Edit</Link></td>
                            </tr>
                        </table>
                    </>
                )}
            </>}

            <div className='contentDiv'>
                <div className='inputField'>
                    <fieldset>
                        <legend>Name</legend>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
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
                    {/* <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='canBtn'>Cancel</button></Link> */}
                    {/* <Link to={{pathname:'/Students',search:`name=${fname}&age=${age}&course=${course}&batch=${batch}`}} style={{ textDecoration: 'none' }} className="menuColor"><button className='upbtn'>Add</button></Link> */}
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
           

        </div>
    </div>)
}

// export default Students;