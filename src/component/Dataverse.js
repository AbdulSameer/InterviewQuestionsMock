import React, { useEffect, useState } from "react";
import axios from "axios";
import { debounce } from 'lodash';

function Dataverse(){
    const [search, setSearch] = useState('')
    const [name, setName] = useState([])
    const[count,setCount] = useState(0)

    const debounceConcept = debounce((value)=>{
        setSearch(value)
        increment()
    },1000)

    function increment(){
        setCount(count+1)
    }

    function enterName(e){
        debounceConcept(e.target.value)
       
    }

    useEffect(()=>{
        axios.get(`https://demo.dataverse.org/api/search?q=hello`)
        .then(res=>{
            const items = res.data.data.items
            const nameMap =  items.map(item=>item.name)
            setName(nameMap)
        })
    },[])
    return(
        <div>
        <input type ='text' onChange={enterName}/>
        <h4 onChange={increment}>No of API calls {count}</h4>

        {name.filter((list)=>{
            if(search===''){
                return list
            }else if(list.toLowerCase().includes(search.toLowerCase())){
                return list
             }
        })
        .map(name=>(
            <h3 key={name}>{name}</h3>
        ))}
        </div>
    )
}

export default Dataverse