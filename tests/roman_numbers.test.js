const romanNumbers = require('../src/roman_numbers')
const asRoman = romanNumbers.asRoman
const asDecimal = romanNumbers.asDecimal

const scenarios = [
  { decimal: 1, roman: 'I' },
  { decimal: 2, roman: 'II' },
  { decimal: 3, roman: 'III' },
  { decimal: 4, roman: 'IV' },
  { decimal: 5, roman: 'V' },
  { decimal: 6, roman: 'VI' },
  { decimal: 7, roman: 'VII' },
  { decimal: 8, roman: 'VIII' },
  { decimal: 9, roman: 'IX' },
  { decimal: 10, roman: 'X' },
  { decimal: 11, roman: 'XI' },
  { decimal: 12, roman: 'XII' },
  { decimal: 13, roman: 'XIII' },
  { decimal: 14, roman: 'XIV' },
  { decimal: 15, roman: 'XV' },
  { decimal: 16, roman: 'XVI' },
  { decimal: 17, roman: 'XVII' },
  { decimal: 18, roman: 'XVII' },
  { decimal: 19, roman: 'XIX' },
  { decimal: 20, roman: 'XX' },
  { decimal: 21, roman: 'XXI' },
  { decimal: 22, roman: 'XXII' },
  { decimal: 23, roman: 'XXIII' },
  { decimal: 24, roman: 'XXIV' },
  { decimal: 25, roman: 'XXV' },
  { decimal: 26, roman: 'XXVI' },
  { decimal: 27, roman: 'XXVII' },
  { decimal: 28, roman: 'XXVIII' },
  { decimal: 29, roman: 'XXIX' },
  { decimal: 30, roman: 'XXX' },
  { decimal: 31, roman: 'XXXI' },
  { decimal: 32, roman: 'XXXII' },
  { decimal: 33, roman: 'XXXIII' },
  { decimal: 34, roman: 'XXXIV' },
  { decimal: 35, roman: 'XXXV' },
  { decimal: 36, roman: 'XXXVI' },
  { decimal: 37, roman: 'XXXVII' },
  { decimal: 38, roman: 'XXXVIII' },
  { decimal: 39, roman: 'XXXIX' },
  { decimal: 40, roman: 'XL' },
  { decimal: 41, roman: 'XLI' },
  { decimal: 42, roman: 'XLII' },
  { decimal: 43, roman: 'XLIII' },
  { decimal: 44, roman: 'XLIV' },
  { decimal: 45, roman: 'XLV' },
  { decimal: 46, roman: 'XLVI' },
  { decimal: 47, roman: 'XLVII' },
  { decimal: 48, roman: 'XLVIII' },
  { decimal: 49, roman: 'XLIX' },
  { decimal: 50, roman: 'L' },
  { decimal: 51, roman: 'LI' },
  { decimal: 52, roman: 'LII' },
  { decimal: 53, roman: 'LIII' },
  { decimal: 54, roman: 'LIV' },
  { decimal: 55, roman: 'LV' },
  { decimal: 56, roman: 'LVI' },
  { decimal: 57, roman: 'LVII' },
  { decimal: 58, roman: 'LVIII' },
  { decimal: 59, roman: 'LIX' },
  { decimal: 60, roman: 'LX' },
  { decimal: 61, roman: 'LXI' },
  { decimal: 62, roman: 'LXII' },
  { decimal: 63, roman: 'LXIII' },
  { decimal: 64, roman: 'LXIV' },
  { decimal: 65, roman: 'LXV' },
  { decimal: 66, roman: 'LXVI' },
  { decimal: 67, roman: 'LXVII' },
  { decimal: 68, roman: 'LXVIII' },
  { decimal: 69, roman: 'LXIX' },
  { decimal: 70, roman: 'LXX' },
  { decimal: 80, roman: 'LXXX' },
  { decimal: 90, roman: 'XC' },
  { decimal: 100, roman: 'C' },
  { decimal: 200, roman: 'CC' },
  { decimal: 300, roman: 'CCC' },
  { decimal: 400, roman: 'CD' },
  { decimal: 500, roman: 'D' },
  { decimal: 600, roman: 'DC' },
  { decimal: 700, roman: 'DCC' },
  { decimal: 800, roman: 'DCCC' },
  { decimal: 900, roman: 'CM' },
  { decimal: 1000, roman: 'M' },
  { decimal: 1500, roman: 'MD' },
  { decimal: 2000, roman: 'MM' },
  { decimal: 2500, roman: 'MMD' },
  { decimal: 3000, roman: 'MMM' },
  { decimal: 3500, roman: 'MMMD' },
  { decimal: 3750, roman: 'MMMDCCL' },
  { decimal: 3999, roman: 'MMMCMXCIX' },
]

describe('roman numbers', () => {
  describe('asRoman()', () => {
    scenarios.forEach(({ decimal, roman }) => {
      it(`${decimal} decimal number is ${roman} Roman Numeral`, () => {
        expect(asRoman(decimal)).toEqual(roman)
      })
    })
  })

  describe('asDecimal()', () => {
    scenarios.forEach(({ decimal, roman }) => {
      it(`${roman} Roman Numeral is ${decimal} decimal number`, () => {
        expect(asDecimal(roman)).toEqual(decimal)
      })
    })
  })
})
