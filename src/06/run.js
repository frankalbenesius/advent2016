import fs from 'fs'
import {
  solvePart1,
  solvePart2,
} from '.'

export default () => {
  const file = fs.readFileSync('./src/06/input.txt')
  const part1 = solvePart1(file.toString().trim())
  const part2 = solvePart2(file.toString().trim())
  return [part1, part2]
}
