import React from 'react';

class DisappearButton extends React.Component {
	state = { effect: '' };

	onItemClick = () => {
		this.setState({ effect: "button-dis" });	
	};

	render() {
		return (
			<button
			className={`${this.state.effect} ${this.props.buttonColor}`}
			onClick={this.onItemClick}>
				{this.props.buttonName}
			</button>
		);
	}
}

export default DisappearButton;
