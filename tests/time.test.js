const time = require('../src/time')

const scenarios = [
  { seconds: 3609, expected: '1h' },
  { seconds: 3669, expected: '1h 1m 9s' },
  { seconds: 3600 * 24 * 365 * 2 + 5, expected: '2y' },
  { seconds: 3600 * 24 * 365 * 2.5, expected: '2y 26w' },
]

const numbers = (length, start = 1) =>
  Array.from({ length }, (_, index) => index + start)

const minutesToSeconds = (n = 1) => n * 60
const hoursToSeconds = (n = 1) => n * minutesToSeconds(60)
const daysToSeconds = (n = 1) => n * hoursToSeconds(24)
const weeksToSeconds = (n = 1) => n * daysToSeconds(7)
const yearsToSeconds = (n = 1) => n * daysToSeconds(365)

describe('time(seconds)', () => {
  it.each(numbers(59, 0))('%is', n => {
    expect(time(n)).toEqual(`${n}s`)
  })

  it.each(numbers(59))('%im', n => {
    expect(time(minutesToSeconds(n))).toEqual(`${n}m`)
  })

  it.each(numbers(23))('%ih', n => {
    expect(time(hoursToSeconds(n))).toEqual(`${n}h`)
  })

  it.each(numbers(6))('%id', n => {
    expect(time(daysToSeconds(n))).toEqual(`${n}d`)
  })

  it.each(numbers(51))('%iw', n => {
    expect(time(weeksToSeconds(n))).toEqual(`${n}w`)
  })

  it.each(numbers(3))('%iy', n => {
    expect(time(yearsToSeconds(n))).toEqual(`${n}y`)
  })

  it.each(scenarios)('$seconds => $expected', ({ seconds, expected }) => {
    expect(time(seconds)).toEqual(expected)
  })
})
