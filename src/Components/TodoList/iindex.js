import React from 'react'

export const TodoList = (props) => {
  return (
    <ul>
        <h3>Todo List</h3>
        {props.children}
    </ul>
  )
}
