"use client";
import Modal from "@/components/Modal";
import NewTodo from "@/components/NewTodo";
import Todo from "@/components/Todo";
import { useState, useEffect } from "react";
import classes from "./page.module.css";
import { useRouter } from "next/navigation";

export default function TodoList() {
  const router = useRouter();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      alert("로그인을 수행해주세요");
      router.push("/mypro/login");
    }
    async function getTodo() {
      const response = await fetch("/api/todos");
      const result = await response.json();
      console.log(result);
    }
    getTodo();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [todos, setTodo] = useState([]);

  function modalHandler() {
    setModalVisible((prev) => !prev);
  }
  function addTodoHandler(todos) {
    setTodo((prev) => [todos, ...prev]);
  }

  function deleteHandler(key) {
    setTodo((prev) => {
      prev = prev.filter((el) => {
        el.key != key;
      });
    });
  }

  return (
    <>
      <div>
        <button className={classes.button} onClick={modalHandler}>
          Create Todo
        </button>
      </div>
      <div>
        {modalVisible && (
          <Modal modalHandler={modalHandler}>
            <NewTodo addTodo={addTodoHandler} modalHandler={modalHandler} />
          </Modal>
        )}
        {todos.map((todo) => (
          <Todo
            title={todo.title}
            description={todo.description}
            key={todo.key}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </>
  );
}
