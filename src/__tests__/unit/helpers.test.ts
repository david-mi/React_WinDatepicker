import { expect } from "vitest";
import { getDates } from "../../lib/WinDate/Month/helper";

describe("getDate helper", () => {
  describe("Tests for April 2023", () => {
    let expectedResultFromApril2023: number[]

    beforeAll(() => {
      expectedResultFromApril2023 = [
        27, 28, 29, 30, 31, 1,
        2, 3, 4, 5, 6, 7,
        8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 1,
        2, 3, 4, 5, 6, 7
      ];
    })

    it("should return the expected result if we set April 1 2023 as parameter", () => {
      const april2023Date = new Date(2023, 3)
      expect(getDates(april2023Date)).toEqual(expectedResultFromApril2023)
    })

    it("should return the expected result as before if we set April 15 2023 as parameter", () => {
      const april2023Date = new Date(2023, 3, 25)
      expect(getDates(april2023Date)).toEqual(expectedResultFromApril2023)
    })
  })

  describe("Tests for July 2023", () => {
    let expectedResultFromJuly2023: number[]

    beforeAll(() => {
      expectedResultFromJuly2023 = [
        26, 27, 28, 29, 30, 1,
        2, 3, 4, 5, 6, 7,
        8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31,
        1, 2, 3, 4, 5, 6
      ];
    })

    it("should return the expected result if we set July 1 2023 as parameter", () => {
      const july2023Date = new Date(2023, 6)
      expect(getDates(july2023Date)).toEqual(expectedResultFromJuly2023)
    })

    it("should return the expected result as before if we set July 11 2023 as parameter", () => {
      const july2023Date = new Date(2023, 6, 11)
      expect(getDates(july2023Date)).toEqual(expectedResultFromJuly2023)
    })
  })
})