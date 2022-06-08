import React from 'react'
import '../components/Completed.css'
import Todolist from './Todolist';

const Completed = ({itemValue, id, deleteitems}) => {
    const deleteItem = () => {
        deleteitems(id);
    }
  return (
    <div>
        <div className='to-do-list'>
            <li className='completed-styling'>
                {itemValue}
                {/* <ion-icon name="trash-outline" onClick={deleteItem}></ion-icon> */}
            </li>
            {/* <Todolist/> */}
        </div>
    </div>
  )
}

export default Completed