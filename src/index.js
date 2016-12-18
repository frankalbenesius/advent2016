/* eslint-disable no-console */
import { padStart, padEnd } from 'lodash'
import run01 from './01/run'
import run02 from './02/run'
import run03 from './03/run'
import run04 from './04/run'
import run05 from './05/run'
import run06 from './06/run'
import run07 from './07/run'
import run08 from './08/run'
import run09 from './09/run'

const puzzles = [
  run01,
  run02,
  run03,
  run04,
  run05,
  run06,
  run07,
  run08,
  run09,
]

const logSolution = (solver, i) => {
  const solution = solver()
  console.log(`Day ${padStart(i + 1, 2, '0')} | Part 1: ${padEnd(solution[0], 8)} | Part 2: ${solution[1]}`)
}

puzzles.forEach(logSolution)
