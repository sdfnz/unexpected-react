import React from 'react';

class MoveButton extends React.Component {
	state = { effect: '', moved: false };

	onItemClick = () => {
		if (this.state.moved === false) {
			this.setState({ effect: `button-move-${this.props.direction}`, moved: true });	
		} else {
			this.setState({ effect: 'button-move-return', moved: false });
		}
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

export default MoveButton;
