import { Todo } from "../types/todo"

interface TodoSummaryProps {
    todos: Todo[],
    deleteAllCompleted: () => void
}

export default function TodoSummary({ todos, deleteAllCompleted }: TodoSummaryProps) {
    const completed = todos.filter(todo => todo.completed);
    return (
        <div className="space-y-2 text-center">
            <p>{completed.length} / {todos.length} todos completed</p>
        </div>
    )
}