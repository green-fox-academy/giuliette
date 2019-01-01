import test from 'tape';

test('timing test', function (t) {
    t.plan(2);

    t.equal(typeof Date.now, 'function');

    var start = Date.now();

    setTimeout(function () {
        t.equal(Date.now() - start, 106);}, 100);
});
