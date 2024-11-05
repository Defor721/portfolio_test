"use client";
import Modal from "@/components/Modal";
import NewTodo from "@/components/NewTodo";
import Todo from "@/components/Todo";
import { useState, useEffect } from "react";
import classes from "./page.module.css";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

export default function TodoList() {
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    checkCookies();
  }, []);
  useEffect(() => {
    getTodos();
  }, [todos]);
  async function getTodos() {
    try {
      const response = await fetch("/api/getlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) {
        console.error("Error:", response.status, await response.text());
        const result = await response.json();
        alert(result.message);
      } else {
        const result = await response.json();
        if (result.list != 0) {
          setTodo(result.list);
        }
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  async function checkCookies() {
    try {
      const response = await fetch("/api/protected", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        console.error("Error:", response.status, await response.text());
        alert("Please log in");
        router.push("/mypro/login");
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
