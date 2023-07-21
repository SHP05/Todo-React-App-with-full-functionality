const TodoItem = ({item,index,deleteTodoitems,completeTodoitem,updateTodoItem }) =>{
    return(
        <div className="list">
           <div>
           <h3><li style={{textDecoration: item.complete ? "line-through" : ""}}>
                {item.title} <br/>   
                {item.todo}
            </li></h3>
           </div>
           <div className="icons">
           <i class="fa-solid fa-pen" onClick={()=>updateTodoItem(index)} id="icon1"></i>
           <i class="fa-solid fa-check" onClick={() => completeTodoitem(index)} id="icon2"></i>
           <i class="fa-solid fa-trash" onClick={() => deleteTodoitems(index)} id="icon3"></i>
           </div>
        </div>
    )
}

export default TodoItem;