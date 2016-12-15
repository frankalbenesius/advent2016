import test from 'tape'
import {
  parseInput,
  nameToChecksum,
  isRealRoom,
  toSectorSum,
  solvePart1,
} from '.'

test('parseInput', (t) => {
  const input = ' aaaaa-bbb-z-y-x-123[abxyz]\n totally-real-room-200[decoy]'
  const actual = parseInput(input)
  const expected = [
    {
      name: 'aaaaa-bbb-z-y-x',
      sector: 123,
      checksum: 'abxyz',
    }, {
      name: 'totally-real-room',
      sector: 200,
      checksum: 'decoy',
    },
  ]
  const msg = 'parseInt should return an array of parsed room objects'
  t.deepEqual(actual, expected, msg)
  t.end()
})

test('nameToChecksum', (t) => {
  const input = 'aaaaa-bbb-z-y-x-c'
  const actual = nameToChecksum(input)
  const expected = 'abcxy'
  const msg = 'nameToChecksum should turn an encrypted name into a checksum'
  t.deepEqual(actual, expected, msg)
  t.end()
})

test('isRealRoom', (t) => {
  const input = {
    name: 'aaaaa-bbb-z-y-x',
    sector: 123,
    checksum: 'abxyz',
  }
  const actual = isRealRoom(input)
  const expected = true
  const msg = 'isRealRoom should match true when nameToChecksum returns checksum'
  t.equal(actual, expected, msg)
  t.end()
})

test('toSectorSum', (t) => {
  const input = [{ sector: 11 }, { sector: 1 }]
  const actual = toSectorSum(input)
  const expected = 12
  const msg = 'toSectorSum should return the sum of sector values'
  t.equal(actual, expected, msg)
  t.end()
})

test('part 1 example', (t) => {
  const input = 'aaaaa-bbb-z-y-x-123[abxyz]\na-b-c-d-e-f-g-h-987[abcde]\nnot-a-real-room-404[oarel]\ntotally-real-room-200[decoy]'
  const actual = solvePart1(input)
  const expected = 1514
  const msg = 'should match example output'
  t.equal(actual, expected, msg)
  t.end()
})
