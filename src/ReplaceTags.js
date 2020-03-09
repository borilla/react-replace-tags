import React from 'react';

export default function ReplaceTags({ children, tags }) {
	function replaceChildren(children) {
		return React.Children.map(children, replaceChild);
	}

	function replaceChild(child) {
		if (isString(child)) {
			return replaceTagsInString(child, tags);
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

function replaceTagsInString(str, tags) {
	// tags are surrounded by '%' and can contain dash or underscore characters, eg '%first-name%'
	const regex = /%([a-z][a-z0-9-_]*)%/g;

	return str.replace(regex, (match, tag) => {
		if (!tags.hasOwnProperty(tag)) {
			return match;
		}
		
		return tags[tag];
	});
}
