# React-Replace-Tags

Experiment to replace tag placeholders in React component children

## What does it do?

It provides a `<ReplaceTags>` component that looks for strings within its children
matching a pattern like `%tag-name%` and replaces those tags with values from a
provided `tags` object, eg given some code like

```
const tags = {
	speed: 'quick',
	color: 'brown',
	animal: 'fox',
};

<ReplaceTags tags={tags}>
	<div>
		The %speed% <span className="color">%color%</span> %animal
	</div>
</ReplaceTags>
```

it will output

```
<div>
	The quick <span className="color">brown</span> fox
</div>
```

___[Needs a better example!]___

## Why would I want to do that?

Ordinarily we would achieve this in React by passing `tags` to children through
`props` or through React's context, but this allows simple templating within React
_where we don't have control over the code within child components_

The motivation for this experiment was using the [markdown-react-js](https://www.npmjs.com/package/markdown-react-js)
converter _[though I think there is a better way to do this using this particular renderer!]_

## To try it out

```
git clone https://github.com/borilla/react-replace-tags.git
cd react-replace-tags
npm install
npm start
```
