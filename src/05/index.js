import md5 from 'md5'

export const parseInput = raw => raw

export const solvePart1 = (doorId) => {
  const password = []
  let index = 0
  while (password.length < 8) {
    const hashable = `${doorId}${index}`
    const hash = md5(hashable)
    if (hash.indexOf('00000') === 0) {
      const match = hash.charAt(5)
      password.push(match)
    }
    index += 1
  }
  return password.join('')
}

export const solvePart2 = (doorId) => {
  const password = ['_', '_', '_', '_', '_', '_', '_', '_']
  let index = 0
  while (password.some(c => c === '_')) {
    const hashable = `${doorId}${index}`
    const hash = md5(hashable)
    if (hash.indexOf('00000') === 0) {
      const pos = hash.charAt(5)
      const char = hash.charAt(6)
      if (pos < 8 && password[pos] === '_') {
        password[pos] = char
      }
    }
    index += 1
  }
  return password.join('')
}
