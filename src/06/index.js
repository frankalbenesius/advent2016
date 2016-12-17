import { EOL } from 'os'

export const toMessages = raw => raw.split(EOL).map(x => x.trim())

const appendToIndex = (columns, message) => {
  const letters = message.split('')
  if (columns.length === 0) {
    return letters
  }
  return columns.map((str, i) => `${str}${letters[i]}`)
}
export const toColumnStrings = messages => messages.reduce(appendToIndex, [])

const toLetterCounts = (counts, letter) => {
  const count = counts[letter] || 0
  const merging = {
    [letter]: (count + 1),
  }
  return Object.assign(
    {},
    counts,
    merging,
  )
}
const toLetter = sorter => (word) => {
  const counts = word.split('').reduce(toLetterCounts, {})
  const sortable = Object.keys(counts).map(letter => ({ letter, count: counts[letter] }))
  return sortable.sort(sorter)[0].letter
}
const sortDescending = (a, b) => b.count - a.count
const sortAscending = (a, b) => a.count - b.count
export const toMostFrequentLetters = words => words.map(toLetter(sortDescending))
export const toLeastFrequentLetters = words => words.map(toLetter(sortAscending))

export const solvePart1 = (input) => {
  const messages = toMessages(input)
  const columns = toColumnStrings(messages)
  const letters = toMostFrequentLetters(columns)
  return letters.join('')
}

export const solvePart2 = (input) => {
  const messages = toMessages(input)
  const columns = toColumnStrings(messages)
  const letters = toLeastFrequentLetters(columns)
  return letters.join('')
}
