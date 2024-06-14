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

  it("with 10 returns X", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(10)).toBe("X")
  })

  it("with 20 returns XX", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(20)).toBe("XX")
  })

  it("with 9 returns IX", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(9)).toBe("IX")
  })

  it("with 5 returns V", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(5)).toBe("V")
  })

  it("with 6 returns VI", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(6)).toBe("VI")
  })

  it("with 38 returns XXXVIII", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(38)).toBe("XXXVIII")
  })

  it("with 50 returns L", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(50)).toBe("L")
  })

  it("with 54 returns LIV", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(54)).toBe("LIV")
  })

  it("with 40 returns XL", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(40)).toBe("XL")
  })

  it("with 44 returns XLIV", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(44)).toBe("XLIV")
  })

  it("with 100 returns C", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(100)).toBe("C")
  })

  it("with 101 returns CI", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(101)).toBe("CI")
  })

  it("with 90 returns XC", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(90)).toBe("XC")
  })

  it("with 94 returns XCIV", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(94)).toBe("XCIV")
  })

  it("with 200 returns CC", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(200)).toBe("CC")
  })
  it("with 500 returns D", () => {
    const romanNumerals = new RomanNumerals()

    expect(romanNumerals.fromArabic(500)).toBe("D")
  })
})
