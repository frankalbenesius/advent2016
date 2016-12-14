import test from 'tape'
import {
  parseRawInputByRow,
  parseRawInputByColumn,
  isValidTriangle,
  solvePart1,
} from '.'

test('parseRawInputByRow', (t) => {
  const input = ' 5 10 25\n 0  0 0\n'
  const actual = parseRawInputByRow(input)
  const expected = [[5, 10, 25], [0, 0, 0]]
  const msg = 'parseRawInputByRow should return an array of triangles (integer arrays)'
  t.deepEqual(actual, expected, msg)
  t.end()
})

test('parseRawInputByColumn', (t) => {
  const input = ' 5 10 25\n 0  0 0\n   10 11 12 \n'
  const actual = parseRawInputByColumn(input)
  const expected = [[5, 0, 10], [10, 0, 11], [25, 0, 12]]
  const msg = 'parseRawInputByColumn should return an array of triangles (integer arrays)'
  t.deepEqual(actual, expected, msg)
  t.end()
})

test('isValidTriangle', (t) => {
  let input = [3, 3, 2]
  let actual = isValidTriangle(input)
  let expected = true
  let msg = 'isValidTriangle should return true on valid triangles'
  t.equal(actual, expected, msg)

  input = [1, 2, 4]
  actual = isValidTriangle(input)
  expected = false
  msg = 'isValidTriangle should return false on invalid triangles'
  t.equal(actual, expected, msg)
  t.end()
})

test('part 1 example', (t) => {
  const input = '5 10 25\n'
  const actual = solvePart1(input)
  const expected = 0
  const msg = 'part 1 example should... work. or else what\'s the point?!'
  t.equal(actual, expected, msg)
  t.end()
})
