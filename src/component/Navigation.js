import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return(
        <div className="App-header">
            <Link to ='/'>Home</Link>
            <Link to = '/Items'>Items</Link>
        </div>
    )
}

export default Navigation