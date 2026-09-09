export function sortDescending(numbers) {
  const sorted = []

  // Salin manual agar array asli tidak berubah.
  for (let index = 0; index < numbers.length; index += 1) {
    sorted[index] = numbers[index]
  }

  // Cari angka terbesar yang tersisa, lalu pindahkan ke posisi sekarang.
  for (let index = 0; index < sorted.length - 1; index += 1) {
    let largestIndex = index
    for (let next = index + 1; next < sorted.length; next += 1) {
      if (sorted[next] > sorted[largestIndex]) {
        largestIndex = next
      }
    }

    const current = sorted[index]
    sorted[index] = sorted[largestIndex]
    sorted[largestIndex] = current
  }

  return sorted
}
