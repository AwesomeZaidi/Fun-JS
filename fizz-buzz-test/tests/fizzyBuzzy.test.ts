const { fizzyBuzzy } = require('../index');

test('Sanity check', () => {
  expect(2+2).toBe(4)
})

test('Test fizzyBuzzy', () => {
  expect(fizzyBuzzy(1)).toBe("")
  expect(fizzyBuzzy(2)).toBe("")
  expect(fizzyBuzzy(3)).toBe("fizz")
  expect(fizzyBuzzy(4)).toBe("")
  expect(fizzyBuzzy(5)).toBe("buzz")

  expect(fizzyBuzzy(6)).toBe("fizz")
  expect(fizzyBuzzy(7)).toBe("")
  expect(fizzyBuzzy(8)).toBe("")
  expect(fizzyBuzzy(9)).toBe("fizz")
  expect(fizzyBuzzy(10)).toBe("buzz")

  expect(fizzyBuzzy(11)).toBe("")
  expect(fizzyBuzzy(12)).toBe("fizz")
  expect(fizzyBuzzy(13)).toBe("")
  expect(fizzyBuzzy(14)).toBe("")
  expect(fizzyBuzzy(15)).toBe("fizzbuzz")
})
