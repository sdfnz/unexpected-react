import React from 'react';

// In most cases, it makes more sense to use the CustomInputFader, but if you
// are using standard text input boxes with black text and white background,
// this may potentially be faster/less taxing to use in your application.
//
// The 'hiddenValue' variable in the state is kept solely in case you want to
// store what the user typed in to use in some operation.

class SimpleInputFade extends React.Component {
	state = { value: '', fntColor: '#000', hiddenValue: '' };
	colors = ['#191919','#323232','#4c4c4c','#666666','#7f7f7f','#999999','#b2b2b2','#cccccc','#e5e5e5','#ffffff'];
	colorCount = 0;
	fadeIntervals = [];

	onTextInput = (e) => {
		this.setState({ value: `${e.target.value}` });
		this.colorCount = 0;
		this.fadeIntervals.forEach(clearInterval);
		this.fadeText();
	};

	fadeText() {
		let fader = setInterval(() => {
			this.setState({ fntColor: this.colors[this.colorCount] });	
			this.colorCount++;
			if (this.colorCount >= 10) {
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

export default SimpleInputFade; 
