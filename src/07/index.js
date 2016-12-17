import { EOL } from 'os'
import { cloneDeep } from 'lodash'

export const toIPs = raw => raw.split(EOL).map(x => x.trim())

const organizeSequences = (sequences, sequence, i) => {
  const key = i % 2 ? 'hypernets' : 'supernets'
  return Object.assign(
    sequences,
    { [key]: sequences[key].concat([sequence]) },
  )
}
const emptySequences = { supernets: [], hypernets: [] }
const toSequences = ip => ip.split(/\[(.*?)]/).reduce(organizeSequences, cloneDeep(emptySequences))

export const hasAbba = (sequence) => {
  const letters = sequence.split('')
  let abbaFound = false
  letters.forEach((letter, i) => {
    if (!abbaFound && i > 1 && i < (letters.length - 1)) {
      const toMatch = `${letters[i - 1]}${letters[i - 2]}`
      const str = `${letters[i]}${letters[i + 1]}`
      if (toMatch[0] !== toMatch[1] && str === toMatch) {
        abbaFound = true
      }
    }
  })
  return abbaFound
}

export const doesSupportTLS = (ip) => {
  const { hypernets, supernets } = toSequences(ip)
  return hypernets.every(seq => !hasAbba(seq)) && supernets.some(hasAbba)
}

export const solvePart1 = (input) => {
  const addresses = toIPs(input)
  return addresses.filter(doesSupportTLS).length
}

const addBabs = (abas, sequence) => {
  const letters = sequence.split('')
  const newAbas = []
  letters.forEach((cur, i) => {
    if (i > 0 && i < (letters.length - 1)) {
      const first = letters[i - 1]
      const last = letters[i + 1]
      if (first === last && first !== cur) {
        newAbas.push(`${cur}${first}${cur}`)
      }
    }
  })
  return abas.concat(newAbas)
}

const hasABab = babs => sequence => babs.some(bab => sequence.indexOf(bab) > -1)

export const doesSupportSSL = (ip) => {
  const { hypernets, supernets } = toSequences(ip)
  const babs = supernets.reduce(addBabs, [])
  return hypernets.some(hasABab(babs))
}

export const solvePart2 = (input) => {
  const addresses = toIPs(input)
  return addresses.filter(doesSupportSSL).length
}
