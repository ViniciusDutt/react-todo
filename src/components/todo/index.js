import React from 'react'

function Todo({handleDelete, name}) {
    const divStyles = {
        padding: 10,
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
    const deleteButtonStyle = {
        background: "none",
        border: 0,
        outline: 0,
        cursor: "pointer"
    }

    return (
        <div style={divStyles}>
            <p>{name}</p>
            <button style={deleteButtonStyle} onClick={() => handleDelete(name)}>✖</button>
        </div>
    )
}

export default Todo