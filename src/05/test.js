import test from 'tape'
import {
  solvePart1,
  // solvePart2,
} from '.'

test('part 1 example', (t) => {
  const input = 'abc'
  const actual = solvePart1(input)
  const expected = '18f47a30'
  const msg = 'should match example output'
  t.equal(actual, expected, msg)
  t.end()
})
