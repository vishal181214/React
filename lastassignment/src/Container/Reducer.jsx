import { ADD_STUDENT, EDIT_STUDENT } from "./Constant";

const initial ={
    Students : [],
    count: 0
}

const Reducer = (state=initial,action) => {
    switch(action.type){
        case ADD_STUDENT: return{...state,count:state.count+1,Students:[...state.Students, action.payload]};
        case EDIT_STUDENT:{ let data = state;
                            if(action.payload1 !== "")
                            {
                                data.Students[action.idex][0] = action.payload1;
                            }
                            if(action.payload2 !== "")
                            {
                                data.Students[action.index][1] = action.payload2;
                            }
                            if(action.payload3 !== "")
                            {
                                data.Students[action.index][2] = action.payload3;
                            }
                            if(action.payload4 !== "")
                            {
                                data.Students[action.index][3] = action.payload4;
                            }

                            return data;
                           }
        default: return state;
    }
}

export default Reducer;