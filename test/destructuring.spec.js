const expect = require('chai').expect

describe('ES6&B', function () {
  describe('Destructuring', function () {
    it('array', function () {
      function foo() {
        return [1, 2, 3]
      }

      var [a, b, c] = foo()

      expect(a).to.equal(1)
      expect(b).to.equal(2)
      expect(c).to.equal(3)

      // Not just declaration
      ;[a, b, c] = foo()

      expect(a).to.equal(1)
      expect(b).to.equal(2)
      expect(c).to.equal(3)
    })

    it('object', function () {
      function bar() {
        return {
          x: 4,
          y: 5,
          z: 6,
        }
      }

      var { x, y, z } = bar()

      expect(x).to.equal(4)
      expect(y).to.equal(5)
      expect(z).to.equal(6)

      // Remember: In destructuring assignments are source --> target

      var { x: target_x, y: target_y, z: target_z } = bar()

      expect(target_x).to.equal(4)
      expect(target_y).to.equal(5)
      expect(target_z).to.equal(6)

      // Not just declaration
      ;({ x, y, z } = bar())

      expect(x).to.equal(4)
      expect(y).to.equal(5)
      expect(z).to.equal(6)
    })

    it('flatten out objet namespaces', function () {
      var App = {
        model: {
          User: console.log,
        },
      }

      var {
        model: { User },
      } = App

      expect(User).to.eqls(App.model.User)
    })
  })
})
