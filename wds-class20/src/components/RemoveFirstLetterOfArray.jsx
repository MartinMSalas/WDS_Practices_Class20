import React, { useState } from 'react'

function RemoveFirstLetterOfArray(props) {
    //Add the ability to remove the first element from the array  
    const [show,setShow] = useState(true)
    const [newArray, setNewArray] = useState(props.array)
    const [newArraySend, setNewArraySend] = useState([])
    function removeFirstLetter(){
        console.log(newArray)
        const newArray2 = newArray.slice(1)

        
        setNewArraySend(newArray2)
    }
    return (
        <div>
        
            <button onClick={removeFirstLetter}> RemoveFirstLetterOfArray </button>
            { 
                show &&
                <span> {newArraySend.map((item,index) => index != newArray.length -1 ? <span key={item}> {item}, </span> : <span key={item}> {item} </span> )}</span>
            }
            
        </div>
    )
}

export default RemoveFirstLetterOfArray