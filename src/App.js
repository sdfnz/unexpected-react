import React from 'react';
import './hidden.css';
import DisappearButton from './components/DisappearButton';

class App extends React.Component {
	render() {
		return (
			<div>
				<DisappearButton buttonName="Hello" buttonColor="cool" />		
				<DisappearButton buttonName="Goodbye" buttonColor="warm" />		
			</div>
		);
	}
}

export default App;
