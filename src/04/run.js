/* eslint-disable no-console */
import fs from 'fs'
import {
  solvePart1,
  solvePart2,
} from '.'

export default () => {
  fs.readFile('./src/04/input.txt', (err, data) => {
    if (err) {
      throw err
    }
    const solutionPart1 = solvePart1(data.toString().trim())
    const solutionPart2 = solvePart2(data.toString().trim())
    console.log(`Day 04 | Part 1: ${solutionPart1} | Part 2: ${solutionPart2}`)
  })
}
