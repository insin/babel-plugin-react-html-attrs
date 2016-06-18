var assert = require('assert')
var fs = require('fs')
var path = require('path')

var Babel = require('babel-core')

function trim(str) {
  return str.replace(/^\s+|\s+$/, '')
}

describe('Transforms "class" and "for" JSX attributes', function() {
  this.timeout(10000)
  var fixturesDir = path.join(__dirname, 'fixtures')
  fs.readdirSync(fixturesDir).map(function(caseName) {
    it(caseName, function() {
      var fixtureDir = path.join(fixturesDir, caseName)
      var actualPath = path.join(fixtureDir, 'actual.js')
      var actual = Babel.transformFileSync(actualPath).code

      var expected = fs.readFileSync(
        path.join(fixtureDir, 'expected.js')
      ).toString()

      assert.equal(trim(actual), trim(expected))
    })
  })
})
