import React from 'react';

class DisappearButton extends React.Component {
	state = { classname: 'button-dis' };

	onItemClick = () => {
		this.setState({ classname: "button-dis-h" });	
	};

	render() {
		return (
			<button
			className={`${this.state.classname} ${this.props.buttonColor}`}
			onClick={this.onItemClick}>
				{this.props.buttonName}
			</button>
		);
	}
}

export default DisappearButton;
