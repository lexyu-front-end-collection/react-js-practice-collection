import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo
    onCompletedChange: (id: number, completed: boolean) => void
}

export default function TodoItem({ todo, onCompletedChange }: TodoItemProps) {

    return (
        <div className="">
            <label key={todo.id} className="flex gap-7 items-center p-2 bg-white rounded-md border border-gray-400 hover:bg-slate-50">
                <input type="checkbox" className={"scale-125"} checked={todo.completed} onChange={(e) => onCompletedChange(todo.id, e.target.checked)} />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                    {todo.title}
                </span>
            </label>
        </div>
    )
}