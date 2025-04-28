import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const addTodo = () => {
    if (title && desc) {
      setTodos([...todos, { title, desc }]);
      setTitle('');
      setDesc('');
    }
  };

  return (
    <div className="font-sans p-5 max-w-xl mx-auto">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-5">Todo Application</h1>
      <div className="mb-5 flex gap-3">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="flex-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Todo
        </button>
      </div>

      <div>
        {todos.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 mb-3 border border-gray-200 rounded"
          >
            <h2 className="text-lg font-semibold text-blue-600 mb-1">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
