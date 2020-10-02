import React from 'react';
import musk from './images/elon-musk-memes-.jpg';
import './App.scss';

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h2>SpaceX Rocket Launch History </h2>
				<p>Elon Musk is spaced out, breh...</p>
        <img id="musk" src={musk} alt="musk-breh" />
			</header>
		</div>
	);
};

export default App;
