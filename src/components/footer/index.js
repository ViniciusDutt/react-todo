import React from 'react'

function Footer ({value, handleChange, handleSubmit}) {
    const divStyles = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 15
    }
    const inputStyle = {
        width: "70%",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        padding: 10,
        outline: 0
    }
    const buttonStyle = {
        padding: 10,
        background: "#FFF",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        width: "20%",
        outline: 0,
        cursor: "pointer"
    }
    return (
        <div style={divStyles}>
            <input style={inputStyle} value={value} onChange={handleChange} />
            <button style={buttonStyle}onClick={handleSubmit}>Salvar</button>
        </div>
    )
}

export default Footer