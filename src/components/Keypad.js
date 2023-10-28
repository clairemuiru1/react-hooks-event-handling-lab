// Code Keypad Component Here

import React from 'react'
function Keypad (){
    return (
        <div>
            <input type="text" value="Entering password..." onChange={e=>(e.target,value)}/>
        </div>
    )
}

export default Keypad;