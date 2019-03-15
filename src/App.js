import React from 'react';
import './styles/hidden.css';
import './styles/app.css';
import DisappearButton from './components/DisappearButton';
import FadeButton from './components/FadeButton';
import MoveButton from './components/MoveButton';

class App extends React.Component {
	render() {
		return (
			<div>
				<DisappearButton buttonName="Hello" buttonColor="cool" />		
				<DisappearButton buttonName="Goodbye" buttonColor="warm" />		
				<FadeButton buttonName="Hello" buttonColor="cool" />		
				<MoveButton buttonName="Goodbye" buttonColor="blue" direction="right" />
				<MoveButton buttonName="Goodbye" buttonColor="blue" direction="down" />
				<MoveButton buttonName="Goodbye" buttonColor="blue" direction="up" />
				<MoveButton buttonName="Goodbye" buttonColor="blue" direction="left" />
			</div>
		);
	}
}

export default App;
