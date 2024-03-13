import React, { useEffect, useState } from "react";
import axios from 'axios';
import { debounce } from 'lodash';


function Interview(){
    const[search, setSearch] = useState('')
    const [nameList, setNameList] = useState([]);
    const debouncedEnterName = debounce((value) => {
        setSearch(value);
    }, 300);

    function enterName(e) {
        debouncedEnterName(e.target.value);
    }
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=500`)
        .then((result)=>{
            const val = result.data.results
            console.log(val)
            setNameList(val)
        })
    },[])

    return(
        <div>
        <input type ='text' placeholder="enter text" onChange={enterName}></input>
        {nameList.filter((item)=>{
             if(search===''){
                return item
             }else if(item.name.toLowerCase().includes(search.toLowerCase())){
                return item
             }
        })
        .map((item)=>{
            return <div key={item.name}><h4>{item.name}</h4></div>
        })}
        </div>
    )
}

export default Interview