import { describe, it, expect } from "vitest"
import { RomanNumerals } from "./RomanNumerals.js"

describe("RomanNumerals", () => {
  it("with 1 returns I", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(1)).toBe("I")
  })

  it("with 2 returns II", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(2)).toBe("II")
  })

  it("with 4 returns IV", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(4)).toBe("IV")
  })
})
