# Todo-App 
Create a simple Todo App List using React only
In this project we create a todoList,In this we devide this intlo 2parts
1.TodoForm.js->it will display the form of which we give input to the app and to submit of input.
2.Todo.js->it will display complete,delete of todos.for this we give 2buttons done,delete.
And after that we add those functions into main function App.js.Then it and index.html will run in 
index.js..

For TodoForm.js we use useState hook to handle the state of inputs
      
      
      function TodoForm(addTodo){->addTodo is a props to the function
          const [vlaue,setValue]=useState('');
          
            handleSubmit(e){->to handle the submition of our input
                e.preventDefault();->this function use to stable the browser(no refresh page)
                if(!value) return->if there is no value it will stop then we add our input 
                addTodo(value);
                setValue('');
            
            return(
              <Form onSubmit={handleSubmit}>
                  <div>
                    <span >Add Todo:>/span
                    <input type='text' onChange={(e)=>setValue(e.this.value)},value={value}
                            placeholder='add todos', className='input'/>
                      </div>
                      <div>
                        <Button type='submit'>Submit</submit>
              } export default TodoForm;
         
         
Then we create Todo.js for know the complete todo or delete the todo

           function Todo(todo,index,moveTodo,removeTodo){->these are props and we give information 
                                                                        in app.js 
                return(
                <div classname='todo'>
                    <span style={{textDecoration:todo.isDone ?'line-through' : ''}}>{todo.text}                                 </span
                <div>
                    <Button variant='outline-succes' onClick={()=>moveTodo(index)}><TiTick/>      
                              </Button>  
                     <Button variant='outline-danger' onClick={()=>removeTodo(index)}><MdCancel/> 
                              </Button>  
                              </div></div>);} export default Todo
                              
 And finally we enter main funtion to add all the inputs,changes and functions to app.js
 
          function App(){
                const [todos,setTodos]=useState([{
                    text:'add todos',
                    isDone:flase, }]);
                 
                 const addTodo=text=>{
                      const newTodos=[...todos]
                      setTodos(newTodos);};
                      
                  const moveTodo=index=>{
                        const newTodos=[...todos]
                        newTodos[index].isDone=true;
                        setTodos(newTodos);}
                        
                  const removeTodo=index=>{
                        const newTodos=[...todos]
                        newTodos.splice(index,1);
                        setTodos(newTodos);}
              return(
                    <div classNmae='app'>
                    <div className='container'>
                      <h1 className='text-center mb-4'>Todo List</h1>
                      <div>
                        <TodoForm addTodo={addTodo}/>
                      <div>
                          {todos.map((todo,index)=>(
                            <Card><Card.Body>
                              <Todo key={index} index={index} moveTodo={moveTodo}               
                                        removeTodo={removeTodo}/></Card.Body></Card>
                                        ))}
                                        </div></div></div>);
                                        }export default App
                                        
Then we access this into index.js..


Note:Button,Card,Form are import from react-bootstrap..
