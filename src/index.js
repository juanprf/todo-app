import './style.css';
import { Todo } from './classes/todo.class.js';
import { TodoList } from './classes/todo-list.class';
import { CrearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( CrearTodoHtml );

console.log('todos:',todoList.todos);