import test from 'tape'
import {
  parseInput,
  getScreen,
  rect,
  rotateColumn,
  rotateRow,
} from '.'

test('parseInput', (assert) => {
  const input = ' butts \n turnt '
  const actual = parseInput(input)
  const expected = ['butts', 'turnt']
  const msg = 'parseInput should turn input into array of strings'
  assert.deepEqual(actual, expected, msg)
  assert.end()
})

test('getScreen', (assert) => {
  const inputX = 4
  const inputY = 3
  const actual = getScreen(inputX, inputY)
  const expected = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]
  const msg = 'create a 2d array of false values'
  assert.deepEqual(actual, expected, msg)
  assert.end()
})

test('rect', (assert) => {
  const x = 2
  const y = 3
  const state = getScreen(3, 4)
  const actual = rect(x, y)(state)
  const expected = [
    [true, true, true, false],
    [true, true, true, false],
    [false, false, false, false],
  ]
  assert.deepEqual(actual, expected)
  assert.end()
})

test('rotate column', (assert) => {
  const column = 1
  const amount = 2
  const state = [
    [true, true, false, true],
    [true, false, false, true],
  ]
  const actual = rotateColumn(column, amount)(state)
  const expected = [
    [true, true, false, true],
    [false, true, true, false],
  ]
  assert.deepEqual(actual, expected)
  assert.end()
})

test('rotate row', (assert) => {
  const idx = 1
  const amount = 2
  const state = [   // ##.   => ##.
    [true, true],   // ##.   => #.#
    [true, true],
    [false, false],
  ]
  const actual = rotateRow(idx, amount)(state)
  const expected = [
    [true, true],
    [true, false],
    [false, true],
  ]
  assert.deepEqual(actual, expected)
  assert.end()
})
