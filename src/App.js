import React, { useState } from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {

  const [inputList, setInputList] = useState('');

  const [items, setItems] = useState([]); // items that rendering below the input bar.
  

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }

  const buttonfunc = () =>{
    setItems( (element) => {
      return [...element, inputList]; // this will destructure the current array and add "li" from inputlist into that array and will show on the webpage one by one;
    });
    
    setInputList('');
  }

  const deleteitems = (id) => {
    console.log("working");
    
    setItems( (element) => {
      
      return element.filter( (arrayElement, index)=> {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
          <br />
          <h1> ToDo List</h1>
          <br />
          <input type= "text" placeholder='Add Anything' value = {inputList} onChange={itemEvent}/>
          <button onClick={buttonfunc}> + </button>
          <div className='child-containers'>
            <h2 className='child-containers-pending'>Pending Tasks</h2>
            <h2 className='child-containers-completed'>Completed Tasks</h2>
          </div>
          
          <ol>

            {items.map( (itemValue, index) => {

              return <Todolist 
              key = {index}
              id ={index} 
              itemValue = {itemValue} 
              deleteitems = {deleteitems}
              />
            })}

          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
