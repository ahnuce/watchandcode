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

// //add todo function
// function addTodo(todo){
//   todos.push(todo);
//   displayTodos();
// }
// addTodo('newer todo');

// //change todo function
// function changeTodo(position, newValue){
//   todos[position] = newValue;
//   displayTodos();
// }

// //delete todos function
// function deleteTodos(position){
//   todos.splice(position, 1);
//   displayTodos();
// }

//version 3
// var myComputer = {
//     operatingSystem: 'mac',
//     screenSize: '15 inches',
//     purchaseYear: 2011
// };

// var gordon = {
//   name: 'Gordon',
//   sayName: function(){
//     console.log(this.name);
//   }
// }
// gordon.sayName();

var todoList = {
    todos: ['item1', 'item2', 'item3'],
    displayTodos: function(){
        console.log('My Todos', this.displayTodos);
    },
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    }
};

