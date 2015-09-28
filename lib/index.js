'use strict'

var TRANSLATIONS = {
  'class': 'className',
  'for': 'htmlFor'
}

module.exports = function(plugin) {
  return new plugin.Plugin('babel-plugin-react-html-attrs', {
    visitor: {
      JSXAttribute: function(node) {
        if (node.name.name in TRANSLATIONS) {
          node.name.name = TRANSLATIONS[node.name.name]
        }
      }
    }
  })
}
