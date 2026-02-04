let todo = [];
let req = prompt("Please enter your request");

while(true){
    if(req == 'quit')
    {
        console.log("quitting app...");
        break;
    }

    if(req == 'list')
    {
        console.log("--------------");
        for(task of todo)
        {
          console.log(task);
        }
        console.log("---------------");
    }

    else if(req == 'add')
    {
        let add = prompt("Enter the task to add");
        todo.push(add);
        console.log("Task Added");
    }

    else if(req == 'delete')
    {
        let toremove = prompt("Enter the task to remove");
        let index = todo.indexOf(toremove);

        if(index == -1)
        {
            console.log("Task not found");
        }else{
            todo.splice(index,1); 
            console.log("Task Deleted");
        }
    }
    else{
        console.log("Wrong request");
    }
    req = prompt("Please enter your request");
}