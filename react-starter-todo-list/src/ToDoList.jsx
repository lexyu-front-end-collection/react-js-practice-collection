import React, { useState } from 'react';


function ToDoList(props) {

    const [tasks, setTasks] = useState(["Eat", "Sleep", "Code", "Shower"]);

    const [newTask, setNewTask] = useState("");

    const [draggedItem, setDraggedItem] = useState(null);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask === "") {
            return;
        }
        setTasks(tasks => [...tasks, newTask]);
        setNewTask("");
    }

    function deleteTask(index) {
        // const newTasks = [...tasks];
        // newTasks.splice(index, 1);
        // setTasks(newTasks);

        const deletedTask = tasks.filter((task, i) => i !== index);
        setTasks(deletedTask);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const moveUpTasks = [...tasks];
            [moveUpTasks[index], moveUpTasks[index - 1]] = [moveUpTasks[index - 1], moveUpTasks[index]];
            setTasks(moveUpTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const moveDownTasks = [...tasks];
            [moveDownTasks[index], moveDownTasks[index + 1]] = [moveDownTasks[index + 1], moveDownTasks[index]];
            setTasks(moveDownTasks);
        }
    }

    function clearAll() {
        setTasks([]);
    }

    function handleDragStart(e, index) {
        setDraggedItem(index);
        e.target.style.opacity = '0.5';
    }

    function handleDragEnd(e) {
        e.target.style.opacity = '1';
        setDraggedItem(null);
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e, index) {
        e.preventDefault();
        const newTasks = [...tasks];
        const draggedTask = newTasks[draggedItem];
        newTasks.splice(draggedItem, 1);
        newTasks.splice(index, 0, draggedTask);
        setTasks(newTasks);
    }

    return (
        <div className='todo'>
            <h1>To-Do-List</h1>

            <input type="text"
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange} />

            <div>
                <button
                    className='add-btn'
                    onClick={addTask}>新增任務
                </button>
                <button
                    className='clear-btn'
                    onClick={clearAll}>清除所有任務
                </button>

            </div>


            <ol>
                {tasks.map((task, index) =>
                    <li key={index}
                        draggable="true"
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragEnd={handleDragEnd}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, index)}>
                        <span className='text'>{task}</span>
                        <button className='move-btn' onClick={() => moveTaskUp(index)}>
                            &#8593;
                        </button>
                        <button className='move-btn' onClick={() => moveTaskDown(index)}>
                            &#8595;
                        </button>
                        <button className='delete-btn' onClick={() => deleteTask(index)}>
                            X
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList