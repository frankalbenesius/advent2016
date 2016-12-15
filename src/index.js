/* eslint-disable no-console */
import { padStart, padEnd } from 'lodash'
import run01 from './01/run'
import run02 from './02/run'
import run03 from './03/run'
import run04 from './04/run'

const puzzles = [
  run01,
  run02,
  run03,
  run04,
]

const logSolution = (solver, i) => {
  const solution = solver()
  console.log(`Day ${padStart(i + 1, 2, '0')} | Part 1: ${padEnd(solution[0], 6)} | Part 2: ${solution[1]}`)
}

puzzles.forEach(logSolution)
