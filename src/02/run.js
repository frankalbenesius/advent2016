/* eslint-disable no-console */
import fs from 'fs'
import {
  toSquareBathroomCode,
  toDiamondBathroomCode,
} from '.'

export default () => {
  fs.readFile('./src/02/input.txt', (err, data) => {
    if (err) {
      throw err
    }
    const part1 = toSquareBathroomCode(data.toString().trim())
    const part2 = toDiamondBathroomCode(data.toString().trim())
    console.log(`Day 02 | Part 1: ${part1} | Part 2: ${part2}`)
  })
}
