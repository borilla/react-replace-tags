import React from 'react';
import ReactDOM from 'react-dom';
import Animal from './Animal';
import ReplaceTags from './ReplaceTags';

function App() {
	const tags = {
		speed: 'quick',
		color: 'brown',
		animal_1: 'fox',
		action: 'jumps',
		animal_2: 'dog',
	};

	return (
		<ReplaceTags tags={tags}>
			<div>
				The %speed% <span className="color">%color%</span> %animal_1%
				<ul>
					<li>%action% over</li>
					<li>the lazy <Animal className="animal">%animal_2%</Animal></li>
				</ul>
			</div>
		</ReplaceTags>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
