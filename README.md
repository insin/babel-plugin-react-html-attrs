# babel-plugin-react-html-attrs

[![Travis][travis-badge]][travis]
[![npm package][npm-badge]][npm]

**As of v3 this plugin _only_ transforms host elements (JSX elements with lowercase tag names).**

**Stick with `babel-plugin-react-html-attrs@2` if you just want to transform `class` → `className` and `for` → `htmlFor` on _all_ JSX elements.**

This plugin's goal is to allow you to copy and paste HTML and SVG verbatim into your React components, by:

- Transforming HTML attribute names into React-compatible DOM property names:

  `<label class="label" for="input">` → `<label className="label" htmlFor="input">`

- Transforming numeric HTML attribute values into numeric [JSX expressions](https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx):

  `<td colspan="2">` → `<td colSpan={2}>`

- Removing values from [boolean HTML attributes](https://html.spec.whatwg.org/#boolean-attributes), as "the presence of a boolean attribute on an element represents the true value":

  `<input checked="checked">` → `<input checked>`

## Installation & Usage

Install the plugin for Babel >= 6:

```
npm install --save-dev babel-plugin-react-html-attrs
```

Edit your `.babelrc` to include `react-html-attrs` as a plugin:

```json
{
  "plugins": ["react-html-attrs"]
}
```

## Babel Configuration for XML Namespaces in JSX

To allow use of XML namespaces in JSX for SVG, you will have to configure the preset or plugin you're using with `{"throwIfNamespace": false}`, e.g.:

```json
{
  "presets": [["@babel/preset-react", { "throwIfNamespace": false }]]
}
```

## ESLint Configuration

If you're using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)'s' [`no-unknown-property` rule](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md), you can configure it to ignore usage of HTML attributes in your JSX like so:

<details>
<summary>Show ESLint config</summary>
<pre>{
  "react/no-unknown-property": [2, {"ignore": ​["accept-charset", "accesskey", "allowfullscreen", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "autoplay", "autosave", "cellpadding", "cellspacing", "charset", "class", "classid", "colspan", "contenteditable", "contextmenu", "controlslist", "crossorigin", "datetime", "disablepictureinpicture", "disableremoteplayback", "enctype", "for", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "frameborder", "hreflang", "http-equiv", "inputmode", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "keyparams", "keytype", "marginheight", "marginwidth", "maxlength", "mediagroup", "minlength", "nomodule", "novalidate", "playsinline", "radiogroup", "readonly", "referrerpolicy", "rowspan", "spellcheck", "srcdoc", "srclang", "srcset", "tabindex", "usemap", "accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "x-height", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "xmlns:xlink"]}]
}</pre>
</details>

## TypeScript Support ⛈

Unfortunately, it doesn't seem to be possible to provide full TypeScript support for JSX which takes advantage of this plugin's transformations, as it's not currently possible to override host element attribute types in the `interface` definitions provided by `@types/react`.

[This Pull Request to DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/44416) is for a `@types/babel-plugin-react-html-attrs` type definition which forks `@types/react` to add support for missing HTML attributes and to allow all numeric and boolean attributes to be strings as per HTML, but even if approved and merged, this will likely break if you try to use it with other type definitions dependent on `@types/react`.

In the meantime, here's a partial type definition file (for HTML attributes whose name doesn't match their DOM property name, including the all-important `class` and `for`) you can drop into your `typings/` when using this plugin:

- [`babel-plugin-react-html-attrs-partial.d.ts`](typings/babel-plugin-react-html-attrs-partial.d.ts)

## Caveats

Read [facebook/react#4433](https://github.com/facebook/react/issues/4433) for the reasoning behind why React treats these attributes the way it does and the potential gotchas which await you if you use this plugin (an old version of the JSX transformer used to perform a similar transformation).

## Attribution

Testing setup cloned from [gaearon/babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform).

## MIT Licensed

[travis-badge]: https://img.shields.io/travis/insin/babel-plugin-react-html-attrs/master.png?style=flat-square
[travis]: https://travis-ci.org/insin/babel-plugin-react-html-attrs
[npm-badge]: https://img.shields.io/npm/v/babel-plugin-react-html-attrs.png?style=flat-square
[npm]: https://www.npmjs.org/package/babel-plugin-react-html-attrs
