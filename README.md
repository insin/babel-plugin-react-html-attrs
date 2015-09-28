# babel-plugin-react-html-attrs

Transforms JSX `class` attributes into `className` and `for` attributes into `htmlFor`, allowing you to copy and paste HTML into your React components without having to manually edit these particular attributes each time.

## Installation & Usage

Install the plugin:

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

## Caveats

Read [facebook/react#4433](https://github.com/facebook/react/issues/4433) for the reasning behind React treats these attributes the way it does and the gotchas which await you (an old version of the JSX transformer used to perform this transformation).

It's fairly common to access a `className` prop in user-defined components, and if you get used to using a `class` prop instead, that you're actually passing `className` is surprising behaviour.

## Attribution

Testing setup cloned from [gaearon/babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform).

## MIT Licensed
