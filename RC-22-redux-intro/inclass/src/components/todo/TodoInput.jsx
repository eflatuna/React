import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
	const [text, setText] = useState("");
	const disptach = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		disptach(addTodo(text));
		setText("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="todo-input"
				type="text"
				placeholder="Add Todo"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button type="submit" className="add-button">
				Add
			</button>
		</form>
	);
};

export default TodoInput;
