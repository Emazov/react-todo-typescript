import { useState } from 'react';

import './style.scss';

const EditTodo = ({ editedTodo, task }: any) => {
	const [todo, setTodo] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();

		todo === e.target.value
			? editedTodo(todo, task.id)
			: editedTodo(task.task, task.id);

		setTodo('');
	};

	const handleChange = (e: any) => {
		setTodo((task.task = e.target.value));
	};

	return (
		<form className='edit_todo_form' onSubmit={handleSubmit}>
			<div className='todo__content'>
				<p>{task.time}</p>
				<textarea
					className='edit_todo__input'
					required
					value={task.task}
					onChange={handleChange}
					placeholder={task.task}
				/>
			</div>
			<button className='edit_todo__btn' type='submit'>
				Save
			</button>
		</form>
	);
};
export default EditTodo;
