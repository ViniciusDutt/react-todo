import React, { useState } from "react";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";

function App() {
  const divStyles = {
    width: 400,
    background: "#FFF",
    borderRadius: 5,
    boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.1)",
    padding: 10,
  };

  const [todos, setTodos] = useState([]);
  const [state, setState] = useState("");
  const [err, setErr] = useState(false);

  const handleChange = (e) => {
    setState(e.target.value);
  };
  const handleSubmit = () => {
    let possuiErro;
    if (state === "") return setErr("Nome Inválido!");
    todos.map((t) => {
      if (t === state) {
        possuiErro = true;
      }
      return false;
    });
    if (possuiErro) return setErr("Nome duplicado");
    setErr(false);
    setTodos([...todos, state]);

    setState("");
  };
  const handleDelete = (name) => {
    function filterTodo(obj) {
      return obj !== name;
    }

    let editTodo = todos.filter(filterTodo);
    setTodos(editTodo);
  };

  return (
    <div style={divStyles}>
      <Navbar counting={todos.length} />
      <Content handleDelete={handleDelete} todos={todos} />
      <Footer
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={state}
      />
      <p style={{ textAlign: "center", color: "#FF6961" }}>
        <b>{err}</b>
      </p>
    </div>
  );
}

export default App;
