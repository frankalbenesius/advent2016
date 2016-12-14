import { EOL } from 'os'
import caesar from 'caesar-cipher-al'

const toRoom = (roomStr) => {
  const parts = roomStr.match(/([a-z-]+)-([0-9]{3})\[([a-z]+)]/)
  const room = {
    name: parts[1],
    sector: parseInt(parts[2], 10),
    checksum: parts[3],
  }
  return room
}
export const parseInput = raw => raw.trim().split(EOL).map(x => x.trim()).map(toRoom)

const storeLetter = (acc, letter) => {
  const count = acc[letter] ? acc[letter] + 1 : 1
  const storage = Object.assign({}, acc)
  storage[letter] = count
  return (storage)
}
const toLetterCounts = (letters) => {
  const countsObj = letters.reduce(storeLetter, {})
  const countsArray = Object.keys(countsObj).map(key => ({ letter: key, count: countsObj[key] }))
  return countsArray
}
const checksumSort = (a, b) => {
  const countDiff = b.count - a.count // descending count sort
  if (countDiff !== 0) {
    return countDiff
  }
  return a.letter < b.letter ? -1 : 1 // ascending letter sort
}
export const nameToChecksum = (name) => {
  const letters = name.replace(/-/g, '').split('')
  const counts = toLetterCounts(letters)
  const checksum = counts.sort(checksumSort).map(x => x.letter).join('').substring(0, 5)
  return checksum
}

export const isRealRoom = room => nameToChecksum(room.name) === room.checksum

export const toSectorSum = rooms => rooms.reduce((sum, r) => (sum + r.sector), 0)
export const solvePart1 = (rawInput) => {
  const rooms = parseInput(rawInput)
  const realRooms = rooms.filter(isRealRoom)
  const sectorSum = toSectorSum(realRooms)
  return sectorSum
}

const toDecryptedRoom = room => ({
  name: caesar.decrypt(room.name, (room.sector * -1)),
  sector: room.sector,
})

export const solvePart2 = (rawInput) => {
  const rooms = parseInput(rawInput)
  const realRooms = rooms.filter(isRealRoom)
  const decryptedRooms = realRooms.map(toDecryptedRoom)
  return decryptedRooms.filter(x => x.name === 'northpole-object-storage')[0].sector
}
