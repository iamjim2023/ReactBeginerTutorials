import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Movie_App from "./Movie_App";
import TodoList_Function from "./TodoList_Function";
import Todo_Function from "./Todo_Function";
import UseStateAndEffect from "./UseStateAndEffect";
import UseState_TwoTypes from "./UseState_Twotypes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <UseState_TwoTypes />
  </div>
);
