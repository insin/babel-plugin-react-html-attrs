# babel-plugin-react-html-attrs

[![Travis][travis-badge]][travis]
[![npm package][npm-badge]][npm]

Transforms JSX `class` attributes into `className` and `for` attributes into `htmlFor`, allowing you to copy and paste HTML into your React components without having to manually edit these particular attributes each time.

## Installation & Usage

Install the plugin for Babel >= 6:

```
npm install --save-dev babel-plugin-react-html-attrs
```

Then edit your `.babelrc` to include `react-html-attrs`:

```json
{
  "plugins": [
    "react-html-attrs"
  ]
}
```

### Plugin Order With transform-react-inline-elements

If you're also using the [transform-react-inline-elements](https://babeljs.io/docs/en/babel-plugin-transform-react-inline-elements/) plugin, react-html-attrs *must* be specified before it in your plugin list:

```json
{
  "plugins": [
    "react-html-attrs",
    "@babel/plugin-transform-react-inline-elements"
  ]
}
```

## ESLint Configuration

If you're using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)'s' [`no-unknown-property` rule](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md), as of v5.2.0 you can configure it to ignore usage of `class` and `for` in your JSX like so:

```json
{
  "react/no-unknown-property": [2, {"ignore": ["class", "for"]}]
}
```

## Caveats

Read [facebook/react#4433](https://github.com/facebook/react/issues/4433) for the reasoning behind why React treats these attributes the way it does and the potential gotchas which await you if you use this plugin (an old version of the JSX transformer used to perform this transformation).

It's fairly common to access a `className` prop in user-defined components, and if you get used to using a `class` prop instead, that you're actually passing `className` is surprising behaviour.

## Attribution

Testing setup cloned from [gaearon/babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform).

## MIT Licensed

[travis-badge]: https://img.shields.io/travis/insin/babel-plugin-react-html-attrs/master.png?style=flat-square
[travis]: https://travis-ci.org/insin/babel-plugin-react-html-attrs

[npm-badge]: https://img.shields.io/npm/v/babel-plugin-react-html-attrs.png?style=flat-square
[npm]: https://www.npmjs.org/package/babel-plugin-react-html-attrs
