const englishNumberName = require('../src/english_number_names')

const numbers = [
  { value: 0, name: 'zero' },
  { value: 1, name: 'one' },
  { value: 2, name: 'two' },
  { value: 3, name: 'three' },
  { value: 4, name: 'four' },
  { value: 5, name: 'five' },
  { value: 6, name: 'six' },
  { value: 7, name: 'seven' },
  { value: 8, name: 'eight' },
  { value: 9, name: 'nine' },
  { value: 10, name: 'ten' },
  { value: 11, name: 'eleven' },
  { value: 12, name: 'twelve' },
  { value: 13, name: 'thirteen' },
  { value: 14, name: 'fourteen' },
  { value: 15, name: 'fifteen' },
  { value: 16, name: 'sixteen' },
  { value: 17, name: 'seventeen' },
  { value: 18, name: 'eighteen' },
  { value: 19, name: 'nineteen' },
  { value: 20, name: 'twenty' },
  { value: 21, name: 'twenty-one' },
  { value: 25, name: 'twenty-five' },
  { value: 30, name: 'thirty' },
  { value: 32, name: 'thirty-two' },
  { value: 40, name: 'forty' },
  { value: 49, name: 'forty-nine' },
  { value: 50, name: 'fifty' },
  { value: 58, name: 'fifty-eight' },
  { value: 60, name: 'sixty' },
  { value: 64, name: 'sixty-four' },
  { value: 70, name: 'seventy' },
  { value: 76, name: 'seventy-six' },
  { value: 80, name: 'eighty' },
  { value: 83, name: 'eighty-three' },
  { value: 90, name: 'ninety' },
  { value: 97, name: 'ninety-seven' },
  { value: 100, name: 'one hundred' },
  { value: 101, name: 'one hundred and one' },
  { value: 200, name: 'two hundred' },
  { value: 216, name: 'two hundred and sixteen' },
  { value: 300, name: 'three hundred' },
  { value: 378, name: 'three hundred and seventy-five' },
  { value: 400, name: 'four hundred' },
  { value: 500, name: 'five hundred' },
  { value: 600, name: 'six hundred' },
  { value: 700, name: 'seven hundred' },
  { value: 800, name: 'eight hundred' },
  { value: 900, name: 'nine hundred' },
  { value: 1000, name: 'one thousand' },
  { value: 1001, name: 'one thousand and one' },
  { value: 2000, name: 'two thousand' },
  { value: 2020, name: 'two thousand and twenty' },
  { value: 3000, name: 'three thousand' },
  { value: 4000, name: 'four thousand' },
  { value: 5000, name: 'five thousand' },
  { value: 5389, name: 'five thousand three hundred and eighty-nine' },
  { value: 6000, name: 'six thousand' },
  { value: 7000, name: 'seven thousand' },
  { value: 8000, name: 'eight thousand' },
  { value: 9000, name: 'nine thousand' },
  { value: 10000, name: 'ten thousand' },
  { value: 11000, name: 'eleven thousand' },
  { value: 20000, name: 'twenty thousand' },
  { value: 21000, name: 'twenty-one thousand' },
  { value: 30000, name: 'thirty thousand' },
  { value: 85000, name: 'eighty-five thousand' },
  { value: 100000, name: 'one hundred thousand' },
  { value: 999000, name: 'nine hundred and ninety-nine thousand' },
  { value: 1000000, name: 'one million' },
  { value: 10000000, name: 'ten million' },
  { value: 1000000000, name: 'one billion' },
]

describe('englishNumberName()', () => {
  numbers.forEach(({ value, name }) => {
    it(`The name of value ${value} is ${name}`, () => {
      expect(englishNumberName(value)).toEqual(name)
    })
  })
})
