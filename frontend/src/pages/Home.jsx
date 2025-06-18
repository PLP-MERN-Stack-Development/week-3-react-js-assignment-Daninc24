import React from 'react';
import TaskManager from '../components/TaskManager';

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskManager />
    </div>
  );
};

export default Home;