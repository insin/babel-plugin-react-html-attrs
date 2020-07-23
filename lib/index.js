// Based on https://github.com/facebook/react/blob/master/packages/react-dom/src/shared/possibleStandardNames.js
const attributeTransforms = new Map([
  // HTML
  ['accept-charset', 'acceptCharset'],
  ['accesskey', 'accessKey'],
  ['allowfullscreen', 'allowFullScreen'],
  ['autocapitalize', 'autoCapitalize'],
  ['autocomplete', 'autoComplete'],
  ['autocorrect', 'autoCorrect'],
  ['autofocus', 'autoFocus'],
  ['autoplay', 'autoPlay'],
  ['autosave', 'autoSave'],
  ['cellpadding', 'cellPadding'],
  ['cellspacing', 'cellSpacing'],
  ['charset', 'charSet'],
  ['class', 'className'],
  ['classid', 'classID'],
  ['colspan', 'colSpan'],
  ['contenteditable', 'contentEditable'],
  ['contextmenu', 'contextMenu'],
  ['controlslist', 'controlsList'],
  ['crossorigin', 'crossOrigin'],
  ['datetime', 'dateTime'],
  ['disablepictureinpicture', 'disablePictureInPicture'],
  ['disableremoteplayback', 'disableRemotePlayback'],
  ['enctype', 'encType'],
  ['for', 'htmlFor'],
  ['formaction', 'formAction'],
  ['formenctype', 'formEncType'],
  ['formmethod', 'formMethod'],
  ['formnovalidate', 'formNoValidate'],
  ['formtarget', 'formTarget'],
  ['frameborder', 'frameBorder'],
  ['hreflang', 'hrefLang'],
  ['http-equiv', 'httpEquiv'],
  ['inputmode', 'inputMode'],
  ['itemid', 'itemID'],
  ['itemprop', 'itemProp'],
  ['itemref', 'itemRef'],
  ['itemscope', 'itemScope'],
  ['itemtype', 'itemType'],
  ['keyparams', 'keyParams'],
  ['keytype', 'keyType'],
  ['marginheight', 'marginHeight'],
  ['marginwidth', 'marginWidth'],
  ['maxlength', 'maxLength'],
  ['mediagroup', 'mediaGroup'],
  ['minlength', 'minLength'],
  ['nomodule', 'noModule'],
  ['novalidate', 'noValidate'],
  ['playsinline', 'playsInline'],
  ['radiogroup', 'radioGroup'],
  ['readonly', 'readOnly'],
  ['referrerpolicy', 'referrerPolicy'],
  ['rowspan', 'rowSpan'],
  ['spellcheck', 'spellCheck'],
  ['srcdoc', 'srcDoc'],
  ['srclang', 'srcLang'],
  ['srcset', 'srcSet'],
  ['tabindex', 'tabIndex'],
  ['usemap', 'useMap'],
  // SVG
  ['accent-height', 'accentHeight'],
  ['alignment-baseline', 'alignmentBaseline'],
  ['arabic-form', 'arabicForm'],
  ['baseline-shift', 'baselineShift'],
  ['cap-height', 'capHeight'],
  ['clip-path', 'clipPath'],
  ['clip-rule', 'clipRule'],
  ['color-interpolation', 'colorInterpolation'],
  ['color-interpolation-filters', 'colorInterpolationFilters'],
  ['color-profile', 'colorProfile'],
  ['color-rendering', 'colorRendering'],
  ['dominant-baseline', 'dominantBaseline'],
  ['enable-background', 'enableBackground'],
  ['fill-opacity', 'fillOpacity'],
  ['fill-rule', 'fillRule'],
  ['flood-color', 'floodColor'],
  ['flood-opacity', 'floodOpacity'],
  ['font-family', 'fontFamily'],
  ['font-size', 'fontSize'],
  ['font-size-adjust', 'fontSizeAdjust'],
  ['font-stretch', 'fontStretch'],
  ['font-style', 'fontStyle'],
  ['font-variant', 'fontVariant'],
  ['font-weight', 'fontWeight'],
  ['glyph-name', 'glyphName'],
  ['glyph-orientation-horizontal', 'glyphOrientationHorizontal'],
  ['glyph-orientation-vertical', 'glyphOrientationVertical'],
  ['horiz-adv-x', 'horizAdvX'],
  ['horiz-origin-x', 'horizOriginX'],
  ['image-rendering', 'imageRendering'],
  ['letter-spacing', 'letterSpacing'],
  ['lighting-color', 'lightingColor'],
  ['marker-end', 'markerEnd'],
  ['marker-mid', 'markerMid'],
  ['marker-start', 'markerStart'],
  ['overline-position', 'overlinePosition'],
  ['overline-thickness', 'overlineThickness'],
  ['paint-order', 'paintOrder'],
  ['panose-1', 'panose1'],
  ['pointer-events', 'pointerEvents'],
  ['rendering-intent', 'renderingIntent'],
  ['shape-rendering', 'shapeRendering'],
  ['stop-color', 'stopColor'],
  ['stop-opacity', 'stopOpacity'],
  ['strikethrough-position', 'strikethroughPosition'],
  ['strikethrough-thickness', 'strikethroughThickness'],
  ['stroke-dasharray', 'strokeDasharray'],
  ['stroke-dashoffset', 'strokeDashoffset'],
  ['stroke-linecap', 'strokeLinecap'],
  ['stroke-linejoin', 'strokeLinejoin'],
  ['stroke-miterlimit', 'strokeMiterlimit'],
  ['stroke-opacity', 'strokeOpacity'],
  ['stroke-width', 'strokeWidth'],
  ['text-anchor', 'textAnchor'],
  ['text-decoration', 'textDecoration'],
  ['text-rendering', 'textRendering'],
  ['underline-position', 'underlinePosition'],
  ['underline-thickness', 'underlineThickness'],
  ['unicode-bidi', 'unicodeBidi'],
  ['unicode-range', 'unicodeRange'],
  ['units-per-em', 'unitsPerEm'],
  ['v-alphabetic', 'vAlphabetic'],
  ['v-hanging', 'vHanging'],
  ['v-ideographic', 'vIdeographic'],
  ['v-mathematical', 'vMathematical'],
  ['vector-effect', 'vectorEffect'],
  ['vert-adv-y', 'vertAdvY'],
  ['vert-origin-x', 'vertOriginX'],
  ['vert-origin-y', 'vertOriginY'],
  ['word-spacing', 'wordSpacing'],
  ['writing-mode', 'writingMode'],
  ['x-height', 'xHeight'],
  ['xlink:actuate', 'xlinkActuate'],
  ['xlink:arcrole', 'xlinkArcrole'],
  ['xlink:href', 'xlinkHref'],
  ['xlink:role', 'xlinkRole'],
  ['xlink:show', 'xlinkShow'],
  ['xlink:title', 'xlinkTitle'],
  ['xlink:type', 'xlinkType'],
  ['xml:base', 'xmlBase'],
  ['xml:lang', 'xmlLang'],
  ['xml:space', 'xmlSpace'],
  ['xmlns:xlink', 'xmlnsXlink'],
])

