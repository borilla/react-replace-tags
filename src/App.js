import React from 'react';
import ReactDOM from 'react-dom';
import Animal from './Animal';
import ReplaceTags from './ReplaceTags';

function App() {
	const tags = {
		color: 'brown',
		action: 'jumps',
		animal: 'dog',
	};

	return (
		<ReplaceTags tags={tags}>
			<div>
				The %little% <span className="color">%color%</span> fox
				<ul>
					<li>%action% over</li>
					<li>the lazy <Animal className="animal">%animal%</Animal></li>
				</ul>
			</div>
		</ReplaceTags>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
