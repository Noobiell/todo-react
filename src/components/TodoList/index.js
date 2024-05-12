import React from 'react';
import PropTypes from "prop-types";
import "./style.css";
import { BsFillTrash3Fill } from "react-icons/bs";

const TodoList = ({ todos, onToggle, onRemove }) => {
    return (

        <ul className='todo-list'>

            {

                todos.map(todo => (

                    <li key={todo.id.toString()}>
                        <span className={['todo', todo.checked ? 'checked' : ''].join(' ')}
                            onClick={() => onToggle && onToggle(todo)}
                            role='button'
                            onKeyPress={() => onToggle && onToggle(todo)}
                            tabIndex={0}>{todo.title}</span>
                        <button type='button'
                            className='remove'
                            onClick={() => onRemove && onRemove(todo)}
                        ><BsFillTrash3Fill size={20} /></button>
                    </li>

                ))

            }

        </ul>

    )
}

TodoList.propTypes = {

    todos: PropTypes.arrayOf(

        PropTypes.shape({

            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired

        })

    ).isRequired,
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,

}

export default TodoList
