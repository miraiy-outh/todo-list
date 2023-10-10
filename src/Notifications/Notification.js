import React, { useContext } from 'react';
import Context from "../context";
import CloseIcon from "../icons/CloseIcon";

const Notification = ({ id, title }) => {
    const { todos, setTodos } = useContext(Context);
    function closeNotification() {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.closed = true;
                    todo.notification = false;
                }
                return todo;
            }));
    }

    return (
        <div className="notification__container">
            <div className="title__container">
                <p>Задача скоро просрочится!</p>
                <p style={{ fontWeight: 500 }}>{title}</p>
            </div>

            <button
                className='notification-button'
                onClick={closeNotification}
            >
                <CloseIcon />
            </button>
        </div >
    );
};

export default Notification;