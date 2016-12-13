import run01 from './01/run'
import run02 from './02/run'

const puzzles = [
  run01,
  run02,
]

puzzles.forEach(solution => solution())
