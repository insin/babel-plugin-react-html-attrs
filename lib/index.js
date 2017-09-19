'use strict'

var TRANSLATIONS = require('./translations');

var nestedVisitor = {
  JSXAttribute: function(node) {
    console.log(node.node.name.name);
    if (node.node.name.name in TRANSLATIONS) {
      node.node.name.name = TRANSLATIONS[node.node.name.name];
    }
  },
};

module.exports = function() {
  return {
    visitor: {
      JSXElement: function(path, file) {
        path.traverse(nestedVisitor);
      },
    },
  };
};

