import isFizzy from '../index';

test('Sanity check', () => {
  expect(2+2).toBe(4)
})

test('Test isFizzy', () => {
  expect(isFizzy(1)).toBe(false)
  expect(isFizzy(3)).toBe(true)
  expect(isFizzy(4)).toBe(false)
  expect(isFizzy(6)).toBe(true)

  expect(isFizzy(5)).toBe(false)
  expect(isFizzy(10)).toBe(false)
  expect(isFizzy(15)).toBe(true)
  expect(isFizzy(20)).toBe(false)
})
