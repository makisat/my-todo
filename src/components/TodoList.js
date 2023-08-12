import './styles.css'

function TodoList(props) {

	const deleteTodo = (id) => {
		const newTodo = props.todos.filter(todo => todo.id != id);
		props.setTodos(newTodo);
	}

	return (
		<div>
			<ul className='todo_lists'>
				{ props.todos.map((todo) => {
						return (
							<div className='list' >
								<li key={todo.id.toString()}>{ todo.text }</li>
								<button onClick={() => deleteTodo(todo.id)}>X</button>
							</div>
						)
					})
				}
			</ul>
		</div>
	)
}

export default TodoList;
