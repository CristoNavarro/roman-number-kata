export class RomanNumerals {
  fromArabic(value: number): string {
    let number = value
    let result = ""

    if (number % 10 === 0) {
      result += "X".repeat(number / 10)
      number -= number
    }

    if (number === 9) {
      result += "IX"
      number -= 9
    }

    if (number >= 5) {
      result += "V"
      number -= 5
    }

    if (number === 4) {
      result += "IV"
      number -= 4
    }

    if (number < 4) {
      result += "I".repeat(number)
      number -= number
    }

    return result
  }
}
