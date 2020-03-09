import React from 'react';

export default function Template({ children, placeholders }) {
	function replaceChildren(children) {
		return React.Children.map(children, replaceChild);
	}

	function replaceChild(child) {
		if (isString(child)) {
			return replacePlaceholdersInString(child, placeholders);
		}

		if (isReactElement(child)) {
			return React.cloneElement(child, child.props, replaceChildren(child.props.children));
		}

		return child;
	}

	return (
		<React.Fragment>
			{replaceChildren(children)}
		</React.Fragment>
	);
}

function isString(child) {
	return typeof child === 'string';
}

function isReactElement(child) {
	return child.hasOwnProperty('type');
}

function replacePlaceholdersInString(str, placeholders) {
	const regex = /%([a-z][a-z0-9-_]*)%/g;

	return str.replace(regex, (match, tag) => {
		if (!placeholders.hasOwnProperty(tag)) {
			return match;
		}
		
		return placeholders[tag];
	});
}
