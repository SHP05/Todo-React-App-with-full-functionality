import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
const App = () => {
  const [Todoitems,setTodoitems] = useState([]);
  const [filterItems,setFilterItems] = useState([]);
  const createTodoitem = (todo,title) =>{
    if(todo==="" || todo===null)
    return;
    const newTodoitems = [...Todoitems,{title,todo,complete:false}];

    setTodoitems(newTodoitems);
  }
  // const filterItem = (search) =>{

  //   if(search==="")
  //   {
  //     setFilterItems(Todoitems);
  //   }
  //   else{
  //   const updateItem = Todoitems.filter((currItem) =>{
  //     return currItem.title === search;
  //   })
  //   setFilterItems(updateItem);
  // }
  // }
  const deleteTodoitems = (index) =>{
    const newTodoitems = [...Todoitems];
    newTodoitems.splice(index, 1);
    setTodoitems(newTodoitems);
  }

  const completeTodoitem = (index) =>{
    const newTodoitems = [...Todoitems];
    newTodoitems[index].complete === false ? 
    (newTodoitems[index].complete = true) :
    (newTodoitems[index].complete = false); 

    setTodoitems(newTodoitems)
  }

  const updateTodoItem = (index) => {
    const newTodoItems = [...Todoitems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = {title:item.title , todo: newItem, complete: false };
    newTodoItems.splice(index, 1, todoObj);
    if (newItem === null || newItem === "") {
    return;
    } else {
    item.todo = newItem;
    }
    setTodoitems(newTodoItems);
    };
    
  return (
    <>
     <div className="main_div">
     <center><h1 style={{color:"#1aa0b8"}}>Write Your Todo's</h1></center>
     <TodoInput createTodoitem={createTodoitem}/>
      {/* <input className="input"  onChange={(e)=>filterItem(e.target.value)}/> */}
     {
        Todoitems.map((item,index)=>(
          <TodoItem key={index} index={index} item={item} deleteTodoitems={deleteTodoitems} completeTodoitem={completeTodoitem} updateTodoItem={updateTodoItem}/>
        ))
      }
     </div>
     
    </>
  );
};

export default App;
