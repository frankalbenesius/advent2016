import test from 'tape'
import {
  parseInput,
  matchMarkerAtBeginning,
  decompress,
  solvePart1,
} from '.'

test('parseInput', (assert) => {
  const input = ' butts  '
  const actual = parseInput(input)
  const expected = 'butts'
  const msg = 'parseInput just trims stuff for now'
  assert.deepEqual(actual, expected, msg)
  assert.end()
})

test('matchMarkerAtBeginning', (assert) => {
  const input = '(43x3)butts'
  const actual = matchMarkerAtBeginning(input).length
  const expected = ['(43x3)butts', '43', '3', 'butts'].length
  const msg = 'should return the regex match of a marker'
  assert.deepEqual(actual, expected, msg)
  assert.end()
})

test('decompress', (assert) => {
  const input = '(4x3)butts'
  const actual = decompress(input)
  const expected = 'buttbuttbutts'
  const msg = 'should read markers to decompress strings'
  assert.deepEqual(actual, expected, msg)
  assert.end()
})

test('solvePart1', (t) => {
  t.test('example 1', (assert) => {
    const input = 'ADVENT'
    const actual = solvePart1(input)
    const expected = 6
    assert.deepEqual(actual, expected)
    assert.end()
  })
  t.test('example 2', (assert) => {
    const input = 'A(1x5)BC'
    const actual = solvePart1(input)
    const expected = 7
    assert.deepEqual(actual, expected)
    assert.end()
  })
  t.test('example 3', (assert) => {
    const input = '(3x3)XYZ'
    const actual = solvePart1(input)
    const expected = 9
    assert.deepEqual(actual, expected)
    assert.end()
  })
  t.test('example 4', (assert) => {
    const input = 'A(2x2)BCD(2x2)EFG'
    const actual = solvePart1(input)
    const expected = 11
    assert.deepEqual(actual, expected)
    assert.end()
  })
  t.test('example 5', (assert) => {
    const input = '(6x1)(1x3)A'
    const actual = solvePart1(input)
    const expected = 6
    assert.deepEqual(actual, expected)
    assert.end()
  })
  t.test('example 6', (assert) => {
    const input = 'X(8x2)(3x3)ABCY'
    const actual = solvePart1(input)
    const expected = 18
    assert.deepEqual(actual, expected)
    assert.end()
  })
})
