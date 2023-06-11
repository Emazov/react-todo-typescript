import { useState } from 'react';

import TodoForm from '../TodoForm';
import EditTodo from '../EditTodoForm';
import Todo from '../Todo';

import './style.scss';

const TodoWrapper = () => {
	const [todos, setTodos] = useState<Array<object>>([]);

	const currentDate = () => {
		const time = new Date();

		const hr = String(time.getHours()).padStart(2, '0');
		const min = String(time.getMinutes()).padStart(2, '0');
		const date = time.getDate();
		const month = time.toLocaleString('en', { month: 'short' });
		const year = time.getFullYear();

		const euFormat = `${hr}:${min}`;

		// const enFormat = time.toLocaleString('en-US', {
		// 	hour: 'numeric',
		// 	minute: 'numeric',
		// 	hour12: true,
		// });

		return `${year} - ${month} ${date} - ${euFormat}`;
	};

	const addTodo = (todo: string) => {
		setTodos([
			...todos,
			{
				id: Date.now(),
				task: todo,
				time: currentDate(),
				completeTime: '',
				isDone: false,
				isEdit: false,
			},
		]);
	};

	const toggleComplete = (id: number) => {
		setTodos(
			todos.map((todo: any) =>
				todo.id === id
					? { ...todo, isDone: !todo.isDone, completeTime: currentDate() }
					: todo
			)
		);
	};

	const editTodo = (id: number) => {
		setTodos(
			todos.map((todo: any) =>
				todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
			)
		);
	};

	const editedTodo = (task: string, id: number) => {
		setTodos(
			todos.map((todo: any) =>
				todo.id === id ? { ...todo, task, isEdit: !todo.isEdit } : todo
			)
		);
	};

	const removeTodo = (id: number) => {
		setTodos(todos.filter((todo: any) => todo.id !== id));
	};

	return (
		<div className='todo_wrapper'>
			<h2 className='todo__title'>To Do App</h2>
			<TodoForm addTodo={addTodo} />
			<div className='todo_list'>
				{todos.map((item: any, idx : number) =>
					item.isEdit ? (
						<EditTodo editedTodo={editedTodo} task={item} key={idx} />
					) : (
						<Todo
							task={item}
							key={idx}
							toggleComplete={toggleComplete}
							editTodo={editTodo}
							removeTodo={removeTodo}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default TodoWrapper;
