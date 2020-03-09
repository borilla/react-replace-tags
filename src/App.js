import React from 'react';
import ReactDOM from 'react-dom';
import Animal from './Animal';
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
					<li>the lazy <Animal>%animal%</Animal></li>
				</ul>
			</p>
		</Template>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
