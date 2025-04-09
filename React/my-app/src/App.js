// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }
// export default MyButton;   // this is important after writing the component.
// // export default function MyApp() {
// //   return (
// //     <div>
// //       <h1>Welcome to my app</h1>
// //       <MyButton /> //this is called nest calling one component from another.in React js the name of the componect is always starts with capital letter.
// //     </div>
// //   );
// // }



import { useState, useEffect } from "react"; // Import React hooks

const TodoApp = () => {
  // State for storing the list of tasks
  const [tasks, setTasks] = useState([]);
  // State for tracking the new task input
  const [task, setTask] = useState("");

  // Load stored tasks from local storage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")); // Retrieve and parse tasks from local storage
    if (storedTasks) setTasks(storedTasks); // If tasks exist, update state
  }, []); // Empty dependency array ensures this runs only on mount

  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Convert tasks array to a string and save
  }, [tasks]); // Runs whenever 'tasks' state updates

  // Function to add a new task to the list
  const addTask = () => {
    if (task.trim()) { // Prevent adding empty tasks
      setTasks([...tasks, { text: task, completed: false }]); // Add new task to the tasks array
      setTask(""); // Clear input field after adding
    }
  };

  // Function to toggle task completion status
  const toggleComplete = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t // Toggle 'completed' property of the clicked task
    );
    setTasks(newTasks); // Update state
  };

  // Function to delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove the task at the specified index
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      {/* Input field for entering tasks */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 rounded"
          value={task}
          onChange={(e) => setTask(e.target.value)} // Update task state on input change
          placeholder="Enter a task"
        />
        {/* Button to add a task */}
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>
      {/* List of tasks */}
      <ul className="w-full max-w-md">
        {tasks.map((t, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 border mb-2 rounded ${t.completed ? "line-through text-gray-500" : ""}`}
          >
            {/* Clickable task text to toggle completion */}
            <span onClick={() => toggleComplete(index)} className="cursor-pointer">
              {t.text}
            </span>
            {/* Button to delete task */}
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
