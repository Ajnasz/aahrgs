const assert = require('assert');
const aahrgs = require('../index.cjs')
const aahrgsNamed = require('../index.cjs').aahrgs;

assert.deepEqual(aahrgsNamed(['--foo', 'bar', '--baz', 'qux', '--quux']), { foo: 'bar', baz: 'qux', quux: true });
assert.deepEqual(aahrgs(['--foo', 'bar', '--baz', 'qux', '--quux']), { foo: 'bar', baz: 'qux', quux: true });
