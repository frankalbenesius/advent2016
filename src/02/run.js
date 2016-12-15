/* eslint-disable no-console */
import fs from 'fs'
import {
  toSquareBathroomCode,
  toDiamondBathroomCode,
} from '.'

export default () => {
  const file = fs.readFileSync('./src/02/input.txt')
  const part1 = toSquareBathroomCode(file.toString().trim())
  const part2 = toDiamondBathroomCode(file.toString().trim())
  return [part1, part2]
}
