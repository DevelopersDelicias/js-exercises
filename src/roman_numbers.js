const ROMANS = [
  { decimal: 1000, roman: 'M' },
  { decimal: 900, roman: 'CM' },
  { decimal: 500, roman: 'D' },
  { decimal: 400, roman: 'CD' },
  { decimal: 100, roman: 'C' },
  { decimal: 90, roman: 'XC' },
  { decimal: 50, roman: 'L' },
  { decimal: 40, roman: 'XL' },
  { decimal: 10, roman: 'X' },
  { decimal: 9, roman: 'IX' },
  { decimal: 5, roman: 'V' },
  { decimal: 4, roman: 'IV' },
  { decimal: 1, roman: 'I' },
]
module.exports.asRoman = (decimal) => {
  return ROMANS.reduce((acc, roman) => {
    while (decimal >= roman.decimal) {
      acc += roman.roman
      decimal -= roman.decimal
    }
    return acc
  }, '')
}
module.exports.asDecimal = (roman) => {
  return ROMANS.reduce((acc, r) => {
    while (roman.startsWith(r.roman)) {
      acc += r.decimal
      roman = roman.substr(r.roman.length, roman.length - 1)
    }
    return acc
  }, 0)
}
