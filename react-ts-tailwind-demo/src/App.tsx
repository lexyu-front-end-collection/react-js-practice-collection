import { dummyData } from "./data/todos"
import TodoItem from "./components/TodoItem"
import { useState } from "react"
import { Todo } from "./types/todo"

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

  return (
    <main className="py-10 space-y-5 h-screen">
      <h1 className="text-3xl font-bold text-center">Setup Demo(Todos)</h1>
      <div className="p-5 mx-auto max-w-lg rounded-md bg-slate-100">
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompletedChange={setTodoCompleted} />
            // <p key={item.id} className="text-lg">
            //   <p>{item.title} - {String(item.completed)}</p>
            // </p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
