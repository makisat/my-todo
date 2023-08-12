import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {

	const [todos, setTodos] = useState([])

  return (
    <div className="App">
	  <InputField todos={todos} setTodos={setTodos} />
	  <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
