import React from 'react';
import './styles/hidden.css';
import './styles/app.css';
import DisappearButton from './components/DisappearButton';
import FadeButton from './components/FadeButton';
import MoveButton from './components/MoveButton';
import DisTxtInput from './components/DisTxtInput';

class App extends React.Component {
	render() {
		return (
			<div>
				<DisappearButton buttonName="DISAPPEAR" buttonColor="cool" />		
				<FadeButton buttonName="FADE" buttonColor="warm" />		
				<MoveButton buttonName="RIGHT" buttonColor="blue" direction="right" />
				<MoveButton buttonName="DOWN" buttonColor="red" direction="down" />
				<MoveButton buttonName="UP" buttonColor="red" direction="up" />
				<MoveButton buttonName="LEFT" buttonColor="blue" direction="left" />
				<div>
					<DisTxtInput name="name" />
				</div>
			</div>
		);
	}
}

export default App;
