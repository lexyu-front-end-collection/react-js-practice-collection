import { dummyData } from "./data/todos"
import { useState } from "react"
import { Todo } from "./types/todo"
import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState<Todo[]>(dummyData)

  function setTodoCompleted(id: number, completed: boolean) {
    // alert(`id: ${id}, completed: ${completed}`)
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

  return (
    <main className="py-10 space-y-5 h-screen overflow-y-auto">
      <h1 className="text-3xl font-bold text-center">Setup Demo(Todos)</h1>
      <div className="p-5 mx-auto max-w-lg rounded-md bg-slate-100 space-y-6">
        <AddTodoForm onSubmit={addTodo}></AddTodoForm>
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo}></TodoList>
      </div>
    </main>
  )
}

export default App
