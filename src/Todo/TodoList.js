import React from "react";
import TodoItem from './TodoItem';

const styles = {
    ul: {
        listStyle: 'none'
    }
}
function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo}></TodoItem>;
            })}
        </ul>
    )
}

export default TodoList;