import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState(["Clean bedroom", "Do the dishes", "Make the groceries"]);

	const handleListAdd = (event) => {
		if (event.key == "Enter" && event.target.value != "") {
			setTasks([...tasks, event.target.value]);
			event.target.value = "";
		}
	}

	const handleListDelete = (index) => {
		let list = [];

		for (let i = 0; i < tasks.length; i++) {
			if (i !== index) {
				list.push(tasks[i]);
			}
		}

		setTasks(list);
	}

	return (
		<div className="container mt-5">
			<h1 className="text-center">Todo List</h1>
			<ul className="list-group w-50 mx-auto">
				<input className="px-3 py-2" type="text" name="list" id="list" onKeyDown={handleListAdd} />
				{tasks.map((element, index) => {
					return (<li className="list-group-item d-flex justify-content-between todo-list" key={index}>{element} <span className="button-delete fw-bolder" onClick={() => handleListDelete(index)}>  X  </span></li>);
				})}
				<p className="border p-2 text-secondary">{tasks.length > 0 ? tasks.length + " item(s) left" : "No tasks"}</p>
			</ul>
		</div>
	);
};

export default Home;
