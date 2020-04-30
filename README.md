# babel-plugin-react-html-attrs

[![Travis][travis-badge]][travis]
[![npm package][npm-badge]][npm]

Transforms HTML attributes on JSX host elements into React-compatible DOM attributes, such as `class` to `className` and `for` to `htmlFor`, allowing you to copy and paste HTML into your React components without having to manually change attributes to their DOM equivalents.

As of v3.0.0 this transformation **only** applies to host elements (any JSX element with a lowercase tag name).

Use `babel-plugin-react-html-attrs@2.1.0` if you want to transform `class` and `for` on all JSX elements.

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

## Babel Configuration for Namespaces

To allow use of XML namespaces in JSX for SVG, you will have to configure the preset or plugin you're using with `{"throwIfNamespace": false}`, e.g.:

```json
{
  "presets": [
    ["@babel/preset-react", {"throwIfNamespace": false}]
  ]
}
```

## ESLint Configuration

If you're using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)'s' [`no-unknown-property` rule](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md), you can configure it to ignore usage of HTML attributes in your JSX like so:

<details>
<summary>Show ESLint config</summary>
```json
{
  "react/no-unknown-property": [2, {"ignore": ​["accept-charset", "accesskey", "allowfullscreen", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "autoplay", "autosave", "cellpadding", "cellspacing", "charset", "class", "classid", "colspan", "contenteditable", "contextmenu", "controlslist", "crossorigin", "datetime", "disablepictureinpicture", "disableremoteplayback", "enctype", "for", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "frameborder", "hreflang", "http-equiv", "inputmode", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "keyparams", "keytype", "marginheight", "marginwidth", "maxlength", "mediagroup", "minlength", "nomodule", "novalidate", "playsinline", "radiogroup", "readonly", "referrerpolicy", "rowspan", "spellcheck", "srcdoc", "srclang", "srcset", "tabindex", "usemap", "accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "x-height", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "xmlns:xlink"]}]
}
```
</details>

## Caveats

Read [facebook/react#4433](https://github.com/facebook/react/issues/4433) for the reasoning behind why React treats these attributes the way it does and the potential gotchas which await you if you use this plugin (an old version of the JSX transformer used to perform a similar transformation).

## Attribution

Testing setup cloned from [gaearon/babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform).

## MIT Licensed

[travis-badge]: https://img.shields.io/travis/insin/babel-plugin-react-html-attrs/master.png?style=flat-square
[travis]: https://travis-ci.org/insin/babel-plugin-react-html-attrs

[npm-badge]: https://img.shields.io/npm/v/babel-plugin-react-html-attrs.png?style=flat-square
[npm]: https://www.npmjs.org/package/babel-plugin-react-html-attrs
