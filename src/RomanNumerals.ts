export class RomanNumerals {
  fromArabic(value: number): string {
    let number = value
    let result = ""

    if (number >= 100) {
      result += "C"
      number -= 100
    }

    if (number >= 90) {
      result += "XC"
      number -= 90
    }

    if (number >= 50) {
      result += "L"
      number -= 50
    }

    if (number >= 40) {
      result += "XL"
      number -= 40
    }

    if (number >= 10) {
      result += "X".repeat(Math.floor(number / 10))
      number -= Math.floor(number / 10) * 10
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
