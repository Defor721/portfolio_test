"use client";
import Modal from "@/components/Modal";
import NewTodo from "@/components/NewTodo";
import Todo from "@/components/Todo";
import { useState, useEffect } from "react";
import classes from "./page.module.css";
import { useRouter } from "next/navigation";

export default function TodoList() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    if (!checked) {
      checkCookies();
      setChecked((prev) => !prev);
    }
  }, [checked]);
  useEffect(() => {
    getTodos();
  }, [todos]);
  async function getTodos() {
    try {
      const response = await fetch("/api/getlist", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) {
        console.error("Error:", response.status, await response.text());
      } else {
        const result = await response.json();
        setTodo(result.list);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  async function checkCookies() {
    try {
      const response = await fetch("/api/protected", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        console.error("Error:", response.status, await response.text());
        if (response.status === 401) {
          alert("Please log in");
          router.push("/mypro/login");
        }
        return;
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  function modalHandler() {
    setModalVisible((prev) => !prev);
  }
  function addTodoHandler(todos) {
    setTodo((prev) => [todos, ...prev]);
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
            key={todo.createAt}
            createAt={todo.createAt}
          />
        ))}
      </div>
    </>
  );
}
