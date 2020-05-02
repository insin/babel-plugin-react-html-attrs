const fs = require('fs')
const path = require('path')

const Babel = require('@babel/core')
const expect = require('expect')

describe('babel-plugin-react-html-attrs', () => {
  const fixturesDir = path.join(__dirname, 'fixtures')
  fs.readdirSync(fixturesDir).map((caseName) => {
    test(caseName, () => {
      const fixtureDir = path.join(fixturesDir, caseName)
      const actualPath = path.join(fixtureDir, 'actual.js')

      expect(Babel.transformFileSync(actualPath).code).toMatchSnapshot()
    })
  })
})
