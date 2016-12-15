/* eslint-disable no-console */
import fs from 'fs'
import { distanceToFinalPosition, distanceToFirstVisitedTwice } from '.'

export default () => {
  const file = fs.readFileSync('./src/01/input.txt')
  const part1 = distanceToFinalPosition(file.toString().trim())
  const part2 = distanceToFirstVisitedTwice(file.toString().trim())
  return [part1, part2]
}
