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
// var todos = ['item1', 'item2', 'item3']
// function displayTodos(){
//   console.log(todos);
// }
// displayTodos();
//
// //add todo function
// function addTodo(todo){
//   todos.push(todo);
//   displayTodos();
// }
// addTodo('newer todo');
//
// //change todo function
// function changeTodo(index, newValue){
//   todos[index] = newValue;
//   displayTodos();
// }
//
// //delete todos function
// function deleteTodos(index){
//   todos.splice(index, 1);
//   displayTodos();
// }

//version 4
var todoList = {
  todos: []
  displayTodos: function(){
    console.log('My Todos', this.todos);
  }
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  }
  changeTodo: function(position, todoText){
    // this.todos[position] = newValue;
    this.todos[position].todoText = todoText
    this.displayTodos();
  }
  deleteTodos: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
