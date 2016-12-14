import run01 from './01/run'
import run02 from './02/run'
import run03 from './03/run'

const puzzles = [
  run01,
  run02,
  run03,
]

puzzles.forEach(solution => solution())
