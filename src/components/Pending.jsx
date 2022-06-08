import React, { createContext, useState } from 'react'
import '../components/Pending.css'
import Completed from './Completed';

const Pending = ({itemValue, id, deleteitems}) => {

    const [pending, setPendingItem] = useState([])

    const deleteItem = () => {
        deleteitems(id);
    }

   const add = () => {
    //    console.log('add is working fine')
    setPendingItem( (element) => {
        return [...element, itemValue];
    })
   };

  return (
    <div>
        <div className='Pending'>
            <li className='pending-styling'>
                {itemValue} 
                <ion-icon name="checkmark-done-outline" onClick={add}></ion-icon>
                <ion-icon name="trash-outline" onClick={deleteItem}></ion-icon>
            </li>
      </div>
    </div>
  )
}

export default Pending