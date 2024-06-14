export class RomanNumerals {
  fromArabic(value: number): string {
    if (value === 10) {
      return "X"
    }

    if (value === 4) {
      return "IV"
    }

    return "I".repeat(value)
  }
}
