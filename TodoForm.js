    import React, { useState } from 'react'
    import {Button,Form} from 'react-bootstrap';
    
    function TodoForm({addTodo}) {
        
       const [value,setValue]=useState('');
       function handleSubmit(e){
        e.preventDefault();
        if(!value) return
        addTodo(value);
        setValue('');
       }
       return(
        <Form className='wrapper' style={{background:'#fce600',padding:50}} onSubmit={handleSubmit}>
            <div style={{alignItems:'center',justifyContent:'space-between'}}>
                <span className='span' >Add Todo:</span>
                <input type='text'style={{background:'pink',width:400}} className='input' placeholder='add new Todo' value={value} onChange={(e)=>setValue(e.target.value)}
                            />              
            </div>
            <div style={{justifyContent:'right',alignItems:'right',display:'flex'}}>
                <Button type='submit' >Submit</Button>
            </div>
        </Form>
       )
    }
    
    export default TodoForm
    