import React, { useState } from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import TaskComponent from './Notifications/TaskComponent';
import { IdGenerator } from './utils/IdGenerator';
import { CompareByCreatedDate, CompareByDate } from './utils/Compare';

function App() {
  const [todos, setTodos] = useState(
    []
  );

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }));
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function changeTextTodo(id, title) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    }));
    console.log(todos);
  }

  function changeDateTodo(id, date) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.date = date;
        todo.closed = false;
      }
      return todo;
    }));
  }

  function addTodo() {
    let currentDate = new Date();
    currentDate = currentDate.toLocaleString();
    setTodos(
      (prev) => [...prev, {
        id: IdGenerator(),
        completed: false,
        title: '',
        date: '',
        createdDate: currentDate,
        notification: false,
        closed: false
      }]
    );
    console.log(todos);
  }

  const [sortByCreatedDate, setSortByCreatedDate] = useState(false);
  const [sortByDeadline, setSortByDeadline] = useState(false);

  function handleSortByCreatedDateChange(event) {
    setSortByCreatedDate(event.target.checked);
  }

  function handleSortByDeadlineChange(event) {
    setSortByDeadline(event.target.checked);
  }

  let sortedTodos = todos;

  if (sortByCreatedDate) {
    sortedTodos = todos.slice().sort(CompareByCreatedDate);
  }
  if (sortByDeadline) {
    sortedTodos = todos.slice().sort(CompareByDate);
  }

  return (
    <Context.Provider value={{ toggleTodo, removeTodo, changeTextTodo, changeDateTodo, todos, setTodos }}>
      <div className='container'>
        <h1 className='todoHeader'>Список задач</h1>

        <div className='todo__title__container'>
          <button className='button-title add-button' onClick={addTodo}>Добавить задачу</button>
          <div className='sort__container'>
            <p className='title-sort'>Сортировать</p>

            <div className='sort__item'>
              <input type='checkbox' id='create' name='sort' className='sort sort-create' checked={sortByCreatedDate} onChange={handleSortByCreatedDateChange} />
              <label htmlFor='create' className='sort-label'>по дате создания</label>
            </div>

            <div className='sort__item'>
              <input type='checkbox' id='deadline' name='sort' className='sort sort-deadline' checked={sortByDeadline} onChange={handleSortByDeadlineChange} />
              <label htmlFor='deadline' className='sort-label'>по дедлайну</label>
            </div>
          </div>
        </div>

        {sortedTodos.length ? <TodoList todos={sortedTodos}></TodoList> : <p classlist='noTodoText'>Список задач пуст</p>}
      </div>

      <div className='task__container'>
        <TaskComponent todos={todos} setTodos={setTodos}></TaskComponent>
      </div>
    </Context.Provider >
  )
}

export default App;
