import React from "react";
import Todos from "../todo";

function Content({ todos, handleDelete }) {
    const divStyles = {
        height: 400,
        maxHeight: 400,
        overflowY: "auto",
        marginBottom: 10
    }
  return (
    <div style={divStyles}>
      {todos.map((todo) => {
        return <Todos key={todo} handleDelete={handleDelete} name={todo} />;
      })}
      
    </div>
  );
}

export default Content;
