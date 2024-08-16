import assert from 'assert';
import aahrgs, { aahrgs as aahrgsNamed } from '../index.mjs';

assert.deepEqual(aahrgsNamed(['--foo', 'bar', '--baz', 'qux', '--quux']), { foo: 'bar', baz: 'qux', quux: true });
assert.deepEqual(aahrgs(['--foo', 'bar', '--baz', 'qux', '--quux']), { foo: 'bar', baz: 'qux', quux: true });
