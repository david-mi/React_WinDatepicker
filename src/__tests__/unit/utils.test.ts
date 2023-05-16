import { waitFor } from "@testing-library/react";
import { formatDate, handleTimeout } from "../../lib/WinDate/utils"
import type { HandleTimeout } from "../../lib/WinDate/utils";
import { getValidDateOrNull } from "../../lib/WinDate/utils";
import { vi } from "vitest";

describe("formatDate util", () => {
  it("Should return 2023-04-01 for a new Date set to April 1st 2023", () => {
    const date = new Date(2023, 3, 1)
    expect(formatDate(date)).toBe("2023-04-01")
  })

  it("Should return 2023-12-24 for a new Date set to December 24th 2025", () => {
    const date = new Date(2025, 11, 24)
    expect(formatDate(date)).toBe("2025-12-24")
  })
})

describe("handleTimeout util", () => {
  let params: HandleTimeout
  let timeoutHandler: () => void

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("testing throttle", () => {
    beforeAll(() => {
      params = {
        timeoutCallback: vi.fn(),
        preTimeoutCallback: vi.fn(),
        delay: 500
      }

      timeoutHandler = handleTimeout(params)
    })

    it("Should call callbacks only once during delay", async () => {
      timeoutHandler()
      timeoutHandler()
      timeoutHandler()

      await waitFor(() => {
        expect(params.timeoutCallback).toHaveBeenCalledTimes(1)
        expect(params.preTimeoutCallback).toHaveBeenCalledTimes(1)
      })
    })

    it("Should call callbacks only 2 times", async () => {
      timeoutHandler()
      timeoutHandler()

      function wait(time: number) {
        return new Promise((resolve) => {
          setTimeout(() => {
            timeoutHandler()
            timeoutHandler()
            resolve("")
          }, time);
        });
      }

      await wait(1000)

      await waitFor(() => {
        expect(params.timeoutCallback).toHaveBeenCalledTimes(2)
        expect(params.preTimeoutCallback).toHaveBeenCalledTimes(2)
      })
    })
  })

  describe("testing parameters", () => {
    it("Should not throw if we don't pass preTimeoutCallback", async () => {
      const params: HandleTimeout = {
        timeoutCallback: vi.fn(),
        delay: 500
      }

      timeoutHandler = handleTimeout(params)

      expect(() => timeoutHandler()).not.toThrowError()

      await waitFor(() => {
        expect(params.timeoutCallback).toHaveBeenCalledTimes(1)
      })
    })

    it("Should not throw if we don't pass delay", async () => {
      const params: HandleTimeout = {
        timeoutCallback: vi.fn(),
        preTimeoutCallback: vi.fn()
      }

      timeoutHandler = handleTimeout(params)

      expect(() => timeoutHandler()).not.toThrowError()

      await waitFor(() => {
        expect(params.timeoutCallback).toHaveBeenCalledTimes(1)
        expect(params.preTimeoutCallback).toHaveBeenCalledTimes(1)
      })
    })
  })
})

describe("getValidDateOrNull util", () => {
  describe("valid cases", () => {
    it("Should return date for new Date()", () => {
      const validDate = new Date()
      expect(getValidDateOrNull(validDate)).toEqual(validDate)
    })

    it("Should return date for new Date('2020/11/10')", () => {
      const validDate = new Date("2020/11/10")
      expect(getValidDateOrNull(validDate)).toEqual(validDate)
    })

    it("Should return date for new Date('2020-11-10')", () => {
      const validDate = new Date("2020-11-10")
      expect(getValidDateOrNull(validDate)).toEqual(validDate)
    })

    it("Should return date for new Date(new Date().toISOString())", () => {
      const validDate = new Date(new Date().toISOString())
      expect(getValidDateOrNull(validDate)).toEqual(validDate)
    })
  })

  describe("invalid cases", () => {
    it("Should return null for new Date('')", () => {
      expect(getValidDateOrNull(new Date(""))).toBeNull()
    })

    it("Should return null for new Date('wrong')", () => {
      expect(getValidDateOrNull(new Date("wrong"))).toBeNull()
    })

    it("Should return null for new Date(NaN)", () => {
      expect(getValidDateOrNull(new Date(NaN))).toBeNull()
    })
  })
})