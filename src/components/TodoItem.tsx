import React, {ReactElement} from 'react';
import {ITodo} from '../interface';
import '../css/TodoItem.css';

interface ITodoItemProps {todo: ITodo; deleteTodo: (id: string) => void; toggleDone: (id: string) => void; }

export function TodoItem(props: ITodoItemProps): ReactElement { const todoTextClasses = 'todotext' + (props.todo.isDone ? ' done' : '');

  return (
    <article className='todoitem'>
      <div className='container'>
        <div onClick={() => props.toggleDone(props.todo.id)} className='checkbox'> {props.todo.isDone ? ( <span className='material-symbols-outlined'>check</span> ) : null} </div>
          <p className={todoTextClasses}>{props.todo.task}</p>
      </div>

      <div className='container'>
        <div>
          <p className='authortext'>By: {props.todo.author}</p>
          <p className='datetext'> {`At: ${props.todo.timestamp.toLocaleDateString()}`} </p>
        </div>
        <span onClick={() => props.deleteTodo(props.todo.id)} className='material-symbols-outlined delete'> delete </span>
      </div>
    </article>
  );
}
