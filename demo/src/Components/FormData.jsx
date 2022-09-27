import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
// import {Link} from 'react-router-dom'

export const FormData = (props) => {
    const [list,setList] = useState([]);
    const location = useLocation();
    const urlParam = new URLSearchParams(location.search);
    // console.log(urlParam);
    urlParam.get("name");
    urlParam.get("derpat");
    urlParam.get("rate");
    // console.log(location, urlParam.get("name"));
   const name = urlParam.get("name");
   const depart = urlParam.get("derpat");
   const rate = urlParam.get("rate");
   const data = [{"name":name,"depart":depart,"rate":rate}];
   console.log(data);
    useEffect(()=>{
        setList([...list,data]);
    },[])
    console.log(list);
//    props.getData(list);
//    console.log(arr);
    return(
        // <h4>On user display page</h4>
        <div>
            {/* <h4>Data is</h4>
            {
                <div>
                   { props.map((a) =>{
                    <div>
                        <span>Name : {a.props.state.name} | </span>
                        <span>Department : {a.props.state.depart} | </span>
                        <span>Rateing : {a.props.state.rate}</span>
                    </div>
                    })}
                </div>
            } */}
            <div>
                {list.map((item) =>{
                    <div>
                        <span>Name : {item.name} | </span>
                        <span>Department : {item.depart} | </span>
                        <span>Rating : {item.rate}</span>
                    </div>
                 })}  
            </div>
        </div>
    )
}