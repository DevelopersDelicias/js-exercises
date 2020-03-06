const fizzbuzz = require("../src/fizzbuzz");

describe("fizzbuzz()", () => {
  describe('returns "Fizz" when number is multiple of 3', () => {
    const numbers = [3, 6, 9, 12];

    numbers.forEach(number => {
      it(`for ${number} should return "Fizz"`, () => {
        expect(fizzbuzz(number)).toEqual("Fizz");
      });
    });
  });

  describe('returns "Buzz" when number is multiple of 5', () => {
    const numbers = [5, 10, 20, 25];

    numbers.forEach(number => {
      it(`for ${number} should return "Buzz"`, () => {
        expect(fizzbuzz(number)).toEqual("Buzz");
      });
    });
  });

  describe('returns "FizzBuzz" when number is multiple of 3 and 5', () => {
    const numbers = [15, 30, 45, 60];

    numbers.forEach(number => {
      it(`for ${number} should return "FizzBuzz"`, () => {
        expect(fizzbuzz(number)).toEqual("FizzBuzz");
      });
    });
  });

  describe("returns given number when number is not multiple of 3 or 5", () => {
    const numbers = [1, 2, 4, 7, 8, 11];

    numbers.forEach(number => {
      it(`for ${number} should return "${number}"`, () => {
        expect(fizzbuzz(number)).toEqual(`${number}`);
      });
    });
  });
});
