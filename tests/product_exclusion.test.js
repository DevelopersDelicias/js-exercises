const productExclusion = require('../src/product_exclusion')

describe('productExclusion()', () => {
  it('should return [] when input is empty', () => {
    const input = []
    const expected = []

    const result = productExclusion(input)

    expect(result).toEqual(expected)
  })

  it('should return [1] when input has length of 1', () => {
    const number = Math.floor(Math.random() * 100 + 1)
    const input = [number]
    const expected = [1]

    const result = productExclusion(input)

    expect(result).toEqual(expected)
  })

  it('should return [1, 2] when input is [2, 1]', () => {
    const input = [2, 1]
    const expected = [1, 2]

    const result = productExclusion(input)

    expect(result).toEqual(expected)
  })

  it('should return [2, 1] when input is [1, 2]', () => {
    const input = [1, 2]
    const expected = [2, 1]

    const result = productExclusion(input)

    expect(result).toEqual(expected)
  })

  it('should return [6, 3, 2] when input is [1, 2, 3]', () => {
    const input = [1, 2, 3]
    const expected = [6, 3, 2]

    const result = productExclusion(input)

    expect(result).toEqual(expected)
  })

  it('should return [6, 3, 2] when input is [1, 2, 3, 4]', () => {
    const input = [1, 2, 3, 4]
    const expected = [24, 12, 8, 6]

    const result = productExclusion(input)

    expect(result).toEqual(expected)
  })

  it('should return [60, 40, 30, 24] when input is [2, 3, 4, 5]', () => {
    const input = [2, 3, 4, 5]
    const expected = [60, 40, 30, 24]

    const result = productExclusion(input)

    expect(result).toEqual(expected)
  })

  it('should return [0, 0, 0, 0] when input is [0, 0, 4, 5]', () => {
    const input = [0, 0, 4, 5]
    const expected = [0, 0, 0, 0]

    const result = productExclusion(input)

    expect(result).toEqual(expected)
  })

  it('should return [20, 0, 0] when input is [0, 4, 5]', () => {
    const input = [0, 4, 5]
    const expected = [20, 0, 0]

    const result = productExclusion(input)

    expect(result).toEqual(expected)
  })
})
