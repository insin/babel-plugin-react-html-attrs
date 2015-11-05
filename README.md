# babel-plugin-react-html-attrs

Transforms JSX `class` attributes into `className` and `for` attributes into `htmlFor`, allowing you to copy and paste HTML into your React components without having to manually edit these particular attributes each time.

## Installation & Usage

Install the plugin:

```
# For Babel 6
npm install --save-dev babel-plugin-react-html-attrs

# For Babel 5
npm install --save-dev babel-plugin-react-html-attrs@1.0.0
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

Read [facebook/react#4433](https://github.com/facebook/react/issues/4433) for the reasoning behind why React treats these attributes the way it does and the potential gotchas which await you if you use this plugin (an old version of the JSX transformer used to perform this transformation).

It's fairly common to access a `className` prop in user-defined components, and if you get used to using a `class` prop instead, that you're actually passing `className` is surprising behaviour.

## Attribution

Testing setup cloned from [gaearon/babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform).

## MIT Licensed
