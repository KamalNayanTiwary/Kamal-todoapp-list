import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";
function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/wallpaper.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "48% center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      <div
        className="center-container"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "30px",
          borderRadius: "15px",
          color: "white",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <h1 className="app-heading" style={{ textAlign: "center" }}>
          📝K.T-TODO
        </h1>
        <TodoInput addList={addList} />
        <hr />
        {listTodo.map((listItem, i) => (
          <Todolist
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
