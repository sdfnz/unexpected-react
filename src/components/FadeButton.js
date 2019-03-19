import React from 'react';

class FadeButton extends React.Component {
	state = { effect: '' };

	onItemClick = () => {
		this.setState({ effect: "fader" });	
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

export default FadeButton;
