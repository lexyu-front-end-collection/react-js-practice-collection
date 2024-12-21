import AddTodoForm from "@/components/AddTodoForm"
import TodoList from "@/components/TodoList"
import TodoSummary from "@/components/TodoSummary"
import useTodos from "@/hooks/useTodos"

function App() {
  const {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos
  } = useTodos()

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
