const productExclusion = require('../src/product_exclusion')

const validate = ({ input, expected }) => {
  const result = productExclusion(input)

  expect(result).toEqual(expected)
}

const randomInteger = () => Math.floor(Math.random() * 100 + 1)

describe('productExclusion()', () => {
  it.each([
    { input: [], expected: [] },
    { input: [randomInteger()], expected: [1] },
    { input: [2, 1], expected: [1, 2] },
    { input: [1, 2], expected: [2, 1] },
    { input: [1, 2, 3], expected: [6, 3, 2] },
    { input: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
    { input: [2, 3, 4, 5], expected: [60, 40, 30, 24] },
    { input: [0, 0, 4, 5], expected: [0, 0, 0, 0] },
    { input: [0, 4, 5], expected: [20, 0, 0] },
  ])('$input => $expected', validate)
})
