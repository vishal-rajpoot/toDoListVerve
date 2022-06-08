import { useState } from "react"
import React  from 'react'
import Pending from "./Pending";
import Completed from "./Completed";


const Todolist = ({itemValue, id, deleteitems}) => {
  // const [style, setStyle] = useState('styling');  
  
  return (
    <div className="seperate-components">
      <Pending itemValue={itemValue} id={id} deleteitems={deleteitems}/>
      {/* <Completed itemValue={itemValue} id={id} deleteitems={deleteitems}/> */}
    </div>
  )
}
export default Todolist
