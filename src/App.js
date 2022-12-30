// Need to import react for Class based syntax
// import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Go to Store',
      day: 'Jan 3rd at 4:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Go to mall',
      day: 'Jan 4th at 11:30am',
      reminder: false,
    },
    {
      id: 3,
      text: 'Go to library',
      day: 'Jan 5th at 1:30pm',
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = task => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  return (
    <div className='container'>
      <Header
        title='Task Tracker'
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

// Class based syntax

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>;
//   }
// }

export default App;
