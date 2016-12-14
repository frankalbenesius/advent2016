import { EOL } from 'os'
import { chunk } from 'lodash'

const isInt = Number.isInteger
const parseSideLength = length => parseInt(length, 10)
const parseTriangleLine = triStr => triStr.trim().split(' ').map(parseSideLength).filter(isInt)
export const parseRawInputByRow = raw => raw.trim().split(EOL).map(parseTriangleLine)

export const parseRawInputByColumn = (raw) => {
  const sideLengths = raw.trim().split(' ').map(parseSideLength).filter(isInt)
  const columns = [
    [],
    [],
    [],
  ]
  sideLengths.forEach((length, i) => {
    columns[i % 3].push(length)
  })
  const reordered = columns[0].concat(columns[1], columns[2])
  return chunk(reordered, 3)
}

const sideIsPossible = (side, index, array) => {
  const sumOfOtherSides = array.filter((x, i) => i !== index).reduce((a, b) => a + b)
  return (side < sumOfOtherSides)
}
export const isValidTriangle = triangle => triangle.every(sideIsPossible)

const numOfValidTriangles = triangles => triangles.filter(isValidTriangle).length

export const solvePart1 = (rawInput) => {
  const triangles = parseRawInputByRow(rawInput)
  return numOfValidTriangles(triangles)
}

export const solvePart2 = (rawInput) => {
  const triangles = parseRawInputByColumn(rawInput)
  return numOfValidTriangles(triangles)
}
