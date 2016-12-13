import test from 'tape'
import {
  parseInput,
  toResult,
  toDirections,
  traverseKeyPad,
  toSquareBathroomCode,
} from '.'

test('parseInput', (t) => {
  t.test('returns an array', (assert) => {
    const input = 'ULL\nRRDDD\nLURDL\nUUUUD'
    const result = Array.isArray(parseInput(input))
    assert.ok(result)
    assert.end()
  })
  t.test('splits on new lines', (assert) => {
    const input = 'ULL\nRRDDD\nLURDL\nUUUUD'
    const actual = parseInput(input)[0]
    const expected = 'ULL'
    assert.equal(actual, expected)
    assert.end()
  })
})

test('toResult', (t) => {
  t.test('returns an integer', (assert) => {
    const input = 'U'
    const result = Number.isInteger(toResult(input))
    assert.ok(result)
    assert.end()
  })
})

test('toDirections', (t) => {
  t.test('splits a string into its letters', (assert) => {
    const input = 'UP'
    const actual = toDirections(input)
    const expected = ['U', 'P']
    assert.deepEqual(actual, expected)
    assert.end()
  })
})

test('traverseKeyPad', (t) => {
  t.test('returns an integer', (assert) => {
    const inputPosition = 5
    const inputDirection = 'U'
    const result = traverseKeyPad(inputPosition, inputDirection)
    assert.ok(result)
    assert.end()
  })
  t.test('returns 6 if position is 5 and direction is R', (assert) => {
    const inputPosition = 5
    const inputDirection = 'R'
    const actual = traverseKeyPad(inputPosition, inputDirection)
    const expected = 6
    assert.equal(actual, expected)
    assert.end()
  })
  t.test('returns 5 if position is 8 and direction is U', (assert) => {
    const inputPosition = 8
    const inputDirection = 'U'
    const actual = traverseKeyPad(inputPosition, inputDirection)
    const expected = 5
    assert.equal(actual, expected)
    assert.end()
  })
})

test('toSquareBathroomCode', (t) => {
  t.test('returns a string', (assert) => {
    const input = 'ULL\nRRDDD\nLURDL\nUUUUD'
    const actual = typeof toSquareBathroomCode(input)
    const expected = 'string'
    assert.equal(actual, expected)
    assert.end()
  })
  t.test('returns a string length equal to line length', (assert) => {
    const input = 'ULL\nRRDDD\nLURDL\nUUUUD'
    const actual = toSquareBathroomCode(input).length
    const expected = 4
    assert.equal(actual, expected)
    assert.end()
  })
})
