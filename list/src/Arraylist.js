import React from 'react'

function Arraylist() {

    const fruits=["Apple","Banana","Papaya","Date","Apple"]

  return (
    <>
        <div>
          <ol>
            {fruits.map(x => <li key={x}> {x} </li>)}
          </ol>
            
            
        </div>
    </>
  )
}

export default Arraylist