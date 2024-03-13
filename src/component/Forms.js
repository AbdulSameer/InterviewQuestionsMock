    import React, { useState } from "react";

    function Forms() {
    const [firstName, setFirstName] = useState("");
    function handleChange(e) {
        //setFirstName(e.target.value)
        console.log(e)
    }
    return (
        <div>
        <form>
            <h1>This is a form</h1>
            <label>FirstName</label>
            <input type="text" onChange={handleChange} value={firstName} />
        </form>
        </div>
    );
    }

    export default Forms;
