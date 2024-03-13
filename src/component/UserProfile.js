import React from "react"

function UserProfile(props){
    const {name, age, location} =  props
    return(
        <h1>Name:{name}, Age:{age}, Location:{location}</h1>
    )
}

export default UserProfile