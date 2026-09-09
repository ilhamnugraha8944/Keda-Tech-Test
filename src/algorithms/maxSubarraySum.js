export function maxSubarraySum(numbers, length) {
  // Tidak ada subarray yang cocok jika panjangnya tidak valid.
  if (!Number.isInteger(length) || length < 1 || length > numbers.length) {
    return null
  }

  let currentSum = 0
  for (let index = 0; index < length; index += 1) {
    currentSum += numbers[index]
  }

  // Mulai dari jumlah pertama, bukan nol, agar angka negatif tetap benar.
  let maxSum = currentSum
  for (let index = length; index < numbers.length; index += 1) {
    // Geser satu posisi: buang angka paling kiri dan tambah angka baru.
    currentSum = currentSum - numbers[index - length] + numbers[index]
    if (currentSum > maxSum) {
      maxSum = currentSum
    }
  }

  return maxSum
}
