import React from "react";
import './styles.css'

function InputField() {
	return (
		<div>
			<input type="text" className="input_field" placeholder="New Todo..." />
			<button className="add_button">Add</button>
		</div>
	);
}

export default InputField;
