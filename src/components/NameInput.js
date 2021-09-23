import React, { useState, useEffect, useRef } from "react";

function NameInput({socket}) {

    const [value,setValue] = useState("");

    
    const submitForm = (e)=> {
        e.preventDefault();
        socket.emit("setUsername", value);
        console.log('value:',value);
        setValue("");
    }
    return(
        <form onSubmit={submitForm}>
            <input
                autoFocus
                value={value}
                placeholder="set your name"
                onChange={(e) => {
                setValue(e.currentTarget.value);
                }}
            />
        </form>
    );
}

export default NameInput;