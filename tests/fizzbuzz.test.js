const fizzbuzz = require('../src/fizzbuzz')

describe('fizzbuzz()', () => {
  describe('returns "Fizz" when number is multiple of 3', () => {
    it.each([3, 6, 9, 12])('for %d should return "Fizz"', number => {
      expect(fizzbuzz(number)).toEqual('Fizz')
    })
  })

  describe('returns "Buzz" when number is multiple of 5', () => {
    it.each([5, 10, 20, 25])('for %d should return "Buzz"', number => {
      expect(fizzbuzz(number)).toEqual('Buzz')
    })
  })

  describe('returns "FizzBuzz" when number is multiple of 3 and 5', () => {
    it.each([15, 30, 45, 60])('for %d should return "FizzBuzz"', number => {
      expect(fizzbuzz(number)).toEqual('FizzBuzz')
    })
  })

  describe('returns given number when number is not multiple of 3 or 5', () => {
    it.each([1, 2, 4, 7, 8, 11])('for %d should return the same', number => {
      expect(fizzbuzz(number)).toEqual(`${number}`)
    })
  })
})
