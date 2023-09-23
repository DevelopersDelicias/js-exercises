const asteroidCollision = require('../src/asteroid_collision')

describe('asteroidCollision()', () => {
  it.each([
    {
      asteroids: [8, -8],
      expected: [],
      reason: 'Same size but different direction',
    },
    {
      asteroids: [100, 200],
      expected: [100, 200],
      reason: 'None of them collide because both are going to the right',
    },
    {
      asteroids: [10, -20],
      expected: [-20],
      reason: '10 and -20 collides but only 10 explodes',
    },
    {
      asteroids: [20, -10],
      expected: [20],
      reason: '20 and -10 collides but only -10 explodes',
    },
    {
      asteroids: [-10, -20],
      expected: [-10, -20],
      reason: 'None of them collide because both are going to the left',
    },
    {
      asteroids: [10, 20, -5],
      expected: [10, 20],
      reason: '20 and -5 collide and -5 explodes, 10 and 20 go to the right',
    },
    {
      asteroids: [5, 10, -15],
      expected: [-15],
      reason:
        '10 and -15 collide, 10 explodes, then 5 and -15 collides, 5 explodes',
    },
    {
      asteroids: [10, 30, 40],
      expected: [10, 30, 40],
      reason: 'Three asteroids going to the right',
    },
    {
      asteroids: [10, 30, 40, 50],
      expected: [10, 30, 40, 50],
      reason: 'Four asteroids going to the right',
    },
    {
      asteroids: [-10, 10],
      expected: [-10, 10],
      reason: 'No collisions, first is to left, second to right',
    },
    {
      asteroids: [-10, -20, -30],
      expected: [-10, -20, -30],
      reason: 'No collisions, three asteroids going to the left',
    },
    {
      asteroids: [-10, -20, -30, -40],
      expected: [-10, -20, -30, -40],
      reason: 'No collisions, four asteroids going to the left',
    },
    {
      asteroids: [10, 5, -5],
      expected: [10],
      reason: '5 and -5 collide and explode. 10 remains',
    },
    {
      asteroids: [5, 10, -5],
      expected: [5, 10],
      reason:
        '10 and -5 collide and -5 explodes. 5 and 10 are both to the right',
    },
    {
      asteroids: [5, 2, -5],
      expected: [],
      reason:
        '2 and -5 collide and 2 explodes, then 5 and -5 collide and explode',
    },
    {
      asteroids: [3, 2, -5],
      expected: [-5],
      reason:
        '2 an -5 collide and 2 explode, then 3 and -5 collide and 3 explode',
    },
    {
      asteroids: [10, 5, -5, 10],
      expected: [10, 10],
      reason:
        '5 and -5 collide and explode. Remaining direction is to the right',
    },
    {
      asteroids: [5, 10, -5, -5],
      expected: [5, 10],
      reason: '10 and -5 collide and -5 explode, then again with -5',
    },
  ])('$asteroids => $expected ($reason)', ({ asteroids, expected }) => {
    const result = asteroidCollision(asteroids)

    expect(result).toEqual(expected)
  })
})
