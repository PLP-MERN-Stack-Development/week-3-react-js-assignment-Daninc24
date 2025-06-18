import React from 'react'
import { Link } from 'react-router-dom';

const Navabar = () => {
  return (
    <div>
        <nav className="bg-white dark:bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">PLP Task Manager</span>
                </div>
                <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <Link to='/' className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                    
                    <Link to="/posts" className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Posts</Link>


                    <Link to='/' className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Tasks</Link>
                    <Link to='/' className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Settings</Link>
                </div>
                </div>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navabar;