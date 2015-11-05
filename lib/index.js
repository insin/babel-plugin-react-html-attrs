'use strict'

var TRANSLATIONS = {
  'class': 'className',
  'for': 'htmlFor'
}

module.exports = function() {
  return {
    visitor: {
      JSXAttribute: function(node) {
        if (node.node.name.name in TRANSLATIONS) {
          node.node.name.name = TRANSLATIONS[node.node.name.name]
        }
      }
    }
  }
}
