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

puzzles.forEach(solution => solution())
