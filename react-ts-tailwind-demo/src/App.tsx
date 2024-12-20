import { dummyData } from "./data/todos"
import { useState } from "react"
import { Todo } from "./types/todo"
import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"
import TodoSummary from "./components/TodoSummary"

function App() {
  const [todos, setTodos] = useState<Todo[]>(dummyData)

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    )
  }

  function addTodo(title: string) {
    // setTodos((prevTodos) => [...prevTodos, { id: Date.now(), title, completed: false }])
    setTodos((prevTodos) => [{ id: prevTodos.length + 1, title, completed: false }, ...prevTodos])
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  function deleteAllCompletedTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed))
  }

  return (
    <main className="overflow-y-auto py-10 space-y-5 h-screen">
      <h1 className="text-3xl font-bold text-center">Setup Demo(Todos)</h1>
      <div className="p-5 mx-auto space-y-6 max-w-lg rounded-md bg-slate-100">
        <AddTodoForm onSubmit={addTodo}></AddTodoForm>
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}></TodoList>
        <TodoSummary
          todos={todos}
          deleteAllCompleted={deleteAllCompletedTodos}></TodoSummary>
      </div>
    </main>
  )
}

export default App
