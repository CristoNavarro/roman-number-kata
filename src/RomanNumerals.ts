export class RomanNumerals {
  fromArabic(value: number): string {
    let number = value
    let result = ""

    if (number >= 1000) {
      result += "M".repeat(Math.floor(number / 1000))
      number -= Math.floor(number / 1000) * 1000
    }

    if (number >= 900) {
      result += "CM"
      number -= 900
    }

    if (number >= 500) {
      result += "D"
      number -= 500
    }

    if (number >= 400) {
      result += "CD"
      number -= 400
    }

    if (number >= 100) {
      result += "C".repeat(Math.floor(number / 100))
      number -= Math.floor(number / 100) * 100
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
