const assert = require('assert')
const fs = require('fs')
const path = require('path')

const Babel = require('@babel/core')

function trim(str) {
  return str.replace(/^\s+|\s+$/, '')
}

describe('Transforms HTML/SVG attributes on JSX host elements', function () {
  this.timeout(10000)
  let fixturesDir = path.join(__dirname, 'fixtures')
  fs.readdirSync(fixturesDir).map(function (caseName) {
    it(caseName, function () {
      let fixtureDir = path.join(fixturesDir, caseName)
      let actualPath = path.join(fixtureDir, 'actual.js')
      let actual = Babel.transformFileSync(actualPath).code

      let expected = fs
        .readFileSync(path.join(fixtureDir, 'expected.js'))
        .toString()

      assert.equal(trim(actual), trim(expected))
    })
  })
})
