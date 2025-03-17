const expect = require('chai').expect;

describe('gather & rest', function () {
    it('... operator (spread)', function () {
        var a = [2, 3, 4];
        var b = [1, ...a, 5];

        expect(b).to.eqls([1, 2, 3, 4, 5]);
    });

    it('destructuring', function () {
        var a = [2, 3, 4];
        var [b, ...c] = a;

        expect(b).to.equal(2);
        expect(c).to.eqls([3, 4]);
    });
});
