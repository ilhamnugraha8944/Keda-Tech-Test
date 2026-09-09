import { describe, expect, test } from 'vitest'
import { sortDescending } from './sortDescending'
import { maxSubarraySum } from './maxSubarraySum'
import { sumEvenNestedValues } from './sumEvenNestedValues'

describe('sortDescending', () => {
  test('matches the example without changing the original array', () => {
    const numbers = [1, 2, 4, 3, 5, 3, 2, 1]
    expect(sortDescending(numbers)).toEqual([5, 4, 3, 3, 2, 2, 1, 1])
    expect(numbers).toEqual([1, 2, 4, 3, 5, 3, 2, 1])
  })

  test.each([
    [[], []],
    [[7], [7]],
    [[-2, 0, 1.5, -5, 1.5], [1.5, 1.5, 0, -2, -5]],
    [[3, 2, 1], [3, 2, 1]],
  ])('sorts %j into %j', (numbers, expected) => {
    expect(sortDescending(numbers)).toEqual(expected)
  })
})

describe('maxSubarraySum', () => {
  test.each([
    [[100, 200, 300, 400], 2, 700],
    [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4, 39],
    [[-3, 4, 0, -2, 6, -1], 2, 5],
    [[-5, -2, -3], 2, -5],
    [[2, 9, 1], 1, 9],
    [[2, 9, 1], 3, 12],
  ])('finds the maximum sum for %j with length %i', (numbers, length, expected) => {
    expect(maxSubarraySum(numbers, length)).toBe(expected)
  })

  test.each([0, -1, 4, 1.5, NaN])('returns null for invalid length %s', (length) => {
    expect(maxSubarraySum([1, 2, 3], length)).toBeNull()
  })

  test('returns null for an empty array', () => {
    expect(maxSubarraySum([], 1)).toBeNull()
  })
})

describe('sumEvenNestedValues', () => {
  test('matches the first nested object example', () => {
    expect(sumEvenNestedValues({
      outer: 2,
      obj: {
        inner: 2,
        otherObj: { superInner: 2, notANumber: true, alsoNotANumber: 'yup' },
      },
    })).toBe(6)
  })

  test('matches the second nested object example', () => {
    expect(sumEvenNestedValues({
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: 'car' },
    })).toBe(12)
  })

  test('ignores non-numbers and counts negative even numbers', () => {
    expect(sumEvenNestedValues({
      negative: -4,
      nested: { zero: 0, positive: 6, odd: 3, decimal: 2.5 },
      text: '8',
      flag: true,
      empty: null,
    })).toBe(2)
  })

  test('returns zero for an empty object', () => {
    expect(sumEvenNestedValues({})).toBe(0)
  })
})
