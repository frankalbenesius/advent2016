import test from 'tape'
import {
  toMessages,
  toColumnStrings,
  toMostFrequentLetters,
  solvePart1,
  solvePart2,
} from '.'

test('toMessages', (assert) => {
  const input = ' butts \n turnt '
  const actual = toMessages(input)
  const expected = ['butts', 'turnt']
  const msg = 'toMessages should turn input into array of messages'
  assert.deepEqual(actual, expected, msg)
  assert.end()
})

test('toColumnStrings', (assert) => {
  const input = ['butts', 'turnt']
  const actual = toColumnStrings(input)
  const expected = ['bt', 'uu', 'tr', 'tn', 'st']
  const msg = 'should reduce an array of messages into strings of joined letters at each index'
  assert.deepEqual(actual, expected, msg)
  assert.end()
})

test('toMostFrequentLetters', (assert) => {
  const input = ['butts', 'turnt']
  const actual = toMostFrequentLetters(input)
  const expected = ['t', 't']
  const msg = 'should return array of most frequent letters in input strings'
  assert.deepEqual(actual, expected, msg)
  assert.end()
})

test('part 1 example', (t) => {
  const input = [
    'eedadn',
    'drvtee',
    'eandsr',
    'raavrd',
    'atevrs',
    'tsrnev',
    'sdttsa',
    'rasrtv',
    'nssdts',
    'ntnada',
    'svetve',
    'tesnvt',
    'vntsnd',
    'vrdear',
    'dvrsen',
    'enarar',
  ].join('\n')
  const actual = solvePart1(input)
  const expected = 'easter'
  const msg = 'should get the expected solution from the example'
  t.equal(actual, expected, msg)
  t.end()
})

test('part 2 example', (t) => {
  const input = [
    'eedadn',
    'drvtee',
    'eandsr',
    'raavrd',
    'atevrs',
    'tsrnev',
    'sdttsa',
    'rasrtv',
    'nssdts',
    'ntnada',
    'svetve',
    'tesnvt',
    'vntsnd',
    'vrdear',
    'dvrsen',
    'enarar',
  ].join('\n')
  const actual = solvePart2(input)
  const expected = 'advent'
  const msg = 'should get the expected solution from the example'
  t.equal(actual, expected, msg)
  t.end()
})
