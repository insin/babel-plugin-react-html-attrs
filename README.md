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

## Attribution

Testing setup cloned from [gaearon/babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform).

## MIT Licensed
