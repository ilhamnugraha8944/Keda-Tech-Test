export function sumEvenNestedValues(object) {
  let total = 0

  for (const value of Object.values(object)) {
    if (typeof value === 'number' && value % 2 === 0) {
      total += value
    } else if (value !== null && typeof value === 'object') {
      // Telusuri objek di dalamnya dengan fungsi yang sama (rekursi).
      total += sumEvenNestedValues(value)
    }
  }

  return total
}
