import React, { useState } from 'react'

//Each of the functions that I ask you to create should have a button rendered in the JSX that executes that function and the JSX 
//should also render the array as a comma separated string.
//     Create state that stores an array with the initial value of ["A", "B", "C"]

function CreateArrayWithInitialValues(props) {
  const [arrayCreated, setArrayCreated]   = useState(["A", "B", "C"])
  const [showArray, setShowArray] = useState(false)

  function buttonShowArrayClic () {
    props.storeArrayOfLetters(arrayCreated)
    setShowArray(!showArray)    
  }
  return (
    <div>
        <button onClick={buttonShowArrayClic} >showArray </button>
        {console.log(showArray)}
        { showArray &&
            <span> {arrayCreated.map((item,index) => index != arrayCreated.length -1 ? <span key={item}> {item}, </span> : <span key={item}> {item} </span> )}</span>
        }
  
    </div>
  )
}

export default CreateArrayWithInitialValues