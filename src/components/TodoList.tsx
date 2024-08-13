import React, {ReactElement} from 'react';
import {ITodo} from '../interface';
import {TodoItem} from '.';
import '../css/TodoList.css';

interface ITodoListProps { todos: ITodo[]; deleteTodo: (id: string) => void; toggleDone: (id: string) => void; }

export function TodoList(props: ITodoListProps): ReactElement {
  return (
    <section className='todolist'>{props.todos.length > 0 ? ( props.todos.map(todo => ( <TodoItem toggleDone={props.toggleDone} deleteTodo={props.deleteTodo} todo={todo} key={todo.id} /> )) ) : (
        <h4>There are currently no items on the ToDo list.</h4> )}
    </section>
  );
}