const booleanAttributes = new Set([
  'allowfullscreen',
  'allowpopups',
  'allowtransparency',
  'async',
  'autofocus',
  'autoplay',
  'autosize',
  'checked',
  'controls',
  'default',
  'defer',
  'disabled',
  'disableguestresize',
  'disablepictureinpicture',
  'disablewebsecurity',
  'formnovalidate',
  'hidden',
  'itemscope',
  'loop',
  'multiple',
  'muted',
  'nodeintegration',
  'nomodule',
  'novalidate',
  'open',
  'playsinline',
  'plugins',
  'readonly',
  'required',
  'reversed',
  'scoped',
  'seamless',
  'selected',
])

const numericAttributes = new Set([
  'aria-colcount',
  'aria-colindex',
  'aria-colspan',
  'aria-level',
  'aria-posinset',
  'aria-rowcount',
  'aria-rowindex',
  'aria-rowspan',
  'aria-setsize',
  'aria-valuemax',
  'aria-valuemin',
  'aria-valuenow',
  'cellpadding',
  'cellspacing',
  'cols',
  'colspan',
  'high',
  'low',
  'marginheight',
  'marginwidth',
  'max',
  'maxlength',
  'min',
  'minlength',
  'optimum',
  'results',
  'rows',
  'rowspan',
  'size',
  'span',
  'start',
  'step',
  'tabindex',
])

module.exports = ({ types: t }) => {
  function transformJsxAttribute(node) {
    if (node.type !== 'JSXAttribute') {
      return
    }

    const isNamespaced = node.name.type === 'JSXNamespacedName'
    const attributeName = isNamespaced
      ? node.name.namespace.name + ':' + node.name.name.name
      : node.name.name

    // Replace HTML attribute names which are an all-lowercase or snake-case
    // version, or a reserved JavaScript word, with their corresponding DOM
    // property name.
    if (attributeTransforms.has(attributeName)) {
      if (isNamespaced) {
        node.name = t.jsxIdentifier(attributeTransforms.get(attributeName))
      } else {
        node.name.name = attributeTransforms.get(attributeName)
      }
    }

    // Remaining transforms are for StringLiteral values, so bail now if we can
    if (node.value == null || node.value.type !== 'StringLiteral') {
      return
    }

    // Numeric HTML attributes: replace numeric StringLiteral values with a
    // JSXExpression containing a number literal.
    if (numericAttributes.has(attributeName)) {
      const number = Number(node.value.value)
      if (!Number.isNaN(number)) {
        node.value = t.jsxExpressionContainer(t.numericLiteral(number))
      }
    }
    // Boolean HTML attributes: remove StringLiteral values, as the presence of
    // the HTML attribute is equivalent to true.
    else if (booleanAttributes.has(attributeName)) {
      node.value = null
    }
  }

  return {
    visitor: {
      JSXOpeningElement: (path) => {
        if (t.react.isCompatTag(path.node.name.name)) {
          path.node.attributes.forEach(transformJsxAttribute)
        }
      },
    },
  }
}
