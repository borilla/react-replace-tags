import React from 'react';
import ReactDOM from 'react-dom';
import Template from './Template';

function App() {
	const replacements = {
		color: 'brown',
		action: 'jumps',
		animal: 'dog',
	};

	return (
		<Template>
			The little %color% fox %action% over the lazy %animal%
		</Template>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
