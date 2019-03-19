import React from 'react';

class DisTxtInput extends React.Component {
	state = { value: '', bgColor: '#000' };

	onTextInput = (e) => {
		this.setState({ value: `${e.target.value}`, bgColor: '#FFF' });
	};

	fadeText() {
		const colors = ['#000','#323232','#666666','#999999','#FFF'];
		for (let x = 0; x < 5; x++) {
			setTimeout(() => {
				this.style = { backgroundColor: colors[x] };
				console.log(x);
			}, 1000)
		};	
	}

	render() {
		return (
			<input type="text" style={{ backgroundColor: this.state.bgColor }} name={this.props.name} value={this.state.value} onChange={this.onTextInput} />
		);
	}
}

export default DisTxtInput; 
