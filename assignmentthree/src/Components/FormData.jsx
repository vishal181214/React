import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

export const FormData = () => {
    const [list,setList] = useState([]);
    // let newlist = [];
    const location = useLocation();
    const urlParam = new URLSearchParams(location.search);
    
   const name = urlParam.get("name");
   const depart = urlParam.get("derpat");
   const rate = urlParam.get("rate");
   const data = [{"name":name,"depart":depart,"rate":rate}];
   useEffect(()=>{
    console.log("Inside useEffect");
    setList({"name":name,"depart":depart,"rate":rate});
    // const updateArray = list;
    // list.push({name:name,depart:depart,rate:rate});
    // setList({list:updateArray});
    // setList(oldArray =>[...oldArray,{"name":name,"depart":depart,"rate":rate}]);
//     newlist = [...list]
//     newlist.push(data);
//     setList(newlist);
    },[])
    console.log(list);
//     console.log(newlist);
    return(
        <div>
            <div>
                {/* {list.map(({item,index}) =>{ */}
                    <div>
                        <span>Name : {name} | </span>
                        <span>Department : {depart} | </span>
                        <span>Rating : {rate}</span>
                    </div>
                  {/* })} */}
            </div>
        </div>
    )
}