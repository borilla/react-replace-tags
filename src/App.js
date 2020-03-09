import React from 'react';
import ReactDOM from 'react-dom';
import Template from './Template';

function App() {
	const placeholders = {
		color: 'brown',
		action: 'jumps',
		animal: 'dog',
	};

	return (
		<Template placeholders={placeholders}>
			<p>
				The little <span class="color">%color%</span> fox
				<ul>
					<li>%action% over</li>
					<li>the lazy <span class="animal">%animal%</span></li>
				</ul>
			</p>
		</Template>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
