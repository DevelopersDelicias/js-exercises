const fizzbuzz = number => {
  const divisibleBy = mod => number % mod === 0
  if (divisibleBy(15)) return 'FizzBuzz'
  if (divisibleBy(3)) return 'Fizz'
  if (divisibleBy(5)) return 'Buzz'
  return `${number}`
}

module.exports = fizzbuzz
