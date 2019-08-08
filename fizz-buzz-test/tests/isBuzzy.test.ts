const { isBuzzy } = require('../index');

test('Sanity check', () => {
  expect(2+2).toBe(4)
})

test('Test isBuzzy', () => {
  expect(isBuzzy(1)).toBe(false)
  expect(isBuzzy(3)).toBe(false)
  expect(isBuzzy(4)).toBe(false)
  expect(isBuzzy(6)).toBe(false)

  expect(isBuzzy(5)).toBe(true)
  expect(isBuzzy(10)).toBe(true)
  expect(isBuzzy(15)).toBe(true)
  expect(isBuzzy(20)).toBe(true)
})
