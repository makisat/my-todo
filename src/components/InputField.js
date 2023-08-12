import './styles.css';
import { useState } from 'react';

function InputField(props) {

	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			id: props.todos.length,
			text: text,
			done: false,
		}
		props.setTodos([...props.todos, newTodo]);

		setText("");
	}

	return (
		<div className='todo_parent'>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="input_field"
					placeholder="New Todo..."
					value={ text }
					onChange={e => setText(e.target.value)}
				/>
				<button type="submit" className="add_button">Add</button>
			</form>
		</div>
	);
}

export default InputField;
