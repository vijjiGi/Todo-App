    import React from 'react'
import {Button} from 'react-bootstrap';
import {TiTick} from 'react-icons/ti';
import {MdCancel} from 'react-icons/md';
    
    function Todo({todo,index,markTodo,removeTodo}) {
        
      return (
       <div className='todo'>
        <span style={{textDecoration: todo.isDone ?'line-through' :''}}>{todo.text}</span>
        <div>
           <Button variant='outline-success' onClick={()=>markTodo(index)}><TiTick/></Button>
           <Button variant='outline-danger' onClick={()=>removeTodo(index)}><MdCancel/></Button>
        </div>
       </div>
      );
    }
    
    export default Todo
    