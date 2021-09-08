# JS Exercises

This projects can be used to experiment with basic algorithms implemented in JavaScript.

## Installation

1. Clone the repository in your local environment.
2. Run `npm install`
3. Run `npm test`
4. If you are in the `master` branch, all tests will fail, because the code is not implemented yet.

## How to use this project

> NOTE: Please do not commit to `master`

1. Create a new branch with the suggested structure `{github_account_name}-solution` (e.g: `bcisneros-solution`).
2. Choose the exercise you want to resolve and run the corresponding tests (e.g `npm run test:fizzbuzz`)
3. Read the description and modify the code to make pass all rules.
4. Format your code using VS Code Prettier extension or running `npm run format`
5. Check the code has not Linter errors with `npm run lint`
6. Push your branch to Github: `git push -u origin {your_branch}`

## Exercises

### FizzBuzz

Given an integer number, return:

- `"Fizz"` if the number is divisible by `3`
- `"Buzz"` if the number is divisible by `5`
- `"FizzBuzz"` if the number is divisible by `3` and `5`
- the number as `string` in any other case.

Files: `src/fizzbuzz.js` and `tests/fizzbuzz.test.js`

### Roman Numbers

- `asRoman(decimal)`: Converts a decimal number to its Roman Numeral representation.
- `asDecimal(roman)`: Converts a `string` roman numeral representation to decimal

Reference: https://en.wikipedia.org/wiki/Roman_numerals

Files: `src/roman_numbers.js` and `tests/roman_numbers.test.js`

### English number names

Given an integer number, return its name in English.

Reference: https://en.wikipedia.org/wiki/English_numerals

Files: `src/english_number_names.js` and `tests/english_number_names.test.js`

## How to contribute

If you wish to contribute to this project please do the next steps:

1. Create a new issue in Github explaining what is the purpose of your contribution. For example: Add new exercise, Fixing typos, etc..

2. Create a new branch with the following name convention: `{issue_number}-{description}` (e.g `123-fix-typo-in-readme`)

3. Modify the code and push your branch to Github.

4. Create a new Pull Request and assign `bcisneros` as the Approver and optionally other team members. Select `master` as destination branch.

5. The Pull Request will be reviewed and if there are no comments or suggestions the changes will be merged to `master`

6. You will be added to the Contributors List.
