import React from 'react';
import './styles/hidden.css';
import './styles/app.css';
import DisappearButton from './components/DisappearButton';
import FadeButton from './components/FadeButton';

class App extends React.Component {
	render() {
		return (
			<div>
				<DisappearButton buttonName="Hello" buttonColor="cool" />		
				<DisappearButton buttonName="Goodbye" buttonColor="warm" />		
				<FadeButton buttonName="Hello" buttonColor="cool" />		
			</div>
		);
	}
}

export default App;
