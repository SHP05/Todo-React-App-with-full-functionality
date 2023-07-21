import { useState } from "react";
import "./Todoinput.css";

const  TodoInput = ({createTodoitem}) =>
{
    const [value,setvalue] = useState("");
    const [Title,setTitle] = useState("");
    const handlesubmit = e =>{
        e.preventDefault();
        if(value === "")
        {
            console.log("Enter some todo");
        }
        createTodoitem(value,Title);
        setvalue("");
        setTitle("");
    } 
    
    return (
        <form onSubmit={handlesubmit} className="inputField">
        <div>
        <input type="text" 
        placeholder="Title" 
        value={Title} 
        onChange={(e) => setTitle(e.target.value)} className="input"/>
        <input type="text" 
        placeholder="Write Todo" 
        value={value} 
        onChange={(e) => setvalue(e.target.value)} className="input"/>
        </div>
        <i class="fa-solid fa-plus" onClick={handlesubmit} id="add"></i>
        </form>
        )
}

export default TodoInput;