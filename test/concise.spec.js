let expect = require('chai').expect;

describe('concise', function () {
    it('properties', function () {
        var x = 2,
            y = 3,
            o = {
        x,
        y,
            };

        expect(x).to.equal(o.x);
        expect(y).to.equal(o.y);
    });

    it('methods', function () {
        var o = {
      x: function (foo) {
          return foo;
      },
      y: function (bar) {
          return bar;
      },
        };

        var p = {
      x(foo) {
          return foo;
      },
      y(bar) {
          return bar;
      },
        };

        expect(o.x('foo')).to.equal(p.x('foo'));
        expect(o.y('bar')).to.equal(p.y('bar'));
    });
});
