import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {

    return (
        <div className="">
            <label key={todo.id} className="flex items-center border gap-7 rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input type="checkbox" className="scale-125" />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                    {todo.title}
                </span>
            </label>
        </div>
    )
}