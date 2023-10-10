import React, { useContext, useState } from "react";
import Context from "../context";
import CloseIcon from "../icons/CloseIcon"

function TodoItem({ todo }) {
    const { toggleTodo, removeTodo, changeTextTodo, changeDateTodo } = useContext(Context);

    const handleTextChange = (event) => {
        const newTitle = event.target.value;
        changeTextTodo(todo.id, newTitle);
    };

    const handleDateChange = (event) => {
        const newDate = event.target.value;
        changeDateTodo(todo.id, newDate);
    };

    return (
        <li>
            <span className={`todo__item ${todo.completed ? 'done' : ''}`}>
                <input
                    type='checkbox'
                    className={'todo-checkbox'}
                    onChange={() => toggleTodo(todo.id)}
                />
                <input
                    type='text'
                    value={todo.title}
                    onChange={handleTextChange}
                    onBlur={() => changeTextTodo(todo.id, todo.title)}
                />
                <p className='date-create'>{todo.createdDate}</p>
                <input
                    type='datetime-local'
                    value={todo.date}
                    onChange={handleDateChange}
                    onBlur={() => changeDateTodo(todo.id, todo.date)}
                />
                <button
                    className="remove-button"
                    onClick={() => removeTodo(todo.id)}
                >
                    <CloseIcon />
                </button>
            </span>
        </li >
    )
}

export default TodoItem;