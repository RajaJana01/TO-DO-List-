import React, { useState } from 'react';
import './App.css';
import { FaTrash } from "react-icons/fa";
import { BiMessageAdd } from "react-icons/bi";

function App() {
  
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      content: "Exercise",
      time:'05:00',
      endtime:'06:00',
    },
    
    
  ]);
  const[newItem,setNewItem]=useState('');
  const[time,setnewtime]=useState('');
  const [endtime,setendtime]=useState('');

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('todolist',JSON.stringify(listItems));
  };

  const deleteOne = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    localStorage.setItem('todolist',JSON.stringify(newItems));
  };
  const addone = () => {
    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newTask = {
      id: newId,
      checked: false,
      content: newItem,
      time:time,
      endtime:endtime,
    };
    setItems([...items, newTask]);
    setNewItem('');
    setnewtime('');
    setendtime('');

  };



  return (
    
    <div className="App">
      <h2>To-Do List</h2>
      {(items.length)?(
      <ul>
        {items.map((item) => (
          <li className="ite" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              
              onChange={() => handleCheck(item.id)}
            />
           <label 
           style={(item.checked)?
           {textDecoration:'line-through'}:null}
           onDoubleClick={() => handleCheck(item.id)}>
             
             {item.content}  <span>{item.time}</span>-<span>{item.endtime}</span>
             
            </label>
            <FaTrash 
            role='button'
            onClick={() => deleteOne(item.id)}
            tabIndex='0'/>

           
            
          </li>
        ))}
      </ul>
      ):(
        <p>Your list is empty</p>
      )}
       <input
        type="text"
        value={newItem}
        className='tex'
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter new task..."
      /><br />
      <label>From:</label>
      <input
        type="time"
        className='time1'
        value={time}
        
        onChange={(e) => setnewtime(e.target.value)}
        
      /> 
      <label>To:</label>
      <input
        type="time"
        value={endtime}
        className='time1'
        
        onChange={(e) => setendtime(e.target.value)}
        
      /> <br />
      <BiMessageAdd 
       className='add' 
       onClick={()=>addone()}
       role='button'
       tabIndex='1'></BiMessageAdd>

    </div>
    

    
  );
}

export default App;
