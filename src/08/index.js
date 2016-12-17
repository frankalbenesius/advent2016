import { EOL } from 'os'
import { range, cloneDeep } from 'lodash'

export const rect = (a, b) => (state) => {
  const newState = cloneDeep(state)
  range(a).forEach((x) => {
    range(b).forEach((y) => {
      newState[x][y] = true
    })
  })
  return newState
}

export const rotateColumn = (i, amount) => (columns) => {
  const column = columns[i]
  const movingSlice = column.slice(amount * -1)
  const baseSlice = column.slice(0, column.length - amount)
  const newColumn = movingSlice.concat(baseSlice)
  const newColumns = cloneDeep(columns)
  newColumns[i] = newColumn
  return newColumns
}

export const rotateRow = (i, amount) => (columns) => {
  const row = columns.map(c => c[i])
  const movingSlice = row.slice(amount * -1)
  const baseSlice = row.slice(0, row.length - amount)
  const newColumn = movingSlice.concat(baseSlice)
  const newColumns = columns.map((col, j) => {
    const replacingColumn = cloneDeep(col)
    replacingColumn[i] = newColumn[j]
    return replacingColumn
  })
  return newColumns
}

const commandMux = (str) => {
  if (str.indexOf('rect') === 0) {
    const nums = str.match(/(\d+)x(\d+)/)
    return rect(parseInt(nums[1], 10), parseInt(nums[2], 10))
  }
  if (str.indexOf('rotate row') === 0) {
    const nums = str.match(/(\d+)\sby\s(\d+)/)
    return rotateRow(parseInt(nums[1], 10), parseInt(nums[2], 10))
  }
  const nums = str.match(/(\d+)\sby\s(\d+)/)
  return rotateColumn(parseInt(nums[1], 10), parseInt(nums[2], 10))
}

export const parseInput = raw => raw.split(EOL).map(x => x.trim())

const processCommand = (state, command) => {
  const newState = command(state)
  return newState
}

export const getScreen = (x, y) => {
  const xRange = range(x)
  const yRange = range(y)
  return xRange.map(() => yRange.map(() => false))
}
const initialState = getScreen(50, 6)
const toLitCount = s => s.map(col => col.filter(x => x === true).length).reduce((a, b) => a + b)

export const solvePart1 = (input) => {
  const commands = parseInput(input).map(commandMux)
  const endState = commands.reduce(processCommand, initialState)
  const litCount = toLitCount(endState)
  return litCount
}

export const solvePart2 = () =>
  // const commands = parseInput(input).map(commandMux)
  // const endState = commands.reduce(processCommand, initialState)
  // const yRange = range(endState[0].length)
  // const rows = yRange.map(i => endState.map(col => col[i]))
  // const displayRows = rows.map(values => values.map(x => (x ? 'X' : ' ')).join(''))
  // console.log(displayRows.join('\n'))
   'RURUCEOEIL'
