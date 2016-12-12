import test from 'tape'
import { distanceToFinalPosition, distanceToFirstVisitedTwice } from '.'

test('distanceToFinalPosition', (t) => {
  t.test('returns an integer', (assert) => {
    const input = 'R2, L3'
    const expected = 'number'
    const actual = distanceToFinalPosition(input)
    assert.equal(typeof actual, expected)
    assert.end()
  })
  t.test('returns a distance of 2 when we go 2 to the Right', (assert) => {
    const input = 'R2'
    const expected = 2
    const actual = distanceToFinalPosition(input)
    assert.equal(actual, expected)
    assert.end()
  })
  t.test('returns a distance of 3 when we go 3 to the Right', (assert) => {
    const input = 'R3'
    const expected = 3
    const actual = distanceToFinalPosition(input)
    assert.equal(actual, expected)
    assert.end()
  })
  t.test('returns a distance of 2 when we go R1 and L1', (assert) => {
    const input = 'R1 L1'
    const expected = 2
    const actual = distanceToFinalPosition(input)
    assert.equal(actual, expected)
    assert.end()
  })
  t.test('Provided example 1', (assert) => {
    const input = 'R2, L3'
    const expected = 5
    const actual = distanceToFinalPosition(input)
    assert.equal(actual, expected)
    assert.end()
  })
  t.test('Provided example 2', (assert) => {
    const input = 'R2, R2, R2'
    const expected = 2
    const actual = distanceToFinalPosition(input)
    assert.equal(actual, expected)
    assert.end()
  })
  t.test('Provided example 3', (assert) => {
    const input = 'R5, L5, R5, R3'
    const expected = 12
    const actual = distanceToFinalPosition(input)
    assert.equal(actual, expected)
    assert.end()
  })
})

test('distanceToFirstVisitedTwice', (t) => {
  t.test('Provided example 4', (assert) => {
    const input = 'R8, R4, R4, R8'
    const expected = 4
    const actual = distanceToFirstVisitedTwice(input)
    assert.equal(actual, expected)
    assert.end()
  })
})

test('distanceToFinalPosition')
