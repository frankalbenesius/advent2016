const parseCommands = rawInput => rawInput
  .replace(',', '')
  .split(' ')
  .map(strInput => ({
    turn: strInput.substring(0, 1),
    distance: parseInt(strInput.substring(1), 10),
  }))

const taxicab = pos => Math.abs(pos.x) + Math.abs(pos.y)

const getFacingModifier = (facingInt) => {
  const facingModifiers = [
    { x: 0, y: 1 },  // North -- index 0
    { x: 1, y: 0 },  // East  -- index 1
    { x: 0, y: -1 }, // South -- index 2
    { x: -1, y: 0 }, // West  -- index 3
  ]
  let index = facingInt % 4 // this can be negative
  if (index < 0) {
    index += 4
  }
  return facingModifiers[index]
}

const toFacingChange = (turnStr) => {
  if (turnStr === 'R') {
    return 1
  }
  return -1
}

const simplifyFacing = x => x % 4

const move = (state, command) => {
  const nowFacing = simplifyFacing(state.f + toFacingChange(command.turn))
  const distanceModifiers = getFacingModifier(nowFacing)
  const range = [...Array(command.distance).keys()] // generates [1,2,3 ... distance]
  const visitedPositions = range.map(i => ({
    x: state.x + ((i + 1) * distanceModifiers.x), // x-position
    y: state.y + ((i + 1) * distanceModifiers.y), // y-position
    f: nowFacing, // facing
  }))
  return {
    visited: visitedPositions,
    landed: visitedPositions[visitedPositions.length - 1],
  }
}

export const distanceToFinalPosition = (strInput) => { // Part 1
  const commands = parseCommands(strInput)
  const origin = { x: 0, y: 0, f: 0 }
  const finalPosition = commands.reduce((pos, command) => move(pos, command).landed, origin)
  return taxicab(finalPosition)
}

const positionHasBeenVisitedAlready = (current, history) =>
  history.some(position => position.x === current.x && position.y === current.y)

export const distanceToFirstVisitedTwice = (strInput) => { // Part 2
  const commands = parseCommands(strInput)
  const initialAccumulator = {
    mapState: { x: 0, y: 0, f: 0 },
    positions: [],
    found: false,
  }
  const foundPosition = commands.reduce((acc, command) => {
    if (acc.found) {
      return acc
    }
    const moveResult = move(acc.mapState, command)
    const previouslyVisitedPositions = moveResult.visited
      .filter(position => positionHasBeenVisitedAlready(position, acc.positions))
    if (previouslyVisitedPositions.length > 0) {
      return {
        mapState: previouslyVisitedPositions[0], // only need the first one
        found: true,
      }
    }
    return {
      mapState: moveResult.landed,
      positions: [...acc.positions, ...moveResult.visited],
      found: false,
    }
  }, initialAccumulator)
  return taxicab(foundPosition.mapState)
}

// Retrospective:
// Turns out my code was pretty elegent for the first half of the problem,
// but the second half of the problem required knowing every single location visited
// during travel (not just the coordinates we turned at), and that didn't play as nicely
// with my existing algorithm. My solution be refactored to better treat movements
// as a series of one-block steps rather than entire movements, saving history along the way.
