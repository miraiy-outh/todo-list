import React, { useState, useEffect } from 'react';
import Notification from './Notification';

const hourInMs = 60 * 60 * 1000;

const TaskComponent = (props) => {
    const { setTodos, todos } = props;

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            setTodos((todos => {
                return todos.map((todo) => {
                    const endDate = new Date(todo.date);
                    if (todo.closed || todo.completed) {
                        return { ...todo, notification: false };
                    }
                    if (Math.abs((endDate).getTime() - (currentDate).getTime()) <= hourInMs) {
                        return { ...todo, notification: true };
                    }
                    return todo;
                });
            }));

        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            {todos.map((todo) => (
                todo.notification && <Notification key={todo.id} id={todo.id} title={todo.title} />
            ))}
        </div>
    );
};

export default TaskComponent;