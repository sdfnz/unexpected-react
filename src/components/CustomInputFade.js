import React from 'react';
import hexToRGB from '../utilities/hexToRGB';

// The 'hiddenValue' variable in the state is kept solely in case you want to
// store what the user typed in to use in some operation.

class CustomInputFade extends React.Component {
	fadeValue = 1.0;
	rgbColor = hexToRGB(this.props.hexColor);
	state = { value: '', fntColor: `rgba(${this.rgbColor[0]},${this.rgbColor[1]},${this.rgbColor[2]},${this.fadeValue})`, hiddenValue: '' };
	fadeIntervals = [];

	onTextInput = (e) => {
		this.setState({ value: `${e.target.value}` });
		this.fadeValue = 1.0;
		this.fadeIntervals.forEach(clearInterval);
		this.fadeText();
	};

	fadeText() {
		let fader = setInterval(() => {
			this.fadeValue = this.fadeValue - 0.1;
			this.setState({ fntColor: `rgba(${this.rgbColor[0]},${this.rgbColor[1]},${this.rgbColor[2]},${this.fadeValue})` });	
			if (this.fadeValue <= 0) {
				clearInterval(fader);
				this.setState({ hiddenValue: this.state.hiddenValue + this.state.value });
				this.setState({ value: '' });
			}
		}, 200);
		this.fadeIntervals.push(fader);
	}

	render() {
		return (
			<input type="text" style={{ color: this.state.fntColor }} name={this.props.name} value={this.state.value} onChange={this.onTextInput} />
		);
	}
}

export default CustomInputFade; 
