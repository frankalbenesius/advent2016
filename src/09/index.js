export const parseInput = raw => raw.trim()

const marker = /\((\d+)x(\d+)\)(.*)/
export const matchMarkerAtBeginning = str => str.match(marker)

export const decompress = (input) => {
  // learned later that I really didn't have to actually
  // decompress the string. see solvePart2
  let compressed = input
  let decompressed = ''
  while (compressed.length > 0) {
    const match = matchMarkerAtBeginning(compressed)
    if (match && match.index === 0) {
      const numChars = parseInt(match[1], 10)
      const numRepeat = parseInt(match[2], 10)
      const remaining = match[3]
      const expanded = remaining.substring(0, numChars).repeat(numRepeat)
      compressed = remaining.substring(numChars)
      decompressed = `${decompressed}${expanded}`
    } else {
      decompressed = `${decompressed}${compressed.substring(0, 1)}`
      compressed = compressed.substring(1)
    }
  }
  return decompressed
}

export const solvePart1 = (input) => {
  const compressed = parseInput(input)
  return decompress(compressed).length
}

const decompressionLength = (compressed) => {
  const match = matchMarkerAtBeginning(compressed)
  if (!match) {
    return compressed.length
  }
  const numChars = parseInt(match[1], 10)
  const numRepeat = parseInt(match[2], 10)
  const remaining = match[3]
  const beforeLength = parseInt(match.index, 10)
  return (
    beforeLength + // before length
    (numRepeat * decompressionLength(remaining.substring(0, numChars))) + // inside length
    decompressionLength(remaining.substring(numChars)) // after length
  )
}

export const solvePart2 = (input) => {
  const compressed = parseInput(input)
  return decompressionLength(compressed)
}

// RETROSPECTIVE: recursion is WAY faster if you're not doing
// string manipulation. turns out it works really well for simple math
