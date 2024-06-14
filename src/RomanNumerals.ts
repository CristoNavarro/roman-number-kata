export class RomanNumerals {
  fromArabic(value: number): string {
    if (value % 10 === 0) {
      return "X".repeat(value / 10)
    }

    if (value === 4) {
      return "IV"
    }

    return "I".repeat(value)
  }
}
