import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Launches from './components/Launches/Launches'
import History from './components/History/History'
import musk from './images/elon-musk-memes-.jpg';
import './App.scss';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache()
})

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<div className="App">
			<header className="App-header">
				<h2>SpaceX Rocket Launch History </h2>
				<p>Elon Musk is spaced out, breh...</p>
        <img id="musk" src={musk} alt="musk-breh" />
			</header>
			<History />
			<Launches />
		</div>
		</ApolloProvider>
	);
};

export default App;
