import React, {ReactElement, useState} from 'react';
import {AddButton, Input, TodoList} from '.';
import {ITodo} from '../interface';
import {placeholders} from '../data';
import '../css/TodoApp.css';

export function TodoApp(): ReactElement {
  const [taskInput, settaskInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const handleAddClick = () => { setTodos(prev => [ ...prev,
      {
        author: authorInput,
        task: taskInput,
        id: Date.now().toString(),
        timestamp: new Date(),
        isDone: false,
      },
    ]);
    settaskInput('');
    setAuthorInput('');
  };

  const deleteTodo = (id: string) => setTodos(todos.filter(t => t.id !== id));
  const toggleDone = (id: string) => setTodos(prev => [ ...prev .map(t => (t.id === id ? {...t, isDone: !t.isDone} : t)) .sort((t1, t2) => {
          if (!t1.isDone && !t2.isDone) { return t1.timestamp.getTime() - t2.timestamp.getTime(); }
          if (t1.isDone && !t2.isDone) {  return 1; }
          return -1;
        }),
    ]);

  return (
    <section className='todo-app'>
      <h2>Todo List</h2>
      <section className='input-container'>
        <Input value={taskInput} setInput={settaskInput} placeholder={placeholders.task} />
        <Input value={authorInput} setInput={setAuthorInput} placeholder={placeholders.author} />
        <AddButton onClick={handleAddClick} disabled={taskInput === '' || authorInput === ''} />
      </section>
      <TodoList toggleDone={toggleDone} todos={todos} deleteTodo={deleteTodo} />
    </section>
  );
}
