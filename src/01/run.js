/* eslint-disable no-console */
import fs from 'fs'
import { distanceToFinalPosition, distanceToFirstVisitedTwice } from '.'

export default () => {
  fs.readFile('./src/01/input.txt', (err, data) => {
    if (err) {
      throw err
    }
    const part1 = distanceToFinalPosition(data.toString().trim())
    const part2 = distanceToFirstVisitedTwice(data.toString().trim())
    console.log(`Day 01 | Part 1: ${part1} | Part 2: ${part2}`)
  })
}
