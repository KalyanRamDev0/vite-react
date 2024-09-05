




 const createTodoList=()=>{
    const todos=[]


    for( let i=1;i<=10;i++){
        const myObj={
            id:i,
            Text:'item ${id}'
        }
        todos.push(myObj);
    }
    return todos;
 };