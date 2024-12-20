import { Todo } from "../types/todo"

interface TodoSummaryProps {
    todos: Todo[],
    deleteAllCompleted: () => void
}

export default function TodoSummary({ todos, deleteAllCompleted }: TodoSummaryProps) {
    const completed = todos.filter(todo => todo.completed);
    return (
        <div className="text-center space-y-2">
            <h2>Todo Summary</h2>
        </div>
    )
}