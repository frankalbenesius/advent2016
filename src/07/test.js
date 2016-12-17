import test from 'tape'
import {
  toIPs,
  hasAbba,
  doesSupportTLS,
} from '.'

test('toIPs', (assert) => {
  const input = ' butts \n turnt '
  const actual = toIPs(input)
  const expected = ['butts', 'turnt']
  const msg = 'toIPs should turn input into array of strings'
  assert.deepEqual(actual, expected, msg)
  assert.end()
})

test('hasAbba', (assert) => {
  const input = 'abbat'
  const actual = hasAbba(input)
  const expected = true
  assert.deepEqual(actual, expected)
  assert.end()
})

test('doesSupportTLS', (t) => {
  t.test('example 1', (assert) => {
    const input = 'abba[mnop]qrst'
    const actual = doesSupportTLS(input)
    const expected = true
    const msg = 'should match example output'
    assert.equal(actual, expected, msg)
    assert.end()
  })
  t.test('example 2', (assert) => {
    const input = 'abcd[bddb]xyyx'
    const actual = doesSupportTLS(input)
    const expected = false
    const msg = 'should match example output'
    assert.equal(actual, expected, msg)
    assert.end()
  })
  t.test('example 3', (assert) => {
    const input = 'aaaa[qwer]tyui'
    const actual = doesSupportTLS(input)
    const expected = false
    const msg = 'should match example output'
    assert.equal(actual, expected, msg)
    assert.end()
  })
  t.test('example 4', (assert) => {
    const input = 'ioxxoj[asdfgh]zxcvbn'
    const actual = doesSupportTLS(input)
    const expected = true
    const msg = 'should match example output'
    assert.equal(actual, expected, msg)
    assert.end()
  })
})
