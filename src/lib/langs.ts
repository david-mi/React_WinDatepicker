type LangDataProps = "fr" | "en"

type SupportedLangs = {
  [key: string]: LangDataProps
}

const supportedLangs: SupportedLangs = {
  "fr-Fr": "fr",
  "fr": "fr",
  "en-US": "en",
  "en": "en"
}

const supportedLang = supportedLangs[navigator.language] || "en"

type LangData = {
  weekDays: readonly [
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ],
  monthsNamesIndexes: {
    0: string,
    1: string,
    2: string,
    3: string,
    4: string,
    5: string,
    6: string,
    7: string,
    8: string,
    9: string,
    10: string,
    11: string
  },
  monthAbbrev: readonly [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ],
}

const langsData: Record<LangDataProps, LangData> = {
  "fr": {
    weekDays: ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"],
    monthsNamesIndexes: {
      0: "Janvier",
      1: "Février",
      2: "Mars",
      3: "Avril",
      4: "Mai",
      5: "Juin",
      6: "Juillet",
      7: "Août",
      8: "Septembre",
      9: "Octobre",
      10: "Novembre",
      11: "Décembre"
    },
    monthAbbrev: ["Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"]
  },
  "en": {
    weekDays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthsNamesIndexes: {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December"
    },
    monthAbbrev: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  }
}

export const { weekDays, monthsNamesIndexes, monthAbbrev } = langsData[supportedLang]
export type MonthIndex = keyof typeof monthsNamesIndexes