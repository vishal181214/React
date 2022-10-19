import { AddStudent } from '../Components/AddStudent'
import Students from '../Components/Students'
import {Edit} from '../Components/Edit'
const initial ={
    students:[]
}

const Reducer = (state="",action)=>{
    switch(action){
        case AddStudent: return <AddStudent />
        case Edit: return <Edit />
        default: return <Students />
    }
}

export default Reducer;