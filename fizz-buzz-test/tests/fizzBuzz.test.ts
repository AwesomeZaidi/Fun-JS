const { fizzBuzz } = require('../index');

test('Sanity check', () => {
  expect(2+2).toBe(4)
})

test('Test fizzBuzz', () => {
  const expected10 = { count: 10, fizz: 3, buzz: 2, fizzBuzz: 0 }
  const actual10 = fizzBuzz(10)
  expect(actual10).toMatchObject(expected10)

  const expected15 = { count: 15, fizz: 4, buzz: 2, fizzBuzz: 1 }
  const actual15 = fizzBuzz(15)
  expect(actual15).toMatchObject(expected15)

  const expected30 = { count: 30, fizz: 8, buzz: 4, fizzBuzz: 2 }
  const actual30 = fizzBuzz(30)
  expect(actual30).toMatchObject(expected30)

  const expected50 = { count: 50, fizz: 13, buzz: 7, fizzBuzz: 3 }
  const actual50 = fizzBuzz(50)
  expect(actual50).toMatchObject(expected50)
})
