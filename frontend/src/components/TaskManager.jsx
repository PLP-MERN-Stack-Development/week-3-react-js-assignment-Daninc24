import React, { useState } from 'react';
import Button from '../components/Buttons';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t =>
    filter === 'All' ? true : filter === 'Completed' ? t.completed : !t.completed
  );

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border px-2 py-1 rounded w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="flex gap-2 mb-4">
        {['All', 'Active', 'Completed'].map(f => (
          <Button
            key={f}
            variant={filter === f ? 'primary' : 'secondary'}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 border-b ${task.completed ? 'line-through text-gray-400' : ''}`}
          >
            <span onClick={() => toggleTask(task.id)} className="cursor-pointer">{task.text}</span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;