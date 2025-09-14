const todoList = [];
function addToDo(){
    const ToDo = document.querySelector('.js-text-box');
    const whatToDo = ToDo.value;
    console.log(whatToDo);
    todoList.push(whatToDo);
    console.log(todoList);
    ToDo.value = '';
    addToPage();
}
function addToPage (){
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++){
        const myToDo = todoList[i];
        const html =`
            <div class="inner-div">
                
                <span class="js-todo-text todo-text">${myToDo}</span>
                <button class="complete-button js-complete" onclick="
                    const complete= this;
                    const text = this.parentElement.querySelector('.js-todo-text');

                    if(complete.innerText==='Complete'){
                        complete.innerText = 'Undo';
                        text.style.textDecoration = 'Line-through';
                        text.style.color='grey';
                    } else{
                        complete.innerText = 'Complete';
                        text.style.textDecoration = 'none';
                        text.style.color='black';
                        
                    }
                ">Complete</button>
                <button class="delete-button" onclick="
                    todoList.splice(${i}, 1);
                    addToPage();
                ">Delete</button>
            </div>`;
        todoListHTML += html;
    }
    
    if(todoList.length=== 0){
        todoListHTML = `
            <center><p class="background">No tasks yet!
            <br><span>Add your first above to get started</span></p></centre>`;
    }
    document.querySelector('.js-todo-space').innerHTML=todoListHTML;
}
