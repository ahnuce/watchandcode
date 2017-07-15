//store todos
// var todos = ["item1", "item2", "item3"]
// //display todos
// console.log(todos)
// //add new todos
// todos.push('new todo')
// //change todos
// todos[1] = 'changed'
// //delete todos
// todos.splice(0, 1)

//version 2
// makeSandwichWith _____
//   Get one slice of bread.
//   Add ________.
//   Put a slice of bread on top.
//
//   function makeSandwichWith(filling){
//     Get one slice of bread;
//     Add filling;
//     Put a slice of bread on top;
//   }
//
//   makeSandwichWith(ham)
//
//   console.log()


// function sayHiTo(person){
//   console.log('hi', person);
// }
// sayHiTo('gordon');


//display todo function
var todos = ['item1', 'item2', 'item3']
function displayTodos(){
  console.log(todos);
}
displayTodos();

//add todo function
function addTodo(todo){
  todos.push(todo);
  displayTodos();
}
addTodo('newer todo');

//change todo function
function changeTodo(index, newValue){
  todos[index] = newValue;
  displayTodos();
}

//delete todos function
function deleteTodos(index){
  todos.splice(index, 1);
  displayTodos();
}
