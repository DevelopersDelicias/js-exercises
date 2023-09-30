const time = require('../src/time')

const minutesToSeconds = (n = 1) => n * 60
const hoursToSeconds = (n = 1) => n * minutesToSeconds(60)
const daysToSeconds = (n = 1) => n * hoursToSeconds(24)
const weeksToSeconds = (n = 1) => n * daysToSeconds(7)
const yearsToSeconds = (n = 1) => n * daysToSeconds(365)

const numbers = (length, start = 1) =>
  Array.from({ length }, (_, index) => index + start)

describe('time(seconds)', () => {
  describe('works for seconds', () => {
    it.each(numbers(59, 0))('%is', n => {
      expect(time(n)).toEqual(`${n}s`)
    })
  })

  describe('works for minutes', () => {
    it.each(numbers(59))('%im', n => {
      expect(time(minutesToSeconds(n))).toEqual(`${n}m`)
    })
  })

  describe('works for hours', () => {
    it.each(numbers(23))('%ih', n => {
      expect(time(hoursToSeconds(n))).toEqual(`${n}h`)
    })
  })

  describe('works for days', () => {
    it.each(numbers(6))('%id', n => {
      expect(time(daysToSeconds(n))).toEqual(`${n}d`)
    })
  })

  describe('works for weeks', () => {
    it.each(numbers(51))('%iw', n => {
      expect(time(weeksToSeconds(n))).toEqual(`${n}w`)
    })
  })

  describe('works for years', () => {
    it.each(numbers(3))('%iy', n => {
      expect(time(yearsToSeconds(n))).toEqual(`${n}y`)
    })
  })

  const testScenario = ({ seconds, expected }) => {
    expect(time(seconds)).toEqual(expected)
  }

  describe('works for special scenarios', () => {
    it.each([
      { name: '200 seconds', seconds: 200, expected: '3m 20s' },
      { name: '1 minute and 20 seconds', seconds: 80, expected: '1m 20s' },
      { name: '1.5 hours', seconds: hoursToSeconds(1.5), expected: '1h 30m' },
      {
        name: '755 days, 585 minutes and 12 seconds',
        seconds: daysToSeconds(755) + minutesToSeconds(585) + 12,
        expected: '2y 3w 4d 9h 45m 12s',
      },
      {
        name: '1 hour and 9 seconds',
        seconds: hoursToSeconds(1) + 9,
        expected: '1h',
      },
      {
        name: '61 minutes and 9 seconds',
        seconds: minutesToSeconds(61) + 9,
        expected: '1h 1m 9s',
      },
      {
        name: '2 years and 9 seconds',
        seconds: yearsToSeconds(2) + 9,
        expected: '2y',
      },
      { name: '2.5 days', seconds: daysToSeconds(2.5), expected: '2d 12h' },
      {
        name: '3 years, 1 week, 3 days and 59 seconds',
        seconds: yearsToSeconds(3) + weeksToSeconds(1) + daysToSeconds(3) + 59,
        expected: '3y 1w 3d',
      },
    ])('$name ($seconds seconds) => $expected', testScenario)
  })
})
